import Subscriber from '../models/SubscriberModel.js';

//get all subs
export const getAll = async (req, res) => {
    try {
        const allSubscribers = await Subscriber.find();
        res.status(200).json(allSubscribers);
    } catch (error) {
        res.status(404).json({message: error.message });
    }
}

//get subscriber by id
export const getSubscriber = async (req, res) => {
    try {
        const subscriber = await Subscriber.findById(req.params.id);
        res.json(subscriber);
        
    } catch (error) {
        res.json({message: error.message});
    }
}

//create subscriber
export const postSubscriber = (req, res) => {
    const subscriber = new Subscriber({
        email: req.query.email,
        firstname: req.query.firstname,
        surname: req.query.surname
    });

    subscriber.save()
    .then((result) => {
        res.status(201).json(result);
    })
    .catch((err) => {
        res.status(401).json(err);
    });
}

//subcribe subscriber to a broadcast
export const subtobrodSubscriber = (req, res) => {
    Subscriber.updateOne({_id: req.query.subid}, {broadcast_id: req.query.brodid}, 
        function(err, result) {
        if (err) {
            res.status(401).json(err);
        } else {
            res.status(201).json(result);
        }
      });
}


//delete subscriber
export const deleteSubscriber = async (req, res) => {
    try {
        const deletedsub = await Subscriber.remove({_id: req.params.id});
        res.json(deletedsub);
        
    } catch (error) {
        res.status(409).json({message: error.message});
    }
}