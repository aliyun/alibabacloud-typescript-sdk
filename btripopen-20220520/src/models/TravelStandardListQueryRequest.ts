// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TravelStandardListQueryRequest extends $dara.Model {
  /**
   * @example
   * false
   */
  fromGroup?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  ruleName?: string;
  static names(): { [key: string]: string } {
    return {
      fromGroup: 'from_group',
      pageNo: 'page_no',
      pageSize: 'page_size',
      ruleName: 'rule_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fromGroup: 'boolean',
      pageNo: 'number',
      pageSize: 'number',
      ruleName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

