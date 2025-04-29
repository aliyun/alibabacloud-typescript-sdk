// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RenewElasticityAssurancesResponseBodyPrivatePoolOptionsIdSet extends $dara.Model {
  privatePoolOptionsId?: string[];
  static names(): { [key: string]: string } {
    return {
      privatePoolOptionsId: 'PrivatePoolOptionsId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      privatePoolOptionsId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.privatePoolOptionsId)) {
      $dara.Model.validateArray(this.privatePoolOptionsId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

