import Joi from "joi";

const loginSchema = Joi.object({
    account: Joi.string().required(),
    password: Joi.string().required(),
});

const data = loginSchema.validate({
    account: 'admin',
    password: 'jkjk'
})

if (data.error) {
    console.log(data.error.message);
    process.exit(1);
}
console.log(data.value);
