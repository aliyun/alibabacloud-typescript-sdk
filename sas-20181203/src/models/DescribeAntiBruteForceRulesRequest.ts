// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAntiBruteForceRulesRequest extends $dara.Model {
  /**
   * @remarks
   * The page number of the page to return. Default value: **1**, which indicates the first page.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The ID of the brute-force attacks prevention rule.
   * >You can invoke the [DescribeAntiBruteForceRules](~~DescribeAntiBruteForceRules~~) operation to obtain this parameter.
   * 
   * @example
   * 1141****
   */
  id?: number;
  /**
   * @remarks
   * The name of the brute-force attacks prevention rule.
   * 
   * @example
   * testName
   */
  name?: string;
  /**
   * @remarks
   * The maximum number of entries to return on each page in a paged query. This parameter is used for paging.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The IP address of the access source.
   * 
   * @example
   * 121.69.XX.XX
   */
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      id: 'Id',
      name: 'Name',
      pageSize: 'PageSize',
      resourceOwnerId: 'ResourceOwnerId',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      id: 'number',
      name: 'string',
      pageSize: 'string',
      resourceOwnerId: 'number',
      sourceIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

