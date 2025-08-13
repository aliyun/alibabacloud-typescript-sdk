// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGroupPageRequest extends $dara.Model {
  /**
   * @remarks
   * Sets the language type for requests and responses, with a default value of **zh**. Values:
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
   * 1
   */
  currentPage?: string;
  /**
   * @remarks
   * Order.
   * 
   * @example
   * 0
   */
  direction?: string;
  /**
   * @remarks
   * Sorting condition.
   * 
   * @example
   * asc
   */
  order?: string;
  /**
   * @remarks
   * Page size, with a default value of 10.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * Region code.
   * 
   * @example
   * cn-hangzhou
   */
  regId?: string;
  /**
   * @remarks
   * Task ID.
   * 
   * @example
   * 6770764
   */
  taskId?: string;
  /**
   * @remarks
   * Time type.
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

