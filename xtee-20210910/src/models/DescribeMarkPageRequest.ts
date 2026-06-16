// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMarkPageRequest extends $dara.Model {
  /**
   * @remarks
   * The language type for the request and response. Default value: **zh**. Valid values:
   * - **zh**: Chinese.
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
  currentPage?: string;
  /**
   * @remarks
   * The sort order.
   * 
   * @example
   * 0
   */
  direction?: string;
  /**
   * @remarks
   * Specifies whether to enable paging.
   * 
   * @example
   * true
   */
  isPage?: boolean;
  /**
   * @remarks
   * The sort condition.
   * 
   * @example
   * asc
   */
  order?: string;
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
   * The task ID.
   * 
   * @example
   * 443
   */
  taskLogId?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      currentPage: 'currentPage',
      direction: 'direction',
      isPage: 'isPage',
      order: 'order',
      pageSize: 'pageSize',
      regId: 'regId',
      taskLogId: 'taskLogId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      currentPage: 'string',
      direction: 'string',
      isPage: 'boolean',
      order: 'string',
      pageSize: 'string',
      regId: 'string',
      taskLogId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

