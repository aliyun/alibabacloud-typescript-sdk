import * as $dara from '@darabonba/typescript';
import { ConvertMcpToFreeEditResponseBody } from "./ConvertMcpToFreeEditResponseBody";
export declare class ConvertMcpToFreeEditResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ConvertMcpToFreeEditResponseBody;
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
