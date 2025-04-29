// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeZonesResponseBodyZonesZoneAvailableDiskCategories extends $dara.Model {
  diskCategories?: string[];
  static names(): { [key: string]: string } {
    return {
      diskCategories: 'DiskCategories',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskCategories: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.diskCategories)) {
      $dara.Model.validateArray(this.diskCategories);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

