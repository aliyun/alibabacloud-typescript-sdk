// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDnsGtmAccessStrategyAvailableConfigResponseBodySelectedIpv6Lines extends $dara.Model {
  selectedIpv6Line?: string[];
  static names(): { [key: string]: string } {
    return {
      selectedIpv6Line: 'SelectedIpv6Line',
    };
  }

  static types(): { [key: string]: any } {
    return {
      selectedIpv6Line: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.selectedIpv6Line)) {
      $dara.Model.validateArray(this.selectedIpv6Line);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

