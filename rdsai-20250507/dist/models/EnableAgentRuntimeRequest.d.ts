import * as $dara from '@darabonba/typescript';
export declare class EnableAgentRuntimeRequest extends $dara.Model {
    /**
     * @remarks
     * The reserved parameter.
     */
    branchName?: string;
    /**
     * @remarks
     * The idempotency parameter.
     *
     * @example
     * 0c593ea1-3bea-11e9-b96b-88e9fe637760
     */
    clientToken?: string;
    /**
     * @remarks
     * The instance ID of the AI application.
     *
     * This parameter is required.
     *
     * @example
     * ra-supabase-8moov5lxba****
     */
    instanceName?: string;
    /**
     * @remarks
     * The region ID of the instance.
     *
     * @example
     * cn-beijing
     */
    regionId?: string;
    /**
     * @remarks
     * The security group ID used to create an endpoint.
     *
     * **If not specified**: The system automatically creates a security group named **sg-aliyun-rds-created-supabase-sandbox** in the VPC where the instance resides. No manual operation is required.
     *
     * **If manually specified**: Make sure that the specified security group allows traffic from the CIDR block of the VPC where the Supabase instance resides in both the inbound and outbound directions. Otherwise, network connectivity may fail.
     * >Notice: The endpoint is created only once. When the first Supabase instance in a VPC enables the sandbox and Edge Routine capabilities, the system automatically creates an endpoint. When other Supabase instances in the same VPC enable these capabilities later, the existing endpoint is reused and not created again.</notice>
     *
     * @example
     * sg-bp179qkbvlj8ym*****
     */
    securityGroupId?: string;
    /**
     * @remarks
     * The vSwitch ID used to create an endpoint. If this parameter is not specified, the vSwitch of the Supabase instance is used by default.
     * >Notice: The endpoint is created only once. When the first Supabase instance in a VPC enables the sandbox and Edge Routine capabilities, the system automatically creates an endpoint. When other Supabase instances in the same VPC enable these capabilities later, the existing endpoint is reused and not created again.</notice>
     *
     * @example
     * vsw-9dp2hkpm22gxscfgy****
     */
    vSwitchId?: string;
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
