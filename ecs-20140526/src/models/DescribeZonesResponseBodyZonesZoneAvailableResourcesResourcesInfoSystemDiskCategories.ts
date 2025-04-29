// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeZonesResponseBodyZonesZoneAvailableResourcesResourcesInfoSystemDiskCategories extends $dara.Model {
  supportedSystemDiskCategory?: string[];
  static names(): { [key: string]: string } {
    return {
      supportedSystemDiskCategory: 'supportedSystemDiskCategory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportedSystemDiskCategory: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.supportedSystemDiskCategory)) {
      $dara.Model.validateArray(this.supportedSystemDiskCategory);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

