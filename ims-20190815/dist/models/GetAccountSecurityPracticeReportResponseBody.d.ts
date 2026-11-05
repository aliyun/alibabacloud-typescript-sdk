import * as $dara from '@darabonba/typescript';
export declare class GetAccountSecurityPracticeReportResponseBodyAccountSecurityPracticeInfoAccountSecurityPracticeUserInfo extends $dara.Model {
    /**
     * @remarks
     * Indicates whether multi-factor authentication (MFA) is enabled. Valid values:
     *
     * - true
     *
     * - false
     *
     * @example
     * false
     */
    bindMfa?: boolean;
    /**
     * @remarks
     * The number of old AccessKey pairs for the Alibaba Cloud account.
     *
     * @example
     * 0
     */
    oldAkNum?: number;
    /**
     * @remarks
     * The number of AccessKey pairs for the Alibaba Cloud account.
     *
     * @example
     * 1
     */
    rootWithAccessKey?: number;
    /**
     * @remarks
     * The number of RAM users within the Alibaba Cloud account.
     *
     * @example
     * 9
     */
    subUser?: number;
    /**
     * @remarks
     * The number of RAM users that have MFA devices bound.
     *
     * @example
     * 0
     */
    subUserBindMfa?: number;
    /**
     * @remarks
     * The complexity level of the password for the RAM user. Valid values:
     *
     * - low
     *
     * - mid
     *
     * - high
     *
     * @example
     * low
     */
    subUserPwdLevel?: string;
    /**
     * @remarks
     * The number of RAM users that use the old AccessKey pairs.
     *
     * @example
     * 0
     */
    subUserWithOldAccessKey?: number;
    /**
     * @remarks
     * The number of Resource Access Management (RAM) users that have unused AccessKey pairs.
     *
     * @example
     * 0
     */
    subUserWithUnusedAccessKey?: number;
    /**
     * @remarks
     * The number of AccessKey pairs that are not used for the Alibaba Cloud account.
     *
     * @example
     * 0
     */
    unusedAkNum?: number;
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
export declare class GetAccountSecurityPracticeReportResponseBodyAccountSecurityPracticeInfo extends $dara.Model {
    /**
     * @remarks
     * The information about the security report for the Alibaba Cloud account.
     */
    accountSecurityPracticeUserInfo?: GetAccountSecurityPracticeReportResponseBodyAccountSecurityPracticeInfoAccountSecurityPracticeUserInfo;
    /**
     * @remarks
     * The security score of the Alibaba Cloud account.
     *
     * @example
     * 63
     */
    score?: number;
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
export declare class GetAccountSecurityPracticeReportResponseBody extends $dara.Model {
    /**
     * @remarks
     * The information about the security report for the Alibaba Cloud account.
     */
    accountSecurityPracticeInfo?: GetAccountSecurityPracticeReportResponseBodyAccountSecurityPracticeInfo;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * ABA822EE-85C2-4418-9577-A1831FC8466D
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
