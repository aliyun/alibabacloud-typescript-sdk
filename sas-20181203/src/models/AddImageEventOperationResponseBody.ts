// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddImageEventOperationResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The rule conditions. The value is in JSON format. Valid keys:
   * - **condition**: The matching condition.
   * - **type**: The matching type.
   * - **value**: The matching value.
   * 
   * @example
   * [{\\"condition\\": \\"MD5\\", \\"type\\": \\"equals\\", \\"value\\": \\"0083a31cc0083a31ccf7c10367a6e783e\\"}]
   */
  conditions?: string;
  /**
   * @remarks
   * The alert metric keyword.
   * 
   * @example
   * PEM
   */
  eventKey?: string;
  /**
   * @remarks
   * The alert metric name.
   * 
   * @example
   * PEM
   */
  eventName?: string;
  /**
   * @remarks
   * The Alarm Metric for alerting. Valid values:
   * - **sensitiveFile**: Sensitive file.
   * 
   * @example
   * sensitiveFile
   */
  eventType?: string;
  /**
   * @remarks
   * The primary key of the alert handling rule.
   * 
   * @example
   * 443496
   */
  id?: number;
  /**
   * @remarks
   * The operation code. Valid values:
   * - **whitelist**: Whitelist.
   * 
   * @example
   * whitelist
   */
  operationCode?: string;
  /**
   * @remarks
   * The rule scope. The value is in JSON format. Valid keys:
   * - **type**: The scope type.
   * - **value**: The scope value.
   * 
   * @example
   * {\\"type\\": \\"repo\\", \\"value\\": \\"test-aaa/shenzhen-repo-01\\"}
   */
  scenarios?: string;
  static names(): { [key: string]: string } {
    return {
      conditions: 'Conditions',
      eventKey: 'EventKey',
      eventName: 'EventName',
      eventType: 'EventType',
      id: 'Id',
      operationCode: 'OperationCode',
      scenarios: 'Scenarios',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conditions: 'string',
      eventKey: 'string',
      eventName: 'string',
      eventType: 'string',
      id: 'number',
      operationCode: 'string',
      scenarios: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddImageEventOperationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code returned.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: AddImageEventOperationResponseBodyData;
  /**
   * @remarks
   * The message returned.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0C8487EF-50C2-54BB-8634-10F8C35D****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the API call is successful. Valid values:
   * 
   * - **true**: The API call succeeded.
   * - **false**: The API call failed.
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
      code: 'string',
      data: AddImageEventOperationResponseBodyData,
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

