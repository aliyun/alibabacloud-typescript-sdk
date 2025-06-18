// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ACS extends $dara.Model {
  ACSQuotaId?: string;
  associatedProducts?: string[];
  static names(): { [key: string]: string } {
    return {
      ACSQuotaId: 'ACSQuotaId',
      associatedProducts: 'AssociatedProducts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ACSQuotaId: 'string',
      associatedProducts: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.associatedProducts)) {
      $dara.Model.validateArray(this.associatedProducts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

