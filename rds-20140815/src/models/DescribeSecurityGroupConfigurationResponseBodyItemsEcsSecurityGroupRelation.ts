// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSecurityGroupConfigurationResponseBodyItemsEcsSecurityGroupRelation extends $dara.Model {
  /**
   * @remarks
   * The network type of the ECS security group. Valid values:
   * 
   * *   **Classic**
   * *   **VPC**
   * 
   * @example
   * VPC
   */
  networkType?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the ECS security group.
   * 
   * @example
   * sg-xxxxxxx
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The security group name.
   * 
   * @example
   * security-group-emraccess
   */
  securityGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      networkType: 'NetworkType',
      regionId: 'RegionId',
      securityGroupId: 'SecurityGroupId',
      securityGroupName: 'SecurityGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkType: 'string',
      regionId: 'string',
      securityGroupId: 'string',
      securityGroupName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

