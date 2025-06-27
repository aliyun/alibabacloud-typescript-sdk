// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDnsGtmAccessStrategyAvailableConfigResponseBodySelectedIpv4Lines extends $dara.Model {
  selectedIpv4Line?: string[];
  static names(): { [key: string]: string } {
    return {
      selectedIpv4Line: 'SelectedIpv4Line',
    };
  }

  static types(): { [key: string]: any } {
    return {
      selectedIpv4Line: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.selectedIpv4Line)) {
      $dara.Model.validateArray(this.selectedIpv4Line);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

