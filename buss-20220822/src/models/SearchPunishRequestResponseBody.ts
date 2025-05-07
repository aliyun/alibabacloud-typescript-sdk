// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SearchPunishRequestResponseBodyDataList } from "./SearchPunishRequestResponseBodyDataList";


export class SearchPunishRequestResponseBody extends $dara.Model {
  class?: string;
  code?: string;
  count?: number;
  dataList?: SearchPunishRequestResponseBodyDataList[];
  message?: string;
  success?: boolean;
  totalCount?: number;
  viewCount?: number;
  static names(): { [key: string]: string } {
    return {
      class: 'Class',
      code: 'Code',
      count: 'Count',
      dataList: 'DataList',
      message: 'Message',
      success: 'Success',
      totalCount: 'TotalCount',
      viewCount: 'ViewCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      class: 'string',
      code: 'string',
      count: 'number',
      dataList: { 'type': 'array', 'itemType': SearchPunishRequestResponseBodyDataList },
      message: 'string',
      success: 'boolean',
      totalCount: 'number',
      viewCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.dataList)) {
      $dara.Model.validateArray(this.dataList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

