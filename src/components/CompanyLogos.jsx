import { companyLogos } from "../constants";

const CompanyLogos = ({ className }) => {
    return (
        <div className={className}>
            <h5 className="tagline mb-6 text-center text-n-1/50">
                Helping people create beautiful content at
            </h5>
            <ul className="flex">
                {companyLogos.map((logo, index) => (
                    <li
                        className="flex items-center justify-center flex-1 h-[8.5rem] transition-opacity duration-300"
                        key={index}
                    >
                        <img
                            className="xl:max-w-[5rem] xl:max-h-[5.5rem] max-w-[4rem] max-h-[4rem] min-h-[2rem] object-contain opacity-50 hover:opacity-100 hover:scale-125 hover:-translate-y-1 transition-transform duration-300 ease-out "
                            src={logo}
                            width={134}
                            height={28}
                            alt={logo}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CompanyLogos;
