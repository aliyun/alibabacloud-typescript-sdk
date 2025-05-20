// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CssInstanceComponent } from "./CssInstanceComponent";


export class CssInstanceCommodity extends $dara.Model {
  activityId?: number;
  aliyunProduceCode?: string;
  chargeType?: string;
  commodityCode?: string;
  components?: CssInstanceComponent[];
  duration?: number;
  instanceId?: string;
  isFree?: boolean;
  isPrePayPostCharge?: boolean;
  isRenewChange?: boolean;
  isSyncToSubscription?: boolean;
  orderParams?: { [key: string]: string };
  orderType?: string;
  planItemId?: number;
  pricingCycle?: string;
  quantity?: number;
  redeemNoList?: string[];
  redeemOrderType?: string;
  refundSpecCode?: string;
  specCode?: string;
  specUpgradeOriginSpecCodes?: string[];
  specifyStartDate?: number;
  upgradeInquireFinancialValue?: boolean;
  static names(): { [key: string]: string } {
    return {
      activityId: 'activityId',
      aliyunProduceCode: 'aliyunProduceCode',
      chargeType: 'chargeType',
      commodityCode: 'commodityCode',
      components: 'components',
      duration: 'duration',
      instanceId: 'instanceId',
      isFree: 'isFree',
      isPrePayPostCharge: 'isPrePayPostCharge',
      isRenewChange: 'isRenewChange',
      isSyncToSubscription: 'isSyncToSubscription',
      orderParams: 'orderParams',
      orderType: 'orderType',
      planItemId: 'planItemId',
      pricingCycle: 'pricingCycle',
      quantity: 'quantity',
      redeemNoList: 'redeemNoList',
      redeemOrderType: 'redeemOrderType',
      refundSpecCode: 'refundSpecCode',
      specCode: 'specCode',
      specUpgradeOriginSpecCodes: 'specUpgradeOriginSpecCodes',
      specifyStartDate: 'specifyStartDate',
      upgradeInquireFinancialValue: 'upgradeInquireFinancialValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activityId: 'number',
      aliyunProduceCode: 'string',
      chargeType: 'string',
      commodityCode: 'string',
      components: { 'type': 'array', 'itemType': CssInstanceComponent },
      duration: 'number',
      instanceId: 'string',
      isFree: 'boolean',
      isPrePayPostCharge: 'boolean',
      isRenewChange: 'boolean',
      isSyncToSubscription: 'boolean',
      orderParams: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      orderType: 'string',
      planItemId: 'number',
      pricingCycle: 'string',
      quantity: 'number',
      redeemNoList: { 'type': 'array', 'itemType': 'string' },
      redeemOrderType: 'string',
      refundSpecCode: 'string',
      specCode: 'string',
      specUpgradeOriginSpecCodes: { 'type': 'array', 'itemType': 'string' },
      specifyStartDate: 'number',
      upgradeInquireFinancialValue: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.components)) {
      $dara.Model.validateArray(this.components);
    }
    if(this.orderParams) {
      $dara.Model.validateMap(this.orderParams);
    }
    if(Array.isArray(this.redeemNoList)) {
      $dara.Model.validateArray(this.redeemNoList);
    }
    if(Array.isArray(this.specUpgradeOriginSpecCodes)) {
      $dara.Model.validateArray(this.specUpgradeOriginSpecCodes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

