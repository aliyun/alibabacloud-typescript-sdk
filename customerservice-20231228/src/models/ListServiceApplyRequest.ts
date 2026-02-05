// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListServiceApplyRequest extends $dara.Model {
  applyType?: string[];
  endDate?: number;
  pageNum?: number;
  pageSize?: number;
  productCode?: number;
  startDate?: number;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      applyType: 'applyType',
      endDate: 'endDate',
      pageNum: 'pageNum',
      pageSize: 'pageSize',
      productCode: 'productCode',
      startDate: 'startDate',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyType: { 'type': 'array', 'itemType': 'string' },
      endDate: 'number',
      pageNum: 'number',
      pageSize: 'number',
      productCode: 'number',
      startDate: 'number',
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.applyType)) {
      $dara.Model.validateArray(this.applyType);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

