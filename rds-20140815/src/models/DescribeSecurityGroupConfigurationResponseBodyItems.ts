// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeSecurityGroupConfigurationResponseBodyItemsEcsSecurityGroupRelation } from "./DescribeSecurityGroupConfigurationResponseBodyItemsEcsSecurityGroupRelation";


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

