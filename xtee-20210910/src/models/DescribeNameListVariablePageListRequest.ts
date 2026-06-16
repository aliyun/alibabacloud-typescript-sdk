// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNameListVariablePageListRequest extends $dara.Model {
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
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The variable name.
   * 
   * @example
   * age
   */
  name?: string;
  /**
   * @remarks
   * The variable type.
   * 
   * @example
   * accountId
   */
  nameListType?: string;
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
   * The named list value.
   * 
   * @example
   * valuexxx
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      currentPage: 'currentPage',
      name: 'name',
      nameListType: 'nameListType',
      pageSize: 'pageSize',
      regId: 'regId',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      currentPage: 'number',
      name: 'string',
      nameListType: 'string',
      pageSize: 'number',
      regId: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

