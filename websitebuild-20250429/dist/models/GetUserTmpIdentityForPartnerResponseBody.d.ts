import * as $dara from '@darabonba/typescript';
export declare class GetUserTmpIdentityForPartnerResponseBodyDataCredentials extends $dara.Model {
    /**
     * @remarks
     * The encrypted temporary AccessKey ID.
     *
     * @example
     * 7t2Rzt37ND7-xxx
     */
    encryptedAccessKeyId?: string;
    /**
     * @remarks
     * The encrypted temporary AccessKey secret.
     *
     * @example
     * 7t2Rzt37ND7-xxx
     */
    encryptedAccessKeySecret?: string;
    /**
     * @remarks
     * The encrypted STS token.
     *
     * @example
     * 7t2Rzt37ND7-xxx
     */
    encryptedSecurityToken?: string;
    /**
     * @remarks
     * The estimated expiration time of the credential.
     *
     * @example
     * 2025-04-29T14:00:00Z
     */
    expiration?: string;
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
export declare class GetUserTmpIdentityForPartnerResponseBodyData extends $dara.Model {
    /**
     * @remarks
     * The security token.
     */
    credentials?: GetUserTmpIdentityForPartnerResponseBodyDataCredentials;
    /**
     * @remarks
     * Indicates whether the customer authorization has been obtained.
     */
    hasCustomRoleAuth?: boolean;
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
export declare class GetUserTmpIdentityForPartnerResponseBody extends $dara.Model {
    /**
     * @remarks
     * The request result.
     */
    data?: GetUserTmpIdentityForPartnerResponseBodyData;
    /**
     * @remarks
     * The error code. If the request is successful, the ErrorCode field is not returned. If the request fails, the ErrorCode field is returned. For more information, see the error code list in this topic.
     *
     * @example
     * 0
     */
    errorCode?: string;
    /**
     * @remarks
     * The error message.
     *
     * @example
     * aliuid:1998006665794443 assumeRole not exist,serviceName:realtimelogpush.dcdnservices.aliyuncs.com
     */
    errorMsg?: string;
    /**
     * @remarks
     * Id of the request
     *
     * @example
     * 6C6B99AC-39EC-5350-874C-204128C905E6
     */
    requestId?: string;
    /**
     * @remarks
     * Indicates whether the request was successful.
     *
     * @example
     * true
     */
    success?: boolean;
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
