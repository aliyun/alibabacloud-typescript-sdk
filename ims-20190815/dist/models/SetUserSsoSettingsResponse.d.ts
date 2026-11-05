import * as $dara from '@darabonba/typescript';
import { SetUserSsoSettingsResponseBody } from "./SetUserSsoSettingsResponseBody";
export declare class SetUserSsoSettingsResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: SetUserSsoSettingsResponseBody;
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
