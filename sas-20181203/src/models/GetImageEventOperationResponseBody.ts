// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetImageEventOperationResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The rule conditions. The value is in the JSON format. Valid values of keys:
   * 
   * *   **condition**: the matching condition.
   * *   **type**: the matching type.
   * *   **value**: the matching value.
   * 
   * @example
   * [{\\"condition\\": \\"MD5\\", \\"type\\": \\"equals\\", \\"value\\": \\"0083a31cc0083a31ccf7c10367a6e783e\\"}]
   */
  conditions?: string;
  /**
   * @remarks
   * The keyword of the alert item.
   * 
   * @example
   * PEM
   */
  eventKey?: string;
  /**
   * @remarks
   * The name of the alert item.
   * 
   * @example
   * PEM
   */
  eventName?: string;
  /**
   * @remarks
   * The alert type. Valid values:
   * 
   * *   **sensitiveFile**
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
   * The remarks.
   * 
   * @example
   * No warning.
   */
  note?: string;
  /**
   * @remarks
   * The operation code. Valid values:
   * 
   * *   **whitelist**: added to the whitelist.
   * 
   * @example
   * whitelist
   */
  operationCode?: string;
  /**
   * @remarks
   * The application scope of the rule. The value is in the JSON format. Valid values of keys:
   * 
   * *   **type**
   * *   **value**
   * 
   * @example
   * {\\"type\\": \\"repo\\", \\"value\\": \\"test-aaa/shenzhen-repo-01\\"}
   */
  scenarios?: string;
  /**
   * @remarks
   * The source of the whitelist. Valid values:
   * 
   * *   **default**: image
   * *   **agentless**: agentless detection
   * 
   * @example
   * agentless
   */
  source?: string;
  static names(): { [key: string]: string } {
    return {
      conditions: 'Conditions',
      eventKey: 'EventKey',
      eventName: 'EventName',
      eventType: 'EventType',
      id: 'Id',
      note: 'Note',
      operationCode: 'OperationCode',
      scenarios: 'Scenarios',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conditions: 'string',
      eventKey: 'string',
      eventName: 'string',
      eventType: 'string',
      id: 'number',
      note: 'string',
      operationCode: 'string',
      scenarios: 'string',
      source: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetImageEventOperationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: GetImageEventOperationResponseBodyData;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5861EE3E-F0B3-48B8-A5DC-A5080BFB****
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
      code: 'string',
      data: GetImageEventOperationResponseBodyData,
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

