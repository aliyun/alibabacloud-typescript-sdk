// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TaskCallListResponseBodyModelList } from "./TaskCallListResponseBodyModelList";


export class TaskCallListResponseBodyModel extends $dara.Model {
  list?: TaskCallListResponseBodyModelList[];
  /**
   * @example
   * 62
   */
  pageNo?: number;
  /**
   * @example
   * 95
   */
  pageSize?: number;
  /**
   * @example
   * 80
   */
  totalCount?: number;
  /**
   * @example
   * 39
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
      list: { 'type': 'array', 'itemType': TaskCallListResponseBodyModelList },
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

