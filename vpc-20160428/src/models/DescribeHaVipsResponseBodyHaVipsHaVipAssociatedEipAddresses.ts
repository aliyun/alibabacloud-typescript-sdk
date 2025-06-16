// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHaVipsResponseBodyHaVipsHaVipAssociatedEipAddresses extends $dara.Model {
  associatedEipAddresse?: string[];
  static names(): { [key: string]: string } {
    return {
      associatedEipAddresse: 'associatedEipAddresse',
    };
  }

  static types(): { [key: string]: any } {
    return {
      associatedEipAddresse: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.associatedEipAddresse)) {
      $dara.Model.validateArray(this.associatedEipAddresse);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

