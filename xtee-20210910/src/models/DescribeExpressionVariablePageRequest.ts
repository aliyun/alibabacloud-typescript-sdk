// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeExpressionVariablePageRequest extends $dara.Model {
  /**
   * @remarks
   * Sets the language type for requests and received messages, with a default value of **zh**. Values:
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
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: string;
  /**
   * @remarks
   * Event code.
   * 
   * @example
   * de_aamexg3015,de_aamexg3342
   */
  eventCode?: string;
  /**
   * @remarks
   * Variable return type.
   * 
   * @example
   * STRING
   */
  outputs?: string;
  /**
   * @remarks
   * Page size, with a default value of 10.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * Region code.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regId?: string;
  /**
   * @remarks
   * Status.
   * 
   * @example
   * ENABLE
   */
  status?: string;
  /**
   * @remarks
   * Variable name/description.
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

