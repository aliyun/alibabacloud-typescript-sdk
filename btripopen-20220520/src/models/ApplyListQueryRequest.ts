// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ApplyListQueryRequest extends $dara.Model {
  /**
   * @example
   * true
   */
  allApply?: boolean;
  /**
   * @example
   * dept1
   */
  departId?: string;
  /**
   * @example
   * 2017-05-01 00:00:00
   */
  endTime?: string;
  /**
   * @example
   * 2018-05-01 00:00:00
   */
  gmtModified?: string;
  /**
   * @example
   * false
   */
  onlyShangLvApply?: boolean;
  /**
   * @example
   * 1
   */
  page?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 2017-05-01 00:00:00
   */
  startTime?: string;
  /**
   * @example
   * btrip123
   */
  subCorpId?: string;
  /**
   * @example
   * 2
   */
  type?: number;
  /**
   * @example
   * abs123
   */
  unionNo?: string;
  /**
   * @example
   * user1
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      allApply: 'all_apply',
      departId: 'depart_id',
      endTime: 'end_time',
      gmtModified: 'gmt_modified',
      onlyShangLvApply: 'only_shang_lv_apply',
      page: 'page',
      pageSize: 'page_size',
      startTime: 'start_time',
      subCorpId: 'sub_corp_id',
      type: 'type',
      unionNo: 'union_no',
      userId: 'user_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allApply: 'boolean',
      departId: 'string',
      endTime: 'string',
      gmtModified: 'string',
      onlyShangLvApply: 'boolean',
      page: 'number',
      pageSize: 'number',
      startTime: 'string',
      subCorpId: 'string',
      type: 'number',
      unionNo: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

