// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryBlockEventResponseBodyDataDataInfo } from "./QueryBlockEventResponseBodyDataDataInfo";
import { QueryBlockEventResponseBodyDataPagination } from "./QueryBlockEventResponseBodyDataPagination";


export class QueryBlockEventResponseBodyData extends $dara.Model {
  dataInfo?: QueryBlockEventResponseBodyDataDataInfo[];
  extraInfo?: { [key: string]: string };
  pagination?: QueryBlockEventResponseBodyDataPagination;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      dataInfo: 'DataInfo',
      extraInfo: 'ExtraInfo',
      pagination: 'Pagination',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataInfo: { 'type': 'array', 'itemType': QueryBlockEventResponseBodyDataDataInfo },
      extraInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      pagination: QueryBlockEventResponseBodyDataPagination,
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.dataInfo)) {
      $dara.Model.validateArray(this.dataInfo);
    }
    if(this.extraInfo) {
      $dara.Model.validateMap(this.extraInfo);
    }
    if(this.pagination && typeof (this.pagination as any).validate === 'function') {
      (this.pagination as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

