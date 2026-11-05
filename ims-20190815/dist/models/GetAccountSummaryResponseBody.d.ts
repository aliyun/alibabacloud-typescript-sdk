import * as $dara from '@darabonba/typescript';
export declare class GetAccountSummaryResponseBodySummaryMap extends $dara.Model {
    /**
     * @remarks
     * The maximum number of AccessKey pairs that each Resource Access Management (RAM) user can have.
     *
     * @example
     * 2
     */
    accessKeysPerUserQuota?: number;
    /**
     * @remarks
     * The maximum number of AccessKey pairs for the Alibaba Cloud account.
     *
     * @example
     * 2
     */
    accountAccessKeysPerAccountQuota?: number;
    /**
     * @remarks
     * The maximum number of custom policies that can be attached to each user group.
     *
     * @example
     * 5
     */
    attachedPoliciesPerGroupQuota?: number;
    /**
     * @remarks
     * The maximum number of custom policies that can be attached to each RAM role.
     *
     * @example
     * 5
     */
    attachedPoliciesPerRoleQuota?: number;
    /**
     * @remarks
     * The maximum number of custom policies that can be attached to each RAM user.
     *
     * @example
     * 10
     */
    attachedPoliciesPerUserQuota?: number;
    /**
     * @remarks
     * The maximum number of system policies that can be attached to each user group.
     *
     * @example
     * 20
     */
    attachedSystemPoliciesPerGroupQuota?: number;
    /**
     * @remarks
     * The maximum number of system policies that can be attached to each RAM role.
     *
     * @example
     * 20
     */
    attachedSystemPoliciesPerRoleQuota?: number;
    /**
     * @remarks
     * The maximum number of system policies that can be attached to each RAM user.
     *
     * @example
     * 20
     */
    attachedSystemPoliciesPerUserQuota?: number;
    /**
     * @remarks
     * The maximum number of authorized clients that each RAM user can have.
     *
     * @example
     * 0
     */
    authorizedClientPerUserQuota?: number;
    /**
     * @remarks
     * The maximum number of policy entries that can be specified in an account-level or AccessKey-level network access restriction policy.
     *
     * @example
     * 8
     */
    conditionsPerAKPolicyQuota?: number;
    /**
     * @remarks
     * The number of user groups.
     *
     * @example
     * 7
     */
    groups?: number;
    /**
     * @remarks
     * The maximum number of user groups that each Resource Access Management (RAM) user can join.
     *
     * @example
     * 5
     */
    groupsPerUserQuota?: number;
    /**
     * @remarks
     * The maximum number of user groups that can be created.
     *
     * @example
     * 50
     */
    groupsQuota?: number;
    /**
     * @remarks
     * The maximum number of IP addresses that can be specified in an account-level or AccessKey-level network access restriction policy.
     *
     * @example
     * 50
     */
    IPItemsPerAKPolicyQuota?: number;
    /**
     * @remarks
     * The number of virtual multi-factor authentication devices.
     *
     * @example
     * 13
     */
    MFADevices?: number;
    /**
     * @remarks
     * The number of virtual multi-factor authentication devices in use.
     *
     * @example
     * 2
     */
    MFADevicesInUse?: number;
    /**
     * @remarks
     * The number of custom policies.
     *
     * @example
     * 13
     */
    policies?: number;
    /**
     * @remarks
     * The maximum number of custom policies that can be created.
     *
     * @example
     * 1500
     */
    policiesQuota?: number;
    /**
     * @remarks
     * The maximum length of the access policy content.
     *
     * @example
     * 2048
     */
    policySizeQuota?: number;
    /**
     * @remarks
     * The number of RAM roles.
     *
     * @example
     * 19
     */
    roles?: number;
    /**
     * @remarks
     * The maximum number of RAM roles that can be created.
     *
     * @example
     * 1000
     */
    rolesQuota?: number;
    /**
     * @remarks
     * The maximum number of API keys that each user can create for each service.
     *
     * @example
     * 2
     */
    serviceCredentialsPerUserPerServiceQuota?: number;
    /**
     * @remarks
     * The number of Resource Access Management (RAM) users.
     *
     * @example
     * 9
     */
    users?: number;
    /**
     * @remarks
     * The maximum number of Resource Access Management (RAM) users that can be created.
     *
     * @example
     * 1000
     */
    usersQuota?: number;
    /**
     * @remarks
     * The maximum number of access policy versions.
     *
     * @example
     * 5
     */
    versionsPerPolicyQuota?: number;
    /**
     * @remarks
     * The maximum number of virtual multi-factor authentication devices that can be created.
     *
     * @example
     * 1000
     */
    virtualMFADevicesQuota?: number;
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
export declare class GetAccountSummaryResponseBody extends $dara.Model {
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 81313F5E-3C85-478F-BCC9-E1B70E4556DB
     */
    requestId?: string;
    /**
     * @remarks
     * The overview information of the Alibaba Cloud account.
     */
    summaryMap?: GetAccountSummaryResponseBodySummaryMap;
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
