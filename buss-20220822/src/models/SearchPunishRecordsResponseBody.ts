// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SearchPunishRecordsResponseBodyDataList } from "./SearchPunishRecordsResponseBodyDataList";


export class SearchPunishRecordsResponseBody extends $dara.Model {
  code?: string;
  dataList?: SearchPunishRecordsResponseBodyDataList[];
  message?: string;
  requestId?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      dataList: 'DataList',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      dataList: { 'type': 'array', 'itemType': SearchPunishRecordsResponseBodyDataList },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
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

