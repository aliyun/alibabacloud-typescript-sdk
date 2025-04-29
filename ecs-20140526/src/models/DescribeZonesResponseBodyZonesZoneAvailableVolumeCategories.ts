// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeZonesResponseBodyZonesZoneAvailableVolumeCategories extends $dara.Model {
  volumeCategories?: string[];
  static names(): { [key: string]: string } {
    return {
      volumeCategories: 'VolumeCategories',
    };
  }

  static types(): { [key: string]: any } {
    return {
      volumeCategories: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.volumeCategories)) {
      $dara.Model.validateArray(this.volumeCategories);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

