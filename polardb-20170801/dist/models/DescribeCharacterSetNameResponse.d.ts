import * as $dara from '@darabonba/typescript';
import { DescribeCharacterSetNameResponseBody } from "./DescribeCharacterSetNameResponseBody";
export declare class DescribeCharacterSetNameResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeCharacterSetNameResponseBody;
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
