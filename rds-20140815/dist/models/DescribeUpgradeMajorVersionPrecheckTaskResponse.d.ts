import * as $dara from '@darabonba/typescript';
import { DescribeUpgradeMajorVersionPrecheckTaskResponseBody } from "./DescribeUpgradeMajorVersionPrecheckTaskResponseBody";
export declare class DescribeUpgradeMajorVersionPrecheckTaskResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeUpgradeMajorVersionPrecheckTaskResponseBody;
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
