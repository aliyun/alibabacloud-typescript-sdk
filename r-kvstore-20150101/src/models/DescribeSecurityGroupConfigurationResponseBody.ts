// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSecurityGroupConfigurationResponseBodyItemsEcsSecurityGroupRelation extends $dara.Model {
  netType?: string;
  regionId?: string;
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
  items?: DescribeSecurityGroupConfigurationResponseBodyItems;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 981C0D6A-D9DD-466C-92DA-F29DF755****
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

