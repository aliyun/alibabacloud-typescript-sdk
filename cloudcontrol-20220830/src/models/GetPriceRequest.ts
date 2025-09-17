// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPriceRequest extends $dara.Model {
  /**
   * @remarks
   * The region ID. This parameter is required if the cloud product is deployed in a region.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The attributes based on which the price is queried (in JSON format).
   * 
   * @example
   * {
   *         "LoadBalancerName": "cc-test",
   *         "LoadBalancerSpec": "slb.s3.small",
   *         "InternetChargeType": "paybybandwidth",
   *         "AddressType": "internet",
   *         "PaymentType": "PayAsYouGo",
   *         "Bandwidth": 6
   *       }
   */
  resourceAttributes?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      regionId: 'regionId',
      resourceAttributes: 'resourceAttributes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      resourceAttributes: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.resourceAttributes) {
      $dara.Model.validateMap(this.resourceAttributes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

