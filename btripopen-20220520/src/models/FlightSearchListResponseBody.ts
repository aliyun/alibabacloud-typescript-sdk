// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FlightSearchListResponseBodyModuleFlightListAirlineInfo extends $dara.Model {
  airlineCode?: string;
  airlineName?: string;
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

export class FlightSearchListResponseBodyModuleFlightListArrAirportInfo extends $dara.Model {
  airportCode?: string;
  airportName?: string;
  cityCode?: string;
  cityName?: string;
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

export class FlightSearchListResponseBodyModuleFlightListCabinInfoListFlightRuleListBaggageItemBaggageSubItemsBaggageSubContentVisualizesDescription extends $dara.Model {
  desc?: string;
  icon?: string;
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

export class FlightSearchListResponseBodyModuleFlightListCabinInfoListFlightRuleListBaggageItemBaggageSubItemsBaggageSubContentVisualizesImageDO extends $dara.Model {
  image?: string;
  largest?: string;
  middle?: string;
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

export class FlightSearchListResponseBodyModuleFlightListCabinInfoListFlightRuleListBaggageItemBaggageSubItemsBaggageSubContentVisualizes extends $dara.Model {
  baggageDesc?: string[];
  baggageSubContentType?: number;
  description?: FlightSearchListResponseBodyModuleFlightListCabinInfoListFlightRuleListBaggageItemBaggageSubItemsBaggageSubContentVisualizesDescription;
  imageDO?: FlightSearchListResponseBodyModuleFlightListCabinInfoListFlightRuleListBaggageItemBaggageSubItemsBaggageSubContentVisualizesImageDO;
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
      description: FlightSearchListResponseBodyModuleFlightListCabinInfoListFlightRuleListBaggageItemBaggageSubItemsBaggageSubContentVisualizesDescription,
      imageDO: FlightSearchListResponseBodyModuleFlightListCabinInfoListFlightRuleListBaggageItemBaggageSubItemsBaggageSubContentVisualizesImageDO,
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

export class FlightSearchListResponseBodyModuleFlightListCabinInfoListFlightRuleListBaggageItemBaggageSubItems extends $dara.Model {
  baggageSubContentVisualizes?: FlightSearchListResponseBodyModuleFlightListCabinInfoListFlightRuleListBaggageItemBaggageSubItemsBaggageSubContentVisualizes[];
  extraContentVisualizes?: any[];
  isStruct?: boolean;
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
      baggageSubContentVisualizes: { 'type': 'array', 'itemType': FlightSearchListResponseBodyModuleFlightListCabinInfoListFlightRuleListBaggageItemBaggageSubItemsBaggageSubContentVisualizes },
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

export class FlightSearchListResponseBodyModuleFlightListCabinInfoListFlightRuleListBaggageItemTips extends $dara.Model {
  logo?: string;
  tipsDesc?: string;
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

export class FlightSearchListResponseBodyModuleFlightListCabinInfoListFlightRuleListBaggageItem extends $dara.Model {
  baggageSubItems?: FlightSearchListResponseBodyModuleFlightListCabinInfoListFlightRuleListBaggageItemBaggageSubItems[];
  index?: number;
  tableHead?: string;
  tips?: FlightSearchListResponseBodyModuleFlightListCabinInfoListFlightRuleListBaggageItemTips;
  title?: string;
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
      baggageSubItems: { 'type': 'array', 'itemType': FlightSearchListResponseBodyModuleFlightListCabinInfoListFlightRuleListBaggageItemBaggageSubItems },
      index: 'number',
      tableHead: 'string',
      tips: FlightSearchListResponseBodyModuleFlightListCabinInfoListFlightRuleListBaggageItemTips,
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

export class FlightSearchListResponseBodyModuleFlightListCabinInfoListFlightRuleListChangeRuleInfo extends $dara.Model {
  content?: string;
  cost?: number;
  costPercent?: number;
  timeStamp?: number;
  timeType?: string;
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

export class FlightSearchListResponseBodyModuleFlightListCabinInfoListFlightRuleListChangeRule extends $dara.Model {
  able?: boolean;
  info?: FlightSearchListResponseBodyModuleFlightListCabinInfoListFlightRuleListChangeRuleInfo[];
  static names(): { [key: string]: string } {
    return {
      able: 'able',
      info: 'info',
    };
  }

