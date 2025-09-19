// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateImageEventOperationRequest extends $dara.Model {
  /**
   * @remarks
   * The rule conditions. Specify a value in the JSON format. You can specify the following keys:
   * 
   * *   **condition**: the matching condition.
   * *   **type**: the matching type.
   * *   **value**: the matching value.
   * 
   * @example
   * [{\\"condition\\": \\"MD5\\", \\"type\\": \\"equals\\", \\"value\\": \\"0083a31cc0083a31ccf7c10367a6e****\\"}]
   */
  conditions?: string;
  /**
   * @remarks
   * The ID of the alert handling rule. 
   * > You can call the [DescribeImageEventOperationPage](~~DescribeImageEventOperationPage~~) operation to query the ID.
   * 
   * @example
   * 814163
   */
  id?: number;
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
   * The application scope of the rule. The value is in the JSON format. Valid values:
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
      id: 'Id',
      note: 'Note',
      scenarios: 'Scenarios',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conditions: 'string',
      id: 'number',
      note: 'string',
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

