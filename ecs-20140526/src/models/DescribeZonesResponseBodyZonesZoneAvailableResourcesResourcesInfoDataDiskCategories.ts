// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeZonesResponseBodyZonesZoneAvailableResourcesResourcesInfoDataDiskCategories extends $dara.Model {
  supportedDataDiskCategory?: string[];
  static names(): { [key: string]: string } {
    return {
      supportedDataDiskCategory: 'supportedDataDiskCategory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportedDataDiskCategory: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.supportedDataDiskCategory)) {
      $dara.Model.validateArray(this.supportedDataDiskCategory);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

