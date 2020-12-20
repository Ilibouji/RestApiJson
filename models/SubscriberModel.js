import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const SubscriberSchema = new Schema({
    broadcast_id: { type: String, default: "not yet"},
    email: { type: String, required: true },
    firstname: { type: String, required: true },
    surname: { type: String, required: true }

});

const Subscriber = mongoose.model('Subscribers', SubscriberSchema);

export default Subscriber;

