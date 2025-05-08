// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCloudDiskAvailableResourceInfoResponseBodySupportResourcesSupportResourceAbility extends $dara.Model {
  ability?: string[];
  static names(): { [key: string]: string } {
    return {
      ability: 'Ability',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ability: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.ability)) {
      $dara.Model.validateArray(this.ability);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

