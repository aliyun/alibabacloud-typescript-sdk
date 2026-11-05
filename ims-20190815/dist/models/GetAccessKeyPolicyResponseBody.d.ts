import * as $dara from '@darabonba/typescript';
export declare class GetAccessKeyPolicyResponseBody extends $dara.Model {
    /**
     * @remarks
     * The access key ID.
     *
     * @example
     * LTAI*******************
     */
    accessKeyId?: string;
    /**
     * @remarks
     * The network access restriction policy. The value is a JSON-formatted string. For more information about the AccessKeyPolicy structure, see the SetAccessKeyPolicy documentation.
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
     * 4B450CA1-36E8-4AA2-8461-86B42BF4CC4E
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
