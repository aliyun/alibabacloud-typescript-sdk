// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainInfoResponseBodyAvailableTtls extends $dara.Model {
  availableTtl?: string[];
  static names(): { [key: string]: string } {
    return {
      availableTtl: 'AvailableTtl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableTtl: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.availableTtl)) {
      $dara.Model.validateArray(this.availableTtl);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

