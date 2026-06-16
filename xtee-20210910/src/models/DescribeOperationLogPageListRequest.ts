// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeOperationLogPageListRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the request and response. Default value: **zh**. Valid values:
   * - **zh**: Chinese
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The end time.
   * 
   * @example
   * 1733364850919
   */
  endDate?: number;
  /**
   * @remarks
   * The change content to query.
   * 
   * @example
   * 修改变量
   */
  operationSummary?: string;
  /**
   * @remarks
   * The number of entries per page. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region code.
   * 
   * @example
   * cn-hangzhou
   */
  regId?: string;
  /**
   * @remarks
   * The start time.
   * 
   * @example
   * 1733364850919
   */
  startDate?: number;
  /**
   * @remarks
   * The operator name to query.
   * 
   * @example
   * root
   */
  userNameSearch?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      currentPage: 'currentPage',
      endDate: 'endDate',
      operationSummary: 'operationSummary',
      pageSize: 'pageSize',
      regId: 'regId',
      startDate: 'startDate',
      userNameSearch: 'userNameSearch',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      currentPage: 'number',
      endDate: 'number',
      operationSummary: 'string',
      pageSize: 'number',
      regId: 'string',
      startDate: 'number',
      userNameSearch: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

