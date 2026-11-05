import * as $dara from '@darabonba/typescript';
import { AttachApplicationPolarFSResponseBody } from "./AttachApplicationPolarFsresponseBody";
export declare class AttachApplicationPolarFSResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: AttachApplicationPolarFSResponseBody;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
