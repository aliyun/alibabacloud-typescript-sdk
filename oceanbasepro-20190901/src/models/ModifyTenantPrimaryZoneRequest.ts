// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyTenantPrimaryZoneRequest extends $dara.Model {
  /**
   * @remarks
   * The primary zone of the tenant.    
   * It is one of the zones in which the cluster is deployed.
   * 
   * This parameter is required.
   * 
   * @example
   * ob317v4uif****
   */
  instanceId?: string;
  /**
   * @remarks
   * ```
   * http(s)://[Endpoint]/?Action=ModifyTenantPrimaryZone
   * &TenantId=ob2mr3oae0****
   * &InstanceId=ob317v4uif****
   * &PrimaryZone=cn-hangzhou-h
   * &Common request parameters
   * ```
   * 
   * @example
   * cn-hangzhou-h
   */
  masterIntranetAddressZone?: string;
  /**
   * @remarks
   * The ID of the vSwitch.
   * 
   * @example
   * cn-hangzhou-h
   */
  primaryZone?: string;
  tenantEndpointDirectId?: string;
  /**
   * @example
   * obe-4tw51gp7****
   */
  tenantEndpointId?: string;
  /**
   * @remarks
   * The return result of the request.
   * 
   * This parameter is required.
   * 
   * @example
   * ob2mr3oae0****
   */
  tenantId?: string;
  userDirectVSwitchId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * vsw-xxx
   */
  userVSwitchId?: string;
  userVpcOwnerId?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      masterIntranetAddressZone: 'MasterIntranetAddressZone',
      primaryZone: 'PrimaryZone',
      tenantEndpointDirectId: 'TenantEndpointDirectId',
      tenantEndpointId: 'TenantEndpointId',
      tenantId: 'TenantId',
      userDirectVSwitchId: 'UserDirectVSwitchId',
      userVSwitchId: 'UserVSwitchId',
      userVpcOwnerId: 'UserVpcOwnerId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      masterIntranetAddressZone: 'string',
      primaryZone: 'string',
      tenantEndpointDirectId: 'string',
      tenantEndpointId: 'string',
      tenantId: 'string',
      userDirectVSwitchId: 'string',
      userVSwitchId: 'string',
      userVpcOwnerId: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

