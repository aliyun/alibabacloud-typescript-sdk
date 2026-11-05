import * as $dara from '@darabonba/typescript';
export declare class DeleteGlobalSecurityIPGroupRequest extends $dara.Model {
    /**
     * @remarks
     * The name of the IP whitelist template. The name of the IP whitelist template must meet the following requirements:
     *
     * *   The name can contain lowercase letters, digits, and underscores (_).
     * *   The name must start with a letter and end with a letter or digit.
     * *   The name must be 2 to 120 characters in length.
     *
     * @example
     * test_123
     */
    globalIgName?: string;
    /**
     * @remarks
     * The ID of the IP whitelist template.
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
     * The ID of the resource group.
     *
     * @example
     * rg-**********
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
