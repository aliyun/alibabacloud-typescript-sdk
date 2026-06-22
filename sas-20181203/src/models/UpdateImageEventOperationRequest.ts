// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateImageEventOperationRequest extends $dara.Model {
  /**
   * @remarks
   * The rule conditions. The value is in JSON format. The following keys are supported:
   * - **condition**: the matching condition.
   * - **type**: the matching type.
   * - **value**: the matching value.
   * 
   * @example
   * [{\\"condition\\": \\"MD5\\", \\"type\\": \\"equals\\", \\"value\\": \\"0083a31cc0083a31ccf7c10367a6e****\\"}]
   */
  conditions?: string;
  /**
   * @remarks
   * The ID of the alert handling rule.
   * > You can call [DescribeImageEventOperationPage](~~DescribeImageEventOperationPage~~) to obtain this parameter.
   * 
   * @example
   * 814163
   */
  id?: number;
  /**
   * @remarks
   * The remarks to add.
   * 
   * @example
   * test
   */
  note?: string;
  /**
   * @remarks
   * The rule scope. The value is in JSON format. The following keys are supported:
   * - **type**: the scope type.
   * - **value**: the scope value.
   * > This parameter and Source cannot both be empty. If Source is set to agentless, this parameter does not take effect.
   * 
   * @example
   * {\\"type\\": \\"repo\\", \\"value\\": \\"test-aaa/shenzhen-repo-01\\"}
   */
  scenarios?: string;
  /**
   * @remarks
   * The whitelist source. Valid values:
   * - **image**: image.
   * - **agentless**: agentless detection.
   * > This parameter and Scenarios cannot both be empty. If this parameter is set to agentless, the Scenarios parameter does not take effect.
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

