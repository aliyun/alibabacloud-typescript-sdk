import * as $dara from '@darabonba/typescript';
import { DescribeHASwitchConfigResponseBody } from "./DescribeHaswitchConfigResponseBody";
export declare class DescribeHASwitchConfigResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeHASwitchConfigResponseBody;
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
