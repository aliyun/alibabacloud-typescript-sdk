// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TicketPageQueryProductResponseBodyDataProductsBuyRuleAheadBuyTimePointRule extends $dara.Model {
  /**
   * @example
   * 1
   */
  anchor?: number;
  /**
   * @example
   * 2026-01-01
   */
  fixedTime?: string;
  /**
   * @example
   * 18:00
   */
  offsetDayOfTime?: string;
  /**
   * @example
   * 1
   */
  offsetUnit?: number;
  /**
   * @example
   * 1
   */
  offsetValue?: number;
  static names(): { [key: string]: string } {
    return {
      anchor: 'Anchor',
      fixedTime: 'FixedTime',
      offsetDayOfTime: 'OffsetDayOfTime',
      offsetUnit: 'OffsetUnit',
      offsetValue: 'OffsetValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      anchor: 'number',
      fixedTime: 'string',
      offsetDayOfTime: 'string',
      offsetUnit: 'number',
      offsetValue: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TicketPageQueryProductResponseBodyDataProductsBuyRuleContactRuleContactFieldRule extends $dara.Model {
  /**
   * @example
   * true
   */
  certificate?: boolean;
  /**
   * @example
   * [1, 2]
   */
  certificateTypes?: number[];
  /**
   * @example
   * true
   */
  dialingCode?: boolean;
  /**
   * @example
   * false
   */
  email?: boolean;
  /**
   * @example
   * false
   */
  firstName?: boolean;
  /**
   * @example
   * false
   */
  lastName?: boolean;
  /**
   * @example
   * true
   */
  mobile?: boolean;
  /**
   * @example
   * true
   */
  name?: boolean;
  static names(): { [key: string]: string } {
    return {
      certificate: 'Certificate',
      certificateTypes: 'CertificateTypes',
      dialingCode: 'DialingCode',
      email: 'Email',
      firstName: 'FirstName',
      lastName: 'LastName',
      mobile: 'Mobile',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificate: 'boolean',
      certificateTypes: { 'type': 'array', 'itemType': 'number' },
      dialingCode: 'boolean',
      email: 'boolean',
      firstName: 'boolean',
      lastName: 'boolean',
      mobile: 'boolean',
      name: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.certificateTypes)) {
      $dara.Model.validateArray(this.certificateTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TicketPageQueryProductResponseBodyDataProductsBuyRuleContactRule extends $dara.Model {
  contactFieldRule?: TicketPageQueryProductResponseBodyDataProductsBuyRuleContactRuleContactFieldRule;
  static names(): { [key: string]: string } {
    return {
      contactFieldRule: 'ContactFieldRule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactFieldRule: TicketPageQueryProductResponseBodyDataProductsBuyRuleContactRuleContactFieldRule,
    };
  }

  validate() {
    if(this.contactFieldRule && typeof (this.contactFieldRule as any).validate === 'function') {
      (this.contactFieldRule as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TicketPageQueryProductResponseBodyDataProductsBuyRuleCrossOrderBuyQuantityLimitRules extends $dara.Model {
  /**
   * @example
   * 1
   */
  limitDayType?: number;
  /**
   * @example
   * 7
   */
  limitDays?: number;
  /**
   * @example
   * 1
   */
  limitPeriod?: number;
  /**
   * @example
   * 1
   */
  limitQuantityType?: number;
  /**
   * @example
   * 1
   */
  limitType?: number;
  /**
   * @example
   * 5
   */
  maxBuyQuantity?: number;
  static names(): { [key: string]: string } {
    return {
      limitDayType: 'LimitDayType',
      limitDays: 'LimitDays',
      limitPeriod: 'LimitPeriod',
      limitQuantityType: 'LimitQuantityType',
      limitType: 'LimitType',
      maxBuyQuantity: 'MaxBuyQuantity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      limitDayType: 'number',
      limitDays: 'number',
      limitPeriod: 'number',
      limitQuantityType: 'number',
      limitType: 'number',
      maxBuyQuantity: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TicketPageQueryProductResponseBodyDataProductsBuyRulePerOrderBuyQuantityLimitRule extends $dara.Model {
  /**
   * @example
   * 10
   */
  maxBuyQuantity?: number;
  /**
   * @example
   * 1
   */
  minBuyQuantity?: number;
  static names(): { [key: string]: string } {
    return {
      maxBuyQuantity: 'MaxBuyQuantity',
      minBuyQuantity: 'MinBuyQuantity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxBuyQuantity: 'number',
      minBuyQuantity: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TicketPageQueryProductResponseBodyDataProductsBuyRuleTravelerRuleCrowdLimitRules extends $dara.Model {
  /**
   * @example
   * 2
   */
  ageBaseTimeType?: number;
  /**
   * @example
   * 1
   */
  ageCalculateType?: number;
  /**
   * @example
   * 65
   */
  ageMax?: number;
  /**
   * @example
   * 18
   */
  ageMin?: number;
  /**
   * @example
   * 成人票
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      ageBaseTimeType: 'AgeBaseTimeType',
      ageCalculateType: 'AgeCalculateType',
      ageMax: 'AgeMax',
      ageMin: 'AgeMin',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ageBaseTimeType: 'number',
      ageCalculateType: 'number',
      ageMax: 'number',
      ageMin: 'number',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TicketPageQueryProductResponseBodyDataProductsBuyRuleTravelerRuleCrowdQuantityLimits extends $dara.Model {
  /**
   * @example
   * 成人票
   */
  name?: string;
  /**
   * @example
   * 2
   */
  quantity?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      quantity: 'Quantity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      quantity: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TicketPageQueryProductResponseBodyDataProductsBuyRuleTravelerRuleTravelerFieldRule extends $dara.Model {
  /**
   * @example
   * false
   */
  birthday?: boolean;
  /**
   * @example
   * true
   */
  certificate?: boolean;
  /**
   * @example
   * [1, 2]
   */
  certificateTypes?: number[];
  /**
   * @example
   * true
   */
  dialingCode?: boolean;
  /**
   * @example
   * false
   */
  email?: boolean;
  /**
   * @example
   * false
   */
  firstName?: boolean;
  /**
   * @example
   * false
   */
  gender?: boolean;
  /**
   * @example
   * false
   */
  lastName?: boolean;
  /**
   * @example
   * true
   */
  mobile?: boolean;
  /**
   * @example
   * true
   */
  name?: boolean;
  /**
   * @example
   * false
   */
  nationality?: boolean;
  static names(): { [key: string]: string } {
    return {
      birthday: 'Birthday',
      certificate: 'Certificate',
      certificateTypes: 'CertificateTypes',
      dialingCode: 'DialingCode',
      email: 'Email',
      firstName: 'FirstName',
      gender: 'Gender',
      lastName: 'LastName',
      mobile: 'Mobile',
      name: 'Name',
      nationality: 'Nationality',
    };
  }

  static types(): { [key: string]: any } {
    return {
      birthday: 'boolean',
      certificate: 'boolean',
      certificateTypes: { 'type': 'array', 'itemType': 'number' },
      dialingCode: 'boolean',
      email: 'boolean',
      firstName: 'boolean',
      gender: 'boolean',
      lastName: 'boolean',
      mobile: 'boolean',
      name: 'boolean',
      nationality: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.certificateTypes)) {
      $dara.Model.validateArray(this.certificateTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TicketPageQueryProductResponseBodyDataProductsBuyRuleTravelerRule extends $dara.Model {
  crowdLimitRules?: TicketPageQueryProductResponseBodyDataProductsBuyRuleTravelerRuleCrowdLimitRules[];
  crowdQuantityLimits?: TicketPageQueryProductResponseBodyDataProductsBuyRuleTravelerRuleCrowdQuantityLimits[];
  /**
   * @example
   * true
   */
  needFillTraveler?: boolean;
  travelerFieldRule?: TicketPageQueryProductResponseBodyDataProductsBuyRuleTravelerRuleTravelerFieldRule;
  /**
   * @example
   * 2
   */
  travelerFillDimension?: number;
  /**
   * @example
   * 3
   */
  travelerQuantity?: number;
  static names(): { [key: string]: string } {
    return {
      crowdLimitRules: 'CrowdLimitRules',
      crowdQuantityLimits: 'CrowdQuantityLimits',
      needFillTraveler: 'NeedFillTraveler',
      travelerFieldRule: 'TravelerFieldRule',
      travelerFillDimension: 'TravelerFillDimension',
      travelerQuantity: 'TravelerQuantity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      crowdLimitRules: { 'type': 'array', 'itemType': TicketPageQueryProductResponseBodyDataProductsBuyRuleTravelerRuleCrowdLimitRules },
      crowdQuantityLimits: { 'type': 'array', 'itemType': TicketPageQueryProductResponseBodyDataProductsBuyRuleTravelerRuleCrowdQuantityLimits },
      needFillTraveler: 'boolean',
      travelerFieldRule: TicketPageQueryProductResponseBodyDataProductsBuyRuleTravelerRuleTravelerFieldRule,
      travelerFillDimension: 'number',
      travelerQuantity: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.crowdLimitRules)) {
      $dara.Model.validateArray(this.crowdLimitRules);
    }
    if(Array.isArray(this.crowdQuantityLimits)) {
      $dara.Model.validateArray(this.crowdQuantityLimits);
    }
    if(this.travelerFieldRule && typeof (this.travelerFieldRule as any).validate === 'function') {
      (this.travelerFieldRule as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TicketPageQueryProductResponseBodyDataProductsBuyRule extends $dara.Model {
  aheadBuyTimePointRule?: TicketPageQueryProductResponseBodyDataProductsBuyRuleAheadBuyTimePointRule;
  contactRule?: TicketPageQueryProductResponseBodyDataProductsBuyRuleContactRule;
  crossOrderBuyQuantityLimitRules?: TicketPageQueryProductResponseBodyDataProductsBuyRuleCrossOrderBuyQuantityLimitRules[];
  perOrderBuyQuantityLimitRule?: TicketPageQueryProductResponseBodyDataProductsBuyRulePerOrderBuyQuantityLimitRule;
  travelerRule?: TicketPageQueryProductResponseBodyDataProductsBuyRuleTravelerRule;
  static names(): { [key: string]: string } {
    return {
      aheadBuyTimePointRule: 'AheadBuyTimePointRule',
      contactRule: 'ContactRule',
      crossOrderBuyQuantityLimitRules: 'CrossOrderBuyQuantityLimitRules',
      perOrderBuyQuantityLimitRule: 'PerOrderBuyQuantityLimitRule',
      travelerRule: 'TravelerRule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aheadBuyTimePointRule: TicketPageQueryProductResponseBodyDataProductsBuyRuleAheadBuyTimePointRule,
      contactRule: TicketPageQueryProductResponseBodyDataProductsBuyRuleContactRule,
      crossOrderBuyQuantityLimitRules: { 'type': 'array', 'itemType': TicketPageQueryProductResponseBodyDataProductsBuyRuleCrossOrderBuyQuantityLimitRules },
      perOrderBuyQuantityLimitRule: TicketPageQueryProductResponseBodyDataProductsBuyRulePerOrderBuyQuantityLimitRule,
      travelerRule: TicketPageQueryProductResponseBodyDataProductsBuyRuleTravelerRule,
    };
  }

  validate() {
    if(this.aheadBuyTimePointRule && typeof (this.aheadBuyTimePointRule as any).validate === 'function') {
      (this.aheadBuyTimePointRule as any).validate();
    }
    if(this.contactRule && typeof (this.contactRule as any).validate === 'function') {
      (this.contactRule as any).validate();
    }
    if(Array.isArray(this.crossOrderBuyQuantityLimitRules)) {
      $dara.Model.validateArray(this.crossOrderBuyQuantityLimitRules);
    }
    if(this.perOrderBuyQuantityLimitRule && typeof (this.perOrderBuyQuantityLimitRule as any).validate === 'function') {
      (this.perOrderBuyQuantityLimitRule as any).validate();
    }
    if(this.travelerRule && typeof (this.travelerRule as any).validate === 'function') {
      (this.travelerRule as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TicketPageQueryProductResponseBodyDataProductsRefundRuleRefundStageRulesFrom extends $dara.Model {
  /**
   * @example
   * 1
   */
  anchor?: number;
  /**
   * @example
   * 2026-01-01
   */
  fixedTime?: string;
  /**
   * @example
   * 18:00
   */
  offsetDayOfTime?: string;
  /**
   * @example
   * 1
   */
  offsetUnit?: number;
  /**
   * @example
   * 1
   */
  offsetValue?: number;
  static names(): { [key: string]: string } {
    return {
      anchor: 'Anchor',
      fixedTime: 'FixedTime',
      offsetDayOfTime: 'OffsetDayOfTime',
      offsetUnit: 'OffsetUnit',
      offsetValue: 'OffsetValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      anchor: 'number',
      fixedTime: 'string',
      offsetDayOfTime: 'string',
      offsetUnit: 'number',
      offsetValue: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TicketPageQueryProductResponseBodyDataProductsRefundRuleRefundStageRulesTo extends $dara.Model {
  /**
   * @example
   * 1
   */
  anchor?: number;
  /**
   * @example
   * 2026-01-01
   */
  fixedTime?: string;
  /**
   * @example
   * 18:00
   */
  offsetDayOfTime?: string;
  /**
   * @example
   * 1
   */
  offsetUnit?: number;
  /**
   * @example
   * 1
   */
  offsetValue?: number;
  static names(): { [key: string]: string } {
    return {
      anchor: 'Anchor',
      fixedTime: 'FixedTime',
      offsetDayOfTime: 'OffsetDayOfTime',
      offsetUnit: 'OffsetUnit',
      offsetValue: 'OffsetValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      anchor: 'number',
      fixedTime: 'string',
      offsetDayOfTime: 'string',
      offsetUnit: 'number',
      offsetValue: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TicketPageQueryProductResponseBodyDataProductsRefundRuleRefundStageRules extends $dara.Model {
  /**
   * @example
   * 0.2056
   */
  fee?: number;
  /**
   * @example
   * 1
   */
  feeBase?: number;
  /**
   * @example
   * 1
   */
  feeType?: number;
  from?: TicketPageQueryProductResponseBodyDataProductsRefundRuleRefundStageRulesFrom;
  to?: TicketPageQueryProductResponseBodyDataProductsRefundRuleRefundStageRulesTo;
  static names(): { [key: string]: string } {
    return {
      fee: 'Fee',
      feeBase: 'FeeBase',
      feeType: 'FeeType',
      from: 'From',
      to: 'To',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fee: 'number',
      feeBase: 'number',
      feeType: 'number',
      from: TicketPageQueryProductResponseBodyDataProductsRefundRuleRefundStageRulesFrom,
      to: TicketPageQueryProductResponseBodyDataProductsRefundRuleRefundStageRulesTo,
    };
  }

  validate() {
    if(this.from && typeof (this.from as any).validate === 'function') {
      (this.from as any).validate();
    }
    if(this.to && typeof (this.to as any).validate === 'function') {
      (this.to as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TicketPageQueryProductResponseBodyDataProductsRefundRule extends $dara.Model {
  refundStageRules?: TicketPageQueryProductResponseBodyDataProductsRefundRuleRefundStageRules[];
  /**
   * @example
   * 2
   */
  refundType?: number;
  static names(): { [key: string]: string } {
    return {
      refundStageRules: 'RefundStageRules',
      refundType: 'RefundType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      refundStageRules: { 'type': 'array', 'itemType': TicketPageQueryProductResponseBodyDataProductsRefundRuleRefundStageRules },
      refundType: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.refundStageRules)) {
      $dara.Model.validateArray(this.refundStageRules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TicketPageQueryProductResponseBodyDataProductsRegion extends $dara.Model {
  /**
   * @example
   * 普通区
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TicketPageQueryProductResponseBodyDataProductsSession extends $dara.Model {
  /**
   * @example
   * 12:00
   */
  sessionEndTime?: string;
  /**
   * @example
   * 08:00-12:00
   */
  sessionName?: string;
  /**
   * @example
   * 08:00
   */
  sessionStartTime?: string;
  static names(): { [key: string]: string } {
    return {
      sessionEndTime: 'SessionEndTime',
      sessionName: 'SessionName',
      sessionStartTime: 'SessionStartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sessionEndTime: 'string',
      sessionName: 'string',
      sessionStartTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TicketPageQueryProductResponseBodyDataProductsSpu extends $dara.Model {
  /**
   * @example
   * 门票
   */
  primaryTypeName?: string;
  /**
   * @example
   * 门票级别日历详情
   */
  reserveDetail?: string;
  /**
   * @example
   * 门票级别日历说明
   */
  reserveTitle?: string;
  /**
   * @example
   * 首道门票
   */
  secondaryTypeName?: string;
  /**
   * @example
   * 3507
   */
  spuId?: number;
  /**
   * @example
   * 1日票
   */
  spuName?: string;
  static names(): { [key: string]: string } {
    return {
      primaryTypeName: 'PrimaryTypeName',
      reserveDetail: 'ReserveDetail',
      reserveTitle: 'ReserveTitle',
      secondaryTypeName: 'SecondaryTypeName',
      spuId: 'SpuId',
      spuName: 'SpuName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      primaryTypeName: 'string',
      reserveDetail: 'string',
      reserveTitle: 'string',
      secondaryTypeName: 'string',
      spuId: 'number',
      spuName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TicketPageQueryProductResponseBodyDataProductsTicketKind extends $dara.Model {
  /**
   * @example
   * 适用于18周岁(含)至59周岁(含)的游客
   */
  description?: string;
  /**
   * @example
   * 60484007
   */
  id?: number;
  /**
   * @example
   * 成人票
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      id: 'number',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TicketPageQueryProductResponseBodyDataProductsUseRuleEffectTimePointRule extends $dara.Model {
  /**
   * @example
   * 1
   */
  anchor?: number;
  /**
   * @example
   * 2026-01-01
   */
  fixedTime?: string;
  /**
   * @example
   * 18:00
   */
  offsetDayOfTime?: string;
  /**
   * @example
   * 1
   */
  offsetUnit?: number;
  /**
   * @example
   * 1
   */
  offsetValue?: number;
  static names(): { [key: string]: string } {
    return {
      anchor: 'Anchor',
      fixedTime: 'FixedTime',
      offsetDayOfTime: 'OffsetDayOfTime',
      offsetUnit: 'OffsetUnit',
      offsetValue: 'OffsetValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      anchor: 'number',
      fixedTime: 'string',
      offsetDayOfTime: 'string',
      offsetUnit: 'number',
      offsetValue: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TicketPageQueryProductResponseBodyDataProductsUseRuleEntryTimePeriods extends $dara.Model {
  /**
   * @example
   * 08:00
   */
  beginTime?: string;
  /**
   * @example
   * 17:00
   */
  endTime?: string;
  static names(): { [key: string]: string } {
    return {
      beginTime: 'BeginTime',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTime: 'string',
      endTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TicketPageQueryProductResponseBodyDataProductsUseRuleEntryWithVoucherRule extends $dara.Model {
  /**
   * @example
   * 凭二维码入园
   */
  voucherRemark?: string;
  /**
   * @example
   * [1]
   */
  voucherTypes?: number[];
  static names(): { [key: string]: string } {
    return {
      voucherRemark: 'VoucherRemark',
      voucherTypes: 'VoucherTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      voucherRemark: 'string',
      voucherTypes: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.voucherTypes)) {
      $dara.Model.validateArray(this.voucherTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TicketPageQueryProductResponseBodyDataProductsUseRulePickupsRule extends $dara.Model {
  /**
   * @example
   * 景区游客中心
   */
  pickupsAddress?: string;
  /**
   * @example
   * 凭短信取票
   */
  voucherRemark?: string;
  /**
   * @example
   * [1]
   */
  voucherTypes?: number[];
  static names(): { [key: string]: string } {
    return {
      pickupsAddress: 'PickupsAddress',
      voucherRemark: 'VoucherRemark',
      voucherTypes: 'VoucherTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pickupsAddress: 'string',
      voucherRemark: 'string',
      voucherTypes: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.voucherTypes)) {
      $dara.Model.validateArray(this.voucherTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TicketPageQueryProductResponseBodyDataProductsUseRuleValidityPeriodRuleFrom extends $dara.Model {
  /**
   * @example
   * 1
   */
  anchor?: number;
  /**
   * @example
   * 2026-01-01
   */
  fixedTime?: string;
  /**
   * @example
   * 18:00
   */
  offsetDayOfTime?: string;
  /**
   * @example
   * 1
   */
  offsetUnit?: number;
  /**
   * @example
   * 1
   */
  offsetValue?: number;
  static names(): { [key: string]: string } {
    return {
      anchor: 'Anchor',
      fixedTime: 'FixedTime',
      offsetDayOfTime: 'OffsetDayOfTime',
      offsetUnit: 'OffsetUnit',
      offsetValue: 'OffsetValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      anchor: 'number',
      fixedTime: 'string',
      offsetDayOfTime: 'string',
      offsetUnit: 'number',
      offsetValue: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TicketPageQueryProductResponseBodyDataProductsUseRuleValidityPeriodRuleTo extends $dara.Model {
  /**
   * @example
   * 1
   */
  anchor?: number;
  /**
   * @example
   * 2026-01-01
   */
  fixedTime?: string;
  /**
   * @example
   * 18:00
   */
  offsetDayOfTime?: string;
  /**
   * @example
   * 1
   */
  offsetUnit?: number;
  /**
   * @example
   * 1
   */
  offsetValue?: number;
  static names(): { [key: string]: string } {
    return {
      anchor: 'Anchor',
      fixedTime: 'FixedTime',
      offsetDayOfTime: 'OffsetDayOfTime',
      offsetUnit: 'OffsetUnit',
      offsetValue: 'OffsetValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      anchor: 'number',
      fixedTime: 'string',
      offsetDayOfTime: 'string',
      offsetUnit: 'number',
      offsetValue: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TicketPageQueryProductResponseBodyDataProductsUseRuleValidityPeriodRule extends $dara.Model {
  /**
   * @example
   * [1, 2, 3, 4, 5, 6, 7]
   */
  availableWeeks?: number[];
  from?: TicketPageQueryProductResponseBodyDataProductsUseRuleValidityPeriodRuleFrom;
  to?: TicketPageQueryProductResponseBodyDataProductsUseRuleValidityPeriodRuleTo;
  /**
   * @example
   * ["2026-01-01"]
   */
  unavailableDates?: string[];
  static names(): { [key: string]: string } {
    return {
      availableWeeks: 'AvailableWeeks',
      from: 'From',
      to: 'To',
      unavailableDates: 'UnavailableDates',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableWeeks: { 'type': 'array', 'itemType': 'number' },
      from: TicketPageQueryProductResponseBodyDataProductsUseRuleValidityPeriodRuleFrom,
      to: TicketPageQueryProductResponseBodyDataProductsUseRuleValidityPeriodRuleTo,
      unavailableDates: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.availableWeeks)) {
      $dara.Model.validateArray(this.availableWeeks);
    }
    if(this.from && typeof (this.from as any).validate === 'function') {
      (this.from as any).validate();
    }
    if(this.to && typeof (this.to as any).validate === 'function') {
      (this.to as any).validate();
    }
    if(Array.isArray(this.unavailableDates)) {
      $dara.Model.validateArray(this.unavailableDates);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TicketPageQueryProductResponseBodyDataProductsUseRule extends $dara.Model {
  effectTimePointRule?: TicketPageQueryProductResponseBodyDataProductsUseRuleEffectTimePointRule;
  /**
   * @example
   * 景区正门入口
   */
  entryAddress?: string;
  /**
   * @example
   * 请于入园前2小时至香港迪士尼度假区售票处旁人工服务站进行取票预约，服务时间上午 10:00 至 晚上 8:30
   */
  entryRemark?: string;
  entryTimePeriods?: TicketPageQueryProductResponseBodyDataProductsUseRuleEntryTimePeriods[];
  /**
   * @example
   * 1
   */
  entryType?: number;
  entryWithVoucherRule?: TicketPageQueryProductResponseBodyDataProductsUseRuleEntryWithVoucherRule;
  /**
   * @example
   * true
   */
  needAssemble?: boolean;
  /**
   * @example
   * true
   */
  needPrebook?: boolean;
  /**
   * @example
   * 请携带有效身份证件
   */
  otherNote?: string;
  pickupsRule?: TicketPageQueryProductResponseBodyDataProductsUseRulePickupsRule;
  validityPeriodRule?: TicketPageQueryProductResponseBodyDataProductsUseRuleValidityPeriodRule;
  static names(): { [key: string]: string } {
    return {
      effectTimePointRule: 'EffectTimePointRule',
      entryAddress: 'EntryAddress',
      entryRemark: 'EntryRemark',
      entryTimePeriods: 'EntryTimePeriods',
      entryType: 'EntryType',
      entryWithVoucherRule: 'EntryWithVoucherRule',
      needAssemble: 'NeedAssemble',
      needPrebook: 'NeedPrebook',
      otherNote: 'OtherNote',
      pickupsRule: 'PickupsRule',
      validityPeriodRule: 'ValidityPeriodRule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      effectTimePointRule: TicketPageQueryProductResponseBodyDataProductsUseRuleEffectTimePointRule,
      entryAddress: 'string',
      entryRemark: 'string',
      entryTimePeriods: { 'type': 'array', 'itemType': TicketPageQueryProductResponseBodyDataProductsUseRuleEntryTimePeriods },
      entryType: 'number',
      entryWithVoucherRule: TicketPageQueryProductResponseBodyDataProductsUseRuleEntryWithVoucherRule,
      needAssemble: 'boolean',
      needPrebook: 'boolean',
      otherNote: 'string',
      pickupsRule: TicketPageQueryProductResponseBodyDataProductsUseRulePickupsRule,
      validityPeriodRule: TicketPageQueryProductResponseBodyDataProductsUseRuleValidityPeriodRule,
    };
  }

  validate() {
    if(this.effectTimePointRule && typeof (this.effectTimePointRule as any).validate === 'function') {
      (this.effectTimePointRule as any).validate();
    }
    if(Array.isArray(this.entryTimePeriods)) {
      $dara.Model.validateArray(this.entryTimePeriods);
    }
    if(this.entryWithVoucherRule && typeof (this.entryWithVoucherRule as any).validate === 'function') {
      (this.entryWithVoucherRule as any).validate();
    }
    if(this.pickupsRule && typeof (this.pickupsRule as any).validate === 'function') {
      (this.pickupsRule as any).validate();
    }
    if(this.validityPeriodRule && typeof (this.validityPeriodRule as any).validate === 'function') {
      (this.validityPeriodRule as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TicketPageQueryProductResponseBodyDataProducts extends $dara.Model {
  /**
   * @example
   * 2
   */
  bookingType?: number;
  buyRule?: TicketPageQueryProductResponseBodyDataProductsBuyRule;
  /**
   * @example
   * 含景区大门票一张
   */
  costIncludeRemark?: string;
  /**
   * @example
   * 120
   */
  deliverGuaranteeMinutes?: number;
  /**
   * @example
   * ["https://example.com/detail1.jpg"]
   */
  images?: string[];
  /**
   * @example
   * 2
   */
  invoiceIssuerType?: number;
  /**
   * @example
   * 20
   */
  paymentLimitMinutes?: number;
  /**
   * @example
   * 123456
   */
  productId?: string;
  /**
   * @example
   * 西湖游船成人票
   */
  productName?: string;
  refundRule?: TicketPageQueryProductResponseBodyDataProductsRefundRule;
  region?: TicketPageQueryProductResponseBodyDataProductsRegion;
  /**
   * @example
   * 123456
   */
  scenicId?: number;
  session?: TicketPageQueryProductResponseBodyDataProductsSession;
  /**
   * @example
   * 1
   */
  settlePriceCalculateType?: number;
  spu?: TicketPageQueryProductResponseBodyDataProductsSpu;
  /**
   * @example
   * 飞猪景区乐园旗舰店
   */
  supplierName?: string;
  ticketKind?: TicketPageQueryProductResponseBodyDataProductsTicketKind;
  useRule?: TicketPageQueryProductResponseBodyDataProductsUseRule;
  static names(): { [key: string]: string } {
    return {
      bookingType: 'BookingType',
      buyRule: 'BuyRule',
      costIncludeRemark: 'CostIncludeRemark',
      deliverGuaranteeMinutes: 'DeliverGuaranteeMinutes',
      images: 'Images',
      invoiceIssuerType: 'InvoiceIssuerType',
      paymentLimitMinutes: 'PaymentLimitMinutes',
      productId: 'ProductId',
      productName: 'ProductName',
      refundRule: 'RefundRule',
      region: 'Region',
      scenicId: 'ScenicId',
      session: 'Session',
      settlePriceCalculateType: 'SettlePriceCalculateType',
      spu: 'Spu',
      supplierName: 'SupplierName',
      ticketKind: 'TicketKind',
      useRule: 'UseRule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bookingType: 'number',
      buyRule: TicketPageQueryProductResponseBodyDataProductsBuyRule,
      costIncludeRemark: 'string',
      deliverGuaranteeMinutes: 'number',
      images: { 'type': 'array', 'itemType': 'string' },
      invoiceIssuerType: 'number',
      paymentLimitMinutes: 'number',
      productId: 'string',
      productName: 'string',
      refundRule: TicketPageQueryProductResponseBodyDataProductsRefundRule,
      region: TicketPageQueryProductResponseBodyDataProductsRegion,
      scenicId: 'number',
      session: TicketPageQueryProductResponseBodyDataProductsSession,
      settlePriceCalculateType: 'number',
      spu: TicketPageQueryProductResponseBodyDataProductsSpu,
      supplierName: 'string',
      ticketKind: TicketPageQueryProductResponseBodyDataProductsTicketKind,
      useRule: TicketPageQueryProductResponseBodyDataProductsUseRule,
    };
  }

  validate() {
    if(this.buyRule && typeof (this.buyRule as any).validate === 'function') {
      (this.buyRule as any).validate();
    }
    if(Array.isArray(this.images)) {
      $dara.Model.validateArray(this.images);
    }
    if(this.refundRule && typeof (this.refundRule as any).validate === 'function') {
      (this.refundRule as any).validate();
    }
    if(this.region && typeof (this.region as any).validate === 'function') {
      (this.region as any).validate();
    }
    if(this.session && typeof (this.session as any).validate === 'function') {
      (this.session as any).validate();
    }
    if(this.spu && typeof (this.spu as any).validate === 'function') {
      (this.spu as any).validate();
    }
    if(this.ticketKind && typeof (this.ticketKind as any).validate === 'function') {
      (this.ticketKind as any).validate();
    }
    if(this.useRule && typeof (this.useRule as any).validate === 'function') {
      (this.useRule as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TicketPageQueryProductResponseBodyData extends $dara.Model {
  products?: TicketPageQueryProductResponseBodyDataProducts[];
  /**
   * @example
   * 100
   */
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      products: 'Products',
      totalSize: 'TotalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      products: { 'type': 'array', 'itemType': TicketPageQueryProductResponseBodyDataProducts },
      totalSize: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.products)) {
      $dara.Model.validateArray(this.products);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TicketPageQueryProductResponseBody extends $dara.Model {
  data?: TicketPageQueryProductResponseBodyData;
  /**
   * @example
   * ScenicIdInvalid
   */
  errorCode?: string;
  /**
   * @example
   * ScenicId不合法
   */
  errorMsg?: string;
  /**
   * @example
   * 51593418-8C73-5E47-8BA8-3F1D4A00CC0B
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMsg: 'ErrorMsg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: TicketPageQueryProductResponseBodyData,
      errorCode: 'string',
      errorMsg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

