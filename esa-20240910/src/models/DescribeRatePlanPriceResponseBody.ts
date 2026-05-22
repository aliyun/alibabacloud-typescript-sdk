// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRatePlanPriceResponseBodyPriceModelRatePlanPlanPriceList extends $dara.Model {
  accelerateType?: string;
  chargeType?: string;
  coverages?: string;
  crossborderTraffic?: string;
  currency?: string;
  dcdnPlan?: string;
  discountPrice?: number;
  edgeCompute?: string;
  edgeDdos4Layer?: string;
  edgeDdos4LayerIntl?: string;
  edgeDdos7Layer?: string;
  edgeDdosInstanceCn?: string;
  edgeDdosInstanceIntl?: string;
  edgeLb4Layer?: string;
  edgeLb4LayerIntl?: string;
  edgeLb7Layer?: string;
  edgeWaf?: string;
  edgeWafInstance?: string;
  layer4Traffic?: string;
  layer4TrafficIntl?: string;
  planName?: string;
  planStatus?: string;
  planTraffic?: string;
  planType?: string;
  position?: number;
  price?: number;
  totalPrice?: number;
  static names(): { [key: string]: string } {
    return {
      accelerateType: 'AccelerateType',
      chargeType: 'ChargeType',
      coverages: 'Coverages',
      crossborderTraffic: 'CrossborderTraffic',
      currency: 'Currency',
      dcdnPlan: 'DcdnPlan',
      discountPrice: 'DiscountPrice',
      edgeCompute: 'EdgeCompute',
      edgeDdos4Layer: 'EdgeDdos4Layer',
      edgeDdos4LayerIntl: 'EdgeDdos4LayerIntl',
      edgeDdos7Layer: 'EdgeDdos7Layer',
      edgeDdosInstanceCn: 'EdgeDdosInstanceCn',
      edgeDdosInstanceIntl: 'EdgeDdosInstanceIntl',
      edgeLb4Layer: 'EdgeLb4Layer',
      edgeLb4LayerIntl: 'EdgeLb4LayerIntl',
      edgeLb7Layer: 'EdgeLb7Layer',
      edgeWaf: 'EdgeWaf',
      edgeWafInstance: 'EdgeWafInstance',
      layer4Traffic: 'Layer4Traffic',
      layer4TrafficIntl: 'Layer4TrafficIntl',
      planName: 'PlanName',
      planStatus: 'PlanStatus',
      planTraffic: 'PlanTraffic',
      planType: 'PlanType',
      position: 'Position',
      price: 'Price',
      totalPrice: 'TotalPrice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accelerateType: 'string',
      chargeType: 'string',
      coverages: 'string',
      crossborderTraffic: 'string',
      currency: 'string',
      dcdnPlan: 'string',
      discountPrice: 'number',
      edgeCompute: 'string',
      edgeDdos4Layer: 'string',
      edgeDdos4LayerIntl: 'string',
      edgeDdos7Layer: 'string',
      edgeDdosInstanceCn: 'string',
      edgeDdosInstanceIntl: 'string',
      edgeLb4Layer: 'string',
      edgeLb4LayerIntl: 'string',
      edgeLb7Layer: 'string',
      edgeWaf: 'string',
      edgeWafInstance: 'string',
      layer4Traffic: 'string',
      layer4TrafficIntl: 'string',
      planName: 'string',
      planStatus: 'string',
      planTraffic: 'string',
      planType: 'string',
      position: 'number',
      price: 'number',
      totalPrice: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRatePlanPriceResponseBodyPriceModelRatePlan extends $dara.Model {
  planPriceList?: DescribeRatePlanPriceResponseBodyPriceModelRatePlanPlanPriceList[];
  static names(): { [key: string]: string } {
    return {
      planPriceList: 'PlanPriceList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      planPriceList: { 'type': 'array', 'itemType': DescribeRatePlanPriceResponseBodyPriceModelRatePlanPlanPriceList },
    };
  }

  validate() {
    if(Array.isArray(this.planPriceList)) {
      $dara.Model.validateArray(this.planPriceList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRatePlanPriceResponseBodyPriceModelRuleRuleList extends $dara.Model {
  name?: string;
  ruleDescId?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      ruleDescId: 'RuleDescId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      ruleDescId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRatePlanPriceResponseBodyPriceModelRule extends $dara.Model {
  ruleList?: DescribeRatePlanPriceResponseBodyPriceModelRuleRuleList[];
  static names(): { [key: string]: string } {
    return {
      ruleList: 'RuleList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleList: { 'type': 'array', 'itemType': DescribeRatePlanPriceResponseBodyPriceModelRuleRuleList },
    };
  }

  validate() {
    if(Array.isArray(this.ruleList)) {
      $dara.Model.validateArray(this.ruleList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRatePlanPriceResponseBodyPriceModel extends $dara.Model {
  ratePlan?: DescribeRatePlanPriceResponseBodyPriceModelRatePlan;
  rule?: DescribeRatePlanPriceResponseBodyPriceModelRule;
  static names(): { [key: string]: string } {
    return {
      ratePlan: 'RatePlan',
      rule: 'Rule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ratePlan: DescribeRatePlanPriceResponseBodyPriceModelRatePlan,
      rule: DescribeRatePlanPriceResponseBodyPriceModelRule,
    };
  }

  validate() {
    if(this.ratePlan && typeof (this.ratePlan as any).validate === 'function') {
      (this.ratePlan as any).validate();
    }
    if(this.rule && typeof (this.rule as any).validate === 'function') {
      (this.rule as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRatePlanPriceResponseBody extends $dara.Model {
  priceModel?: DescribeRatePlanPriceResponseBodyPriceModel;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      priceModel: 'PriceModel',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      priceModel: DescribeRatePlanPriceResponseBodyPriceModel,
      requestId: 'string',
    };
  }

  validate() {
    if(this.priceModel && typeof (this.priceModel as any).validate === 'function') {
      (this.priceModel as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

