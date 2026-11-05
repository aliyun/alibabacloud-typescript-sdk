import * as $dara from '@darabonba/typescript';
export declare class SetAccessKeyPolicyForAccountResponseBody extends $dara.Model {
    /**
     * @remarks
     * The network access restriction policy. A JSON-formatted string. For more information about the AccessKeyPolicy structure, see the SetAccessKeyPolicy documentation.
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
     * 6616F09B-2768-4C11-8866-A8EE4C4A583E
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
