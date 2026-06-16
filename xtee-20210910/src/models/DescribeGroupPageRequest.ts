// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGroupPageRequest extends $dara.Model {
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
   * The region code.
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
   * 6770764
   */
  taskId?: string;
  /**
   * @remarks
   * The time type.
   * 
   * @example
   * 1
   */
  timeType?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      currentPage: 'currentPage',
      direction: 'direction',
      order: 'order',
      pageSize: 'pageSize',
      regId: 'regId',
      taskId: 'taskId',
      timeType: 'timeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      currentPage: 'string',
      direction: 'string',
      order: 'string',
      pageSize: 'string',
      regId: 'string',
      taskId: 'string',
      timeType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

