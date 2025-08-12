// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAlertLogCountResponseBodyAlertLogCountLogs extends $dara.Model {
  /**
   * @remarks
   * The name of the dimension field based on which alert logs are aggregated.
   * 
   * @example
   * product
   */
  name?: string;
  /**
   * @remarks
   * The value of the dimension field based on which alert logs are aggregated.
   * 
   * @example
   * ECS
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertLogCountResponseBodyAlertLogCount extends $dara.Model {
  /**
   * @remarks
   * The number of alert logs.
   * 
   * @example
   * 1
   */
  count?: number;
  /**
   * @remarks
   * The details about alert logs.
   */
  logs?: DescribeAlertLogCountResponseBodyAlertLogCountLogs[];
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      logs: 'Logs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      logs: { 'type': 'array', 'itemType': DescribeAlertLogCountResponseBodyAlertLogCountLogs },
    };
  }

  validate() {
    if(Array.isArray(this.logs)) {
      $dara.Model.validateArray(this.logs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertLogCountResponseBody extends $dara.Model {
  /**
   * @remarks
   * The statistics of alert logs.
   */
  alertLogCount?: DescribeAlertLogCountResponseBodyAlertLogCount[];
  /**
   * @remarks
   * The HTTP status code.
   * 
   * > The status code 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * The specified resource is not found.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1C4A3709-BF52-42EE-87B5-7435F0929585
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
      alertLogCount: 'AlertLogCount',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertLogCount: { 'type': 'array', 'itemType': DescribeAlertLogCountResponseBodyAlertLogCount },
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.alertLogCount)) {
      $dara.Model.validateArray(this.alertLogCount);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

