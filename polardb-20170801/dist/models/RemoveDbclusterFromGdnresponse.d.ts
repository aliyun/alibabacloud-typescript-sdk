import * as $dara from '@darabonba/typescript';
import { RemoveDBClusterFromGDNResponseBody } from "./RemoveDbclusterFromGdnresponseBody";
export declare class RemoveDBClusterFromGDNResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: RemoveDBClusterFromGDNResponseBody;
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
