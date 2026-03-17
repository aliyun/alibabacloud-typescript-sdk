// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAntiBruteForceRulesRequest extends $dara.Model {
  /**
   * @remarks
   * Set which page of the returned results to start displaying the query results. The default value is **1**, indicating that the display starts from the first page.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The ID of the anti-brute force rule.
   * > You can obtain this parameter by calling the [DescribeAntiBruteForceRules](~~DescribeAntiBruteForceRules~~) interface.
   * 
   * @example
   * 1141****
   */
  id?: number;
  /**
   * @remarks
   * The name of the brute force rule.
   * 
   * @example
   * testName
   */
  name?: string;
  /**
   * @remarks
   * The maximum number of data entries displayed per page during a paginated query.
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

