// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstancesResponseBodyInstancesInstanceAttributePrivateDnsList extends $dara.Model {
  privateDns?: string[];
  static names(): { [key: string]: string } {
    return {
      privateDns: 'PrivateDns',
    };
  }

  static types(): { [key: string]: any } {
    return {
      privateDns: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.privateDns)) {
      $dara.Model.validateArray(this.privateDns);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

