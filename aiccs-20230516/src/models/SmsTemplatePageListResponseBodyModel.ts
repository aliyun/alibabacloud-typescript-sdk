// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SmsTemplatePageListResponseBodyModelList } from "./SmsTemplatePageListResponseBodyModelList";


export class SmsTemplatePageListResponseBodyModel extends $dara.Model {
  list?: SmsTemplatePageListResponseBodyModelList[];
  /**
   * @example
   * 53
   */
  pageNo?: number;
  /**
   * @example
   * 42
   */
  pageSize?: number;
  /**
   * @example
   * 2
   */
  totalCount?: number;
  /**
   * @example
   * 31
   */
  totalPage?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      totalPage: 'TotalPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': SmsTemplatePageListResponseBodyModelList },
      pageNo: 'number',
      pageSize: 'number',
      totalCount: 'number',
      totalPage: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.list)) {
      $dara.Model.validateArray(this.list);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

