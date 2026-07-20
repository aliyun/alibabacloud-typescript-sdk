// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FlightOtaSearchResponseBodyModuleFlightListAirlineInfo extends $dara.Model {
  /**
   * @example
   * CA
   */
  airlineCode?: string;
  /**
   * @example
   * 中国国航
   */
  airlineName?: string;
  /**
   * @example
   * 国航
   */
  airlineSimpleName?: string;
  static names(): { [key: string]: string } {
    return {
      airlineCode: 'airline_code',
      airlineName: 'airline_name',
      airlineSimpleName: 'airline_simple_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      airlineCode: 'string',
      airlineName: 'string',
      airlineSimpleName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightOtaSearchResponseBodyModuleFlightListArrAirportInfo extends $dara.Model {
  /**
   * @example
   * HGH
   */
  airportCode?: string;
  /**
   * @example
   * 萧山国际机场
   */
  airportName?: string;
  /**
   * @example
   * HGH
   */
  cityCode?: string;
  /**
   * @example
   * 杭州
   */
  cityName?: string;
  /**
   * @example
   * T3
   */
  terminal?: string;
  static names(): { [key: string]: string } {
    return {
      airportCode: 'airport_code',
      airportName: 'airport_name',
      cityCode: 'city_code',
      cityName: 'city_name',
      terminal: 'terminal',
    };
  }

  static types(): { [key: string]: any } {
    return {
      airportCode: 'string',
      airportName: 'string',
      cityCode: 'string',
      cityName: 'string',
      terminal: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightOtaSearchResponseBodyModuleFlightListCabinInfoListFlightRuleListBaggageItemBaggageSubItemsBaggageSubContentVisualizesDescription extends $dara.Model {
  /**
   * @example
   * 您可以随身携带上飞机客舱内的行李物品，由旅客自行负责保管。具体尺寸、重量、类型等以各航空公司规定为准
   */
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
  /**
   * @example
   * 手提行李说明
   */
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

export class FlightOtaSearchResponseBodyModuleFlightListCabinInfoListFlightRuleListBaggageItemBaggageSubItemsBaggageSubContentVisualizesImageDO extends $dara.Model {
  /**
   * @example
   * demo
   */
  image?: string;
  /**
   * @example
   * 50
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

export class FlightOtaSearchResponseBodyModuleFlightListCabinInfoListFlightRuleListBaggageItemBaggageSubItemsBaggageSubContentVisualizes extends $dara.Model {
  baggageDesc?: string[];
  /**
   * @example
   * 0
   */
  baggageSubContentType?: number;
  description?: FlightOtaSearchResponseBodyModuleFlightListCabinInfoListFlightRuleListBaggageItemBaggageSubItemsBaggageSubContentVisualizesDescription;
  imageDO?: FlightOtaSearchResponseBodyModuleFlightListCabinInfoListFlightRuleListBaggageItemBaggageSubItemsBaggageSubContentVisualizesImageDO;
  /**
   * @example
   * true
   */
  isHighlight?: boolean;
  /**
   * @example
   * 免费手提行李
   */
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
      description: FlightOtaSearchResponseBodyModuleFlightListCabinInfoListFlightRuleListBaggageItemBaggageSubItemsBaggageSubContentVisualizesDescription,
      imageDO: FlightOtaSearchResponseBodyModuleFlightListCabinInfoListFlightRuleListBaggageItemBaggageSubItemsBaggageSubContentVisualizesImageDO,
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

export class FlightOtaSearchResponseBodyModuleFlightListCabinInfoListFlightRuleListBaggageItemBaggageSubItems extends $dara.Model {
  baggageSubContentVisualizes?: FlightOtaSearchResponseBodyModuleFlightListCabinInfoListFlightRuleListBaggageItemBaggageSubItemsBaggageSubContentVisualizes[];
  extraContentVisualizes?: any[];
  /**
   * @example
   * true
   */
  isStruct?: boolean;
  /**
   * @remarks
   * PTC
   * 
   * @example
   * ADT
   */
  ptc?: string;
  /**
   * @example
   * 成人
   */
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
      baggageSubContentVisualizes: { 'type': 'array', 'itemType': FlightOtaSearchResponseBodyModuleFlightListCabinInfoListFlightRuleListBaggageItemBaggageSubItemsBaggageSubContentVisualizes },
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

export class FlightOtaSearchResponseBodyModuleFlightListCabinInfoListFlightRuleListBaggageItemTips extends $dara.Model {
  /**
   * @example
   * https://gw.alicdn.com/imgextra/i1/O1CN019zl3WZ22fNLxzx2cR_!!6000000007147-2-tps-125-45.png
   */
  logo?: string;
  /**
   * @example
   * 各个尺寸的行李箱有多大
   */
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

export class FlightOtaSearchResponseBodyModuleFlightListCabinInfoListFlightRuleListBaggageItem extends $dara.Model {
  baggageSubItems?: FlightOtaSearchResponseBodyModuleFlightListCabinInfoListFlightRuleListBaggageItemBaggageSubItems[];
  /**
   * @example
   * 1
   */
  index?: number;
  /**
   * @example
   * 北京-上海)
   */
  tableHead?: string;
  tips?: FlightOtaSearchResponseBodyModuleFlightListCabinInfoListFlightRuleListBaggageItemTips;
  /**
   * @example
   * 退票规则/同舱改期规则
   */
  title?: string;
  /**
   * @example
   * 1
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
      baggageSubItems: { 'type': 'array', 'itemType': FlightOtaSearchResponseBodyModuleFlightListCabinInfoListFlightRuleListBaggageItemBaggageSubItems },
      index: 'number',
      tableHead: 'string',
      tips: FlightOtaSearchResponseBodyModuleFlightListCabinInfoListFlightRuleListBaggageItemTips,
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

export class FlightOtaSearchResponseBodyModuleFlightListCabinInfoListFlightRuleListChangeRuleInfo extends $dara.Model {
  /**
   * @example
   * 同改签规则里的说明
   */
  content?: string;
  /**
   * @example
   * 100
   */
  cost?: number;
  /**
   * @example
   * 10
   */
  costPercent?: number;
  /**
   * @example
   * 1675036500000
   */
  timeStamp?: number;
  /**
   * @example
   * demo
   */
  timeType?: string;
  /**
   * @example
   * 改签规则
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      cost: 'cost',
      costPercent: 'cost_percent',
      timeStamp: 'time_stamp',
      timeType: 'time_type',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      cost: 'number',
      costPercent: 'number',
      timeStamp: 'number',
      timeType: 'string',
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

export class FlightOtaSearchResponseBodyModuleFlightListCabinInfoListFlightRuleListChangeRule extends $dara.Model {
  /**
   * @example
   * true
   */
  able?: boolean;
  info?: FlightOtaSearchResponseBodyModuleFlightListCabinInfoListFlightRuleListChangeRuleInfo[];
  static names(): { [key: string]: string } {
    return {
      able: 'able',
      info: 'info',
    };
  }

  static types(): { [key: string]: any } {
    return {
      able: 'boolean',
      info: { 'type': 'array', 'itemType': FlightOtaSearchResponseBodyModuleFlightListCabinInfoListFlightRuleListChangeRuleInfo },
    };
  }

  validate() {
    if(Array.isArray(this.info)) {
      $dara.Model.validateArray(this.info);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightOtaSearchResponseBodyModuleFlightListCabinInfoListFlightRuleListChangeRuleItemExtraContents extends $dara.Model {
  /**
   * @example
   * demo
   */
  content?: string;
  /**
   * @example
   * demo
   */
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

export class FlightOtaSearchResponseBodyModuleFlightListCabinInfoListFlightRuleListChangeRuleItemRefundSubItemsRefundSubContents extends $dara.Model {
  /**
   * @example
   * ￥161/人
   */
  feeDesc?: string;
  /**
   * @example
   * 1月23日 09:30 前
   */
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

export class FlightOtaSearchResponseBodyModuleFlightListCabinInfoListFlightRuleListChangeRuleItemRefundSubItems extends $dara.Model {
  /**
   * @example
   * true
   */
  isStruct?: boolean;
  /**
   * @remarks
   * PTC
   * 
   * @example
   * ADT
   */
  ptc?: string;
  refundSubContents?: FlightOtaSearchResponseBodyModuleFlightListCabinInfoListFlightRuleListChangeRuleItemRefundSubItemsRefundSubContents[];
  /**
   * @example
   * 成人
   */
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
      refundSubContents: { 'type': 'array', 'itemType': FlightOtaSearchResponseBodyModuleFlightListCabinInfoListFlightRuleListChangeRuleItemRefundSubItemsRefundSubContents },
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

export class FlightOtaSearchResponseBodyModuleFlightListCabinInfoListFlightRuleListChangeRuleItem extends $dara.Model {
  extraContents?: FlightOtaSearchResponseBodyModuleFlightListCabinInfoListFlightRuleListChangeRuleItemExtraContents[];
  /**
   * @example
   * 0
   */
  index?: number;
  refundSubItems?: FlightOtaSearchResponseBodyModuleFlightListCabinInfoListFlightRuleListChangeRuleItemRefundSubItems[];
  subTableHead?: string[];
  /**
   * @example
   * 北京-上海
   */
  tableHead?: string;
  /**
   * @example
   * 退票规则/同舱改期规则
   */
  title?: string;
  /**
   * @example
   * 0
   */
  type?: number;
  static names(): { [key: string]: string } {
    return {
      extraContents: 'extra_contents',
      index: 'index',
      refundSubItems: 'refund_sub_items',
      subTableHead: 'sub_table_head',
      tableHead: 'table_head',
      title: 'title',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extraContents: { 'type': 'array', 'itemType': FlightOtaSearchResponseBodyModuleFlightListCabinInfoListFlightRuleListChangeRuleItemExtraContents },
      index: 'number',
      refundSubItems: { 'type': 'array', 'itemType': FlightOtaSearchResponseBodyModuleFlightListCabinInfoListFlightRuleListChangeRuleItemRefundSubItems },
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

export class FlightOtaSearchResponseBodyModuleFlightListCabinInfoListFlightRuleListRefundRuleInfo extends $dara.Model {
  /**
   * @example
   * 同改签规则里的说明
   */
  content?: string;
  /**
   * @example
   * 100
   */
  cost?: number;
  /**
   * @example
   * 10
   */
  costPercent?: number;
  /**
   * @example
   * 1675036500000
   */
  timeStamp?: number;
  /**
   * @example
   * demo
   */
  timeType?: string;
  /**
   * @example
   * 退票规则
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      cost: 'cost',
      costPercent: 'cost_percent',
      timeStamp: 'time_stamp',
      timeType: 'time_type',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      cost: 'number',
      costPercent: 'number',
      timeStamp: 'number',
      timeType: 'string',
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

export class FlightOtaSearchResponseBodyModuleFlightListCabinInfoListFlightRuleListRefundRule extends $dara.Model {
  /**
   * @example
   * true
   */
  able?: boolean;
  info?: FlightOtaSearchResponseBodyModuleFlightListCabinInfoListFlightRuleListRefundRuleInfo[];
  static names(): { [key: string]: string } {
    return {
      able: 'able',
      info: 'info',
    };
  }

  static types(): { [key: string]: any } {
    return {
      able: 'boolean',
      info: { 'type': 'array', 'itemType': FlightOtaSearchResponseBodyModuleFlightListCabinInfoListFlightRuleListRefundRuleInfo },
    };
  }

  validate() {
    if(Array.isArray(this.info)) {
      $dara.Model.validateArray(this.info);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightOtaSearchResponseBodyModuleFlightListCabinInfoListFlightRuleListRefundRuleItemExtraContents extends $dara.Model {
  /**
   * @example
   * demo
   */
  content?: string;
  /**
   * @example
   * demo
   */
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

export class FlightOtaSearchResponseBodyModuleFlightListCabinInfoListFlightRuleListRefundRuleItemRefundSubItemsRefundSubContents extends $dara.Model {
  /**
   * @example
   * ￥161/人
   */
  feeDesc?: string;
  /**
   * @example
   * 1月23日 09:30 前
   */
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

export class FlightOtaSearchResponseBodyModuleFlightListCabinInfoListFlightRuleListRefundRuleItemRefundSubItems extends $dara.Model {
  /**
   * @example
   * true
   */
  isStruct?: boolean;
  /**
   * @remarks
   * PTC
   * 
   * @example
   * ADT
   */
  ptc?: string;
  refundSubContents?: FlightOtaSearchResponseBodyModuleFlightListCabinInfoListFlightRuleListRefundRuleItemRefundSubItemsRefundSubContents[];
  /**
   * @example
   * 规则
   */
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
      refundSubContents: { 'type': 'array', 'itemType': FlightOtaSearchResponseBodyModuleFlightListCabinInfoListFlightRuleListRefundRuleItemRefundSubItemsRefundSubContents },
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

export class FlightOtaSearchResponseBodyModuleFlightListCabinInfoListFlightRuleListRefundRuleItem extends $dara.Model {
  extraContents?: FlightOtaSearchResponseBodyModuleFlightListCabinInfoListFlightRuleListRefundRuleItemExtraContents[];
  /**
   * @example
   * 1
   */
  index?: number;
  refundSubItems?: FlightOtaSearchResponseBodyModuleFlightListCabinInfoListFlightRuleListRefundRuleItemRefundSubItems[];
  subTableHead?: string[];
  /**
   * @example
   * 北京-上海)
   */
  tableHead?: string;
  /**
   * @example
   * demo
   */
  title?: string;
  /**
   * @example
   * 1
   */
  type?: number;
  static names(): { [key: string]: string } {
    return {
      extraContents: 'extra_contents',
      index: 'index',
      refundSubItems: 'refund_sub_items',
      subTableHead: 'sub_table_head',
      tableHead: 'table_head',
      title: 'title',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extraContents: { 'type': 'array', 'itemType': FlightOtaSearchResponseBodyModuleFlightListCabinInfoListFlightRuleListRefundRuleItemExtraContents },
      index: 'number',
      refundSubItems: { 'type': 'array', 'itemType': FlightOtaSearchResponseBodyModuleFlightListCabinInfoListFlightRuleListRefundRuleItemRefundSubItems },
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

export class FlightOtaSearchResponseBodyModuleFlightListCabinInfoListFlightRuleListSignRuleInfo extends $dara.Model {
  /**
   * @example
   * 同改签规则里的说明
   */
  content?: string;
  /**
   * @example
   * 100
   */
  cost?: number;
  /**
   * @example
   * 10
   */
  costPercent?: number;
  /**
   * @example
   * 1675036500000
   */
  timeStamp?: number;
  /**
   * @example
   * demo
   */
  timeType?: string;
  /**
   * @example
   * 签转规则
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      cost: 'cost',
      costPercent: 'cost_percent',
      timeStamp: 'time_stamp',
      timeType: 'time_type',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      cost: 'number',
      costPercent: 'number',
      timeStamp: 'number',
      timeType: 'string',
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

export class FlightOtaSearchResponseBodyModuleFlightListCabinInfoListFlightRuleListSignRule extends $dara.Model {
  /**
   * @example
   * true
   */
  able?: boolean;
  info?: FlightOtaSearchResponseBodyModuleFlightListCabinInfoListFlightRuleListSignRuleInfo[];
  static names(): { [key: string]: string } {
    return {
      able: 'able',
      info: 'info',
    };
  }

  static types(): { [key: string]: any } {
    return {
      able: 'boolean',
      info: { 'type': 'array', 'itemType': FlightOtaSearchResponseBodyModuleFlightListCabinInfoListFlightRuleListSignRuleInfo },
    };
  }

  validate() {
    if(Array.isArray(this.info)) {
      $dara.Model.validateArray(this.info);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightOtaSearchResponseBodyModuleFlightListCabinInfoListFlightRuleListUpgradeRuleInfo extends $dara.Model {
  /**
   * @example
   * 同上面规则里的说明
   */
  content?: string;
  /**
   * @example
   * 100
   */
  cost?: number;
  /**
   * @example
   * 10
   */
  costPercent?: number;
  /**
   * @example
   * 1675036500000
   */
  timeStamp?: number;
  /**
   * @example
   * demo
   */
  timeType?: string;
  /**
   * @example
   * 升舱规则
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      cost: 'cost',
      costPercent: 'cost_percent',
      timeStamp: 'time_stamp',
      timeType: 'time_type',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      cost: 'number',
      costPercent: 'number',
      timeStamp: 'number',
      timeType: 'string',
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

export class FlightOtaSearchResponseBodyModuleFlightListCabinInfoListFlightRuleListUpgradeRule extends $dara.Model {
  /**
   * @example
   * true
   */
  able?: boolean;
  info?: FlightOtaSearchResponseBodyModuleFlightListCabinInfoListFlightRuleListUpgradeRuleInfo[];
  static names(): { [key: string]: string } {
    return {
      able: 'able',
      info: 'info',
    };
  }

  static types(): { [key: string]: any } {
    return {
      able: 'boolean',
      info: { 'type': 'array', 'itemType': FlightOtaSearchResponseBodyModuleFlightListCabinInfoListFlightRuleListUpgradeRuleInfo },
    };
  }

  validate() {
    if(Array.isArray(this.info)) {
      $dara.Model.validateArray(this.info);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightOtaSearchResponseBodyModuleFlightListCabinInfoListFlightRuleList extends $dara.Model {
  /**
   * @example
   * demo
   */
  baggageInfo?: string;
  baggageItem?: FlightOtaSearchResponseBodyModuleFlightListCabinInfoListFlightRuleListBaggageItem;
  changeRule?: FlightOtaSearchResponseBodyModuleFlightListCabinInfoListFlightRuleListChangeRule;
  changeRuleItem?: FlightOtaSearchResponseBodyModuleFlightListCabinInfoListFlightRuleListChangeRuleItem;
  /**
   * @example
   * {}
   */
  extra?: string;
  refundRule?: FlightOtaSearchResponseBodyModuleFlightListCabinInfoListFlightRuleListRefundRule;
  refundRuleItem?: FlightOtaSearchResponseBodyModuleFlightListCabinInfoListFlightRuleListRefundRuleItem;
  signRule?: FlightOtaSearchResponseBodyModuleFlightListCabinInfoListFlightRuleListSignRule;
  /**
   * @example
   * 文案
   */
  tuigaiqianInfo?: string;
  upgradeRule?: FlightOtaSearchResponseBodyModuleFlightListCabinInfoListFlightRuleListUpgradeRule;
  static names(): { [key: string]: string } {
    return {
      baggageInfo: 'baggage_info',
      baggageItem: 'baggage_item',
      changeRule: 'change_rule',
      changeRuleItem: 'change_rule_item',
      extra: 'extra',
      refundRule: 'refund_rule',
      refundRuleItem: 'refund_rule_item',
      signRule: 'sign_rule',
      tuigaiqianInfo: 'tuigaiqian_info',
      upgradeRule: 'upgrade_rule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baggageInfo: 'string',
      baggageItem: FlightOtaSearchResponseBodyModuleFlightListCabinInfoListFlightRuleListBaggageItem,
      changeRule: FlightOtaSearchResponseBodyModuleFlightListCabinInfoListFlightRuleListChangeRule,
      changeRuleItem: FlightOtaSearchResponseBodyModuleFlightListCabinInfoListFlightRuleListChangeRuleItem,
      extra: 'string',
      refundRule: FlightOtaSearchResponseBodyModuleFlightListCabinInfoListFlightRuleListRefundRule,
      refundRuleItem: FlightOtaSearchResponseBodyModuleFlightListCabinInfoListFlightRuleListRefundRuleItem,
      signRule: FlightOtaSearchResponseBodyModuleFlightListCabinInfoListFlightRuleListSignRule,
      tuigaiqianInfo: 'string',
      upgradeRule: FlightOtaSearchResponseBodyModuleFlightListCabinInfoListFlightRuleListUpgradeRule,
    };
  }

  validate() {
    if(this.baggageItem && typeof (this.baggageItem as any).validate === 'function') {
      (this.baggageItem as any).validate();
    }
    if(this.changeRule && typeof (this.changeRule as any).validate === 'function') {
      (this.changeRule as any).validate();
    }
    if(this.changeRuleItem && typeof (this.changeRuleItem as any).validate === 'function') {
      (this.changeRuleItem as any).validate();
    }
    if(this.refundRule && typeof (this.refundRule as any).validate === 'function') {
      (this.refundRule as any).validate();
    }
    if(this.refundRuleItem && typeof (this.refundRuleItem as any).validate === 'function') {
      (this.refundRuleItem as any).validate();
    }
    if(this.signRule && typeof (this.signRule as any).validate === 'function') {
      (this.signRule as any).validate();
    }
    if(this.upgradeRule && typeof (this.upgradeRule as any).validate === 'function') {
      (this.upgradeRule as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightOtaSearchResponseBodyModuleFlightListCabinInfoList extends $dara.Model {
  /**
   * @example
   * 无
   */
  agentId?: number;
  /**
   * @example
   * 12456
   */
  basicCabinPrice?: number;
  /**
   * @example
   * 100
   */
  buildPrice?: number;
  /**
   * @example
   * G
   */
  cabin?: string;
  /**
   * @example
   * Y
   */
  cabinClass?: string;
  /**
   * @example
   * 经济舱
   */
  cabinClassName?: string;
  /**
   * @example
   * G
   */
  childCabin?: string;
  /**
   * @example
   * 经济舱
   */
  className?: string;
  /**
   * @example
   * demo
   */
  classRule?: string;
  /**
   * @example
   * 10
   */
  discount?: string;
  flightRuleList?: FlightOtaSearchResponseBodyModuleFlightListCabinInfoListFlightRuleList[];
  /**
   * @example
   * demo
   */
  flightRuleListStr?: string;
  /**
   * @example
   * 1
   */
  invoiceType?: number;
  /**
   * @example
   * true
   */
  isProtocol?: boolean;
  /**
   * @example
   * 100
   */
  oilPrice?: number;
  /**
   * @example
   * 1000_1_0
   */
  orderParams?: string;
  /**
   * @example
   * 97f64e2d6f61408a827dd523817fefd6_0
   */
  otaItemId?: string;
  /**
   * @example
   * 100
   */
  price?: number;
  /**
   * @example
   * 1
   */
  productType?: number;
  /**
   * @example
   * demo
   */
  productTypeDesc?: string;
  /**
   * @example
   * 100
   */
  promotionPrice?: string;
  /**
   * @example
   * 1
   */
  remainedSeatCount?: string;
  /**
   * @example
   * 100
   */
  ticketPrice?: number;
  /**
   * @example
   * 100
   */
  totalPrice?: number;
  static names(): { [key: string]: string } {
    return {
      agentId: 'agent_id',
      basicCabinPrice: 'basic_cabin_price',
      buildPrice: 'build_price',
      cabin: 'cabin',
      cabinClass: 'cabin_class',
      cabinClassName: 'cabin_class_name',
      childCabin: 'child_cabin',
      className: 'class_name',
      classRule: 'class_rule',
      discount: 'discount',
      flightRuleList: 'flight_rule_list',
      flightRuleListStr: 'flight_rule_list_str',
      invoiceType: 'invoice_type',
      isProtocol: 'is_protocol',
      oilPrice: 'oil_price',
      orderParams: 'order_params',
      otaItemId: 'ota_item_id',
      price: 'price',
      productType: 'product_type',
      productTypeDesc: 'product_type_desc',
      promotionPrice: 'promotion_price',
      remainedSeatCount: 'remained_seat_count',
      ticketPrice: 'ticket_price',
      totalPrice: 'total_price',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'number',
      basicCabinPrice: 'number',
      buildPrice: 'number',
      cabin: 'string',
      cabinClass: 'string',
      cabinClassName: 'string',
      childCabin: 'string',
      className: 'string',
      classRule: 'string',
      discount: 'string',
      flightRuleList: { 'type': 'array', 'itemType': FlightOtaSearchResponseBodyModuleFlightListCabinInfoListFlightRuleList },
      flightRuleListStr: 'string',
      invoiceType: 'number',
      isProtocol: 'boolean',
      oilPrice: 'number',
      orderParams: 'string',
      otaItemId: 'string',
      price: 'number',
      productType: 'number',
      productTypeDesc: 'string',
      promotionPrice: 'string',
      remainedSeatCount: 'string',
      ticketPrice: 'number',
      totalPrice: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.flightRuleList)) {
      $dara.Model.validateArray(this.flightRuleList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightOtaSearchResponseBodyModuleFlightListDepAirportInfo extends $dara.Model {
  /**
   * @example
   * PEK
   */
  airportCode?: string;
  /**
   * @example
   * 北京首都国际机场
   */
  airportName?: string;
  /**
   * @example
   * BJS
   */
  cityCode?: string;
  /**
   * @example
   * 北京
   */
  cityName?: string;
  /**
   * @example
   * T3
   */
  terminal?: string;
  static names(): { [key: string]: string } {
    return {
      airportCode: 'airport_code',
      airportName: 'airport_name',
      cityCode: 'city_code',
      cityName: 'city_name',
      terminal: 'terminal',
    };
  }

  static types(): { [key: string]: any } {
    return {
      airportCode: 'string',
      airportName: 'string',
      cityCode: 'string',
      cityName: 'string',
      terminal: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightOtaSearchResponseBodyModuleFlightListFlightRuleListBaggageItemBaggageSubItemsBaggageSubContentVisualizesDescription extends $dara.Model {
  /**
   * @example
   * 您可以随身携带上飞机客舱内的行李物品，由旅客自行负责保管。具体尺寸、重量、类型等以各航空公司规定为准
   */
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
  /**
   * @example
   * 手提行李说明
   */
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

export class FlightOtaSearchResponseBodyModuleFlightListFlightRuleListBaggageItemBaggageSubItemsBaggageSubContentVisualizesImageDO extends $dara.Model {
  /**
   * @example
   * demo
   */
  image?: string;
  /**
   * @example
   * 50
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

export class FlightOtaSearchResponseBodyModuleFlightListFlightRuleListBaggageItemBaggageSubItemsBaggageSubContentVisualizes extends $dara.Model {
  baggageDesc?: string[];
  /**
   * @example
   * 1
   */
  baggageSubContentType?: number;
  description?: FlightOtaSearchResponseBodyModuleFlightListFlightRuleListBaggageItemBaggageSubItemsBaggageSubContentVisualizesDescription;
  imageDO?: FlightOtaSearchResponseBodyModuleFlightListFlightRuleListBaggageItemBaggageSubItemsBaggageSubContentVisualizesImageDO;
  /**
   * @example
   * true
   */
  isHighlight?: boolean;
  /**
   * @example
   * 免费手提行李
   */
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
      description: FlightOtaSearchResponseBodyModuleFlightListFlightRuleListBaggageItemBaggageSubItemsBaggageSubContentVisualizesDescription,
      imageDO: FlightOtaSearchResponseBodyModuleFlightListFlightRuleListBaggageItemBaggageSubItemsBaggageSubContentVisualizesImageDO,
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

export class FlightOtaSearchResponseBodyModuleFlightListFlightRuleListBaggageItemBaggageSubItems extends $dara.Model {
  baggageSubContentVisualizes?: FlightOtaSearchResponseBodyModuleFlightListFlightRuleListBaggageItemBaggageSubItemsBaggageSubContentVisualizes[];
  extraContentVisualizes?: any[];
  /**
   * @example
   * true
   */
  isStruct?: boolean;
  /**
   * @remarks
   * PTC
   * 
   * @example
   * ADT
   */
  ptc?: string;
  /**
   * @example
   * 成人
   */
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
      baggageSubContentVisualizes: { 'type': 'array', 'itemType': FlightOtaSearchResponseBodyModuleFlightListFlightRuleListBaggageItemBaggageSubItemsBaggageSubContentVisualizes },
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

export class FlightOtaSearchResponseBodyModuleFlightListFlightRuleListBaggageItemTips extends $dara.Model {
  /**
   * @example
   * https://gw.alicdn.com/imgextra/i1/O1CN019zl3WZ22fNLxzx2cR_!!6000000007147-2-tps-125-45.png
   */
  logo?: string;
  /**
   * @example
   * 各个尺寸的行李箱有多大
   */
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

export class FlightOtaSearchResponseBodyModuleFlightListFlightRuleListBaggageItem extends $dara.Model {
  baggageSubItems?: FlightOtaSearchResponseBodyModuleFlightListFlightRuleListBaggageItemBaggageSubItems[];
  /**
   * @example
   * 1
   */
  index?: number;
  /**
   * @example
   * 北京-上海
   */
  tableHead?: string;
  tips?: FlightOtaSearchResponseBodyModuleFlightListFlightRuleListBaggageItemTips;
  /**
   * @example
   * 退票规则/同舱改期规则
   */
  title?: string;
  /**
   * @example
   * 1
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
      baggageSubItems: { 'type': 'array', 'itemType': FlightOtaSearchResponseBodyModuleFlightListFlightRuleListBaggageItemBaggageSubItems },
      index: 'number',
      tableHead: 'string',
      tips: FlightOtaSearchResponseBodyModuleFlightListFlightRuleListBaggageItemTips,
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

export class FlightOtaSearchResponseBodyModuleFlightListFlightRuleListChangeRuleInfo extends $dara.Model {
  /**
   * @example
   * 改期如存在票面差价，需同时收取差价和改期费。除另有规定外，客票有效期自旅行之日起，一年内承运有效；如果客票全部未使用，则从填开客票之日起，一年内承运有效。变更后客票的有效期以旧客票有效期为
   */
  content?: string;
  /**
   * @example
   * 100
   */
  cost?: number;
  /**
   * @example
   * 10
   */
  costPercent?: number;
  /**
   * @example
   * 1675036500000
   */
  timeStamp?: number;
  /**
   * @example
   * demo
   */
  timeType?: string;
  /**
   * @example
   * 行李规定
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      cost: 'cost',
      costPercent: 'cost_percent',
      timeStamp: 'time_stamp',
      timeType: 'time_type',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      cost: 'number',
      costPercent: 'number',
      timeStamp: 'number',
      timeType: 'string',
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

export class FlightOtaSearchResponseBodyModuleFlightListFlightRuleListChangeRule extends $dara.Model {
  /**
   * @example
   * false
   */
  able?: boolean;
  info?: FlightOtaSearchResponseBodyModuleFlightListFlightRuleListChangeRuleInfo[];
  static names(): { [key: string]: string } {
    return {
      able: 'able',
      info: 'info',
    };
  }

  static types(): { [key: string]: any } {
    return {
      able: 'boolean',
      info: { 'type': 'array', 'itemType': FlightOtaSearchResponseBodyModuleFlightListFlightRuleListChangeRuleInfo },
    };
  }

  validate() {
    if(Array.isArray(this.info)) {
      $dara.Model.validateArray(this.info);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightOtaSearchResponseBodyModuleFlightListFlightRuleListChangeRuleItemExtraContents extends $dara.Model {
  /**
   * @example
   * 如允许改期的客票在变更时产生票价差价，需加收差价费用，换开后客票提交退票，已收取的变更手续费不退。改期后提交退票，客票自填开之日起，一年内必须开始旅行，自首次旅行开始之日起，一年内运输有效；客票全部未使用的，则从填开客票之日起，一年内有效
   */
  content?: string;
  /**
   * @example
   * 特殊说明
   */
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

export class FlightOtaSearchResponseBodyModuleFlightListFlightRuleListChangeRuleItemRefundSubItemsRefundSubContents extends $dara.Model {
  /**
   * @example
   * ￥161/人
   */
  feeDesc?: string;
  /**
   * @example
   * 1月23日 09:30 前
   */
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

export class FlightOtaSearchResponseBodyModuleFlightListFlightRuleListChangeRuleItemRefundSubItems extends $dara.Model {
  /**
   * @remarks
   * isStruct : true
   * 
   * @example
   * true
   */
  isStruct?: boolean;
  /**
   * @remarks
   * PTC
   * 
   * @example
   * ADT
   */
  ptc?: string;
  refundSubContents?: FlightOtaSearchResponseBodyModuleFlightListFlightRuleListChangeRuleItemRefundSubItemsRefundSubContents[];
  /**
   * @example
   * 退票规则/同舱改期规则
   */
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
      refundSubContents: { 'type': 'array', 'itemType': FlightOtaSearchResponseBodyModuleFlightListFlightRuleListChangeRuleItemRefundSubItemsRefundSubContents },
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

export class FlightOtaSearchResponseBodyModuleFlightListFlightRuleListChangeRuleItem extends $dara.Model {
  extraContents?: FlightOtaSearchResponseBodyModuleFlightListFlightRuleListChangeRuleItemExtraContents[];
  /**
   * @example
   * 0
   */
  index?: number;
  refundSubItems?: FlightOtaSearchResponseBodyModuleFlightListFlightRuleListChangeRuleItemRefundSubItems[];
  subTableHead?: string[];
  /**
   * @example
   * 北京-上海
   */
  tableHead?: string;
  /**
   * @example
   * 退票规则/同舱改期规则
   */
  title?: string;
  /**
   * @example
   * 1
   */
  type?: number;
  static names(): { [key: string]: string } {
    return {
      extraContents: 'extra_contents',
      index: 'index',
      refundSubItems: 'refund_sub_items',
      subTableHead: 'sub_table_head',
      tableHead: 'table_head',
      title: 'title',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extraContents: { 'type': 'array', 'itemType': FlightOtaSearchResponseBodyModuleFlightListFlightRuleListChangeRuleItemExtraContents },
      index: 'number',
      refundSubItems: { 'type': 'array', 'itemType': FlightOtaSearchResponseBodyModuleFlightListFlightRuleListChangeRuleItemRefundSubItems },
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

export class FlightOtaSearchResponseBodyModuleFlightListFlightRuleListRefundRuleInfo extends $dara.Model {
  /**
   * @example
   * 同上
   */
  content?: string;
  /**
   * @example
   * 100
   */
  cost?: number;
  /**
   * @example
   * 10
   */
  costPercent?: number;
  /**
   * @example
   * 1675036500000
   */
  timeStamp?: number;
  /**
   * @example
   * demo
   */
  timeType?: string;
  /**
   * @example
   * 行李规定
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      cost: 'cost',
      costPercent: 'cost_percent',
      timeStamp: 'time_stamp',
      timeType: 'time_type',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      cost: 'number',
      costPercent: 'number',
      timeStamp: 'number',
      timeType: 'string',
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

export class FlightOtaSearchResponseBodyModuleFlightListFlightRuleListRefundRule extends $dara.Model {
  /**
   * @example
   * false
   */
  able?: boolean;
  info?: FlightOtaSearchResponseBodyModuleFlightListFlightRuleListRefundRuleInfo[];
  static names(): { [key: string]: string } {
    return {
      able: 'able',
      info: 'info',
    };
  }

  static types(): { [key: string]: any } {
    return {
      able: 'boolean',
      info: { 'type': 'array', 'itemType': FlightOtaSearchResponseBodyModuleFlightListFlightRuleListRefundRuleInfo },
    };
  }

  validate() {
    if(Array.isArray(this.info)) {
      $dara.Model.validateArray(this.info);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightOtaSearchResponseBodyModuleFlightListFlightRuleListRefundRuleItemExtraContents extends $dara.Model {
  /**
   * @example
   * demo
   */
  content?: string;
  /**
   * @example
   * demo
   */
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

export class FlightOtaSearchResponseBodyModuleFlightListFlightRuleListRefundRuleItemRefundSubItemsRefundSubContents extends $dara.Model {
  /**
   * @example
   * ￥161/人
   */
  feeDesc?: string;
  /**
   * @example
   * 1月23日 09:30 前
   */
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

export class FlightOtaSearchResponseBodyModuleFlightListFlightRuleListRefundRuleItemRefundSubItems extends $dara.Model {
  /**
   * @example
   * true
   */
  isStruct?: boolean;
  /**
   * @remarks
   * PTC
   * 
   * @example
   * ADT
   */
  ptc?: string;
  refundSubContents?: FlightOtaSearchResponseBodyModuleFlightListFlightRuleListRefundRuleItemRefundSubItemsRefundSubContents[];
  /**
   * @example
   * 规则
   */
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
      refundSubContents: { 'type': 'array', 'itemType': FlightOtaSearchResponseBodyModuleFlightListFlightRuleListRefundRuleItemRefundSubItemsRefundSubContents },
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

export class FlightOtaSearchResponseBodyModuleFlightListFlightRuleListRefundRuleItem extends $dara.Model {
  extraContents?: FlightOtaSearchResponseBodyModuleFlightListFlightRuleListRefundRuleItemExtraContents[];
  /**
   * @example
   * 1
   */
  index?: number;
  refundSubItems?: FlightOtaSearchResponseBodyModuleFlightListFlightRuleListRefundRuleItemRefundSubItems[];
  subTableHead?: string[];
  /**
   * @example
   * 北京-上海
   */
  tableHead?: string;
  /**
   * @example
   * 退票规则/同舱改期规则
   */
  title?: string;
  /**
   * @example
   * 1
   */
  type?: number;
  static names(): { [key: string]: string } {
    return {
      extraContents: 'extra_contents',
      index: 'index',
      refundSubItems: 'refund_sub_items',
      subTableHead: 'sub_table_head',
      tableHead: 'table_head',
      title: 'title',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extraContents: { 'type': 'array', 'itemType': FlightOtaSearchResponseBodyModuleFlightListFlightRuleListRefundRuleItemExtraContents },
      index: 'number',
      refundSubItems: { 'type': 'array', 'itemType': FlightOtaSearchResponseBodyModuleFlightListFlightRuleListRefundRuleItemRefundSubItems },
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

export class FlightOtaSearchResponseBodyModuleFlightListFlightRuleListSignRuleInfo extends $dara.Model {
  /**
   * @example
   * 同上
   */
  content?: string;
  /**
   * @example
   * 100
   */
  cost?: number;
  /**
   * @example
   * 10
   */
  costPercent?: number;
  /**
   * @example
   * 1675036500000
   */
  timeStamp?: number;
  /**
   * @example
   * demo
   */
  timeType?: string;
  /**
   * @example
   * 签转规则
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      cost: 'cost',
      costPercent: 'cost_percent',
      timeStamp: 'time_stamp',
      timeType: 'time_type',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      cost: 'number',
      costPercent: 'number',
      timeStamp: 'number',
      timeType: 'string',
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

export class FlightOtaSearchResponseBodyModuleFlightListFlightRuleListSignRule extends $dara.Model {
  /**
   * @example
   * false
   */
  able?: boolean;
  info?: FlightOtaSearchResponseBodyModuleFlightListFlightRuleListSignRuleInfo[];
  static names(): { [key: string]: string } {
    return {
      able: 'able',
      info: 'info',
    };
  }

  static types(): { [key: string]: any } {
    return {
      able: 'boolean',
      info: { 'type': 'array', 'itemType': FlightOtaSearchResponseBodyModuleFlightListFlightRuleListSignRuleInfo },
    };
  }

  validate() {
    if(Array.isArray(this.info)) {
      $dara.Model.validateArray(this.info);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightOtaSearchResponseBodyModuleFlightListFlightRuleListUpgradeRuleInfo extends $dara.Model {
  /**
   * @example
   * 同上
   */
  content?: string;
  /**
   * @example
   * 100
   */
  cost?: number;
  /**
   * @example
   * 10
   */
  costPercent?: number;
  /**
   * @example
   * 1675036500000
   */
  timeStamp?: number;
  /**
   * @example
   * demo
   */
  timeType?: string;
  /**
   * @example
   * 升舱规则
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      cost: 'cost',
      costPercent: 'cost_percent',
      timeStamp: 'time_stamp',
      timeType: 'time_type',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      cost: 'number',
      costPercent: 'number',
      timeStamp: 'number',
      timeType: 'string',
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

export class FlightOtaSearchResponseBodyModuleFlightListFlightRuleListUpgradeRule extends $dara.Model {
  /**
   * @example
   * false
   */
  able?: boolean;
  info?: FlightOtaSearchResponseBodyModuleFlightListFlightRuleListUpgradeRuleInfo[];
  static names(): { [key: string]: string } {
    return {
      able: 'able',
      info: 'info',
    };
  }

  static types(): { [key: string]: any } {
    return {
      able: 'boolean',
      info: { 'type': 'array', 'itemType': FlightOtaSearchResponseBodyModuleFlightListFlightRuleListUpgradeRuleInfo },
    };
  }

  validate() {
    if(Array.isArray(this.info)) {
      $dara.Model.validateArray(this.info);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightOtaSearchResponseBodyModuleFlightListFlightRuleList extends $dara.Model {
  /**
   * @example
   * demo
   */
  baggageInfo?: string;
  baggageItem?: FlightOtaSearchResponseBodyModuleFlightListFlightRuleListBaggageItem;
  changeRule?: FlightOtaSearchResponseBodyModuleFlightListFlightRuleListChangeRule;
  changeRuleItem?: FlightOtaSearchResponseBodyModuleFlightListFlightRuleListChangeRuleItem;
  /**
   * @example
   * {}
   */
  extra?: string;
  refundRule?: FlightOtaSearchResponseBodyModuleFlightListFlightRuleListRefundRule;
  refundRuleItem?: FlightOtaSearchResponseBodyModuleFlightListFlightRuleListRefundRuleItem;
  signRule?: FlightOtaSearchResponseBodyModuleFlightListFlightRuleListSignRule;
  /**
   * @example
   * 文案
   */
  tuigaiqianInfo?: string;
  upgradeRule?: FlightOtaSearchResponseBodyModuleFlightListFlightRuleListUpgradeRule;
  static names(): { [key: string]: string } {
    return {
      baggageInfo: 'baggage_info',
      baggageItem: 'baggage_item',
      changeRule: 'change_rule',
      changeRuleItem: 'change_rule_item',
      extra: 'extra',
      refundRule: 'refund_rule',
      refundRuleItem: 'refund_rule_item',
      signRule: 'sign_rule',
      tuigaiqianInfo: 'tuigaiqian_info',
      upgradeRule: 'upgrade_rule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baggageInfo: 'string',
      baggageItem: FlightOtaSearchResponseBodyModuleFlightListFlightRuleListBaggageItem,
      changeRule: FlightOtaSearchResponseBodyModuleFlightListFlightRuleListChangeRule,
      changeRuleItem: FlightOtaSearchResponseBodyModuleFlightListFlightRuleListChangeRuleItem,
      extra: 'string',
      refundRule: FlightOtaSearchResponseBodyModuleFlightListFlightRuleListRefundRule,
      refundRuleItem: FlightOtaSearchResponseBodyModuleFlightListFlightRuleListRefundRuleItem,
      signRule: FlightOtaSearchResponseBodyModuleFlightListFlightRuleListSignRule,
      tuigaiqianInfo: 'string',
      upgradeRule: FlightOtaSearchResponseBodyModuleFlightListFlightRuleListUpgradeRule,
    };
  }

  validate() {
    if(this.baggageItem && typeof (this.baggageItem as any).validate === 'function') {
      (this.baggageItem as any).validate();
    }
    if(this.changeRule && typeof (this.changeRule as any).validate === 'function') {
      (this.changeRule as any).validate();
    }
    if(this.changeRuleItem && typeof (this.changeRuleItem as any).validate === 'function') {
      (this.changeRuleItem as any).validate();
    }
    if(this.refundRule && typeof (this.refundRule as any).validate === 'function') {
      (this.refundRule as any).validate();
    }
    if(this.refundRuleItem && typeof (this.refundRuleItem as any).validate === 'function') {
      (this.refundRuleItem as any).validate();
    }
    if(this.signRule && typeof (this.signRule as any).validate === 'function') {
      (this.signRule as any).validate();
    }
    if(this.upgradeRule && typeof (this.upgradeRule as any).validate === 'function') {
      (this.upgradeRule as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightOtaSearchResponseBodyModuleFlightList extends $dara.Model {
  airlineInfo?: FlightOtaSearchResponseBodyModuleFlightListAirlineInfo;
  arrAirportInfo?: FlightOtaSearchResponseBodyModuleFlightListArrAirportInfo;
  /**
   * @example
   * yyyy-MM-dd HH:mm:ss
   */
  arrDate?: string;
  /**
   * @example
   * 100
   */
  buildPrice?: number;
  /**
   * @example
   * Y
   */
  cabin?: string;
  /**
   * @example
   * 2
   */
  cabinClass?: string;
  cabinInfoList?: FlightOtaSearchResponseBodyModuleFlightListCabinInfoList[];
  /**
   * @example
   * FM
   */
  carrierAirline?: string;
  /**
   * @example
   * FM9152
   */
  carrierNo?: string;
  depAirportInfo?: FlightOtaSearchResponseBodyModuleFlightListDepAirportInfo;
  /**
   * @example
   * BJS
   */
  depCityCode?: string;
  /**
   * @example
   * yyyy-MM-dd HH:mm:ss
   */
  depDate?: string;
  /**
   * @example
   * 1
   */
  discount?: number;
  /**
   * @example
   * CA1234
   */
  flightNo?: string;
  flightRuleList?: FlightOtaSearchResponseBodyModuleFlightListFlightRuleList[];
  /**
   * @example
   * demo
   */
  flightRuleListStr?: string;
  /**
   * @example
   * 中型机
   */
  flightSize?: string;
  /**
   * @example
   * demo
   */
  flightType?: string;
  /**
   * @example
   * 1
   */
  invoiceType?: number;
  /**
   * @example
   * true
   */
  isProtocol?: boolean;
  /**
   * @example
   * false
   */
  isShare?: boolean;
  /**
   * @example
   * false
   */
  isStop?: boolean;
  /**
   * @example
   * false
   */
  isTransfer?: boolean;
  /**
   * @example
   * 无餐食
   */
  mealDesc?: string;
  /**
   * @example
   * 100
   */
  oilPrice?: number;
  /**
   * @example
   * 6669c8e53b684105b8687bad0331988a_41
   */
  otaItemId?: string;
  /**
   * @example
   * 100
   */
  price?: number;
  /**
   * @example
   * 1
   */
  productType?: number;
  /**
   * @example
   * 标准产品
   */
  productTypeDesc?: string;
  /**
   * @example
   * 100
   */
  promotionPrice?: string;
  /**
   * @example
   * 1
   */
  remainedSeatCount?: string;
  /**
   * @example
   * 1000_1_0
   */
  secretParams?: string;
  /**
   * @example
   * 1
   */
  segmentNumber?: string;
  /**
   * @example
   * yyyy-MM-dd HH:mm:ss
   */
  stopArrTime?: string;
  /**
   * @example
   * HGH
   */
  stopCity?: string;
  /**
   * @example
   * yyyy-MM-dd HH:mm:ss
   */
  stopDepTime?: string;
  /**
   * @example
   * 100
   */
  ticketPrice?: number;
  /**
   * @example
   * 100
   */
  totalPrice?: string;
  /**
   * @example
   * 1
   */
  tripType?: number;
  static names(): { [key: string]: string } {
    return {
      airlineInfo: 'airline_info',
      arrAirportInfo: 'arr_airport_info',
      arrDate: 'arr_date',
      buildPrice: 'build_price',
      cabin: 'cabin',
      cabinClass: 'cabin_class',
      cabinInfoList: 'cabin_info_list',
      carrierAirline: 'carrier_airline',
      carrierNo: 'carrier_no',
      depAirportInfo: 'dep_airport_info',
      depCityCode: 'dep_city_code',
      depDate: 'dep_date',
      discount: 'discount',
      flightNo: 'flight_no',
      flightRuleList: 'flight_rule_list',
      flightRuleListStr: 'flight_rule_list_str',
      flightSize: 'flight_size',
      flightType: 'flight_type',
      invoiceType: 'invoice_type',
      isProtocol: 'is_protocol',
      isShare: 'is_share',
      isStop: 'is_stop',
      isTransfer: 'is_transfer',
      mealDesc: 'meal_desc',
      oilPrice: 'oil_price',
      otaItemId: 'ota_item_id',
      price: 'price',
      productType: 'product_type',
      productTypeDesc: 'product_type_desc',
      promotionPrice: 'promotion_price',
      remainedSeatCount: 'remained_seat_count',
      secretParams: 'secret_params',
      segmentNumber: 'segment_number',
      stopArrTime: 'stop_arr_time',
      stopCity: 'stop_city',
      stopDepTime: 'stop_dep_time',
      ticketPrice: 'ticket_price',
      totalPrice: 'total_price',
      tripType: 'trip_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      airlineInfo: FlightOtaSearchResponseBodyModuleFlightListAirlineInfo,
      arrAirportInfo: FlightOtaSearchResponseBodyModuleFlightListArrAirportInfo,
      arrDate: 'string',
      buildPrice: 'number',
      cabin: 'string',
      cabinClass: 'string',
      cabinInfoList: { 'type': 'array', 'itemType': FlightOtaSearchResponseBodyModuleFlightListCabinInfoList },
      carrierAirline: 'string',
      carrierNo: 'string',
      depAirportInfo: FlightOtaSearchResponseBodyModuleFlightListDepAirportInfo,
      depCityCode: 'string',
      depDate: 'string',
      discount: 'number',
      flightNo: 'string',
      flightRuleList: { 'type': 'array', 'itemType': FlightOtaSearchResponseBodyModuleFlightListFlightRuleList },
      flightRuleListStr: 'string',
      flightSize: 'string',
      flightType: 'string',
      invoiceType: 'number',
      isProtocol: 'boolean',
      isShare: 'boolean',
      isStop: 'boolean',
      isTransfer: 'boolean',
      mealDesc: 'string',
      oilPrice: 'number',
      otaItemId: 'string',
      price: 'number',
      productType: 'number',
      productTypeDesc: 'string',
      promotionPrice: 'string',
      remainedSeatCount: 'string',
      secretParams: 'string',
      segmentNumber: 'string',
      stopArrTime: 'string',
      stopCity: 'string',
      stopDepTime: 'string',
      ticketPrice: 'number',
      totalPrice: 'string',
      tripType: 'number',
    };
  }

  validate() {
    if(this.airlineInfo && typeof (this.airlineInfo as any).validate === 'function') {
      (this.airlineInfo as any).validate();
    }
    if(this.arrAirportInfo && typeof (this.arrAirportInfo as any).validate === 'function') {
      (this.arrAirportInfo as any).validate();
    }
    if(Array.isArray(this.cabinInfoList)) {
      $dara.Model.validateArray(this.cabinInfoList);
    }
    if(this.depAirportInfo && typeof (this.depAirportInfo as any).validate === 'function') {
      (this.depAirportInfo as any).validate();
    }
    if(Array.isArray(this.flightRuleList)) {
      $dara.Model.validateArray(this.flightRuleList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightOtaSearchResponseBodyModule extends $dara.Model {
  flightList?: FlightOtaSearchResponseBodyModuleFlightList[];
  static names(): { [key: string]: string } {
    return {
      flightList: 'flight_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flightList: { 'type': 'array', 'itemType': FlightOtaSearchResponseBodyModuleFlightList },
    };
  }

  validate() {
    if(Array.isArray(this.flightList)) {
      $dara.Model.validateArray(this.flightList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightOtaSearchResponseBody extends $dara.Model {
  /**
   * @example
   * 0
   */
  code?: string;
  /**
   * @example
   * 成功
   */
  message?: string;
  module?: FlightOtaSearchResponseBodyModule;
  /**
   * @example
   * 407543AF-2BD9-5890-BD92-9D1AB7218B27
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 21041ce316577904808056433edbb2
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
      module: FlightOtaSearchResponseBodyModule,
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

