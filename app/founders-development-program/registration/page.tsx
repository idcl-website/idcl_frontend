export default function Registration() {
    if (process.env.NODE_ENV === "production") {
        return null;
    }

    return (
        <div className="w-full h-[85vh]">
            <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSfv1knY_155HKLmBrU49P9Lj3dnbuYVNuiRFBtdfXs8UmaNrA/viewform"
                width={640}
                height={800}
                className="w-full h-full"
                frameBorder={0}
                marginHeight={0}
                marginWidth={0}
            >
                Loading…
            </iframe>
        </div>
    );
}
