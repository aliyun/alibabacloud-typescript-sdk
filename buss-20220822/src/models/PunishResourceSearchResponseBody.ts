// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { PunishResourceSearchResponseBodyDataList } from "./PunishResourceSearchResponseBodyDataList";


export class PunishResourceSearchResponseBody extends $dara.Model {
  code?: string;
  dataList?: PunishResourceSearchResponseBodyDataList[];
  message?: string;
  success?: string;
  totalCount?: number;
  viewCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      dataList: 'DataList',
      message: 'Message',
      success: 'Success',
      totalCount: 'TotalCount',
      viewCount: 'ViewCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      dataList: { 'type': 'array', 'itemType': PunishResourceSearchResponseBodyDataList },
      message: 'string',
      success: 'string',
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

