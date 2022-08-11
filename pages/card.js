import { IconChevronDown, IconChevronUp, IconMailForward, IconMapPins } from "@tabler/icons";
import Image from "next/image";
import { useState } from "react";

function UserCardDetail(props) {
    return (<div className="text-center">
        <p>
            <IconMailForward /> {props.email}
        </p>
        <p>
            <IconMapPins /> {props.address}
        </p>
    </div>);
}

export default function UserCard(props) {
    const [show, setShow] = useState(false);
    return (<div className="border-bottom">
        <div className="d-flex align-items-center p-3">
            <img
                src={props.image}
                // layout="fixed"
                width="90px"
                // height="90px"
                className="rounded-circle me-4"
            />
            <span className="text-center display-6 me-auto">{props.name}</span>
            {(show) ?
                < IconChevronUp onClick={() => setShow(!show)} /> :
                <IconChevronDown onClick={() => setShow(!show)} />
            }
        </div>
        {(show) ?
            <UserCardDetail email={props.email} address={props.address} /> :
            null
        }
    </div >
    );
}