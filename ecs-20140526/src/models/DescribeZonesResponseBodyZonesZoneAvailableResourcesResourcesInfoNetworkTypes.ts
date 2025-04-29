// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeZonesResponseBodyZonesZoneAvailableResourcesResourcesInfoNetworkTypes extends $dara.Model {
  supportedNetworkCategory?: string[];
  static names(): { [key: string]: string } {
    return {
      supportedNetworkCategory: 'supportedNetworkCategory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportedNetworkCategory: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.supportedNetworkCategory)) {
      $dara.Model.validateArray(this.supportedNetworkCategory);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

