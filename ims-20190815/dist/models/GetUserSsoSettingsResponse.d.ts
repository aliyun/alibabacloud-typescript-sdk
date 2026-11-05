import * as $dara from '@darabonba/typescript';
import { GetUserSsoSettingsResponseBody } from "./GetUserSsoSettingsResponseBody";
export declare class GetUserSsoSettingsResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: GetUserSsoSettingsResponseBody;
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
