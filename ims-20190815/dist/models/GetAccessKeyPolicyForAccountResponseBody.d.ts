import * as $dara from '@darabonba/typescript';
export declare class GetAccessKeyPolicyForAccountResponseBody extends $dara.Model {
    /**
     * @remarks
     * The network access restriction policy. The value is a JSON-formatted string. For more information, see the AccessKeyPolicy structure description in the SetAccessKeyPolicy documentation.
     *
     * @example
     * {"Status":"Inactive","Statements":[{"Value":"AllowAllVPC","Type":"VPCWhiteList","IPList":["::/0","0.0.0.0/0"]}]}
     */
    accessKeyPolicy?: string;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 85836703-8D4F-485F-9726-4D1C730F957E
     */
    requestId?: string;
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
