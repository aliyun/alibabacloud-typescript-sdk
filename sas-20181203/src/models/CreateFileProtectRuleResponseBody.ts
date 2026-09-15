// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateFileProtectRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID. Alibaba Cloud generates a unique ID for each request. You can use the ID to troubleshoot issues.
   * 
   * @example
   * EC7C8984-D108-516F-9D36-3DF1D1228CCA
   */
  requestId?: string;
  /**
   * @remarks
   * The rule ID.
   * 
   * @example
   * 123
   */
  ruleId?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      ruleId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

