// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReviewRecordResult extends $dara.Model {
  address?: string;
  applyType?: string;
  contactName?: string;
  phone?: string;
  sceneDesc?: string;
  scopes?: string[];
  serviceType?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'address',
      applyType: 'applyType',
      contactName: 'contactName',
      phone: 'phone',
      sceneDesc: 'sceneDesc',
      scopes: 'scopes',
      serviceType: 'serviceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      applyType: 'string',
      contactName: 'string',
      phone: 'string',
      sceneDesc: 'string',
      scopes: { 'type': 'array', 'itemType': 'string' },
      serviceType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.scopes)) {
      $dara.Model.validateArray(this.scopes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

