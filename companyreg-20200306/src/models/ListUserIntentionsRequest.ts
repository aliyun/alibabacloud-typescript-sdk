// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUserIntentionsRequest extends $dara.Model {
  area?: string;
  /**
   * @example
   * esp.companyreg_cloud
   */
  bizType?: string;
  /**
   * @example
   * esp.bookkeeping,esp.bookkeeping_cloud
   */
  bizTypes?: string;
  /**
   * @example
   * I20210917170147000001
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
  /**
   * @example
   * UpdateTime
   */
  sortFiled?: string;
  /**
   * @example
   * desc
   */
  sortOrder?: string;
  /**
   * @example
   * 37
   */
  status?: number;
  withExtInfo?: boolean;
  static names(): { [key: string]: string } {
    return {
      area: 'Area',
      bizType: 'BizType',
      bizTypes: 'BizTypes',
      intentionBizId: 'IntentionBizId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      sortFiled: 'SortFiled',
      sortOrder: 'SortOrder',
      status: 'Status',
      withExtInfo: 'WithExtInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      area: 'string',
      bizType: 'string',
      bizTypes: 'string',
      intentionBizId: 'string',
      pageNum: 'number',
      pageSize: 'number',
      sortFiled: 'string',
      sortOrder: 'string',
      status: 'number',
      withExtInfo: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

