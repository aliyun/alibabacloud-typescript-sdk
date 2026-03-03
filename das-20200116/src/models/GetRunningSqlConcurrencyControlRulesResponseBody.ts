// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRunningSqlConcurrencyControlRulesResponseBodyDataListRunningRules extends $dara.Model {
  concurrencyControlTime?: number;
  instanceId?: string;
  itemId?: number;
  keywordsHash?: string;
  maxConcurrency?: string;
  sqlKeywords?: string;
  sqlType?: string;
  startTime?: number;
  status?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      concurrencyControlTime: 'ConcurrencyControlTime',
      instanceId: 'InstanceId',
      itemId: 'ItemId',
      keywordsHash: 'KeywordsHash',
      maxConcurrency: 'MaxConcurrency',
      sqlKeywords: 'SqlKeywords',
      sqlType: 'SqlType',
      startTime: 'StartTime',
      status: 'Status',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      concurrencyControlTime: 'number',
      instanceId: 'string',
      itemId: 'number',
      keywordsHash: 'string',
      maxConcurrency: 'string',
      sqlKeywords: 'string',
      sqlType: 'string',
      startTime: 'number',
      status: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRunningSqlConcurrencyControlRulesResponseBodyDataList extends $dara.Model {
  runningRules?: GetRunningSqlConcurrencyControlRulesResponseBodyDataListRunningRules[];
  static names(): { [key: string]: string } {
    return {
      runningRules: 'runningRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      runningRules: { 'type': 'array', 'itemType': GetRunningSqlConcurrencyControlRulesResponseBodyDataListRunningRules },
    };
  }

  validate() {
    if(Array.isArray(this.runningRules)) {
      $dara.Model.validateArray(this.runningRules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRunningSqlConcurrencyControlRulesResponseBodyData extends $dara.Model {
  list?: GetRunningSqlConcurrencyControlRulesResponseBodyDataList;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 2
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: GetRunningSqlConcurrencyControlRulesResponseBodyDataList,
      total: 'number',
    };
  }

  validate() {
    if(this.list && typeof (this.list as any).validate === 'function') {
      (this.list as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRunningSqlConcurrencyControlRulesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code returned.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The detailed information, including the error codes and the number of entries that are returned.
   */
  data?: GetRunningSqlConcurrencyControlRulesResponseBodyData;
  /**
   * @remarks
   * The returned message.
   * 
   * >  If the request was successful, Successful is returned. If the request failed, an error message such as an error code is returned.
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
   * B6D17591-B48B-4D31-9CD6-9B9796B2****
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
  success?: string;
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
      code: 'string',
      data: GetRunningSqlConcurrencyControlRulesResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'string',
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

