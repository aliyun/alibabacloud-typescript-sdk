// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAutoResourceOptimizeRulesAsyncResponseBodyDataConfigResponseConfigFailInstanceList extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the parameters are configured. Valid values:
   * 
   * * **true**
   * 
   * * **false**
   * 
   * @example
   * false
   */
  configSuccess?: boolean;
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * Only Support DAS Pro High-availability Edition RDS MySQL 5.6, 5.7, 8.0 instance, and CPU cores >= 4, innodb_file_per_table=ON
   */
  errorMessage?: string;
  /**
   * @remarks
   * The database instance ID.
   * 
   * @example
   * rm-2ze9xrhze0709****
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      configSuccess: 'ConfigSuccess',
      errorMessage: 'ErrorMessage',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configSuccess: 'boolean',
      errorMessage: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAutoResourceOptimizeRulesAsyncResponseBodyDataConfigResponseConfigSuccessInstanceList extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the parameters are configured. Valid values:
   * 
   * * **true**
   * 
   * * **false**
   * 
   * @example
   * true
   */
  configSuccess?: boolean;
  /**
   * @remarks
   * The database instance ID.
   * 
   * @example
   * rm-2ze8g2am97624****
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      configSuccess: 'ConfigSuccess',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configSuccess: 'boolean',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAutoResourceOptimizeRulesAsyncResponseBodyDataConfigResponse extends $dara.Model {
  /**
   * @remarks
   * The number of database instances for which the parameters failed to be configured.
   * 
   * @example
   * 1
   */
  configFailInstanceCount?: number;
  /**
   * @remarks
   * The database instances for which the parameters failed to be configured.
   */
  configFailInstanceList?: UpdateAutoResourceOptimizeRulesAsyncResponseBodyDataConfigResponseConfigFailInstanceList[];
  /**
   * @remarks
   * The number of database instances for which the parameters are configured.
   * 
   * @example
   * 1
   */
  configSuccessInstanceCount?: number;
  /**
   * @remarks
   * The database instances for which the parameters are configured.
   */
  configSuccessInstanceList?: UpdateAutoResourceOptimizeRulesAsyncResponseBodyDataConfigResponseConfigSuccessInstanceList[];
  /**
   * @remarks
   * The total number of database instances.
   * 
   * @example
   * 2
   */
  totalInstanceCount?: number;
  static names(): { [key: string]: string } {
    return {
      configFailInstanceCount: 'ConfigFailInstanceCount',
      configFailInstanceList: 'ConfigFailInstanceList',
      configSuccessInstanceCount: 'ConfigSuccessInstanceCount',
      configSuccessInstanceList: 'ConfigSuccessInstanceList',
      totalInstanceCount: 'TotalInstanceCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configFailInstanceCount: 'number',
      configFailInstanceList: { 'type': 'array', 'itemType': UpdateAutoResourceOptimizeRulesAsyncResponseBodyDataConfigResponseConfigFailInstanceList },
      configSuccessInstanceCount: 'number',
      configSuccessInstanceList: { 'type': 'array', 'itemType': UpdateAutoResourceOptimizeRulesAsyncResponseBodyDataConfigResponseConfigSuccessInstanceList },
      totalInstanceCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.configFailInstanceList)) {
      $dara.Model.validateArray(this.configFailInstanceList);
    }
    if(Array.isArray(this.configSuccessInstanceList)) {
      $dara.Model.validateArray(this.configSuccessInstanceList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAutoResourceOptimizeRulesAsyncResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the asynchronous request was complete. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  complete?: boolean;
  /**
   * @remarks
   * The returned data of the configuration.
   * 
   * >  The data is returned only if the value of isFinish is **true**. This value indicates that the asynchronous request is complete.
   */
  configResponse?: UpdateAutoResourceOptimizeRulesAsyncResponseBodyDataConfigResponse;
  /**
   * @remarks
   * Indicates whether the asynchronous request failed. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  fail?: boolean;
  /**
   * @remarks
   * Indicates whether the asynchronous request was complete. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  isFinish?: boolean;
  /**
   * @remarks
   * The ID of the asynchronous request.
   * 
   * @example
   * async__20ee808e72257f16a4fe024057ca****
   */
  resultId?: string;
  /**
   * @remarks
   * The state of the asynchronous request. Valid values:
   * 
   * *   **RUNNING**
   * *   **SUCCESS**
   * *   **FAIL**
   * 
   * @example
   * SUCCESS
   */
  state?: string;
  /**
   * @remarks
   * The time when the asynchronous request was made. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1645668213000
   */
  timestamp?: number;
  static names(): { [key: string]: string } {
    return {
      complete: 'Complete',
      configResponse: 'ConfigResponse',
      fail: 'Fail',
      isFinish: 'IsFinish',
      resultId: 'ResultId',
      state: 'State',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      complete: 'boolean',
      configResponse: UpdateAutoResourceOptimizeRulesAsyncResponseBodyDataConfigResponse,
      fail: 'boolean',
      isFinish: 'boolean',
      resultId: 'string',
      state: 'string',
      timestamp: 'number',
    };
  }

  validate() {
    if(this.configResponse && typeof (this.configResponse as any).validate === 'function') {
      (this.configResponse as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAutoResourceOptimizeRulesAsyncResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code returned.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The data returned.
   */
  data?: UpdateAutoResourceOptimizeRulesAsyncResponseBodyData;
  /**
   * @remarks
   * The returned message.
   * 
   * >  If the request was successful, **Successful** is returned. If the request failed, an error message such as an error code is returned.
   * 
   * @example
   * Successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9CB97BC4-6479-55D0-B9D0-EA925AFE****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: UpdateAutoResourceOptimizeRulesAsyncResponseBodyData,
      message: 'string',
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

