// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartConfigRuleEvaluationByResourceResponseBody extends $dara.Model {
  /**
   * @example
   * cr-2da35180a8d1008e****
   */
  configRuleId?: string;
  /**
   * @example
   * A7A0FFF8-0B44-40C6-8BBF-3A185EFDF3F7
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      configRuleId: 'ConfigRuleId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configRuleId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

