// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifySecurityGroupConfigurationResponseBodyItemsEcsSecurityGroupRelation extends $dara.Model {
  networkType?: string;
  regionId?: string;
  securityGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      networkType: 'NetworkType',
      regionId: 'RegionId',
      securityGroupId: 'SecurityGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkType: 'string',
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

export class ModifySecurityGroupConfigurationResponseBodyItems extends $dara.Model {
  ecsSecurityGroupRelation?: ModifySecurityGroupConfigurationResponseBodyItemsEcsSecurityGroupRelation[];
  static names(): { [key: string]: string } {
    return {
      ecsSecurityGroupRelation: 'EcsSecurityGroupRelation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ecsSecurityGroupRelation: { 'type': 'array', 'itemType': ModifySecurityGroupConfigurationResponseBodyItemsEcsSecurityGroupRelation },
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

export class ModifySecurityGroupConfigurationResponseBody extends $dara.Model {
  DBInstanceName?: string;
  items?: ModifySecurityGroupConfigurationResponseBodyItems;
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
      items: ModifySecurityGroupConfigurationResponseBodyItems,
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

