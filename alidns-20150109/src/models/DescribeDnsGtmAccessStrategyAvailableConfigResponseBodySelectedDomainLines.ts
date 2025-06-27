// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDnsGtmAccessStrategyAvailableConfigResponseBodySelectedDomainLines extends $dara.Model {
  selectedDomainLine?: string[];
  static names(): { [key: string]: string } {
    return {
      selectedDomainLine: 'SelectedDomainLine',
    };
  }

  static types(): { [key: string]: any } {
    return {
      selectedDomainLine: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.selectedDomainLine)) {
      $dara.Model.validateArray(this.selectedDomainLine);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

