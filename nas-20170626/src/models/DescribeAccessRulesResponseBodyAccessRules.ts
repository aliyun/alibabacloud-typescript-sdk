// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeAccessRulesResponseBodyAccessRulesAccessRule } from "./DescribeAccessRulesResponseBodyAccessRulesAccessRule";


export class DescribeAccessRulesResponseBodyAccessRules extends $dara.Model {
  accessRule?: DescribeAccessRulesResponseBodyAccessRulesAccessRule[];
  static names(): { [key: string]: string } {
    return {
      accessRule: 'AccessRule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessRule: { 'type': 'array', 'itemType': DescribeAccessRulesResponseBodyAccessRulesAccessRule },
    };
  }

  validate() {
    if(Array.isArray(this.accessRule)) {
      $dara.Model.validateArray(this.accessRule);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

