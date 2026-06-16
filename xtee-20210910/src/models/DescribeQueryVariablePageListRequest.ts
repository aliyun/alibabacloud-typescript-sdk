// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeQueryVariablePageListRequest extends $dara.Model {
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
   * The data source code.
   * 
   * @example
   * ds_vcaoii1697
   */
  dataSourceCode?: string;
  /**
   * @remarks
   * The event code.
   * 
   * @example
   * de_ahpayh4121
   */
  eventCode?: string;
  /**
   * @remarks
   * The name of the custom query variable.
   * 
   * @example
   * 名称
   */
  name?: string;
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
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regId?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      currentPage: 'currentPage',
      dataSourceCode: 'dataSourceCode',
      eventCode: 'eventCode',
      name: 'name',
      pageSize: 'pageSize',
      regId: 'regId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      currentPage: 'number',
      dataSourceCode: 'string',
      eventCode: 'string',
      name: 'string',
      pageSize: 'number',
      regId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

