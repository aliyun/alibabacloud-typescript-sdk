// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SearchPunishEventsResponseBodyDataList } from "./SearchPunishEventsResponseBodyDataList";


export class SearchPunishEventsResponseBody extends $dara.Model {
  code?: string;
  dataList?: SearchPunishEventsResponseBodyDataList[];
  message?: string;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      dataList: 'DataList',
      message: 'Message',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      dataList: { 'type': 'array', 'itemType': SearchPunishEventsResponseBodyDataList },
      message: 'string',
      requestId: 'string',
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

