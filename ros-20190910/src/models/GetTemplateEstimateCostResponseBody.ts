// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTemplateEstimateCostResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 6DEA36EF-C97D-5658-A4AC-4F5DB08D1A89
   */
  requestId?: string;
  /**
   * @remarks
   * The resource details.
   * 
   * @example
   * {
   *   "NewEip": {
   *     "Type": "ALIYUN::VPC::EIP",
   *     "Success": true,
   *     "Result": {
   *       "Order": {
   *         "TaxAmount": 0.0,
   *         "Currency": "CNY",
   *         "RuleIds": [
   *           "102204102264****"
   *         ],
   *         "TradeAmount": 87.5,
   *         "OriginalAmount": 125.0,
   *         "DiscountAmount": 37.5
   *       },
   *       "OrderSupplement": {
   *         "ChargeType": "PrePaid",
   *         "Period": 1,
   *         "Quantity": 1,
   *         "PriceType": "Total",
   *         "PeriodUnit": "Month"
   *       },
   *       "InquiryType": "Buy",
   *       "Rules": {
   *         "Rule": [
   *           {
   *             "RuleDescId": "102204102264****",
   *             "Name": "Contract_Discount_Full_Order_30%_Off"
   *           }
   *         ]
   *       }
   *     }
   *   }
   * }
   */
  resources?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resources: 'Resources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resources: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.resources) {
      $dara.Model.validateMap(this.resources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

