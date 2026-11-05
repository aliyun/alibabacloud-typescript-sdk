import * as $dara from '@darabonba/typescript';
export declare class ModifySecurityGroupConfigurationRequest extends $dara.Model {
    /**
     * @remarks
     * The instance ID. You can call DescribeDBInstances to query the instance ID.
     *
     * This parameter is required.
     *
     * @example
     * rm-uf6wjk5****
     */
    DBInstanceId?: string;
    ownerId?: number;
    resourceOwnerAccount?: string;
    resourceOwnerId?: number;
    /**
     * @remarks
     * The ECS security group ID. You can associate up to 10 security groups with an instance. Separate multiple security group IDs with commas (,). To disassociate all ECS security groups, pass an empty string. You can call DescribeSecurityGroups to query ECS security group IDs.
     *
     * This parameter is required.
     *
     * @example
     * sg-****
     */
    securityGroupId?: string;
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
