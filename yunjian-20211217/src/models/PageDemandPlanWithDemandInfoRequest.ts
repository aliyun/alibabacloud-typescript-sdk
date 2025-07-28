// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PageDemandPlanWithDemandInfoRequest extends $dara.Model {
  approvalStatus?: string;
  createTimeEnd?: string;
  createTimeStart?: string;
  creatorStaffId?: string;
  demandDeliveryStatus?: string;
  demandId?: number[];
  demandPlanId?: number[];
  demandPlanStatus?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  operator?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  pageNum?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  pageSize?: number;
  roCode?: string;
  static names(): { [key: string]: string } {
    return {
      approvalStatus: 'approvalStatus',
      createTimeEnd: 'createTimeEnd',
      createTimeStart: 'createTimeStart',
      creatorStaffId: 'creatorStaffId',
      demandDeliveryStatus: 'demandDeliveryStatus',
      demandId: 'demandId',
      demandPlanId: 'demandPlanId',
      demandPlanStatus: 'demandPlanStatus',
      operator: 'operator',
      pageNum: 'pageNum',
      pageSize: 'pageSize',
      roCode: 'roCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      approvalStatus: 'string',
      createTimeEnd: 'string',
      createTimeStart: 'string',
      creatorStaffId: 'string',
      demandDeliveryStatus: 'string',
      demandId: { 'type': 'array', 'itemType': 'number' },
      demandPlanId: { 'type': 'array', 'itemType': 'number' },
      demandPlanStatus: 'string',
      operator: 'string',
      pageNum: 'number',
      pageSize: 'number',
      roCode: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.demandId)) {
      $dara.Model.validateArray(this.demandId);
    }
    if(Array.isArray(this.demandPlanId)) {
      $dara.Model.validateArray(this.demandPlanId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

