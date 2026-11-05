import * as $dara from '@darabonba/typescript';
import { StartDesktopsResponseBody } from "./StartDesktopsResponseBody";
export declare class StartDesktopsResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: StartDesktopsResponseBody;
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
