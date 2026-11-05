import * as $dara from '@darabonba/typescript';
export declare class ProvisionApplicationRequest extends $dara.Model {
    /**
     * @remarks
     * The ID of the application.
     *
     * This parameter is required.
     *
     * @example
     * 407426893752729****
     */
    appId?: string;
    /**
     * @remarks
     * The permissions that are granted to the application. Separate multiple permissions with a semicolon (;).
     *
     * > For more information about the supported permissions, see [Overview](https://help.aliyun.com/document_detail/93693.html).
     *
     * @example
     * openid;aliuid
     */
    scopes?: string;
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
