// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCustVariablePageRequest extends $dara.Model {
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
   * The creation type.
   * 
   * @example
   * NORMAL
   */
  createType?: string;
  /**
   * @remarks
   * The current page number for pagination.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * 累计变量描述
   */
  description?: string;
  /**
   * @remarks
   * The event code.
   * 
   * @example
   * de_aheldm3876
   */
  eventCode?: string;
  /**
   * @remarks
   * The number of records per page. Default value: 10.
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
   * The status.
   * 
   * @example
   * ENABLE
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      createType: 'createType',
      currentPage: 'currentPage',
      description: 'description',
      eventCode: 'eventCode',
      pageSize: 'pageSize',
      regId: 'regId',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      createType: 'string',
      currentPage: 'number',
      description: 'string',
      eventCode: 'string',
      pageSize: 'number',
      regId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

