// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModifySecurityGroupConfigurationResponseBodyItemsEcsSecurityGroupRelation } from "./ModifySecurityGroupConfigurationResponseBodyItemsEcsSecurityGroupRelation";


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

