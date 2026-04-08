// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryTrafficControlTaskItemReportResponseBodyTrafficControlTaskItemReports extends $dara.Model {
  /**
   * @example
   * 4
   */
  actualItemControlNum?: number;
  /**
   * @example
   * 500
   */
  actualItemControlTraffic?: number;
  /**
   * @example
   * 6
   */
  doneItemControlNum?: number;
  /**
   * @example
   * 20%
   */
  doneItemControlPercentage?: string;
  /**
   * @example
   * 10%
   */
  itemControlNumPercentage?: string;
  /**
   * @example
   * 20%
   */
  itemControlTrafficPercentage?: string;
  /**
   * @example
   * 10
   */
  oughtItemControlNum?: number;
  /**
   * @example
   * 1000
   */
  oughtItemControlTraffic?: number;
  /**
   * @example
   * 3
   */
  trafficControlTargetId?: string;
  /**
   * @example
   * item-1
   */
  trafficControlTargetName?: string;
  static names(): { [key: string]: string } {
    return {
      actualItemControlNum: 'ActualItemControlNum',
      actualItemControlTraffic: 'ActualItemControlTraffic',
      doneItemControlNum: 'DoneItemControlNum',
      doneItemControlPercentage: 'DoneItemControlPercentage',
      itemControlNumPercentage: 'ItemControlNumPercentage',
      itemControlTrafficPercentage: 'ItemControlTrafficPercentage',
      oughtItemControlNum: 'OughtItemControlNum',
      oughtItemControlTraffic: 'OughtItemControlTraffic',
      trafficControlTargetId: 'TrafficControlTargetId',
      trafficControlTargetName: 'TrafficControlTargetName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actualItemControlNum: 'number',
      actualItemControlTraffic: 'number',
      doneItemControlNum: 'number',
      doneItemControlPercentage: 'string',
      itemControlNumPercentage: 'string',
      itemControlTrafficPercentage: 'string',
      oughtItemControlNum: 'number',
      oughtItemControlTraffic: 'number',
      trafficControlTargetId: 'string',
      trafficControlTargetName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTrafficControlTaskItemReportResponseBody extends $dara.Model {
  /**
   * @example
   * 728C5E01-ABF6-5AA8-B9FC-B3BA05DECC77
   */
  requestId?: string;
  trafficControlTaskItemReports?: QueryTrafficControlTaskItemReportResponseBodyTrafficControlTaskItemReports[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      trafficControlTaskItemReports: 'TrafficControlTaskItemReports',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      trafficControlTaskItemReports: { 'type': 'array', 'itemType': QueryTrafficControlTaskItemReportResponseBodyTrafficControlTaskItemReports },
    };
  }

  validate() {
    if(Array.isArray(this.trafficControlTaskItemReports)) {
      $dara.Model.validateArray(this.trafficControlTaskItemReports);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

