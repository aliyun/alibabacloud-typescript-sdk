// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVpcAttributeResponseBodyUserCidrs extends $dara.Model {
  userCidr?: string[];
  static names(): { [key: string]: string } {
    return {
      userCidr: 'UserCidr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userCidr: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.userCidr)) {
      $dara.Model.validateArray(this.userCidr);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

