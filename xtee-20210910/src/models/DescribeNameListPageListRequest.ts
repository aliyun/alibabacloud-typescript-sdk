// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNameListPageListRequest extends $dara.Model {
  /**
   * @remarks
   * Sets the language type for requests and received messages, default value is **zh**. Values:
   * - **zh**: Chinese
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * Current page number.
   * 
   * @example
   * 3
   */
  currentPage?: number;
  /**
   * @remarks
   * Page size, default value is 10
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Region code
   * 
   * @example
   * cn-hangzhou
   */
  regId?: string;
  /**
   * @remarks
   * Update start time.
   * 
   * @example
   * 1753372800000
   */
  updateBeginTime?: number;
  /**
   * @remarks
   * Update end time.
   * 
   * @example
   * 1753459199059
   */
  updateEndTime?: number;
  /**
   * @remarks
   * Variable name/description
   * 
   * @example
   * 白名单
   */
  value?: string;
  /**
   * @remarks
   * Variable ID
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

