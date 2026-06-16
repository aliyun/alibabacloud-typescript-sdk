// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNameListPageListRequest extends $dara.Model {
  /**
   * @remarks
   * The language type for the request and response messages. Default value: **zh**. Valid values:
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
   * 3
   */
  currentPage?: number;
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
   * The start time of the update period.
   * 
   * @example
   * 1753372800000
   */
  updateBeginTime?: number;
  /**
   * @remarks
   * The end time of the update period.
   * 
   * @example
   * 1753459199059
   */
  updateEndTime?: number;
  /**
   * @remarks
   * The variable name or description.
   * 
   * @example
   * 白名单
   */
  value?: string;
  /**
   * @remarks
   * The variable ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 762
   */
  variableId?: number;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      currentPage: 'currentPage',
      pageSize: 'pageSize',
      regId: 'regId',
      updateBeginTime: 'updateBeginTime',
      updateEndTime: 'updateEndTime',
      value: 'value',
      variableId: 'variableId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      currentPage: 'number',
      pageSize: 'number',
      regId: 'string',
      updateBeginTime: 'number',
      updateEndTime: 'number',
      value: 'string',
      variableId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

