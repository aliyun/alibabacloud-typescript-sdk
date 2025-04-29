// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HotelOrderInfoQueryResponseBodyModuleRoomTraverInfoTraverInfosTripCostCenter extends $dara.Model {
  /**
   * @example
   * 323431
   */
  costCenterCode?: string;
  /**
   * @example
   * 2312
   */
  costCenterId?: string;
  costCenterName?: string;
  /**
   * @example
   * {"extraKey":"extraVal"}
   */
  externalExtField?: string;
  /**
   * @example
   * 1
   */
  feeType?: number;
  /**
   * @example
   * 123332
   */
  invoiceId?: number;
  invoiceTitle?: string;
  /**
   * @example
   * 1002
   */
  projectCode?: string;
  projectTitle?: string;
  static names(): { [key: string]: string } {
    return {
      costCenterCode: 'cost_center_code',
      costCenterId: 'cost_center_id',
      costCenterName: 'cost_center_name',
      externalExtField: 'external_ext_field',
      feeType: 'fee_type',
      invoiceId: 'invoice_id',
      invoiceTitle: 'invoice_title',
      projectCode: 'project_code',
      projectTitle: 'project_title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      costCenterCode: 'string',
      costCenterId: 'string',
      costCenterName: 'string',
      externalExtField: 'string',
      feeType: 'number',
      invoiceId: 'number',
      invoiceTitle: 'string',
      projectCode: 'string',
      projectTitle: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

