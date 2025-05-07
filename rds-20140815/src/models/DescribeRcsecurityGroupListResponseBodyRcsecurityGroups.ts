// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRCSecurityGroupListResponseBodyRCSecurityGroups extends $dara.Model {
  availableInstanceAmount?: number;
  creationTime?: string;
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  instanceCount?: number;
  securityGroupId?: string;
  securityGroupType?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      availableInstanceAmount: 'AvailableInstanceAmount',
      creationTime: 'CreationTime',
      description: 'Description',
      instanceCount: 'InstanceCount',
      securityGroupId: 'SecurityGroupId',
      securityGroupType: 'SecurityGroupType',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableInstanceAmount: 'number',
      creationTime: 'string',
      description: 'string',
      instanceCount: 'number',
      securityGroupId: 'string',
      securityGroupType: 'string',
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

