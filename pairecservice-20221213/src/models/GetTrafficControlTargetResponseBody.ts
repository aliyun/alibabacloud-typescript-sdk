// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTrafficControlTargetResponseBodySplitParts extends $dara.Model {
  /**
   * @remarks
   * The set points.
   */
  setPoints?: number[];
  /**
   * @remarks
   * The set values.
   */
  setValues?: number[];
  /**
   * @remarks
   * The time points.
   */
  timePoints?: number[];
  static names(): { [key: string]: string } {
    return {
      setPoints: 'SetPoints',
      setValues: 'SetValues',
      timePoints: 'TimePoints',
    };
  }

  static types(): { [key: string]: any } {
    return {
      setPoints: { 'type': 'array', 'itemType': 'number' },
      setValues: { 'type': 'array', 'itemType': 'number' },
      timePoints: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.setPoints)) {
      $dara.Model.validateArray(this.setPoints);
    }
    if(Array.isArray(this.setValues)) {
      $dara.Model.validateArray(this.setValues);
    }
    if(Array.isArray(this.timePoints)) {
      $dara.Model.validateArray(this.timePoints);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTrafficControlTargetResponseBody extends $dara.Model {
  /**
   * @remarks
   * The end time.
   * 
   * @example
   * 2024-04-25
   */
  endTime?: string;
  /**
   * @remarks
   * The event of the control target.
   * 
   * @example
   * click
   */
  event?: string;
  /**
   * @remarks
   * The time when the traffic control target was created.
   * 
   * @example
   * 2024-01-03T02:28:00.000Z
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * The item condition, specified in an array format.
   * 
   * @example
   * [{"field":"status","option":"=","value":"1"}]
   */
  itemConditionArray?: string;
  /**
   * @remarks
   * The item condition, specified in an expression format.
   * 
   * @example
   * status=1
   */
  itemConditionExpress?: string;
  /**
   * @remarks
   * The item condition type.
   * 
   * @example
   * Array
   */
  itemConditionType?: string;
  /**
   * @remarks
   * The name of the traffic control target.
   * 
   * @example
   * target-1
   */
  name?: string;
  /**
   * @remarks
   * Indicates whether new product regulation is enabled.
   * 
   * @example
   * false
   */
  newProductRegulation?: boolean;
  /**
   * @remarks
   * The name of the recall strategy.
   * 
   * @example
   * recall-1
   */
  recallName?: string;
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
   * The piecewise control settings.
   */
  splitParts?: GetTrafficControlTargetResponseBodySplitParts;
  /**
   * @remarks
   * The start time.
   * 
   * @example
   * 2024-03-25
   */
  startTime?: string;
  /**
   * @remarks
   * The statistics period.
   * 
   * @example
   * Daily
   */
  statisPeriod?: string;
  /**
   * @remarks
   * The status of the traffic control target.
   * 
   * @example
   * 枚举值：开启：Opened关闭：Closed
   */
  status?: string;
  /**
   * @remarks
   * The tolerance value.
   * 
   * @example
   * 10
   */
  toleranceValue?: number;
  /**
   * @remarks
   * The ID of the traffic control target.
   * 
   * @example
   * 1
   */
  trafficControlTargetId?: string;
  /**
   * @remarks
   * The ID of the traffic control task.
   * 
   * @example
   * 1
   */
  trafficControlTaskId?: string;
  /**
   * @remarks
   * The value of the control target.
   * 
   * @example
   * 30
   */
  value?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      event: 'Event',
      gmtCreateTime: 'GmtCreateTime',
      itemConditionArray: 'ItemConditionArray',
      itemConditionExpress: 'ItemConditionExpress',
      itemConditionType: 'ItemConditionType',
      name: 'Name',
      newProductRegulation: 'NewProductRegulation',
      recallName: 'RecallName',
      requestId: 'RequestId',
      splitParts: 'SplitParts',
      startTime: 'StartTime',
      statisPeriod: 'StatisPeriod',
      status: 'Status',
      toleranceValue: 'ToleranceValue',
      trafficControlTargetId: 'TrafficControlTargetId',
      trafficControlTaskId: 'TrafficControlTaskId',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      event: 'string',
      gmtCreateTime: 'string',
      itemConditionArray: 'string',
      itemConditionExpress: 'string',
      itemConditionType: 'string',
      name: 'string',
      newProductRegulation: 'boolean',
      recallName: 'string',
      requestId: 'string',
      splitParts: GetTrafficControlTargetResponseBodySplitParts,
      startTime: 'string',
      statisPeriod: 'string',
      status: 'string',
      toleranceValue: 'number',
      trafficControlTargetId: 'string',
      trafficControlTaskId: 'string',
      value: 'number',
    };
  }

  validate() {
    if(this.splitParts && typeof (this.splitParts as any).validate === 'function') {
      (this.splitParts as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

