// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryRegionAzResponseBodyDataDataInfo } from "./QueryRegionAzResponseBodyDataDataInfo";
import { QueryRegionAzResponseBodyDataPagination } from "./QueryRegionAzResponseBodyDataPagination";


export class QueryRegionAzResponseBodyData extends $dara.Model {
  dataInfo?: QueryRegionAzResponseBodyDataDataInfo[];
  pagination?: QueryRegionAzResponseBodyDataPagination;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      dataInfo: 'DataInfo',
      pagination: 'Pagination',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataInfo: { 'type': 'array', 'itemType': QueryRegionAzResponseBodyDataDataInfo },
      pagination: QueryRegionAzResponseBodyDataPagination,
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.dataInfo)) {
      $dara.Model.validateArray(this.dataInfo);
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

