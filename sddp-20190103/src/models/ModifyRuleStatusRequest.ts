// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyRuleStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The unique ID of the sensitive data detection rule.
   * 
   * > To enable or disable the detection feature of a sensitive data detection rule, you must specify the unique ID of the rule. You can call the **DescribeRules** operation to obtain the ID.
   * 
   * @example
   * 12341
   */
  id?: number;
  /**
   * @remarks
   * The unique IDs of the sensitive data detection rules. Separate multiple IDs with commas (,).
   * > To enable or disable the detection feature of a sensitive data detection rule, you must specify the unique ID of the rule. You can call the **DescribeRules** operation to obtain the ID.
   * 
   * @example
   * 1,2,3,4
   */
  ids?: string;
  /**
   * @remarks
   * The language of the request and response. Valid values:
   * - **zh**: Chinese.
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * Specifies whether to enable or disable the detection feature of the sensitive data detection rule. Valid values:
   * - **0**: disabled.  
   * - **1**: enabled.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      ids: 'Ids',
      lang: 'Lang',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      ids: 'string',
      lang: 'string',
      status: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

