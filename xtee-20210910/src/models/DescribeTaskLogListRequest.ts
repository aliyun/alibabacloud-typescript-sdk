// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTaskLogListRequest extends $dara.Model {
  /**
   * @remarks
   * Current page.
   * 
   * @example
   * 1
   */
  currentPage?: string;
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
   * Page size.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * Task ID.
   * 
   * @example
   * 18044
   */
  taskId?: string;
  /**
   * @remarks
   * Task log ID
   * 
   * @example
   * 107
   */
  taskLogId?: string;
  /**
   * @remarks
   * Region code
   * 
   * @example
   * cn-hangzhou
   */
  regId?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      isPage: 'IsPage',
      lang: 'Lang',
      pageSize: 'PageSize',
      taskId: 'TaskId',
      taskLogId: 'TaskLogId',
      regId: 'regId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'string',
      isPage: 'boolean',
      lang: 'string',
      pageSize: 'string',
      taskId: 'string',
      taskLogId: 'string',
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

