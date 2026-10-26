// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryTrafficControlTargetItemReportDetailResponseBodyTrafficControlTargetItemReportDetailItemControlTailReportDetails extends $dara.Model {
  /**
   * @remarks
   * The key-value pairs restricted in the traffic control target.
   */
  features?: { [key: string]: any };
  /**
   * @remarks
   * The item ID.
   * 
   * @example
   * 794872809896
   */
  itemId?: string;
  /**
   * @remarks
   * The completion progress.
   * 
   * @example
   * 49%
   */
  targetProgress?: string;
  /**
   * @remarks
   * The actual traffic.
   * 
   * @example
   * 20
   */
  targetTraffic?: number;
  static names(): { [key: string]: string } {
    return {
      features: 'Features',
      itemId: 'ItemId',
      targetProgress: 'TargetProgress',
      targetTraffic: 'TargetTraffic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      features: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      itemId: 'string',
      targetProgress: 'string',
      targetTraffic: 'number',
    };
  }

  validate() {
    if(this.features) {
      $dara.Model.validateMap(this.features);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTrafficControlTargetItemReportDetailResponseBodyTrafficControlTargetItemReportDetailItemControlTopReportDetails extends $dara.Model {
  /**
   * @remarks
   * The key-value pairs restricted in the traffic control target.
   */
  features?: { [key: string]: any };
  /**
   * @remarks
   * The item ID.
   * 
   * @example
   * 398734
   */
  itemId?: string;
  /**
   * @remarks
   * The completion progress.
   * 
   * @example
   * 49%
   */
  targetProgress?: string;
  /**
   * @remarks
   * The actual traffic.
   * 
   * @example
   * 20
   */
  targetTraffic?: number;
  static names(): { [key: string]: string } {
    return {
      features: 'Features',
      itemId: 'ItemId',
      targetProgress: 'TargetProgress',
      targetTraffic: 'TargetTraffic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      features: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      itemId: 'string',
      targetProgress: 'string',
      targetTraffic: 'number',
    };
  }

  validate() {
    if(this.features) {
      $dara.Model.validateMap(this.features);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTrafficControlTargetItemReportDetailResponseBodyTrafficControlTargetItemReportDetail extends $dara.Model {
  /**
   * @remarks
   * The list of details for the bottom 100 items after traffic control.
   */
  itemControlTailReportDetails?: QueryTrafficControlTargetItemReportDetailResponseBodyTrafficControlTargetItemReportDetailItemControlTailReportDetails[];
  /**
   * @remarks
   * The list of details for the top 100 items before traffic control.
   */
  itemControlTopReportDetails?: QueryTrafficControlTargetItemReportDetailResponseBodyTrafficControlTargetItemReportDetailItemControlTopReportDetails[];
  static names(): { [key: string]: string } {
    return {
      itemControlTailReportDetails: 'ItemControlTailReportDetails',
      itemControlTopReportDetails: 'ItemControlTopReportDetails',
    };
  }

  static types(): { [key: string]: any } {
    return {
      itemControlTailReportDetails: { 'type': 'array', 'itemType': QueryTrafficControlTargetItemReportDetailResponseBodyTrafficControlTargetItemReportDetailItemControlTailReportDetails },
      itemControlTopReportDetails: { 'type': 'array', 'itemType': QueryTrafficControlTargetItemReportDetailResponseBodyTrafficControlTargetItemReportDetailItemControlTopReportDetails },
    };
  }

  validate() {
    if(Array.isArray(this.itemControlTailReportDetails)) {
      $dara.Model.validateArray(this.itemControlTailReportDetails);
    }
    if(Array.isArray(this.itemControlTopReportDetails)) {
      $dara.Model.validateArray(this.itemControlTopReportDetails);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTrafficControlTargetItemReportDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 728C5E01-ABF6-5AA8-B9FC-B3BA05DECC77
   */
  requestId?: string;
  /**
   * @remarks
   * The item traffic control details.
   */
  trafficControlTargetItemReportDetail?: QueryTrafficControlTargetItemReportDetailResponseBodyTrafficControlTargetItemReportDetail;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      trafficControlTargetItemReportDetail: 'TrafficControlTargetItemReportDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      trafficControlTargetItemReportDetail: QueryTrafficControlTargetItemReportDetailResponseBodyTrafficControlTargetItemReportDetail,
    };
  }

  validate() {
    if(this.trafficControlTargetItemReportDetail && typeof (this.trafficControlTargetItemReportDetail as any).validate === 'function') {
      (this.trafficControlTargetItemReportDetail as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

