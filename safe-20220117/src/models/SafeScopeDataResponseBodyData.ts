// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SafeScopeDataResponseBodyDataPagination } from "./SafeScopeDataResponseBodyDataPagination";


export class SafeScopeDataResponseBodyData extends $dara.Model {
  data?: any[];
  extraInfo?: { [key: string]: string };
  pagination?: SafeScopeDataResponseBodyDataPagination;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      extraInfo: 'ExtraInfo',
      pagination: 'Pagination',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': 'any' },
      extraInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      pagination: SafeScopeDataResponseBodyDataPagination,
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
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

