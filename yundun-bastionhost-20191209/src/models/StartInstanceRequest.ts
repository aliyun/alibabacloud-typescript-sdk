// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartInstanceRequest extends $dara.Model {
  clientSecurityGroupIds?: string[];
  enablePortalPrivateAccess?: boolean;
  /**
   * @remarks
   * The ID of the bastion host that you want to enable.
   * 
   * > You can call the [DescribeInstances](https://help.aliyun.com/document_detail/153281.html) operation to query the ID of the bastion host.
   * 
   * This parameter is required.
   * 
   * @example
   * bastionhost-cn-78v1gh****
   */
  instanceId?: string;
  /**
   * @remarks
   * The region ID of the bastion host.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * An array consisting of the IDs of security groups to which the bastion host is added.
   * 
   * This parameter is required.
   * 
   * @example
   * sg-bp1aiupc4yjqgmm****
   */
  securityGroupIds?: string[];
  slaveVswitchId?: string;
  /**
   * @remarks
   * The ID of the vSwitch to which the bastion host belongs.
   * 
   * @example
   * vsw-bp1xfwzzfti0kjbf****
   */
  vswitchId?: string;
  static names(): { [key: string]: string } {
    return {
      clientSecurityGroupIds: 'ClientSecurityGroupIds',
      enablePortalPrivateAccess: 'EnablePortalPrivateAccess',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      securityGroupIds: 'SecurityGroupIds',
      slaveVswitchId: 'SlaveVswitchId',
      vswitchId: 'VswitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientSecurityGroupIds: { 'type': 'array', 'itemType': 'string' },
      enablePortalPrivateAccess: 'boolean',
      instanceId: 'string',
      regionId: 'string',
      securityGroupIds: { 'type': 'array', 'itemType': 'string' },
      slaveVswitchId: 'string',
      vswitchId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.clientSecurityGroupIds)) {
      $dara.Model.validateArray(this.clientSecurityGroupIds);
    }
    if(Array.isArray(this.securityGroupIds)) {
      $dara.Model.validateArray(this.securityGroupIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

