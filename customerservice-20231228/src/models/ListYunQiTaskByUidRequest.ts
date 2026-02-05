// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListYunQiTaskByUidRequest extends $dara.Model {
  createTimeEnd?: number;
  createTimeStart?: number;
  freeOrderApplyCodes?: string[];
  freeOrderApplyIds?: number[];
  orderIds?: number[];
  pageNum?: number;
  pageSize?: number;
  statusList?: string[];
  static names(): { [key: string]: string } {
    return {
      createTimeEnd: 'createTimeEnd',
      createTimeStart: 'createTimeStart',
      freeOrderApplyCodes: 'freeOrderApplyCodes',
      freeOrderApplyIds: 'freeOrderApplyIds',
      orderIds: 'orderIds',
      pageNum: 'pageNum',
      pageSize: 'pageSize',
      statusList: 'statusList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTimeEnd: 'number',
      createTimeStart: 'number',
      freeOrderApplyCodes: { 'type': 'array', 'itemType': 'string' },
      freeOrderApplyIds: { 'type': 'array', 'itemType': 'number' },
      orderIds: { 'type': 'array', 'itemType': 'number' },
      pageNum: 'number',
      pageSize: 'number',
      statusList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.freeOrderApplyCodes)) {
      $dara.Model.validateArray(this.freeOrderApplyCodes);
    }
    if(Array.isArray(this.freeOrderApplyIds)) {
      $dara.Model.validateArray(this.freeOrderApplyIds);
    }
    if(Array.isArray(this.orderIds)) {
      $dara.Model.validateArray(this.orderIds);
    }
    if(Array.isArray(this.statusList)) {
      $dara.Model.validateArray(this.statusList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

