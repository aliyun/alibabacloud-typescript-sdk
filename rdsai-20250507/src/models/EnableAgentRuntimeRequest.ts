// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnableAgentRuntimeRequest extends $dara.Model {
  /**
   * @remarks
   * The idempotence parameter.
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
   * **If specified**: Ensure that the specified security group allows the CIDR block of the VPC where the Supabase instance resides (both inbound and outbound directions must be allowed). Otherwise, network connectivity issues may occur.
   * >Notice: The endpoint is created only once. When the first Supabase instance in a VPC enables the sandbox and Edge Routine capabilities, the system automatically creates the endpoint. When subsequent Supabase instances in the same VPC enable this capability, the existing endpoint is reused and no new endpoint is created.
   * 
   * @example
   * sg-bp179qkbvlj8ym*****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The vSwitch ID used to create an endpoint. If this parameter is not specified, the vSwitch of the Supabase instance is used by default.
   * >Notice: The endpoint is created only once. When the first Supabase instance in a VPC enables the sandbox and Edge Routine capabilities, the system automatically creates the endpoint. When subsequent Supabase instances in the same VPC enable this capability, the existing endpoint is reused and no new endpoint is created.
   * 
   * @example
   * vsw-9dp2hkpm22gxscfgy****
   */
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      instanceName: 'InstanceName',
      regionId: 'RegionId',
      securityGroupId: 'SecurityGroupId',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      instanceName: 'string',
      regionId: 'string',
      securityGroupId: 'string',
      vSwitchId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