  static types(): { [key: string]: any } {
    return {
      able: 'boolean',
      info: { 'type': 'array', 'itemType': FlightSearchListResponseBodyModuleFlightListCabinInfoListFlightRuleListChangeRuleInfo },
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

export class FlightSearchListResponseBodyModuleFlightListCabinInfoListFlightRuleListChangeRuleItemExtraContents extends $dara.Model {
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

export class FlightSearchListResponseBodyModuleFlightListCabinInfoListFlightRuleListChangeRuleItemRefundSubItemsRefundSubContents extends $dara.Model {
  feeDesc?: string;
  feeRange?: string;
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

export class FlightSearchListResponseBodyModuleFlightListCabinInfoListFlightRuleListChangeRuleItemRefundSubItems extends $dara.Model {
  isStruct?: boolean;
  ptc?: string;
  refundSubContents?: FlightSearchListResponseBodyModuleFlightListCabinInfoListFlightRuleListChangeRuleItemRefundSubItemsRefundSubContents[];
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
      refundSubContents: { 'type': 'array', 'itemType': FlightSearchListResponseBodyModuleFlightListCabinInfoListFlightRuleListChangeRuleItemRefundSubItemsRefundSubContents },
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

export class FlightSearchListResponseBodyModuleFlightListCabinInfoListFlightRuleListChangeRuleItem extends $dara.Model {
  extraContents?: FlightSearchListResponseBodyModuleFlightListCabinInfoListFlightRuleListChangeRuleItemExtraContents[];
  index?: number;
  refundSubItems?: FlightSearchListResponseBodyModuleFlightListCabinInfoListFlightRuleListChangeRuleItemRefundSubItems[];
  subTableHead?: string[];
  tableHead?: string;
  title?: string;
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
      extraContents: { 'type': 'array', 'itemType': FlightSearchListResponseBodyModuleFlightListCabinInfoListFlightRuleListChangeRuleItemExtraContents },
      index: 'number',
      refundSubItems: { 'type': 'array', 'itemType': FlightSearchListResponseBodyModuleFlightListCabinInfoListFlightRuleListChangeRuleItemRefundSubItems },
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

export class FlightSearchListResponseBodyModuleFlightListCabinInfoListFlightRuleListRefundRuleInfo extends $dara.Model {
  content?: string;
  cost?: number;
  costPercent?: number;
  timeStamp?: number;
  timeType?: string;
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

export class FlightSearchListResponseBodyModuleFlightListCabinInfoListFlightRuleListRefundRule extends $dara.Model {
  able?: boolean;
  info?: FlightSearchListResponseBodyModuleFlightListCabinInfoListFlightRuleListRefundRuleInfo[];
  static names(): { [key: string]: string } {
    return {
      able: 'able',
      info: 'info',
    };
  }

  static types(): { [key: string]: any } {
    return {
      able: 'boolean',
      info: { 'type': 'array', 'itemType': FlightSearchListResponseBodyModuleFlightListCabinInfoListFlightRuleListRefundRuleInfo },
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

export class FlightSearchListResponseBodyModuleFlightListCabinInfoListFlightRuleListRefundRuleItemExtraContents extends $dara.Model {
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

export class FlightSearchListResponseBodyModuleFlightListCabinInfoListFlightRuleListRefundRuleItemRefundSubItemsRefundSubContents extends $dara.Model {
  feeDesc?: string;
  feeRange?: string;
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

export class FlightSearchListResponseBodyModuleFlightListCabinInfoListFlightRuleListRefundRuleItemRefundSubItems extends $dara.Model {
  isStruct?: boolean;
  ptc?: string;
  refundSubContents?: FlightSearchListResponseBodyModuleFlightListCabinInfoListFlightRuleListRefundRuleItemRefundSubItemsRefundSubContents[];
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
      refundSubContents: { 'type': 'array', 'itemType': FlightSearchListResponseBodyModuleFlightListCabinInfoListFlightRuleListRefundRuleItemRefundSubItemsRefundSubContents },
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

export class FlightSearchListResponseBodyModuleFlightListCabinInfoListFlightRuleListRefundRuleItem extends $dara.Model {
  extraContents?: FlightSearchListResponseBodyModuleFlightListCabinInfoListFlightRuleListRefundRuleItemExtraContents[];
  index?: number;
  refundSubItems?: FlightSearchListResponseBodyModuleFlightListCabinInfoListFlightRuleListRefundRuleItemRefundSubItems[];
  subTableHead?: string[];
  tableHead?: string;
  title?: string;
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
      extraContents: { 'type': 'array', 'itemType': FlightSearchListResponseBodyModuleFlightListCabinInfoListFlightRuleListRefundRuleItemExtraContents },
      index: 'number',
      refundSubItems: { 'type': 'array', 'itemType': FlightSearchListResponseBodyModuleFlightListCabinInfoListFlightRuleListRefundRuleItemRefundSubItems },
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

export class FlightSearchListResponseBodyModuleFlightListCabinInfoListFlightRuleListSignRuleInfo extends $dara.Model {
  content?: string;
  cost?: number;
  costPercent?: number;
  timeStamp?: number;
  timeType?: string;
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

export class FlightSearchListResponseBodyModuleFlightListCabinInfoListFlightRuleListSignRule extends $dara.Model {
  able?: boolean;
  info?: FlightSearchListResponseBodyModuleFlightListCabinInfoListFlightRuleListSignRuleInfo[];
  static names(): { [key: string]: string } {
    return {
      able: 'able',
      info: 'info',
    };
  }

  static types(): { [key: string]: any } {
    return {
      able: 'boolean',
      info: { 'type': 'array', 'itemType': FlightSearchListResponseBodyModuleFlightListCabinInfoListFlightRuleListSignRuleInfo },
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

export class FlightSearchListResponseBodyModuleFlightListCabinInfoListFlightRuleListUpgradeRuleInfo extends $dara.Model {
  content?: string;
  cost?: number;
  costPercent?: number;
  timeStamp?: number;
  timeType?: string;
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

export class FlightSearchListResponseBodyModuleFlightListCabinInfoListFlightRuleListUpgradeRule extends $dara.Model {
  able?: boolean;
  info?: FlightSearchListResponseBodyModuleFlightListCabinInfoListFlightRuleListUpgradeRuleInfo[];
  static names(): { [key: string]: string } {
    return {
      able: 'able',
      info: 'info',
    };
  }

  static types(): { [key: string]: any } {
    return {
      able: 'boolean',
      info: { 'type': 'array', 'itemType': FlightSearchListResponseBodyModuleFlightListCabinInfoListFlightRuleListUpgradeRuleInfo },
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

export class FlightSearchListResponseBodyModuleFlightListCabinInfoListFlightRuleList extends $dara.Model {
  baggageInfo?: string;
  baggageItem?: FlightSearchListResponseBodyModuleFlightListCabinInfoListFlightRuleListBaggageItem;
  changeRule?: FlightSearchListResponseBodyModuleFlightListCabinInfoListFlightRuleListChangeRule;
  changeRuleItem?: FlightSearchListResponseBodyModuleFlightListCabinInfoListFlightRuleListChangeRuleItem;
  extra?: string;
  refundRule?: FlightSearchListResponseBodyModuleFlightListCabinInfoListFlightRuleListRefundRule;
  refundRuleItem?: FlightSearchListResponseBodyModuleFlightListCabinInfoListFlightRuleListRefundRuleItem;
  signRule?: FlightSearchListResponseBodyModuleFlightListCabinInfoListFlightRuleListSignRule;
  tuigaiqianInfo?: string;
  upgradeRule?: FlightSearchListResponseBodyModuleFlightListCabinInfoListFlightRuleListUpgradeRule;
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
      baggageItem: FlightSearchListResponseBodyModuleFlightListCabinInfoListFlightRuleListBaggageItem,
      changeRule: FlightSearchListResponseBodyModuleFlightListCabinInfoListFlightRuleListChangeRule,
      changeRuleItem: FlightSearchListResponseBodyModuleFlightListCabinInfoListFlightRuleListChangeRuleItem,
      extra: 'string',
      refundRule: FlightSearchListResponseBodyModuleFlightListCabinInfoListFlightRuleListRefundRule,
      refundRuleItem: FlightSearchListResponseBodyModuleFlightListCabinInfoListFlightRuleListRefundRuleItem,
      signRule: FlightSearchListResponseBodyModuleFlightListCabinInfoListFlightRuleListSignRule,
      tuigaiqianInfo: 'string',
      upgradeRule: FlightSearchListResponseBodyModuleFlightListCabinInfoListFlightRuleListUpgradeRule,
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

export class FlightSearchListResponseBodyModuleFlightListCabinInfoList extends $dara.Model {
  agentId?: number;
  basicCabinPrice?: number;
  buildPrice?: number;
  cabin?: string;
  cabinClass?: string;
  cabinClassName?: string;
  childCabin?: string;
  className?: string;
  classRule?: string;
  discount?: string;
  flightRuleList?: FlightSearchListResponseBodyModuleFlightListCabinInfoListFlightRuleList[];
  flightRuleListStr?: string;
  invoiceType?: number;
  isProtocol?: boolean;
  memo?: string;
  oilPrice?: number;
  orderParams?: string;
  otaItemId?: string;
  price?: number;
  productType?: number;
  productTypeDesc?: string;
  promotionPrice?: string;
  remainedSeatCount?: string;
  ticketPrice?: number;
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
      memo: 'memo',
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
      flightRuleList: { 'type': 'array', 'itemType': FlightSearchListResponseBodyModuleFlightListCabinInfoListFlightRuleList },
      flightRuleListStr: 'string',
      invoiceType: 'number',
      isProtocol: 'boolean',
      memo: 'string',
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

export class FlightSearchListResponseBodyModuleFlightListDepAirportInfo extends $dara.Model {
  airportCode?: string;
  airportName?: string;
  cityCode?: string;
  cityName?: string;
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

export class FlightSearchListResponseBodyModuleFlightListFlightRuleListBaggageItemBaggageSubItemsBaggageSubContentVisualizesDescription extends $dara.Model {
  desc?: string;
  icon?: string;
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

export class FlightSearchListResponseBodyModuleFlightListFlightRuleListBaggageItemBaggageSubItemsBaggageSubContentVisualizesImageDO extends $dara.Model {
  image?: string;
  largest?: string;
  middle?: string;
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

export class FlightSearchListResponseBodyModuleFlightListFlightRuleListBaggageItemBaggageSubItemsBaggageSubContentVisualizes extends $dara.Model {
  baggageDesc?: string[];
  baggageSubContentType?: number;
  description?: FlightSearchListResponseBodyModuleFlightListFlightRuleListBaggageItemBaggageSubItemsBaggageSubContentVisualizesDescription;
  imageDO?: FlightSearchListResponseBodyModuleFlightListFlightRuleListBaggageItemBaggageSubItemsBaggageSubContentVisualizesImageDO;
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
      description: FlightSearchListResponseBodyModuleFlightListFlightRuleListBaggageItemBaggageSubItemsBaggageSubContentVisualizesDescription,
      imageDO: FlightSearchListResponseBodyModuleFlightListFlightRuleListBaggageItemBaggageSubItemsBaggageSubContentVisualizesImageDO,
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

export class FlightSearchListResponseBodyModuleFlightListFlightRuleListBaggageItemBaggageSubItems extends $dara.Model {
  baggageSubContentVisualizes?: FlightSearchListResponseBodyModuleFlightListFlightRuleListBaggageItemBaggageSubItemsBaggageSubContentVisualizes[];
  extraContentVisualizes?: any[];
  isStruct?: boolean;
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
      baggageSubContentVisualizes: { 'type': 'array', 'itemType': FlightSearchListResponseBodyModuleFlightListFlightRuleListBaggageItemBaggageSubItemsBaggageSubContentVisualizes },
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

export class FlightSearchListResponseBodyModuleFlightListFlightRuleListBaggageItemTips extends $dara.Model {
  logo?: string;
  tipsDesc?: string;
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

export class FlightSearchListResponseBodyModuleFlightListFlightRuleListBaggageItem extends $dara.Model {
  baggageSubItems?: FlightSearchListResponseBodyModuleFlightListFlightRuleListBaggageItemBaggageSubItems[];
  index?: number;
  tableHead?: string;
  tips?: FlightSearchListResponseBodyModuleFlightListFlightRuleListBaggageItemTips;
  title?: string;
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
      baggageSubItems: { 'type': 'array', 'itemType': FlightSearchListResponseBodyModuleFlightListFlightRuleListBaggageItemBaggageSubItems },
      index: 'number',
      tableHead: 'string',
      tips: FlightSearchListResponseBodyModuleFlightListFlightRuleListBaggageItemTips,
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

export class FlightSearchListResponseBodyModuleFlightListFlightRuleListChangeRuleInfo extends $dara.Model {
  content?: string;
  cost?: number;
  costPercent?: number;
  timeStamp?: number;
  timeType?: string;
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

export class FlightSearchListResponseBodyModuleFlightListFlightRuleListChangeRule extends $dara.Model {
  able?: boolean;
  info?: FlightSearchListResponseBodyModuleFlightListFlightRuleListChangeRuleInfo[];
  static names(): { [key: string]: string } {
    return {
      able: 'able',
      info: 'info',
    };
  }

  static types(): { [key: string]: any } {
    return {
      able: 'boolean',
      info: { 'type': 'array', 'itemType': FlightSearchListResponseBodyModuleFlightListFlightRuleListChangeRuleInfo },
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

export class FlightSearchListResponseBodyModuleFlightListFlightRuleListChangeRuleItemExtraContents extends $dara.Model {
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

export class FlightSearchListResponseBodyModuleFlightListFlightRuleListChangeRuleItemRefundSubItemsRefundSubContents extends $dara.Model {
  feeDesc?: string;
  feeRange?: string;
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

export class FlightSearchListResponseBodyModuleFlightListFlightRuleListChangeRuleItemRefundSubItems extends $dara.Model {
  isStruct?: boolean;
  ptc?: string;
  refundSubContents?: FlightSearchListResponseBodyModuleFlightListFlightRuleListChangeRuleItemRefundSubItemsRefundSubContents[];
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
      refundSubContents: { 'type': 'array', 'itemType': FlightSearchListResponseBodyModuleFlightListFlightRuleListChangeRuleItemRefundSubItemsRefundSubContents },
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

export class FlightSearchListResponseBodyModuleFlightListFlightRuleListChangeRuleItem extends $dara.Model {
  extraContents?: FlightSearchListResponseBodyModuleFlightListFlightRuleListChangeRuleItemExtraContents[];
  index?: number;
  refundSubItems?: FlightSearchListResponseBodyModuleFlightListFlightRuleListChangeRuleItemRefundSubItems[];
  subTableHead?: string[];
  tableHead?: string;
  title?: string;
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
      extraContents: { 'type': 'array', 'itemType': FlightSearchListResponseBodyModuleFlightListFlightRuleListChangeRuleItemExtraContents },
      index: 'number',
      refundSubItems: { 'type': 'array', 'itemType': FlightSearchListResponseBodyModuleFlightListFlightRuleListChangeRuleItemRefundSubItems },
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

export class FlightSearchListResponseBodyModuleFlightListFlightRuleListRefundRuleInfo extends $dara.Model {
  content?: string;
  cost?: number;
  costPercent?: number;
  timeStamp?: number;
  timeType?: string;
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

export class FlightSearchListResponseBodyModuleFlightListFlightRuleListRefundRule extends $dara.Model {
  able?: boolean;
  info?: FlightSearchListResponseBodyModuleFlightListFlightRuleListRefundRuleInfo[];
  static names(): { [key: string]: string } {
    return {
      able: 'able',
      info: 'info',
    };
  }

  static types(): { [key: string]: any } {
    return {
      able: 'boolean',
      info: { 'type': 'array', 'itemType': FlightSearchListResponseBodyModuleFlightListFlightRuleListRefundRuleInfo },
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

export class FlightSearchListResponseBodyModuleFlightListFlightRuleListRefundRuleItemExtraContents extends $dara.Model {
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

export class FlightSearchListResponseBodyModuleFlightListFlightRuleListRefundRuleItemRefundSubItemsRefundSubContents extends $dara.Model {
  feeDesc?: string;
  feeRange?: string;
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

export class FlightSearchListResponseBodyModuleFlightListFlightRuleListRefundRuleItemRefundSubItems extends $dara.Model {
  isStruct?: boolean;
  ptc?: string;
  refundSubContents?: FlightSearchListResponseBodyModuleFlightListFlightRuleListRefundRuleItemRefundSubItemsRefundSubContents[];
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
      refundSubContents: { 'type': 'array', 'itemType': FlightSearchListResponseBodyModuleFlightListFlightRuleListRefundRuleItemRefundSubItemsRefundSubContents },
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

export class FlightSearchListResponseBodyModuleFlightListFlightRuleListRefundRuleItem extends $dara.Model {
  extraContents?: FlightSearchListResponseBodyModuleFlightListFlightRuleListRefundRuleItemExtraContents[];
  index?: number;
  refundSubItems?: FlightSearchListResponseBodyModuleFlightListFlightRuleListRefundRuleItemRefundSubItems[];
  subTableHead?: string[];
  tableHead?: string;
  title?: string;
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
      extraContents: { 'type': 'array', 'itemType': FlightSearchListResponseBodyModuleFlightListFlightRuleListRefundRuleItemExtraContents },
      index: 'number',
      refundSubItems: { 'type': 'array', 'itemType': FlightSearchListResponseBodyModuleFlightListFlightRuleListRefundRuleItemRefundSubItems },
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

export class FlightSearchListResponseBodyModuleFlightListFlightRuleListSignRuleInfo extends $dara.Model {
  content?: string;
  cost?: number;
  costPercent?: number;
  timeStamp?: number;
  timeType?: string;
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

export class FlightSearchListResponseBodyModuleFlightListFlightRuleListSignRule extends $dara.Model {
  able?: boolean;
  info?: FlightSearchListResponseBodyModuleFlightListFlightRuleListSignRuleInfo[];
  static names(): { [key: string]: string } {
    return {
      able: 'able',
      info: 'info',
    };
  }

  static types(): { [key: string]: any } {
    return {
      able: 'boolean',
      info: { 'type': 'array', 'itemType': FlightSearchListResponseBodyModuleFlightListFlightRuleListSignRuleInfo },
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

export class FlightSearchListResponseBodyModuleFlightListFlightRuleListUpgradeRuleInfo extends $dara.Model {
  content?: string;
  cost?: number;
  costPercent?: number;
  timeStamp?: number;
  timeType?: string;
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

export class FlightSearchListResponseBodyModuleFlightListFlightRuleListUpgradeRule extends $dara.Model {
  able?: boolean;
  info?: FlightSearchListResponseBodyModuleFlightListFlightRuleListUpgradeRuleInfo[];
  static names(): { [key: string]: string } {
    return {
      able: 'able',
      info: 'info',
    };
  }

  static types(): { [key: string]: any } {
    return {
      able: 'boolean',
      info: { 'type': 'array', 'itemType': FlightSearchListResponseBodyModuleFlightListFlightRuleListUpgradeRuleInfo },
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

export class FlightSearchListResponseBodyModuleFlightListFlightRuleList extends $dara.Model {
  baggageInfo?: string;
  baggageItem?: FlightSearchListResponseBodyModuleFlightListFlightRuleListBaggageItem;
  changeRule?: FlightSearchListResponseBodyModuleFlightListFlightRuleListChangeRule;
  changeRuleItem?: FlightSearchListResponseBodyModuleFlightListFlightRuleListChangeRuleItem;
  extra?: string;
  refundRule?: FlightSearchListResponseBodyModuleFlightListFlightRuleListRefundRule;
  refundRuleItem?: FlightSearchListResponseBodyModuleFlightListFlightRuleListRefundRuleItem;
  signRule?: FlightSearchListResponseBodyModuleFlightListFlightRuleListSignRule;
  tuigaiqianInfo?: string;
  upgradeRule?: FlightSearchListResponseBodyModuleFlightListFlightRuleListUpgradeRule;
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
      baggageItem: FlightSearchListResponseBodyModuleFlightListFlightRuleListBaggageItem,
      changeRule: FlightSearchListResponseBodyModuleFlightListFlightRuleListChangeRule,
      changeRuleItem: FlightSearchListResponseBodyModuleFlightListFlightRuleListChangeRuleItem,
      extra: 'string',
      refundRule: FlightSearchListResponseBodyModuleFlightListFlightRuleListRefundRule,
      refundRuleItem: FlightSearchListResponseBodyModuleFlightListFlightRuleListRefundRuleItem,
      signRule: FlightSearchListResponseBodyModuleFlightListFlightRuleListSignRule,
      tuigaiqianInfo: 'string',
      upgradeRule: FlightSearchListResponseBodyModuleFlightListFlightRuleListUpgradeRule,
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

export class FlightSearchListResponseBodyModuleFlightListTransferInfoTransferAirlineInfo extends $dara.Model {
  airlineCode?: string;
  airlineName?: string;
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

export class FlightSearchListResponseBodyModuleFlightListTransferInfoTransferArrAirportInfo extends $dara.Model {
  airportCode?: string;
  airportName?: string;
  cityCode?: string;
  cityName?: string;
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

export class FlightSearchListResponseBodyModuleFlightListTransferInfoTransferDepAirportInfo extends $dara.Model {
  airportCode?: string;
  airportName?: string;
  cityCode?: string;
  cityName?: string;
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

export class FlightSearchListResponseBodyModuleFlightListTransferInfoTransferFlightRuleListBaggageItemBaggageSubItemsBaggageSubContentVisualizesDescription extends $dara.Model {
  desc?: string;
  icon?: string;
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

export class FlightSearchListResponseBodyModuleFlightListTransferInfoTransferFlightRuleListBaggageItemBaggageSubItemsBaggageSubContentVisualizesImageDO extends $dara.Model {
  image?: string;
  largest?: string;
  middle?: string;
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

export class FlightSearchListResponseBodyModuleFlightListTransferInfoTransferFlightRuleListBaggageItemBaggageSubItemsBaggageSubContentVisualizes extends $dara.Model {
  baggageDesc?: string[];
  baggageSubContentType?: number;
  description?: FlightSearchListResponseBodyModuleFlightListTransferInfoTransferFlightRuleListBaggageItemBaggageSubItemsBaggageSubContentVisualizesDescription;
  imageDO?: FlightSearchListResponseBodyModuleFlightListTransferInfoTransferFlightRuleListBaggageItemBaggageSubItemsBaggageSubContentVisualizesImageDO;
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
      description: FlightSearchListResponseBodyModuleFlightListTransferInfoTransferFlightRuleListBaggageItemBaggageSubItemsBaggageSubContentVisualizesDescription,
      imageDO: FlightSearchListResponseBodyModuleFlightListTransferInfoTransferFlightRuleListBaggageItemBaggageSubItemsBaggageSubContentVisualizesImageDO,
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

export class FlightSearchListResponseBodyModuleFlightListTransferInfoTransferFlightRuleListBaggageItemBaggageSubItems extends $dara.Model {
  baggageSubContentVisualizes?: FlightSearchListResponseBodyModuleFlightListTransferInfoTransferFlightRuleListBaggageItemBaggageSubItemsBaggageSubContentVisualizes[];
  extraContentVisualizes?: any[];
  isStruct?: boolean;
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
      baggageSubContentVisualizes: { 'type': 'array', 'itemType': FlightSearchListResponseBodyModuleFlightListTransferInfoTransferFlightRuleListBaggageItemBaggageSubItemsBaggageSubContentVisualizes },
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

export class FlightSearchListResponseBodyModuleFlightListTransferInfoTransferFlightRuleListBaggageItemTips extends $dara.Model {
  logo?: string;
  tipsDesc?: string;
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

export class FlightSearchListResponseBodyModuleFlightListTransferInfoTransferFlightRuleListBaggageItem extends $dara.Model {
  baggageSubItems?: FlightSearchListResponseBodyModuleFlightListTransferInfoTransferFlightRuleListBaggageItemBaggageSubItems[];
  index?: number;
  tableHead?: string;
  tips?: FlightSearchListResponseBodyModuleFlightListTransferInfoTransferFlightRuleListBaggageItemTips;
  title?: string;
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
      baggageSubItems: { 'type': 'array', 'itemType': FlightSearchListResponseBodyModuleFlightListTransferInfoTransferFlightRuleListBaggageItemBaggageSubItems },
      index: 'number',
      tableHead: 'string',
      tips: FlightSearchListResponseBodyModuleFlightListTransferInfoTransferFlightRuleListBaggageItemTips,
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

export class FlightSearchListResponseBodyModuleFlightListTransferInfoTransferFlightRuleListChangeRuleInfo extends $dara.Model {
  content?: string;
  cost?: number;
  costPercent?: number;
  timeStamp?: number;
  timeType?: string;
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

export class FlightSearchListResponseBodyModuleFlightListTransferInfoTransferFlightRuleListChangeRule extends $dara.Model {
  able?: boolean;
  info?: FlightSearchListResponseBodyModuleFlightListTransferInfoTransferFlightRuleListChangeRuleInfo[];
  static names(): { [key: string]: string } {
    return {
      able: 'able',
      info: 'info',
    };
  }

  static types(): { [key: string]: any } {
    return {
      able: 'boolean',
      info: { 'type': 'array', 'itemType': FlightSearchListResponseBodyModuleFlightListTransferInfoTransferFlightRuleListChangeRuleInfo },
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

export class FlightSearchListResponseBodyModuleFlightListTransferInfoTransferFlightRuleListChangeRuleItemExtraContents extends $dara.Model {
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

export class FlightSearchListResponseBodyModuleFlightListTransferInfoTransferFlightRuleListChangeRuleItemRefundSubItemsRefundSubContents extends $dara.Model {
  feeDesc?: string;
  feeRange?: string;
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

export class FlightSearchListResponseBodyModuleFlightListTransferInfoTransferFlightRuleListChangeRuleItemRefundSubItems extends $dara.Model {
  isStruct?: boolean;
  ptc?: string;
  refundSubContents?: FlightSearchListResponseBodyModuleFlightListTransferInfoTransferFlightRuleListChangeRuleItemRefundSubItemsRefundSubContents[];
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
      refundSubContents: { 'type': 'array', 'itemType': FlightSearchListResponseBodyModuleFlightListTransferInfoTransferFlightRuleListChangeRuleItemRefundSubItemsRefundSubContents },
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

export class FlightSearchListResponseBodyModuleFlightListTransferInfoTransferFlightRuleListChangeRuleItem extends $dara.Model {
  extraContents?: FlightSearchListResponseBodyModuleFlightListTransferInfoTransferFlightRuleListChangeRuleItemExtraContents[];
  index?: number;
  refundSubItems?: FlightSearchListResponseBodyModuleFlightListTransferInfoTransferFlightRuleListChangeRuleItemRefundSubItems[];
  subTableHead?: string[];
  tableHead?: string;
  title?: string;
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
      extraContents: { 'type': 'array', 'itemType': FlightSearchListResponseBodyModuleFlightListTransferInfoTransferFlightRuleListChangeRuleItemExtraContents },
      index: 'number',
      refundSubItems: { 'type': 'array', 'itemType': FlightSearchListResponseBodyModuleFlightListTransferInfoTransferFlightRuleListChangeRuleItemRefundSubItems },
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

export class FlightSearchListResponseBodyModuleFlightListTransferInfoTransferFlightRuleListRefundRuleInfo extends $dara.Model {
  content?: string;
  cost?: number;
  costPercent?: number;
  timeStamp?: number;
  timeType?: string;
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

export class FlightSearchListResponseBodyModuleFlightListTransferInfoTransferFlightRuleListRefundRule extends $dara.Model {
  able?: boolean;
  info?: FlightSearchListResponseBodyModuleFlightListTransferInfoTransferFlightRuleListRefundRuleInfo[];
  static names(): { [key: string]: string } {
    return {
      able: 'able',
      info: 'info',
    };
  }

  static types(): { [key: string]: any } {
    return {
      able: 'boolean',
      info: { 'type': 'array', 'itemType': FlightSearchListResponseBodyModuleFlightListTransferInfoTransferFlightRuleListRefundRuleInfo },
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

export class FlightSearchListResponseBodyModuleFlightListTransferInfoTransferFlightRuleListRefundRuleItemExtraContents extends $dara.Model {
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

export class FlightSearchListResponseBodyModuleFlightListTransferInfoTransferFlightRuleListRefundRuleItemRefundSubItemsRefundSubContents extends $dara.Model {
  feeDesc?: string;
  feeRange?: string;
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

export class FlightSearchListResponseBodyModuleFlightListTransferInfoTransferFlightRuleListRefundRuleItemRefundSubItems extends $dara.Model {
  isStruct?: boolean;
  ptc?: string;
  refundSubContents?: FlightSearchListResponseBodyModuleFlightListTransferInfoTransferFlightRuleListRefundRuleItemRefundSubItemsRefundSubContents[];
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
      refundSubContents: { 'type': 'array', 'itemType': FlightSearchListResponseBodyModuleFlightListTransferInfoTransferFlightRuleListRefundRuleItemRefundSubItemsRefundSubContents },
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

export class FlightSearchListResponseBodyModuleFlightListTransferInfoTransferFlightRuleListRefundRuleItem extends $dara.Model {
  extraContents?: FlightSearchListResponseBodyModuleFlightListTransferInfoTransferFlightRuleListRefundRuleItemExtraContents[];
  index?: number;
  refundSubItems?: FlightSearchListResponseBodyModuleFlightListTransferInfoTransferFlightRuleListRefundRuleItemRefundSubItems[];
  subTableHead?: string[];
  tableHead?: string;
  title?: string;
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
      extraContents: { 'type': 'array', 'itemType': FlightSearchListResponseBodyModuleFlightListTransferInfoTransferFlightRuleListRefundRuleItemExtraContents },
      index: 'number',
      refundSubItems: { 'type': 'array', 'itemType': FlightSearchListResponseBodyModuleFlightListTransferInfoTransferFlightRuleListRefundRuleItemRefundSubItems },
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

export class FlightSearchListResponseBodyModuleFlightListTransferInfoTransferFlightRuleListSignRuleInfo extends $dara.Model {
  content?: string;
  cost?: number;
  costPercent?: number;
  timeStamp?: number;
  timeType?: string;
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

export class FlightSearchListResponseBodyModuleFlightListTransferInfoTransferFlightRuleListSignRule extends $dara.Model {
  able?: boolean;
  info?: FlightSearchListResponseBodyModuleFlightListTransferInfoTransferFlightRuleListSignRuleInfo[];
  static names(): { [key: string]: string } {
    return {
      able: 'able',
      info: 'info',
    };
  }

  static types(): { [key: string]: any } {
    return {
      able: 'boolean',
      info: { 'type': 'array', 'itemType': FlightSearchListResponseBodyModuleFlightListTransferInfoTransferFlightRuleListSignRuleInfo },
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

export class FlightSearchListResponseBodyModuleFlightListTransferInfoTransferFlightRuleListUpgradeRuleInfo extends $dara.Model {
  content?: string;
  cost?: number;
  costPercent?: number;
  timeStamp?: number;
  timeType?: string;
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

export class FlightSearchListResponseBodyModuleFlightListTransferInfoTransferFlightRuleListUpgradeRule extends $dara.Model {
  able?: boolean;
  info?: FlightSearchListResponseBodyModuleFlightListTransferInfoTransferFlightRuleListUpgradeRuleInfo[];
  static names(): { [key: string]: string } {
    return {
      able: 'able',
      info: 'info',
    };
  }

  static types(): { [key: string]: any } {
    return {
      able: 'boolean',
      info: { 'type': 'array', 'itemType': FlightSearchListResponseBodyModuleFlightListTransferInfoTransferFlightRuleListUpgradeRuleInfo },
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

export class FlightSearchListResponseBodyModuleFlightListTransferInfoTransferFlightRuleList extends $dara.Model {
  baggageInfo?: string;
  baggageItem?: FlightSearchListResponseBodyModuleFlightListTransferInfoTransferFlightRuleListBaggageItem;
  changeRule?: FlightSearchListResponseBodyModuleFlightListTransferInfoTransferFlightRuleListChangeRule;
  changeRuleItem?: FlightSearchListResponseBodyModuleFlightListTransferInfoTransferFlightRuleListChangeRuleItem;
  extra?: string;
  refundRule?: FlightSearchListResponseBodyModuleFlightListTransferInfoTransferFlightRuleListRefundRule;
  refundRuleItem?: FlightSearchListResponseBodyModuleFlightListTransferInfoTransferFlightRuleListRefundRuleItem;
  signRule?: FlightSearchListResponseBodyModuleFlightListTransferInfoTransferFlightRuleListSignRule;
  tuigaiqianInfo?: string;
  upgradeRule?: FlightSearchListResponseBodyModuleFlightListTransferInfoTransferFlightRuleListUpgradeRule;
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
      baggageItem: FlightSearchListResponseBodyModuleFlightListTransferInfoTransferFlightRuleListBaggageItem,
      changeRule: FlightSearchListResponseBodyModuleFlightListTransferInfoTransferFlightRuleListChangeRule,
      changeRuleItem: FlightSearchListResponseBodyModuleFlightListTransferInfoTransferFlightRuleListChangeRuleItem,
      extra: 'string',
      refundRule: FlightSearchListResponseBodyModuleFlightListTransferInfoTransferFlightRuleListRefundRule,
      refundRuleItem: FlightSearchListResponseBodyModuleFlightListTransferInfoTransferFlightRuleListRefundRuleItem,
      signRule: FlightSearchListResponseBodyModuleFlightListTransferInfoTransferFlightRuleListSignRule,
      tuigaiqianInfo: 'string',
      upgradeRule: FlightSearchListResponseBodyModuleFlightListTransferInfoTransferFlightRuleListUpgradeRule,
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

export class FlightSearchListResponseBodyModuleFlightListTransferInfo extends $dara.Model {
  flightSize?: string;
  flightType?: string;
  transferAirlineInfo?: FlightSearchListResponseBodyModuleFlightListTransferInfoTransferAirlineInfo;
  transferArrAirportInfo?: FlightSearchListResponseBodyModuleFlightListTransferInfoTransferArrAirportInfo;
  transferArrDate?: string;
  transferDepAirportInfo?: FlightSearchListResponseBodyModuleFlightListTransferInfoTransferDepAirportInfo;
  transferDepDate?: string;
  transferFlightNo?: string;
  transferFlightRuleList?: FlightSearchListResponseBodyModuleFlightListTransferInfoTransferFlightRuleList[];
  static names(): { [key: string]: string } {
    return {
      flightSize: 'flight_size',
      flightType: 'flight_type',
      transferAirlineInfo: 'transfer_airline_info',
      transferArrAirportInfo: 'transfer_arr_airport_info',
      transferArrDate: 'transfer_arr_date',
      transferDepAirportInfo: 'transfer_dep_airport_info',
      transferDepDate: 'transfer_dep_date',
      transferFlightNo: 'transfer_flight_no',
      transferFlightRuleList: 'transfer_flight_rule_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flightSize: 'string',
      flightType: 'string',
      transferAirlineInfo: FlightSearchListResponseBodyModuleFlightListTransferInfoTransferAirlineInfo,
      transferArrAirportInfo: FlightSearchListResponseBodyModuleFlightListTransferInfoTransferArrAirportInfo,
      transferArrDate: 'string',
      transferDepAirportInfo: FlightSearchListResponseBodyModuleFlightListTransferInfoTransferDepAirportInfo,
      transferDepDate: 'string',
      transferFlightNo: 'string',
      transferFlightRuleList: { 'type': 'array', 'itemType': FlightSearchListResponseBodyModuleFlightListTransferInfoTransferFlightRuleList },
    };
  }

  validate() {
    if(this.transferAirlineInfo && typeof (this.transferAirlineInfo as any).validate === 'function') {
      (this.transferAirlineInfo as any).validate();
    }
    if(this.transferArrAirportInfo && typeof (this.transferArrAirportInfo as any).validate === 'function') {
      (this.transferArrAirportInfo as any).validate();
    }
    if(this.transferDepAirportInfo && typeof (this.transferDepAirportInfo as any).validate === 'function') {
      (this.transferDepAirportInfo as any).validate();
    }
    if(Array.isArray(this.transferFlightRuleList)) {
      $dara.Model.validateArray(this.transferFlightRuleList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightSearchListResponseBodyModuleFlightList extends $dara.Model {
  airlineInfo?: FlightSearchListResponseBodyModuleFlightListAirlineInfo;
  arrAirportInfo?: FlightSearchListResponseBodyModuleFlightListArrAirportInfo;
  arrDate?: string;
  basicCabinPrice?: number;
  buildPrice?: number;
  cabin?: string;
  cabinClass?: string;
  cabinInfoList?: FlightSearchListResponseBodyModuleFlightListCabinInfoList[];
  carrierAirline?: string;
  carrierNo?: string;
  classRule?: string;
  depAirportInfo?: FlightSearchListResponseBodyModuleFlightListDepAirportInfo;
  depCityCode?: string;
  depDate?: string;
  discount?: number;
  flightNo?: string;
  flightRuleList?: FlightSearchListResponseBodyModuleFlightListFlightRuleList[];
  flightRuleListStr?: string;
  flightSize?: string;
  flightType?: string;
  invoiceType?: number;
  isProtocol?: boolean;
  isShare?: boolean;
  isStop?: boolean;
  isTransfer?: boolean;
  mealDesc?: string;
  memo?: string;
  oilPrice?: number;
  otaItemId?: string;
  price?: number;
  productType?: number;
  productTypeDesc?: string;
  promotionPrice?: string;
  remainedSeatCount?: string;
  secretParams?: string;
  segmentNumber?: string;
  stopArrTime?: string;
  stopCity?: string;
  stopDepTime?: string;
  ticketPrice?: number;
  totalPrice?: string;
  transferInfo?: FlightSearchListResponseBodyModuleFlightListTransferInfo;
  tripType?: number;
  static names(): { [key: string]: string } {
    return {
      airlineInfo: 'airline_info',
      arrAirportInfo: 'arr_airport_info',
      arrDate: 'arr_date',
      basicCabinPrice: 'basic_cabin_price',
      buildPrice: 'build_price',
      cabin: 'cabin',
      cabinClass: 'cabin_class',
      cabinInfoList: 'cabin_info_list',
      carrierAirline: 'carrier_airline',
      carrierNo: 'carrier_no',
      classRule: 'class_rule',
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
      memo: 'memo',
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
      transferInfo: 'transfer_info',
      tripType: 'trip_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      airlineInfo: FlightSearchListResponseBodyModuleFlightListAirlineInfo,
      arrAirportInfo: FlightSearchListResponseBodyModuleFlightListArrAirportInfo,
      arrDate: 'string',
      basicCabinPrice: 'number',
      buildPrice: 'number',
      cabin: 'string',
      cabinClass: 'string',
      cabinInfoList: { 'type': 'array', 'itemType': FlightSearchListResponseBodyModuleFlightListCabinInfoList },
      carrierAirline: 'string',
      carrierNo: 'string',
      classRule: 'string',
      depAirportInfo: FlightSearchListResponseBodyModuleFlightListDepAirportInfo,
      depCityCode: 'string',
      depDate: 'string',
      discount: 'number',
      flightNo: 'string',
      flightRuleList: { 'type': 'array', 'itemType': FlightSearchListResponseBodyModuleFlightListFlightRuleList },
      flightRuleListStr: 'string',
      flightSize: 'string',
      flightType: 'string',
      invoiceType: 'number',
      isProtocol: 'boolean',
      isShare: 'boolean',
      isStop: 'boolean',
      isTransfer: 'boolean',
      mealDesc: 'string',
      memo: 'string',
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
      transferInfo: FlightSearchListResponseBodyModuleFlightListTransferInfo,
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
    if(this.transferInfo && typeof (this.transferInfo as any).validate === 'function') {
      (this.transferInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightSearchListResponseBodyModule extends $dara.Model {
  flightList?: FlightSearchListResponseBodyModuleFlightList[];
  isReplacePnr?: boolean;
  static names(): { [key: string]: string } {
    return {
      flightList: 'flight_list',
      isReplacePnr: 'is_replace_pnr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flightList: { 'type': 'array', 'itemType': FlightSearchListResponseBodyModuleFlightList },
      isReplacePnr: 'boolean',
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

export class FlightSearchListResponseBody extends $dara.Model {
  code?: string;
  message?: string;
  module?: FlightSearchListResponseBodyModule;
  requestId?: string;
  success?: boolean;
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
      module: FlightSearchListResponseBodyModule,
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

