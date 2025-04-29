// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHaVipsResponseBodyHaVipsHaVipAssociatedInstances extends $dara.Model {
  associatedInstance?: string[];
  static names(): { [key: string]: string } {
    return {
      associatedInstance: 'associatedInstance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      associatedInstance: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.associatedInstance)) {
      $dara.Model.validateArray(this.associatedInstance);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

