// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ApplyFormalServiceCmd extends $dara.Model {
  accountId?: string;
  accountName?: string;
  address?: string;
  applyServiceInfos?: { [key: string]: any }[];
  applyType?: string;
  contactName?: string;
  instanceId?: string;
  phone?: string;
  productName?: string;
  qps?: number;
  sceneDesc?: string;
  serviceType?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'accountId',
      accountName: 'accountName',
      address: 'address',
      applyServiceInfos: 'applyServiceInfos',
      applyType: 'applyType',
      contactName: 'contactName',
      instanceId: 'instanceId',
      phone: 'phone',
      productName: 'productName',
      qps: 'qps',
      sceneDesc: 'sceneDesc',
      serviceType: 'serviceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      accountName: 'string',
      address: 'string',
      applyServiceInfos: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      applyType: 'string',
      contactName: 'string',
      instanceId: 'string',
      phone: 'string',
      productName: 'string',
      qps: 'number',
      sceneDesc: 'string',
      serviceType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.applyServiceInfos)) {
      $dara.Model.validateArray(this.applyServiceInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

