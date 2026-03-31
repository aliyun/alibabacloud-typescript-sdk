// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRemediationsRequest extends $dara.Model {
  /**
   * @remarks
   * The rule IDs. Separate multiple rule IDs with commas (,).
   * 
   * For more information about how to obtain the ID of a rule, see [ListConfigRules](https://help.aliyun.com/document_detail/169607.html).
   * 
   * @example
   * cr-6b7c626622af00b4****
   */
  configRuleIds?: string;
  /**
   * @remarks
   * The page number. Pages start from page 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 50.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      configRuleIds: 'ConfigRuleIds',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configRuleIds: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

