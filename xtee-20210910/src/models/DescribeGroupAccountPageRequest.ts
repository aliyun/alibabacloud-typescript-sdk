// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGroupAccountPageRequest extends $dara.Model {
  /**
   * @remarks
   * The language type for sending and receiving messages. Default value: **zh**. Valid values:
   * - **zh**: Chinese
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The community number.
   * 
   * @example
   * 129838420210118141502KiJ1SZL2
   */
  communityNo?: string;
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
   * fieldKey
   * 
   * @example
   * mobile
   */
  fieldKey?: string;
  /**
   * @remarks
   * fieldVal
   * 
   * @example
   * 18000000000
   */
  fieldVal?: string;
  /**
   * @remarks
   * Specifies whether to enable pagination.
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
   * 6770764
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      communityNo: 'communityNo',
      currentPage: 'currentPage',
      direction: 'direction',
      fieldKey: 'fieldKey',
      fieldVal: 'fieldVal',
      isPage: 'isPage',
      order: 'order',
      pageSize: 'pageSize',
      regId: 'regId',
      taskId: 'taskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      communityNo: 'string',
      currentPage: 'string',
      direction: 'string',
      fieldKey: 'string',
      fieldVal: 'string',
      isPage: 'boolean',
      order: 'string',
      pageSize: 'string',
      regId: 'string',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

