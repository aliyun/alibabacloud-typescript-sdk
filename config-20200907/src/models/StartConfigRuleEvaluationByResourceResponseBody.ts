// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartConfigRuleEvaluationByResourceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the rule.
   * 
   * For more information about how to obtain the rule ID, see [ListConfigRules](https://help.aliyun.com/document_detail/169607.html).
   * 
   * @example
   * cr-2da35180a8d1008e****
   */
  configRuleId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
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

