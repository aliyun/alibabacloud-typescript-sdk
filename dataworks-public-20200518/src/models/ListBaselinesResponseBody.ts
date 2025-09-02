// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListBaselinesResponseBodyDataBaselinesOverTimeSettings extends $dara.Model {
  /**
   * @remarks
   * The cycle that corresponds to the committed completion time. For a day-level baseline, the value of this parameter is 1. For an hour-level baseline, the value of this parameter cannot exceed 24.
   * 
   * @example
   * 1
   */
  cycle?: number;
  /**
   * @remarks
   * The committed completion time in the hh:mm format. Valid values of hh: [0,47]. Valid values of mm: [0,59].
   * 
   * @example
   * 00:00
   */
  time?: string;
  static names(): { [key: string]: string } {
    return {
      cycle: 'Cycle',
      time: 'Time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cycle: 'number',
      time: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBaselinesResponseBodyDataBaselines extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the alerting feature is enabled. Valid values: true and false.
   * 
   * @example
   * true
   */
  alertEnabled?: boolean;
  /**
   * @remarks
   * The alert margin threshold for the baseline instance. Unit: minutes.
   * 
   * @example
   * 30
   */
  alertMarginThreshold?: number;
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
   * BaselineName
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
   * Indicates whether the baseline is enabled. Valid values: true and false.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The settings of the committed completion time of the baseline.
   */
  overTimeSettings?: ListBaselinesResponseBodyDataBaselinesOverTimeSettings[];
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
   * The priority of the baseline. Valid values: {1,2,5,7,8}.
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
  static names(): { [key: string]: string } {
    return {
      alertEnabled: 'AlertEnabled',
      alertMarginThreshold: 'AlertMarginThreshold',
      baselineId: 'BaselineId',
      baselineName: 'BaselineName',
      baselineType: 'BaselineType',
      enabled: 'Enabled',
      overTimeSettings: 'OverTimeSettings',
      owner: 'Owner',
      priority: 'Priority',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertEnabled: 'boolean',
      alertMarginThreshold: 'number',
      baselineId: 'number',
      baselineName: 'string',
      baselineType: 'string',
      enabled: 'boolean',
      overTimeSettings: { 'type': 'array', 'itemType': ListBaselinesResponseBodyDataBaselinesOverTimeSettings },
      owner: 'string',
      priority: 'number',
      projectId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.overTimeSettings)) {
      $dara.Model.validateArray(this.overTimeSettings);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBaselinesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The baselines.
   */
  baselines?: ListBaselinesResponseBodyDataBaselines[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * The total number of baselines returned.
   * 
   * @example
   * 100
   */
  totalCount?: string;
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
      baselines: { 'type': 'array', 'itemType': ListBaselinesResponseBodyDataBaselines },
      pageNumber: 'string',
      pageSize: 'string',
      totalCount: 'string',
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

export class ListBaselinesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: ListBaselinesResponseBodyData;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * 103630001
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned if the request failed.
   * 
   * @example
   * The user does not exist. 276571706358178756
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
   * 952795279527ab****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
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
      data: ListBaselinesResponseBodyData,
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

