// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeWhiteListProcessRequest extends $dara.Model {
  /**
   * @remarks
   * The page number. Default value: **1**. Pages start from page 1.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The sort order. Default value: descending order. Valid values:
   * 
   * *   **1**: ascending order
   * *   **2**: descending order
   * 
   * @example
   * 2
   */
  desc?: number;
  /**
   * @remarks
   * The language of the content within the request and response. Default value: **zh**. Valid values:
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
   * The item based on which you want to sort the returned results. Default value: **process type**. Valid values:
   * 
   * *   **1**: process type
   * *   **2**: degree of trustability
   * 
   * @example
   * 1
   */
  orderBy?: number;
  /**
   * @remarks
   * The number of entries per page. Maximum value: 1000. Default value: 20. If you leave this parameter empty, 20 data entries are returned per page.
   * 
   * >  We recommend that you do not leave this parameter empty.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The name of the process.
   * 
   * @example
   * JAVA
   */
  processName?: string;
  /**
   * @remarks
   * The type of the process. Valid values:
   * 
   * *   **1**: trusted
   * *   **2**: suspicious
   * *   **3**: malicious
   * 
   * @example
   * 1
   */
  processType?: number;
  /**
   * @remarks
   * The source IP address of the request. You do not need to specify this parameter. It is automatically obtained by the system.
   * 
   * @example
   * 27.223.XX.XX
   */
  sourceIp?: string;
  /**
   * @remarks
   * The ID of the policy.
   * 
   * >  You can call the [DescribeWhiteListStrategyList](~~DescribeWhiteListStrategyList~~) operation to obtain the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 8562
   */
  strategyId?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      desc: 'Desc',
      lang: 'Lang',
      orderBy: 'OrderBy',
      pageSize: 'PageSize',
      processName: 'ProcessName',
      processType: 'ProcessType',
      sourceIp: 'SourceIp',
      strategyId: 'StrategyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      desc: 'number',
      lang: 'string',
      orderBy: 'number',
      pageSize: 'number',
      processName: 'string',
      processType: 'number',
      sourceIp: 'string',
      strategyId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

