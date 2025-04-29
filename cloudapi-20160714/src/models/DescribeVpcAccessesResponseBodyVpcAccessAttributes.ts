// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeVpcAccessesResponseBodyVpcAccessAttributesVpcAccessAttribute } from "./DescribeVpcAccessesResponseBodyVpcAccessAttributesVpcAccessAttribute";


export class DescribeVpcAccessesResponseBodyVpcAccessAttributes extends $dara.Model {
  vpcAccessAttribute?: DescribeVpcAccessesResponseBodyVpcAccessAttributesVpcAccessAttribute[];
  static names(): { [key: string]: string } {
    return {
      vpcAccessAttribute: 'VpcAccessAttribute',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpcAccessAttribute: { 'type': 'array', 'itemType': DescribeVpcAccessesResponseBodyVpcAccessAttributesVpcAccessAttribute },
    };
  }

  validate() {
    if(Array.isArray(this.vpcAccessAttribute)) {
      $dara.Model.validateArray(this.vpcAccessAttribute);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

