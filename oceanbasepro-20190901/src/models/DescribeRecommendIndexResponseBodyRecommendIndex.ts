// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRecommendIndexResponseBodyRecommendIndex extends $dara.Model {
  /**
   * @remarks
   * Example 1
   * 
   * @example
   * PRIMARY
   */
  suggestIndex?: string;
  /**
   * @example
   * testtable
   */
  tableList?: string;
  /**
   * @example
   * mysql
   */
  tenantMode?: string;
  static names(): { [key: string]: string } {
    return {
      suggestIndex: 'SuggestIndex',
      tableList: 'TableList',
      tenantMode: 'TenantMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      suggestIndex: 'string',
      tableList: 'string',
      tenantMode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

