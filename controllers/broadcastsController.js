import Broadcast from '../models/BroadcastModel.js';

//get all broabcasts
export const getAll = async (req, res) => {
    try {
        const allBroadcasts = await Broadcast.find();
        res.status(200).json(allBroadcasts);
        
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}


//get broadcast by id
export const getBroadcast = async (req, res) => {
    try {
        const broabcast = await Broadcast.findById(req.params.id);
        res.json(broabcast);
        
    } catch (error) {
        res.json({message: error.message});
    }
}


//create broadcast
export const postBroadcast = (req, res) => {
    const broadcast = new Broadcast({
        title: req.query.title
    });

    broadcast.save()
    .then((result) => {
        res.status(201).json(result);
    })
    .catch((err) => {
        res.status(401).json(err);
    });
}


//delete broadcast
export const deleteBroadcast = async (req, res) => {
    try {
        const deletedbroadcast = await Broadcast.remove({_id: req.params.id});
        res.json(deletedbroadcast);
        
    } catch (error) {
        res.status(409).json({message: error.message});
    }
}
