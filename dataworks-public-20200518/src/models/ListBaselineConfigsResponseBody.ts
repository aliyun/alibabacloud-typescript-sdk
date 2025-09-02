// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListBaselineConfigsResponseBodyDataBaselines extends $dara.Model {
  /**
   * @remarks
   * The baseline ID.
   * 
   * @example
   * 1234
   */
  baselineId?: number;
  /**
   * @remarks
   * The name of the baseline.
   * 
   * @example
   * Baseline name
   */
  baselineName?: string;
  /**
   * @remarks
   * The type of the baseline. Valid values: DAILY and HOURLY.
   * 
   * @example
   * DAILY
   */
  baselineType?: string;
  /**
   * @remarks
   * The hour in the alerting time of the day-level baseline. Valid values: [0, 47].
   * 
   * @example
   * 7
   */
  expHour?: number;
  /**
   * @remarks
   * The minute in the alerting time of the day-level baseline. Valid values: [0, 59].
   * 
   * @example
   * 30
   */
  expMinu?: number;
  /**
   * @remarks
   * The alerting time of the hour-level baseline. This parameter is presented as key-value pairs in the JSON format. The key indicates the ID of the cycle, and the value is presented in the hh:mm format. Valid values of hh: [0,47]. Valid values of mm: [0,59].
   * 
   * @example
   * {"1":"03:28","2":"04:28","3":"05:28","4":"06:28","5":"07:28","6":"08:28","7":"09:28","8":"10:28","9":"11:28","10":"12:28","11":"13:28","12":"14:28","13":"15:28","14":"16:28","15":"17:28","16":"18:28","17":"19:28","18":"20:28","19":"21:28","20":"22:28","21":"23:28","22":"24:28","23":"25:28","24":"26:28"}
   */
  hourExpDetail?: string;
  /**
   * @remarks
   * The committed completion time of the hour-level baseline. This parameter is presented as key-value pairs in the JSON format. The key indicates the ID of the cycle, and the value is presented in the hh:mm format. Valid values of hh: [0,47]. Valid values of mm: [0,59].
   * 
   * @example
   * {"1":"03:58","2":"04:58","3":"05:58","4":"06:58","5":"07:58","6":"08:58","7":"09:58","8":"10:58","9":"11:58","10":"12:58","11":"13:58","12":"14:58","13":"15:58","14":"16:58","15":"17:58","16":"18:58","17":"19:58","18":"20:58","19":"21:58","20":"22:58","21":"23:58","22":"24:58","23":"25:58","24":"26:58"}
   */
  hourSlaDetail?: string;
  /**
   * @remarks
   * Indicates whether the baseline is a default baseline of the workspace. Valid values: true and false.
   * 
   * @example
   * true
   */
  isDefault?: boolean;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account used by the baseline owner. Multiple IDs can be specified. The IDs are separated by commas (,).
   * 
   * @example
   * 952795****
   */
  owner?: string;
  /**
   * @remarks
   * The priority of the baseline. Valid values: {1,3,5,7,8}.
   * 
   * @example
   * 1
   */
  priority?: number;
  /**
   * @remarks
   * The ID of the workspace to which the baseline belongs.
   * 
   * @example
   * 9527
   */
  projectId?: number;
  /**
   * @remarks
   * The hour in the committed completion time of the day-level baseline. Valid values: [0, 47].
   * 
   * @example
   * 9
   */
  slaHour?: number;
  /**
   * @remarks
   * The minute in the alerting time of the day-level baseline. Valid values: [0, 59].
   * 
   * @example
   * 30
   */
  slaMinu?: number;
  /**
   * @remarks
   * Indicates whether the baseline is enabled. Valid values: true and false.
   * 
   * @example
   * true
   */
  useFlag?: boolean;
  static names(): { [key: string]: string } {
    return {
      baselineId: 'BaselineId',
      baselineName: 'BaselineName',
      baselineType: 'BaselineType',
      expHour: 'ExpHour',
      expMinu: 'ExpMinu',
      hourExpDetail: 'HourExpDetail',
      hourSlaDetail: 'HourSlaDetail',
      isDefault: 'IsDefault',
      owner: 'Owner',
      priority: 'Priority',
      projectId: 'ProjectId',
      slaHour: 'SlaHour',
      slaMinu: 'SlaMinu',
      useFlag: 'UseFlag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baselineId: 'number',
      baselineName: 'string',
      baselineType: 'string',
      expHour: 'number',
      expMinu: 'number',
      hourExpDetail: 'string',
      hourSlaDetail: 'string',
      isDefault: 'boolean',
      owner: 'string',
      priority: 'number',
      projectId: 'number',
      slaHour: 'number',
      slaMinu: 'number',
      useFlag: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBaselineConfigsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The baselines.
   */
  baselines?: ListBaselineConfigsResponseBodyDataBaselines[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of baselines returned.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      baselines: 'Baselines',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baselines: { 'type': 'array', 'itemType': ListBaselineConfigsResponseBodyDataBaselines },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.baselines)) {
      $dara.Model.validateArray(this.baselines);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBaselineConfigsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: ListBaselineConfigsResponseBodyData;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * 1031203110005
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * The specified parameters are invalid.
   */
  errorMessage?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0000-ABCD-EFG****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListBaselineConfigsResponseBodyData,
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
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

