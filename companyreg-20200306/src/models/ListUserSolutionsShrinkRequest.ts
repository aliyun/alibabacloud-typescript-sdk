// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUserSolutionsShrinkRequest extends $dara.Model {
  bizType?: string;
  existStatusShrink?: string;
  /**
   * @example
   * I20210924151843000001
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
      existStatusShrink: 'ExistStatus',
      intentionBizId: 'IntentionBizId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizType: 'string',
      existStatusShrink: 'string',
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

