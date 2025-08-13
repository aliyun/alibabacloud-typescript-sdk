// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGroupAccountPageRequest extends $dara.Model {
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
   * Community number.
   * 
   * @example
   * 129838420210118141502KiJ1SZL2
   */
  communityNo?: string;
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
   * fieldKey.
   * 
   * @example
   * mobile
   */
  fieldKey?: string;
  /**
   * @remarks
   * fieldVal.
   * 
   * @example
   * 18000000000
   */
  fieldVal?: string;
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

