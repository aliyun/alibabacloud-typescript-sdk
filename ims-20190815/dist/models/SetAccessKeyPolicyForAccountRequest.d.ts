import * as $dara from '@darabonba/typescript';
export declare class SetAccessKeyPolicyForAccountRequest extends $dara.Model {
    /**
     * @remarks
     * The network access restriction policy. A JSON-formatted string. For more information about the AccessKeyPolicy structure, see the SetAccessKeyPolicy documentation.
     *
     * This parameter is required.
     *
     * @example
     * {"Status":"Inactive","Statements":[{"Value":"AllowAllVPC","Type":"VPCWhiteList","IPList":["::/0","0.0.0.0/0"]}]}
     */
    accessKeyPolicy?: string;
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
