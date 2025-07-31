// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSecurityGroupConfigurationResponseBodyItemsRdsEcsSecurityGroupRel extends $dara.Model {
  /**
   * @remarks
   * The network type of the ECS security group. Valid values:
   * 
   * *   **vpc**
   * *   **classic**
   * 
   * @example
   * vpc
   */
  netType?: string;
  /**
   * @remarks
   * The region ID of the ECS security group.
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
   * sg-bpxxxxxxxx
   */
  securityGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      netType: 'NetType',
      regionId: 'RegionId',
      securityGroupId: 'SecurityGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      netType: 'string',
      regionId: 'string',
      securityGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityGroupConfigurationResponseBodyItems extends $dara.Model {
  rdsEcsSecurityGroupRel?: DescribeSecurityGroupConfigurationResponseBodyItemsRdsEcsSecurityGroupRel[];
  static names(): { [key: string]: string } {
    return {
      rdsEcsSecurityGroupRel: 'RdsEcsSecurityGroupRel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rdsEcsSecurityGroupRel: { 'type': 'array', 'itemType': DescribeSecurityGroupConfigurationResponseBodyItemsRdsEcsSecurityGroupRel },
    };
  }

  validate() {
    if(Array.isArray(this.rdsEcsSecurityGroupRel)) {
      $dara.Model.validateArray(this.rdsEcsSecurityGroupRel);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityGroupConfigurationResponseBody extends $dara.Model {
  /**
   * @remarks
   * Details about the ECS security groups.
   */
  items?: DescribeSecurityGroupConfigurationResponseBodyItems;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 3C4A2494-85C4-45C5-93CF-548DB3375193
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: DescribeSecurityGroupConfigurationResponseBodyItems,
      requestId: 'string',
    };
  }

  validate() {
    if(this.items && typeof (this.items as any).validate === 'function') {
      (this.items as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

