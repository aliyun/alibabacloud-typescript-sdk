// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetServiceEstimateCostResponseBody extends $dara.Model {
  /**
   * @remarks
   * The subscription duration information about the purchase order of Alibaba Cloud Marketplace.
   * 
   * @example
   * {\\"PayPeriodUnit\\":Month,\\"PayPeriod\\":1}
   */
  commodity?: { [key: string]: any };
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E73F09DC-6C13-5CB1-A10F-7A4E125ABD2C
   */
  requestId?: string;
  /**
   * @remarks
   * The list of resources.
   * 
   * @example
   * {
   *       "ECSInstances":{
   *         "Type":"ALIYUN::ECS::InstanceGroup",
   *         "Success":true,
   *         "Result":{
   *           "Order":{
   *             "Currency":"CNY",
   *             "RuleIds":[
   *               1752723
   *             ],
   *             "DetailInfos":{
   *               "ResourcePriceModel":[
   *                 {
   *                   "Resource":"bandwidth",
   *                   "TradeAmount":0.0,
   *                   "SubRuleIds":[],
   *                   "OriginalAmount":0.0,
   *                   "DiscountAmount":0.0
   *                 },
   *                 {
   *                   "Resource":"image",
   *                   "TradeAmount":0.0,
   *                   "SubRuleIds":[],
   *                   "OriginalAmount":0.0,
   *                   "DiscountAmount":0.0
   *                 },
   *                 {
   *                   "Resource":"instanceType",
   *                   "TradeAmount":0.006966,
   *                   "SubRuleIds":[],
   *                   "OriginalAmount":0.45,
   *                   "DiscountAmount":0.443034
   *                 },
   *                 {
   *                   "Resource":"systemDisk",
   *                   "TradeAmount":0.000867,
   *                   "SubRuleIds":[],
   *                   "OriginalAmount":0.056,
   *                   "DiscountAmount":0.055133
   *                 },
   *                 {
   *                   "Resource":"dataDisk",
   *                   "TradeAmount":0.002167,
   *                   "SubRuleIds":[],
   *                   "OriginalAmount":0.14,
   *                   "DiscountAmount":0.137833
   *                 }
   *               ]
   *             }
   */
  resources?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      commodity: 'Commodity',
      requestId: 'RequestId',
      resources: 'Resources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commodity: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      requestId: 'string',
      resources: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.commodity) {
      $dara.Model.validateMap(this.commodity);
    }
    if(this.resources) {
      $dara.Model.validateMap(this.resources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

