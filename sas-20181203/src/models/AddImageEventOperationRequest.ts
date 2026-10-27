// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddImageEventOperationRequest extends $dara.Model {
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
   * The note to add.
   * 
   * @example
   * test
   */
  note?: string;
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
   * > This parameter and **Source** cannot be empty at the same time. If **Source** is set to **agentless**, this parameter does not take effect.
   * 
   * @example
   * {\\"type\\": \\"repo\\", \\"value\\": \\"test-aaa/shenzhen-repo-01\\"}
   */
  scenarios?: string;
  /**
   * @remarks
   * The source of the whitelist. Valid values:
   * - **image**: Image.
   * - **agentless**: Agentless detection.
   * > This parameter and **Scenarios** cannot be empty at the same time. If this parameter is set to **agentless**, the **Scenarios** parameter does not take effect.
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

