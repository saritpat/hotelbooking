import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

const MobileHead = ({ name }) => {
    const router = useRouter();

    const back = () => {
        router.back();
    };

    return (
        <div>
            <div className="relative flex items-center py-3 px-2 text-[16px] font-semibold">
                <button onClick={back} className="absolut left-0">
                    <Image src={"/back-mobile.svg"} width={32} height={32} />
                </button>
                <div className="flex-grow text-center col-span-3 pr-8">{name}</div>
                <div></div>
            </div>
        </div>
    );
};

export default MobileHead;
