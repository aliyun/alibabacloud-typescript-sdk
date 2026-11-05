import * as $dara from '@darabonba/typescript';
export declare class ModifyGlobalSecurityIPGroupNameRequest extends $dara.Model {
    /**
     * @remarks
     * The name of the IP address whitelist template. The name must meet the following requirements:
     *
     * - It must consist of lowercase letters, digits, and underscores (_).
     *
     * - It must start with a letter and end with a letter or a digit.
     *
     * - It must be 2 to 120 characters in length.
     *
     * This parameter is required.
     *
     * @example
     * test_123
     */
    globalIgName?: string;
    /**
     * @remarks
     * The ID of the IP address whitelist template.
     *
     * This parameter is required.
     *
     * @example
     * g-zsldxfiwjmti0kcm****
     */
    globalSecurityGroupId?: string;
    ownerAccount?: string;
    ownerId?: number;
    /**
     * @remarks
     * The region ID.
     *
     * This parameter is required.
     *
     * @example
     * cn-hangzhou
     */
    regionId?: string;
    /**
     * @remarks
     * The resource group ID.
     *
     * @example
     * rg-************
     */
    resourceGroupId?: string;
    resourceOwnerAccount?: string;
    resourceOwnerId?: number;
    securityToken?: string;
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
