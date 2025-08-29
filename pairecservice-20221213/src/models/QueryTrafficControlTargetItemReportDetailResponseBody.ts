// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryTrafficControlTargetItemReportDetailResponseBodyTrafficControlTargetItemReportDetailItemControlTailReportDetails extends $dara.Model {
  features?: { [key: string]: any };
  itemId?: string;
  targetProgress?: string;
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
  features?: { [key: string]: any };
  itemId?: string;
  targetProgress?: string;
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
  itemControlTailReportDetails?: QueryTrafficControlTargetItemReportDetailResponseBodyTrafficControlTargetItemReportDetailItemControlTailReportDetails[];
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
  requestId?: string;
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

