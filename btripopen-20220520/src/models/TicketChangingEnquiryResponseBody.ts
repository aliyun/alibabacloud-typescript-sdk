// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TicketChangingEnquiryResponseBodyModuleFlightInfoListAirlineInfo extends $dara.Model {
  /**
   * @example
   * CA
   */
  airlineCode?: string;
  /**
   * @example
   * 无
   */
  airlineName?: string;
  /**
   * @example
   * 无
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

export class TicketChangingEnquiryResponseBodyModuleFlightInfoListArrAirportInfo extends $dara.Model {
  /**
   * @example
   * HGH
   */
  airportCode?: string;
  /**
   * @example
   * 萧山
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
   * T4
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

export class TicketChangingEnquiryResponseBodyModuleFlightInfoListCabinListChangeOtaItemRuleRqBaggageDetailsBaggageSubItemsBaggageSubContentVisualizesDescription extends $dara.Model {
  /**
   * @example
   * 您可以随身携带上飞机客舱内的行李物品，由旅客自行负责保管。具体尺寸、重量、类型等以各航空公司规定为准
   */
  desc?: string;
  /**
   * @example
   * demo
   */
  icon?: string;
  /**
   * @example
   * demo
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

export class TicketChangingEnquiryResponseBodyModuleFlightInfoListCabinListChangeOtaItemRuleRqBaggageDetailsBaggageSubItemsBaggageSubContentVisualizesImageDO extends $dara.Model {
  /**
   * @example
   * https://gw.alicdn.com/imgextra/i3/O1CN01kLt3m923XsUs6WVif_!!6000000007266-2-tps-280-300.png
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

export class TicketChangingEnquiryResponseBodyModuleFlightInfoListCabinListChangeOtaItemRuleRqBaggageDetailsBaggageSubItemsBaggageSubContentVisualizes extends $dara.Model {
  baggageDesc?: string[];
  /**
   * @example
   * 1
   */
  baggageSubContentType?: number;
  description?: TicketChangingEnquiryResponseBodyModuleFlightInfoListCabinListChangeOtaItemRuleRqBaggageDetailsBaggageSubItemsBaggageSubContentVisualizesDescription;
  imageDO?: TicketChangingEnquiryResponseBodyModuleFlightInfoListCabinListChangeOtaItemRuleRqBaggageDetailsBaggageSubItemsBaggageSubContentVisualizesImageDO;
  /**
   * @example
   * true
   */
  isHighlight?: boolean;
  /**
   * @example
   * 儿童 免费手提行李
   */
  subTitle?: string;
  static names(): { [key: string]: string } {
    return {
      baggageDesc: 'baggage_desc',
      baggageSubContentType: 'baggage_sub_content_type',
      description: 'description',
      imageDO: 'imageDO',
      isHighlight: 'is_highlight',
      subTitle: 'subTitle',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baggageDesc: { 'type': 'array', 'itemType': 'string' },
      baggageSubContentType: 'number',
      description: TicketChangingEnquiryResponseBodyModuleFlightInfoListCabinListChangeOtaItemRuleRqBaggageDetailsBaggageSubItemsBaggageSubContentVisualizesDescription,
      imageDO: TicketChangingEnquiryResponseBodyModuleFlightInfoListCabinListChangeOtaItemRuleRqBaggageDetailsBaggageSubItemsBaggageSubContentVisualizesImageDO,
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

export class TicketChangingEnquiryResponseBodyModuleFlightInfoListCabinListChangeOtaItemRuleRqBaggageDetailsBaggageSubItemsBaggageSubContents extends $dara.Model {
  /**
   * @example
   * 每人2件，每件20公斤，体积不可超过20*30*40厘米
   */
  baggageDesc?: string;
  /**
   * @example
   * 链接
   */
  icon?: string;
  /**
   * @example
   * 0
   */
  style?: number;
  /**
   * @example
   * 托运/手提
   */
  subTitle?: string;
  static names(): { [key: string]: string } {
    return {
      baggageDesc: 'baggage_desc',
      icon: 'icon',
      style: 'style',
      subTitle: 'sub_title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baggageDesc: 'string',
      icon: 'string',
      style: 'number',
      subTitle: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TicketChangingEnquiryResponseBodyModuleFlightInfoListCabinListChangeOtaItemRuleRqBaggageDetailsBaggageSubItems extends $dara.Model {
  /**
   * @remarks
   * attributes
   */
  attributes?: { [key: string]: any };
  baggageSubContentVisualizes?: TicketChangingEnquiryResponseBodyModuleFlightInfoListCabinListChangeOtaItemRuleRqBaggageDetailsBaggageSubItemsBaggageSubContentVisualizes[];
  baggageSubContents?: TicketChangingEnquiryResponseBodyModuleFlightInfoListCabinListChangeOtaItemRuleRqBaggageDetailsBaggageSubItemsBaggageSubContents[];
  /**
   * @example
   * demo
   */
  content?: string;
  /**
   * @example
   * true
   */
  isStruct?: boolean;
  /**
   * @example
   * ADT
   */
  ptc?: string;
  /**
   * @example
   * 成人/儿童/备注/说明
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      attributes: 'attributes',
      baggageSubContentVisualizes: 'baggage_sub_content_visualizes',
      baggageSubContents: 'baggage_sub_contents',
      content: 'content',
      isStruct: 'is_struct',
      ptc: 'ptc',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributes: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      baggageSubContentVisualizes: { 'type': 'array', 'itemType': TicketChangingEnquiryResponseBodyModuleFlightInfoListCabinListChangeOtaItemRuleRqBaggageDetailsBaggageSubItemsBaggageSubContentVisualizes },
      baggageSubContents: { 'type': 'array', 'itemType': TicketChangingEnquiryResponseBodyModuleFlightInfoListCabinListChangeOtaItemRuleRqBaggageDetailsBaggageSubItemsBaggageSubContents },
      content: 'string',
      isStruct: 'boolean',
      ptc: 'string',
      title: 'string',
    };
  }

  validate() {
    if(this.attributes) {
      $dara.Model.validateMap(this.attributes);
    }
    if(Array.isArray(this.baggageSubContentVisualizes)) {
      $dara.Model.validateArray(this.baggageSubContentVisualizes);
    }
    if(Array.isArray(this.baggageSubContents)) {
      $dara.Model.validateArray(this.baggageSubContents);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TicketChangingEnquiryResponseBodyModuleFlightInfoListCabinListChangeOtaItemRuleRqBaggageDetailsTips extends $dara.Model {
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

export class TicketChangingEnquiryResponseBodyModuleFlightInfoListCabinListChangeOtaItemRuleRqBaggageDetails extends $dara.Model {
  baggageSubItems?: TicketChangingEnquiryResponseBodyModuleFlightInfoListCabinListChangeOtaItemRuleRqBaggageDetailsBaggageSubItems[];
  /**
   * @example
   * 0
   */
  index?: number;
  /**
   * @example
   * 去程 北京-上海
   */
  tableHead?: string;
  tips?: TicketChangingEnquiryResponseBodyModuleFlightInfoListCabinListChangeOtaItemRuleRqBaggageDetailsTips;
  /**
   * @example
   * 退票规则/同舱改期规则/行李规则
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
      baggageSubItems: { 'type': 'array', 'itemType': TicketChangingEnquiryResponseBodyModuleFlightInfoListCabinListChangeOtaItemRuleRqBaggageDetailsBaggageSubItems },
      index: 'number',
      tableHead: 'string',
      tips: TicketChangingEnquiryResponseBodyModuleFlightInfoListCabinListChangeOtaItemRuleRqBaggageDetailsTips,
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

export class TicketChangingEnquiryResponseBodyModuleFlightInfoListCabinListChangeOtaItemRuleRqChangeDetailsExtraContents extends $dara.Model {
  /**
   * @example
   * xxx
   */
  content?: string;
  /**
   * @example
   * 链接
   */
  icon?: string;
  /**
   * @example
   * 特殊说明/转签说明
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      icon: 'icon',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      icon: 'string',
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

export class TicketChangingEnquiryResponseBodyModuleFlightInfoListCabinListChangeOtaItemRuleRqChangeDetailsRefundSubItemsRefundSubContents extends $dara.Model {
  /**
   * @example
   * 256元/人
   */
  feeDesc?: string;
  /**
   * @example
   * 2020-06-02 20:20 前/起飞前/起飞后
   */
  feeRange?: string;
  /**
   * @example
   * 0
   */
  style?: string;
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
      style: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TicketChangingEnquiryResponseBodyModuleFlightInfoListCabinListChangeOtaItemRuleRqChangeDetailsRefundSubItems extends $dara.Model {
  /**
   * @example
   * demo
   */
  content?: string;
  /**
   * @example
   * true
   */
  isStruct?: boolean;
  /**
   * @example
   * ADT
   */
  ptc?: string;
  refundSubContents?: TicketChangingEnquiryResponseBodyModuleFlightInfoListCabinListChangeOtaItemRuleRqChangeDetailsRefundSubItemsRefundSubContents[];
  /**
   * @example
   * 成人
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      isStruct: 'is_struct',
      ptc: 'ptc',
      refundSubContents: 'refund_sub_contents',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      isStruct: 'boolean',
      ptc: 'string',
      refundSubContents: { 'type': 'array', 'itemType': TicketChangingEnquiryResponseBodyModuleFlightInfoListCabinListChangeOtaItemRuleRqChangeDetailsRefundSubItemsRefundSubContents },
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

export class TicketChangingEnquiryResponseBodyModuleFlightInfoListCabinListChangeOtaItemRuleRqChangeDetails extends $dara.Model {
  extraContents?: TicketChangingEnquiryResponseBodyModuleFlightInfoListCabinListChangeOtaItemRuleRqChangeDetailsExtraContents[];
  /**
   * @example
   * 0
   */
  index?: number;
  refundSubItems?: TicketChangingEnquiryResponseBodyModuleFlightInfoListCabinListChangeOtaItemRuleRqChangeDetailsRefundSubItems[];
  /**
   * @example
   * 去程 北京-上海
   */
  tableHead?: string;
  /**
   * @example
   * 退票规则/同舱改期规则/行李规则"
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
      tableHead: 'table_head',
      title: 'title',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extraContents: { 'type': 'array', 'itemType': TicketChangingEnquiryResponseBodyModuleFlightInfoListCabinListChangeOtaItemRuleRqChangeDetailsExtraContents },
      index: 'number',
      refundSubItems: { 'type': 'array', 'itemType': TicketChangingEnquiryResponseBodyModuleFlightInfoListCabinListChangeOtaItemRuleRqChangeDetailsRefundSubItems },
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TicketChangingEnquiryResponseBodyModuleFlightInfoListCabinListChangeOtaItemRuleRqRefundDetailsExtraContents extends $dara.Model {
  /**
   * @example
   * xxx
   */
  content?: string;
  /**
   * @example
   * 链接
   */
  icon?: string;
  /**
   * @example
   * 特殊说明/转签说明
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      icon: 'icon',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      icon: 'string',
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

export class TicketChangingEnquiryResponseBodyModuleFlightInfoListCabinListChangeOtaItemRuleRqRefundDetailsRefundSubItemsRefundSubContents extends $dara.Model {
  /**
   * @example
   * 256元/人
   */
  feeDesc?: string;
  /**
   * @example
   * 2020-06-02 20:20 前/起飞前/起飞后
   */
  feeRange?: string;
  /**
   * @example
   * 0
   */
  style?: string;
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
      style: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TicketChangingEnquiryResponseBodyModuleFlightInfoListCabinListChangeOtaItemRuleRqRefundDetailsRefundSubItems extends $dara.Model {
  /**
   * @example
   * demo
   */
  content?: string;
  /**
   * @example
   * true
   */
  isStruct?: boolean;
  /**
   * @example
   * ADT
   */
  ptc?: string;
  refundSubContents?: TicketChangingEnquiryResponseBodyModuleFlightInfoListCabinListChangeOtaItemRuleRqRefundDetailsRefundSubItemsRefundSubContents[];
  /**
   * @example
   * 成人
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      isStruct: 'is_struct',
      ptc: 'ptc',
      refundSubContents: 'refund_sub_contents',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      isStruct: 'boolean',
      ptc: 'string',
      refundSubContents: { 'type': 'array', 'itemType': TicketChangingEnquiryResponseBodyModuleFlightInfoListCabinListChangeOtaItemRuleRqRefundDetailsRefundSubItemsRefundSubContents },
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

export class TicketChangingEnquiryResponseBodyModuleFlightInfoListCabinListChangeOtaItemRuleRqRefundDetails extends $dara.Model {
  extraContents?: TicketChangingEnquiryResponseBodyModuleFlightInfoListCabinListChangeOtaItemRuleRqRefundDetailsExtraContents[];
  /**
   * @example
   * 0
   */
  index?: number;
  refundSubItems?: TicketChangingEnquiryResponseBodyModuleFlightInfoListCabinListChangeOtaItemRuleRqRefundDetailsRefundSubItems[];
  /**
   * @example
   * 去程 北京-上海
   */
  tableHead?: string;
  /**
   * @example
   * 退票规则/同舱改期规则/行李规则"
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
      tableHead: 'table_head',
      title: 'title',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extraContents: { 'type': 'array', 'itemType': TicketChangingEnquiryResponseBodyModuleFlightInfoListCabinListChangeOtaItemRuleRqRefundDetailsExtraContents },
      index: 'number',
      refundSubItems: { 'type': 'array', 'itemType': TicketChangingEnquiryResponseBodyModuleFlightInfoListCabinListChangeOtaItemRuleRqRefundDetailsRefundSubItems },
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TicketChangingEnquiryResponseBodyModuleFlightInfoListCabinListChangeOtaItemRuleRq extends $dara.Model {
  baggageDetails?: TicketChangingEnquiryResponseBodyModuleFlightInfoListCabinListChangeOtaItemRuleRqBaggageDetails[];
  changeDetails?: TicketChangingEnquiryResponseBodyModuleFlightInfoListCabinListChangeOtaItemRuleRqChangeDetails[];
  refundDetails?: TicketChangingEnquiryResponseBodyModuleFlightInfoListCabinListChangeOtaItemRuleRqRefundDetails[];
  static names(): { [key: string]: string } {
    return {
      baggageDetails: 'baggage_details',
      changeDetails: 'change_details',
      refundDetails: 'refund_details',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baggageDetails: { 'type': 'array', 'itemType': TicketChangingEnquiryResponseBodyModuleFlightInfoListCabinListChangeOtaItemRuleRqBaggageDetails },
      changeDetails: { 'type': 'array', 'itemType': TicketChangingEnquiryResponseBodyModuleFlightInfoListCabinListChangeOtaItemRuleRqChangeDetails },
      refundDetails: { 'type': 'array', 'itemType': TicketChangingEnquiryResponseBodyModuleFlightInfoListCabinListChangeOtaItemRuleRqRefundDetails },
    };
  }

  validate() {
    if(Array.isArray(this.baggageDetails)) {
      $dara.Model.validateArray(this.baggageDetails);
    }
    if(Array.isArray(this.changeDetails)) {
      $dara.Model.validateArray(this.changeDetails);
    }
    if(Array.isArray(this.refundDetails)) {
      $dara.Model.validateArray(this.refundDetails);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TicketChangingEnquiryResponseBodyModuleFlightInfoListCabinListModifyPriceList extends $dara.Model {
  /**
   * @example
   * 0
   */
  passengerType?: number;
  /**
   * @example
   * 100
   */
  ticketPrice?: number;
  /**
   * @example
   * 100
   */
  upgradeFee?: number;
  /**
   * @example
   * 100
   */
  upgradePrice?: number;
  static names(): { [key: string]: string } {
    return {
      passengerType: 'passenger_type',
      ticketPrice: 'ticket_price',
      upgradeFee: 'upgrade_fee',
      upgradePrice: 'upgrade_price',
    };
  }

  static types(): { [key: string]: any } {
    return {
      passengerType: 'number',
      ticketPrice: 'number',
      upgradeFee: 'number',
      upgradePrice: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TicketChangingEnquiryResponseBodyModuleFlightInfoListCabinList extends $dara.Model {
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
   * 超级经济舱
   */
  cabinDesc?: string;
  /**
   * @example
   * 80
   */
  cabinDiscount?: number;
  changeOtaItemRuleRq?: TicketChangingEnquiryResponseBodyModuleFlightInfoListCabinListChangeOtaItemRuleRq;
  /**
   * @example
   * G
   */
  childCabin?: string;
  /**
   * @example
   * 0
   */
  leftNum?: string;
  modifyPriceList?: TicketChangingEnquiryResponseBodyModuleFlightInfoListCabinListModifyPriceList[];
  /**
   * @example
   * 360379a11ee84e9aa011baa41b758fe6
   */
  otaItemid?: string;
  static names(): { [key: string]: string } {
    return {
      cabin: 'cabin',
      cabinClass: 'cabin_class',
      cabinDesc: 'cabin_desc',
      cabinDiscount: 'cabin_discount',
      changeOtaItemRuleRq: 'change_ota_item_rule_rq',
      childCabin: 'child_cabin',
      leftNum: 'left_num',
      modifyPriceList: 'modify_price_list',
      otaItemid: 'ota_itemid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cabin: 'string',
      cabinClass: 'string',
      cabinDesc: 'string',
      cabinDiscount: 'number',
      changeOtaItemRuleRq: TicketChangingEnquiryResponseBodyModuleFlightInfoListCabinListChangeOtaItemRuleRq,
      childCabin: 'string',
      leftNum: 'string',
      modifyPriceList: { 'type': 'array', 'itemType': TicketChangingEnquiryResponseBodyModuleFlightInfoListCabinListModifyPriceList },
      otaItemid: 'string',
    };
  }

  validate() {
    if(this.changeOtaItemRuleRq && typeof (this.changeOtaItemRuleRq as any).validate === 'function') {
      (this.changeOtaItemRuleRq as any).validate();
    }
    if(Array.isArray(this.modifyPriceList)) {
      $dara.Model.validateArray(this.modifyPriceList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TicketChangingEnquiryResponseBodyModuleFlightInfoListDepAirportInfo extends $dara.Model {
  /**
   * @example
   * PEK
   */
  airportCode?: string;
  /**
   * @example
   * 首都
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

export class TicketChangingEnquiryResponseBodyModuleFlightInfoListLowestCabinPrice extends $dara.Model {
  /**
   * @example
   * 0
   */
  passengerType?: number;
  /**
   * @example
   * 100
   */
  ticketPrice?: number;
  /**
   * @example
   * 100
   */
  upgradeFee?: number;
  /**
   * @example
   * 100
   */
  upgradePrice?: number;
  static names(): { [key: string]: string } {
    return {
      passengerType: 'passenger_type',
      ticketPrice: 'ticket_price',
      upgradeFee: 'upgrade_fee',
      upgradePrice: 'upgrade_price',
    };
  }

  static types(): { [key: string]: any } {
    return {
      passengerType: 'number',
      ticketPrice: 'number',
      upgradeFee: 'number',
      upgradePrice: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TicketChangingEnquiryResponseBodyModuleFlightInfoList extends $dara.Model {
  airlineInfo?: TicketChangingEnquiryResponseBodyModuleFlightInfoListAirlineInfo;
  arrAirportInfo?: TicketChangingEnquiryResponseBodyModuleFlightInfoListArrAirportInfo;
  cabinList?: TicketChangingEnquiryResponseBodyModuleFlightInfoListCabinList[];
  /**
   * @example
   * CA1704
   */
  carrierAirline?: string;
  /**
   * @example
   * CA1704
   */
  carrierNo?: string;
  depAirportInfo?: TicketChangingEnquiryResponseBodyModuleFlightInfoListDepAirportInfo;
  /**
   * @example
   * HGH
   */
  depCityCode?: string;
  /**
   * @example
   * CA1351
   */
  flightNo?: string;
  /**
   * @example
   * false
   */
  isShare?: boolean;
  /**
   * @example
   * Y
   */
  lowestCabin?: string;
  /**
   * @example
   * Y
   */
  lowestCabinClass?: string;
  /**
   * @example
   * 经济舱
   */
  lowestCabinDesc?: string;
  /**
   * @example
   * 0
   */
  lowestCabinNum?: string;
  lowestCabinPrice?: TicketChangingEnquiryResponseBodyModuleFlightInfoListLowestCabinPrice[];
  /**
   * @example
   * 2000-00-00 00:00:00
   */
  modifyFlightArrTime?: string;
  /**
   * @example
   * 2000-00-00 00:00:00
   */
  modifyFlightDepDate?: string;
  /**
   * @example
   * 2000-00-00 00:00:00
   */
  modifyFlightDepTime?: string;
  /**
   * @example
   * d1fb9e0a794f45e1b762d36ff1d17zz
   */
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      airlineInfo: 'airline_info',
      arrAirportInfo: 'arr_airport_info',
      cabinList: 'cabin_list',
      carrierAirline: 'carrier_airline',
      carrierNo: 'carrier_no',
      depAirportInfo: 'dep_airport_info',
      depCityCode: 'dep_city_code',
      flightNo: 'flight_no',
      isShare: 'is_share',
      lowestCabin: 'lowest_cabin',
      lowestCabinClass: 'lowest_cabin_class',
      lowestCabinDesc: 'lowest_cabin_desc',
      lowestCabinNum: 'lowest_cabin_num',
      lowestCabinPrice: 'lowest_cabin_price',
      modifyFlightArrTime: 'modify_flight_arr_time',
      modifyFlightDepDate: 'modify_flight_dep_date',
      modifyFlightDepTime: 'modify_flight_dep_time',
      sessionId: 'session_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      airlineInfo: TicketChangingEnquiryResponseBodyModuleFlightInfoListAirlineInfo,
      arrAirportInfo: TicketChangingEnquiryResponseBodyModuleFlightInfoListArrAirportInfo,
      cabinList: { 'type': 'array', 'itemType': TicketChangingEnquiryResponseBodyModuleFlightInfoListCabinList },
      carrierAirline: 'string',
      carrierNo: 'string',
      depAirportInfo: TicketChangingEnquiryResponseBodyModuleFlightInfoListDepAirportInfo,
      depCityCode: 'string',
      flightNo: 'string',
      isShare: 'boolean',
      lowestCabin: 'string',
      lowestCabinClass: 'string',
      lowestCabinDesc: 'string',
      lowestCabinNum: 'string',
      lowestCabinPrice: { 'type': 'array', 'itemType': TicketChangingEnquiryResponseBodyModuleFlightInfoListLowestCabinPrice },
      modifyFlightArrTime: 'string',
      modifyFlightDepDate: 'string',
      modifyFlightDepTime: 'string',
      sessionId: 'string',
    };
  }

  validate() {
    if(this.airlineInfo && typeof (this.airlineInfo as any).validate === 'function') {
      (this.airlineInfo as any).validate();
    }
    if(this.arrAirportInfo && typeof (this.arrAirportInfo as any).validate === 'function') {
      (this.arrAirportInfo as any).validate();
    }
    if(Array.isArray(this.cabinList)) {
      $dara.Model.validateArray(this.cabinList);
    }
    if(this.depAirportInfo && typeof (this.depAirportInfo as any).validate === 'function') {
      (this.depAirportInfo as any).validate();
    }
    if(Array.isArray(this.lowestCabinPrice)) {
      $dara.Model.validateArray(this.lowestCabinPrice);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TicketChangingEnquiryResponseBodyModule extends $dara.Model {
  flightInfoList?: TicketChangingEnquiryResponseBodyModuleFlightInfoList[];
  static names(): { [key: string]: string } {
    return {
      flightInfoList: 'flight_info_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flightInfoList: { 'type': 'array', 'itemType': TicketChangingEnquiryResponseBodyModuleFlightInfoList },
    };
  }

  validate() {
    if(Array.isArray(this.flightInfoList)) {
      $dara.Model.validateArray(this.flightInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TicketChangingEnquiryResponseBody extends $dara.Model {
  /**
   * @example
   * SUCCESS
   */
  code?: string;
  /**
   * @example
   * 成功
   */
  message?: string;
  module?: TicketChangingEnquiryResponseBodyModule;
  /**
   * @example
   * B72B39C8-32DE-558D-AD1C-D53F11F6ADFE
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
      module: TicketChangingEnquiryResponseBodyModule,
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

