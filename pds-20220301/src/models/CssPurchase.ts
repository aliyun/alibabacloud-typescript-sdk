// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CssInstanceComponent } from "./CssInstanceComponent";


export class CssPurchase extends $dara.Model {
  chargeType?: string;
  commodityCode?: string;
  endDate?: number;
  gmtCreate?: number;
  instanceComponents?: CssInstanceComponent[];
  instanceId?: string;
  orderType?: string;
  purchaseParams?: { [key: string]: string };
  startDate?: number;
  static names(): { [key: string]: string } {
    return {
      chargeType: 'chargeType',
      commodityCode: 'commodityCode',
      endDate: 'endDate',
      gmtCreate: 'gmtCreate',
      instanceComponents: 'instanceComponents',
      instanceId: 'instanceId',
      orderType: 'orderType',
      purchaseParams: 'purchaseParams',
      startDate: 'startDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chargeType: 'string',
      commodityCode: 'string',
      endDate: 'number',
      gmtCreate: 'number',
      instanceComponents: { 'type': 'array', 'itemType': CssInstanceComponent },
      instanceId: 'string',
      orderType: 'string',
      purchaseParams: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      startDate: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.instanceComponents)) {
      $dara.Model.validateArray(this.instanceComponents);
    }
    if(this.purchaseParams) {
      $dara.Model.validateMap(this.purchaseParams);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

