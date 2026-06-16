// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeExpressionVariablePageRequest extends $dara.Model {
  /**
   * @remarks
   * The language type for the request and response. Default value: **zh**. Valid values:
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
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: string;
  /**
   * @remarks
   * The event code.
   * 
   * @example
   * de_aamexg3015,de_aamexg3342
   */
  eventCode?: string;
  /**
   * @remarks
   * The variable return type.
   * 
   * @example
   * STRING
   */
  outputs?: string;
  /**
   * @remarks
   * The number of entries per page. Default value: 10.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: string;
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
  /**
   * @remarks
   * The status.
   * 
   * @example
   * ENABLE
   */
  status?: string;
  /**
   * @remarks
   * The variable name or description.
   * 
   * @example
   * 自定义变量
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      currentPage: 'currentPage',
      eventCode: 'eventCode',
      outputs: 'outputs',
      pageSize: 'pageSize',
      regId: 'regId',
      status: 'status',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      currentPage: 'string',
      eventCode: 'string',
      outputs: 'string',
      pageSize: 'string',
      regId: 'string',
      status: 'string',
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

