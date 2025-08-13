// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMarkPageRequest extends $dara.Model {
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
   * 1
   */
  currentPage?: string;
  /**
   * @remarks
   * Order direction.
   * 
   * @example
   * 0
   */
  direction?: string;
  /**
   * @remarks
   * Whether to paginate.
   * 
   * @example
   * true
   */
  isPage?: boolean;
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
   * Page size, default value is 10.
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

