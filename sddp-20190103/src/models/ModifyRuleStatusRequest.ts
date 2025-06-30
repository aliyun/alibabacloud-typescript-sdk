// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyRuleStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the sensitive data detection rule.
   * 
   * > You can query the ID of the sensitive data detection rule by calling the **DescribeRules** operation.
   * 
   * @example
   * 12341
   */
  id?: number;
  /**
   * @remarks
   * The ID of the sensitive data detection rule. Separate multiple IDs with commas (,).
   * 
   * > You can query the ID of the sensitive data detection rule by calling the **DescribeRules** operation.
   * 
   * @example
   * 1,2,3,4
   */
  ids?: string;
  /**
   * @remarks
   * The language of the content within the request and response. Valid values:
   * 
   * *   **zh**: Chinese
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * Specifies whether to enable or disable the sensitive data detection rule. Valid values:
   * 
   * *   **0**: disables the sensitive data detection rule.
   * *   **1**: enables the sensitive data detection rule.
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

