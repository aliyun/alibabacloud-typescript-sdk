// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUserSolutionsRequest extends $dara.Model {
  bizType?: string;
  existStatus?: number[];
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
      existStatus: 'ExistStatus',
      intentionBizId: 'IntentionBizId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizType: 'string',
      existStatus: { 'type': 'array', 'itemType': 'number' },
      intentionBizId: 'string',
      pageNum: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.existStatus)) {
      $dara.Model.validateArray(this.existStatus);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

