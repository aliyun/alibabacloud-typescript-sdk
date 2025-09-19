// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddImageEventOperationRequest extends $dara.Model {
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
   * The alert type.
   * 
   * *   Set the value to **sensitiveFile**.
   * 
   * @example
   * sensitiveFile
   */
  eventType?: string;
  /**
   * @remarks
   * The remarks that you want to add.
   * 
   * @example
   * test
   */
  note?: string;
  /**
   * @remarks
   * The operation code.
   * 
   * *   Set the value to **whitelist** to add the alert item to the whitelist.
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
   * *   **image**: image.
   * *   **agentless**: agentless detection.
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

