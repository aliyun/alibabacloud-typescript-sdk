// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ApplyListQueryRequest extends $dara.Model {
  allApply?: boolean;
  departId?: string;
  endTime?: string;
  gmtModified?: string;
  onlyShangLvApply?: boolean;
  page?: number;
  pageSize?: number;
  startTime?: string;
  subCorpId?: string;
  type?: number;
  unionNo?: string;
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

