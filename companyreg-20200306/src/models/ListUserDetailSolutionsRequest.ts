// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUserDetailSolutionsRequest extends $dara.Model {
  /**
   * @example
   * esp.wangwen
   */
  bizType?: string;
  /**
   * @example
   * I20211222161651000001
   */
  intentionBizId?: string;
  /**
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      bizType: 'BizType',
      intentionBizId: 'IntentionBizId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizType: 'string',
      intentionBizId: 'string',
      pageNum: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

