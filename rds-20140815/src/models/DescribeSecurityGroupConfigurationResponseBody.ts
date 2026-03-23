// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSecurityGroupConfigurationResponseBodyItemsEcsSecurityGroupRelation extends $dara.Model {
  networkType?: string;
  regionId?: string;
  securityGroupId?: string;
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

export class DescribeSecurityGroupConfigurationResponseBodyItems extends $dara.Model {
  ecsSecurityGroupRelation?: DescribeSecurityGroupConfigurationResponseBodyItemsEcsSecurityGroupRelation[];
  static names(): { [key: string]: string } {
    return {
      ecsSecurityGroupRelation: 'EcsSecurityGroupRelation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ecsSecurityGroupRelation: { 'type': 'array', 'itemType': DescribeSecurityGroupConfigurationResponseBodyItemsEcsSecurityGroupRelation },
    };
  }

  validate() {
    if(Array.isArray(this.ecsSecurityGroupRelation)) {
      $dara.Model.validateArray(this.ecsSecurityGroupRelation);
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
   * The instance ID.
   * 
   * @example
   * rm-uf6wjk****
   */
  DBInstanceName?: string;
  items?: DescribeSecurityGroupConfigurationResponseBodyItems;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 87BDAE8C-ACB0-4A26-BBCC-7D1DD31D630D
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceName: 'DBInstanceName',
      items: 'Items',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceName: 'string',
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

