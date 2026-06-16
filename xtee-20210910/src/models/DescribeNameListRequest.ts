// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNameListRequest extends $dara.Model {
  /**
   * @remarks
   * Sets the language type for the request and response messages. Default value: **zh**. Valid values:
   * - **zh**: Chinese
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The creation type.
   * 
   * @example
   * NORMAL
   */
  createType?: string;
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  currentPage?: string;
  /**
   * @remarks
   * The number of entries per page. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regId?: string;
  /**
   * @remarks
   * The search value.
   * 
   * @example
   * 白名单
   */
  value?: string;
  /**
   * @remarks
   * The variable ID.
   * 
   * @example
   * 393314
   */
  variableId?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      createType: 'createType',
      currentPage: 'currentPage',
      pageSize: 'pageSize',
      regId: 'regId',
      value: 'value',
      variableId: 'variableId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      createType: 'string',
      currentPage: 'string',
      pageSize: 'string',
      regId: 'string',
      value: 'string',
      variableId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

