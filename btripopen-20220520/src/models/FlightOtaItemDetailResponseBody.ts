// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FlightOtaItemDetailResponseBodyModuleBaggageRuleBaggageSubItemsBaggageSubContentVisualizesDescription extends $dara.Model {
  desc?: string;
  /**
   * @example
   * https://gw.alicdn.com/imgextra/i4/O1CN01UynXG31pjsEtA3tMF_!!6000000005397-2-tps-36-36.png
   */
  icon?: string;
  /**
   * @example
   * https://gw.alicdn.com/imgextra/i1/O1CN01qe7wL21gJ0SmEXXL7_!!6000000004120-2-tps-1206-768.png
   */
  image?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      desc: 'desc',
      icon: 'icon',
      image: 'image',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desc: 'string',
      icon: 'string',
      image: 'string',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightOtaItemDetailResponseBodyModuleBaggageRuleBaggageSubItemsBaggageSubContentVisualizesImageDO extends $dara.Model {
  /**
   * @example
   * https://gw.alicdn.com/imgextra/i3/O1CN01kLt3m923XsUs6WVif_!!6000000007266-2-tps-280-300.png
   */
  image?: string;
  /**
   * @example
   * 55
   */
  largest?: string;
  /**
   * @example
   * 40
   */
  middle?: string;
  /**
   * @example
   * 20
   */
  smallest?: string;
  static names(): { [key: string]: string } {
    return {
      image: 'image',
      largest: 'largest',
      middle: 'middle',
      smallest: 'smallest',
    };
  }

  static types(): { [key: string]: any } {
    return {
      image: 'string',
      largest: 'string',
      middle: 'string',
      smallest: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightOtaItemDetailResponseBodyModuleBaggageRuleBaggageSubItemsBaggageSubContentVisualizes extends $dara.Model {
  /**
   * @remarks
   * baggage_desc
   */
  baggageDesc?: string[];
  /**
   * @example
   * 0
   */
  baggageSubContentType?: number;
  description?: FlightOtaItemDetailResponseBodyModuleBaggageRuleBaggageSubItemsBaggageSubContentVisualizesDescription;
  imageDO?: FlightOtaItemDetailResponseBodyModuleBaggageRuleBaggageSubItemsBaggageSubContentVisualizesImageDO;
  /**
   * @example
   * false
   */
  isHighlight?: boolean;
  subTitle?: string;
  static names(): { [key: string]: string } {
    return {
      baggageDesc: 'baggage_desc',
      baggageSubContentType: 'baggage_sub_content_type',
      description: 'description',
      imageDO: 'image_d_o',
      isHighlight: 'is_highlight',
      subTitle: 'sub_title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baggageDesc: { 'type': 'array', 'itemType': 'string' },
      baggageSubContentType: 'number',
      description: FlightOtaItemDetailResponseBodyModuleBaggageRuleBaggageSubItemsBaggageSubContentVisualizesDescription,
      imageDO: FlightOtaItemDetailResponseBodyModuleBaggageRuleBaggageSubItemsBaggageSubContentVisualizesImageDO,
      isHighlight: 'boolean',
      subTitle: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.baggageDesc)) {
      $dara.Model.validateArray(this.baggageDesc);
    }
    if(this.description && typeof (this.description as any).validate === 'function') {
      (this.description as any).validate();
    }
    if(this.imageDO && typeof (this.imageDO as any).validate === 'function') {
      (this.imageDO as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightOtaItemDetailResponseBodyModuleBaggageRuleBaggageSubItems extends $dara.Model {
  baggageSubContentVisualizes?: FlightOtaItemDetailResponseBodyModuleBaggageRuleBaggageSubItemsBaggageSubContentVisualizes[];
  extraContentVisualizes?: any[];
  /**
   * @example
   * false
   */
  isStruct?: boolean;
  /**
   * @example
   * ADT
   */
  ptc?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      baggageSubContentVisualizes: 'baggage_sub_content_visualizes',
      extraContentVisualizes: 'extra_content_visualizes',
      isStruct: 'is_struct',
      ptc: 'ptc',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baggageSubContentVisualizes: { 'type': 'array', 'itemType': FlightOtaItemDetailResponseBodyModuleBaggageRuleBaggageSubItemsBaggageSubContentVisualizes },
      extraContentVisualizes: { 'type': 'array', 'itemType': 'any' },
      isStruct: 'boolean',
      ptc: 'string',
      title: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.baggageSubContentVisualizes)) {
      $dara.Model.validateArray(this.baggageSubContentVisualizes);
    }
    if(Array.isArray(this.extraContentVisualizes)) {
      $dara.Model.validateArray(this.extraContentVisualizes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightOtaItemDetailResponseBodyModuleBaggageRuleTips extends $dara.Model {
  /**
   * @example
   * https://gw.alicdn.com/imgextra/i1/O1CN019zl3WZ22fNLxzx2cR_!!6000000007147-2-tps-125-45.png
   */
  logo?: string;
  tipsDesc?: string;
  /**
   * @example
   * https://gw.alicdn.com/imgextra/i3/O1CN01rJxjw61f3bXNHAmlk_!!6000000003951-2-tps-1050-675.png
   */
  tipsImage?: string;
  static names(): { [key: string]: string } {
    return {
      logo: 'logo',
      tipsDesc: 'tips_desc',
      tipsImage: 'tips_image',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logo: 'string',
      tipsDesc: 'string',
      tipsImage: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightOtaItemDetailResponseBodyModuleBaggageRule extends $dara.Model {
  baggageSubItems?: FlightOtaItemDetailResponseBodyModuleBaggageRuleBaggageSubItems[];
  /**
   * @example
   * 0
   */
  index?: number;
  /**
   * @example
   * tableHead
   */
  tableHead?: string;
  tips?: FlightOtaItemDetailResponseBodyModuleBaggageRuleTips;
  title?: string;
  /**
   * @example
   * 2
   */
  type?: number;
  static names(): { [key: string]: string } {
    return {
      baggageSubItems: 'baggage_sub_items',
      index: 'index',
      tableHead: 'table_head',
      tips: 'tips',
      title: 'title',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baggageSubItems: { 'type': 'array', 'itemType': FlightOtaItemDetailResponseBodyModuleBaggageRuleBaggageSubItems },
      index: 'number',
      tableHead: 'string',
      tips: FlightOtaItemDetailResponseBodyModuleBaggageRuleTips,
      title: 'string',
      type: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.baggageSubItems)) {
      $dara.Model.validateArray(this.baggageSubItems);
    }
    if(this.tips && typeof (this.tips as any).validate === 'function') {
      (this.tips as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightOtaItemDetailResponseBodyModuleChangeRuleExtraContents extends $dara.Model {
  content?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightOtaItemDetailResponseBodyModuleChangeRuleRefundSubItemsRefundSubContents extends $dara.Model {
  feeDesc?: string;
  feeRange?: string;
  /**
   * @example
   * 1
   */
  style?: number;
  static names(): { [key: string]: string } {
    return {
      feeDesc: 'fee_desc',
      feeRange: 'fee_range',
      style: 'style',
    };
  }

  static types(): { [key: string]: any } {
    return {
      feeDesc: 'string',
      feeRange: 'string',
      style: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightOtaItemDetailResponseBodyModuleChangeRuleRefundSubItems extends $dara.Model {
  /**
   * @example
   * false
   */
  isStruct?: boolean;
  /**
   * @example
   * ADT
   */
  ptc?: string;
  refundSubContents?: FlightOtaItemDetailResponseBodyModuleChangeRuleRefundSubItemsRefundSubContents[];
  title?: string;
  static names(): { [key: string]: string } {
    return {
      isStruct: 'is_struct',
      ptc: 'ptc',
      refundSubContents: 'refund_sub_contents',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isStruct: 'boolean',
      ptc: 'string',
      refundSubContents: { 'type': 'array', 'itemType': FlightOtaItemDetailResponseBodyModuleChangeRuleRefundSubItemsRefundSubContents },
      title: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.refundSubContents)) {
      $dara.Model.validateArray(this.refundSubContents);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightOtaItemDetailResponseBodyModuleChangeRule extends $dara.Model {
  extraContents?: FlightOtaItemDetailResponseBodyModuleChangeRuleExtraContents[];
  /**
   * @example
   * HO3925
   */
  flightNo?: string;
  /**
   * @example
   * 0
   */
  freeBaggage?: number;
  /**
   * @example
   * 0
   */
  index?: number;
  /**
   * @example
   * 0
   */
  level?: number;
  refundSubItems?: FlightOtaItemDetailResponseBodyModuleChangeRuleRefundSubItems[];
  /**
   * @remarks
   * subTableHead
   */
  subTableHead?: string[];
  /**
   * @example
   * tableHead
   */
  tableHead?: string;
  title?: string;
  /**
   * @example
   * 1
   */
  type?: number;
  static names(): { [key: string]: string } {
    return {
      extraContents: 'extra_contents',
      flightNo: 'flight_no',
      freeBaggage: 'free_baggage',
      index: 'index',
      level: 'level',
      refundSubItems: 'refund_sub_items',
      subTableHead: 'sub_table_head',
      tableHead: 'table_head',
      title: 'title',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extraContents: { 'type': 'array', 'itemType': FlightOtaItemDetailResponseBodyModuleChangeRuleExtraContents },
      flightNo: 'string',
      freeBaggage: 'number',
      index: 'number',
      level: 'number',
      refundSubItems: { 'type': 'array', 'itemType': FlightOtaItemDetailResponseBodyModuleChangeRuleRefundSubItems },
      subTableHead: { 'type': 'array', 'itemType': 'string' },
      tableHead: 'string',
      title: 'string',
      type: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.extraContents)) {
      $dara.Model.validateArray(this.extraContents);
    }
    if(Array.isArray(this.refundSubItems)) {
      $dara.Model.validateArray(this.refundSubItems);
    }
    if(Array.isArray(this.subTableHead)) {
      $dara.Model.validateArray(this.subTableHead);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightOtaItemDetailResponseBodyModuleRefundRuleExtraContents extends $dara.Model {
  content?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightOtaItemDetailResponseBodyModuleRefundRuleRefundSubItemsRefundSubContents extends $dara.Model {
  feeDesc?: string;
  feeRange?: string;
  /**
   * @example
   * 1
   */
  style?: number;
  static names(): { [key: string]: string } {
    return {
      feeDesc: 'fee_desc',
      feeRange: 'fee_range',
      style: 'style',
    };
  }

  static types(): { [key: string]: any } {
    return {
      feeDesc: 'string',
      feeRange: 'string',
      style: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightOtaItemDetailResponseBodyModuleRefundRuleRefundSubItems extends $dara.Model {
  /**
   * @example
   * false
   */
  isStruct?: boolean;
  /**
   * @example
   * ADT
   */
  ptc?: string;
  refundSubContents?: FlightOtaItemDetailResponseBodyModuleRefundRuleRefundSubItemsRefundSubContents[];
  title?: string;
  static names(): { [key: string]: string } {
    return {
      isStruct: 'is_struct',
      ptc: 'ptc',
      refundSubContents: 'refund_sub_contents',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isStruct: 'boolean',
      ptc: 'string',
      refundSubContents: { 'type': 'array', 'itemType': FlightOtaItemDetailResponseBodyModuleRefundRuleRefundSubItemsRefundSubContents },
      title: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.refundSubContents)) {
      $dara.Model.validateArray(this.refundSubContents);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightOtaItemDetailResponseBodyModuleRefundRule extends $dara.Model {
  extraContents?: FlightOtaItemDetailResponseBodyModuleRefundRuleExtraContents[];
  /**
   * @example
   * HO3925
   */
  flightNo?: string;
  /**
   * @example
   * 0
   */
  freeBaggage?: number;
  /**
   * @example
   * 0
   */
  index?: number;
  /**
   * @example
   * 0
   */
  level?: number;
  refundSubItems?: FlightOtaItemDetailResponseBodyModuleRefundRuleRefundSubItems[];
  /**
   * @remarks
   * subTableHead
   */
  subTableHead?: string[];
  /**
   * @example
   * tableHead
   */
  tableHead?: string;
  title?: string;
  /**
   * @example
   * 0
   */
  type?: number;
  static names(): { [key: string]: string } {
    return {
      extraContents: 'extra_contents',
      flightNo: 'flight_no',
      freeBaggage: 'free_baggage',
      index: 'index',
      level: 'level',
      refundSubItems: 'refund_sub_items',
      subTableHead: 'sub_table_head',
      tableHead: 'table_head',
      title: 'title',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extraContents: { 'type': 'array', 'itemType': FlightOtaItemDetailResponseBodyModuleRefundRuleExtraContents },
      flightNo: 'string',
      freeBaggage: 'number',
      index: 'number',
      level: 'number',
      refundSubItems: { 'type': 'array', 'itemType': FlightOtaItemDetailResponseBodyModuleRefundRuleRefundSubItems },
      subTableHead: { 'type': 'array', 'itemType': 'string' },
      tableHead: 'string',
      title: 'string',
      type: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.extraContents)) {
      $dara.Model.validateArray(this.extraContents);
    }
    if(Array.isArray(this.refundSubItems)) {
      $dara.Model.validateArray(this.refundSubItems);
    }
    if(Array.isArray(this.subTableHead)) {
      $dara.Model.validateArray(this.subTableHead);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightOtaItemDetailResponseBodyModule extends $dara.Model {
  baggageRule?: FlightOtaItemDetailResponseBodyModuleBaggageRule[];
  changeRule?: FlightOtaItemDetailResponseBodyModuleChangeRule[];
  refundRule?: FlightOtaItemDetailResponseBodyModuleRefundRule[];
  /**
   * @example
   * 1830
   */
  sellPrice?: number;
  sellPriceList?: number[];
  /**
   * @example
   * 1
   */
  tripType?: number;
  static names(): { [key: string]: string } {
    return {
      baggageRule: 'baggage_rule',
      changeRule: 'change_rule',
      refundRule: 'refund_rule',
      sellPrice: 'sell_price',
      sellPriceList: 'sell_price_list',
      tripType: 'trip_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baggageRule: { 'type': 'array', 'itemType': FlightOtaItemDetailResponseBodyModuleBaggageRule },
      changeRule: { 'type': 'array', 'itemType': FlightOtaItemDetailResponseBodyModuleChangeRule },
      refundRule: { 'type': 'array', 'itemType': FlightOtaItemDetailResponseBodyModuleRefundRule },
      sellPrice: 'number',
      sellPriceList: { 'type': 'array', 'itemType': 'number' },
      tripType: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.baggageRule)) {
      $dara.Model.validateArray(this.baggageRule);
    }
    if(Array.isArray(this.changeRule)) {
      $dara.Model.validateArray(this.changeRule);
    }
    if(Array.isArray(this.refundRule)) {
      $dara.Model.validateArray(this.refundRule);
    }
    if(Array.isArray(this.sellPriceList)) {
      $dara.Model.validateArray(this.sellPriceList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightOtaItemDetailResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  message?: string;
  /**
   * @remarks
   * module
   */
  module?: FlightOtaItemDetailResponseBodyModule;
  /**
   * @remarks
   * requestId
   * 
   * @example
   * 92359A00-85D8-16C4-AED0-249618DEEC17
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * traceId
   * 
   * @example
   * 210bc60a16916374201706365d2a16
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      module: 'module',
      requestId: 'requestId',
      success: 'success',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      module: FlightOtaItemDetailResponseBodyModule,
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  validate() {
    if(this.module && typeof (this.module as any).validate === 'function') {
      (this.module as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

