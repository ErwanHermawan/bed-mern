import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
	try {
		let token = req.header("Authorization");

		if (!token) {
			return res.status(403).send("Access Denied");
		}

		if (token.startWith("Bearer ")) {
			token = token.slice(7, token.length).trimLeft();
		}

		const vefified = jwt.verify(token, process.env.JWT_SECRET);
		req.user.vefified;
		next();
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
};
