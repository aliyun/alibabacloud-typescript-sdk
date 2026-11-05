import * as $dara from '@darabonba/typescript';
import { RunRCCommandResponseBody } from "./RunRccommandResponseBody";
export declare class RunRCCommandResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: RunRCCommandResponseBody;
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
