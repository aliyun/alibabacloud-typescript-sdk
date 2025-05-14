// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryTaskDetailResponseBodyDataList } from "./QueryTaskDetailResponseBodyDataList";


export class QueryTaskDetailResponseBodyData extends $dara.Model {
  currentPage?: string;
  list?: QueryTaskDetailResponseBodyDataList[];
  pageSize?: string;
  totalResults?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      list: 'List',
      pageSize: 'PageSize',
      totalResults: 'TotalResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'string',
      list: { 'type': 'array', 'itemType': QueryTaskDetailResponseBodyDataList },
      pageSize: 'string',
      totalResults: 'string',
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

