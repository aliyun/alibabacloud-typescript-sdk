// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryTrafficControlTaskItemReportResponseBodyTrafficControlTaskItemReports extends $dara.Model {
  /**
   * @remarks
   * The actual number of items that were traffic-controlled.
   * 
   * @example
   * 4
   */
  actualItemControlNum?: number;
  /**
   * @remarks
   * The actual traffic volume for items that were traffic-controlled.
   * 
   * @example
   * 500
   */
  actualItemControlTraffic?: number;
  /**
   * @remarks
   * The number of items that have reached the traffic control target.
   * 
   * @example
   * 6
   */
  doneItemControlNum?: number;
  /**
   * @remarks
   * The percentage of items that have reached the traffic control target.
   * 
   * @example
   * 20%
   */
  doneItemControlPercentage?: string;
  /**
   * @remarks
   * The percentage of traffic-controlled items by count.
   * 
   * @example
   * 10%
   */
  itemControlNumPercentage?: string;
  /**
   * @remarks
   * The percentage of traffic-controlled items by traffic volume.
   * 
   * @example
   * 20%
   */
  itemControlTrafficPercentage?: string;
  /**
   * @remarks
   * The expected number of items to be traffic-controlled.
   * 
   * @example
   * 10
   */
  oughtItemControlNum?: number;
  /**
   * @remarks
   * The expected traffic volume for items to be traffic-controlled.
   * 
   * @example
   * 1000
   */
  oughtItemControlTraffic?: number;
  /**
   * @remarks
   * The ID of the traffic control target.
   * 
   * @example
   * 3
   */
  trafficControlTargetId?: string;
  /**
   * @remarks
   * The name of the traffic control target.
   * 
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
   * @remarks
   * The request ID.
   * 
   * @example
   * 728C5E01-ABF6-5AA8-B9FC-B3BA05DECC77
   */
  requestId?: string;
  /**
   * @remarks
   * The list of item-level traffic control reports.
   */
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

