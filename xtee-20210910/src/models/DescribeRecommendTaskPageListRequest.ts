// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRecommendTaskPageListRequest extends $dara.Model {
  /**
   * @remarks
   * The language type for the request and response messages. Default value: **zh**. Valid values:
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
   * The task name.
   * 
   * @example
   * 策略推荐任务
   */
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      currentPage: 'currentPage',
      pageSize: 'pageSize',
      regId: 'regId',
      taskName: 'taskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      currentPage: 'string',
      pageSize: 'string',
      regId: 'string',
      taskName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

