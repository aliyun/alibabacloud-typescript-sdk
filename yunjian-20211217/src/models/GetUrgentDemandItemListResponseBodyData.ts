// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetUrgentDemandItemListResponseBodyDataRecords } from "./GetUrgentDemandItemListResponseBodyDataRecords";


export class GetUrgentDemandItemListResponseBodyData extends $dara.Model {
  current?: number;
  pages?: number;
  records?: GetUrgentDemandItemListResponseBodyDataRecords[];
  size?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      current: 'current',
      pages: 'pages',
      records: 'records',
      size: 'size',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      current: 'number',
      pages: 'number',
      records: { 'type': 'array', 'itemType': GetUrgentDemandItemListResponseBodyDataRecords },
      size: 'number',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.records)) {
      $dara.Model.validateArray(this.records);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

