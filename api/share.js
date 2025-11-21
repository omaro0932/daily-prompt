export default function handler(req, res) {
  const text = req.query.text || "DailyPrompt";

  res.status(200).json({
    type: "share_redirect",
    cast: {
      text,
      embeds: []
    }
  });
}
