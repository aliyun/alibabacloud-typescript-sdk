// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BtripBillInfoAdjustRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123456
   */
  primaryId?: number;
  /**
   * @example
   * GA15131
   */
  thirdPartCostCenterId?: string;
  /**
   * @example
   * GA15131
   */
  thirdPartDepartmentId?: string;
  /**
   * @example
   * GA15131
   */
  thirdPartInvoiceId?: string;
  /**
   * @example
   * GA15131
   */
  thirdPartProjectId?: string;
  /**
   * @example
   * 123
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      primaryId: 'primary_id',
      thirdPartCostCenterId: 'third_part_cost_center_id',
      thirdPartDepartmentId: 'third_part_department_id',
      thirdPartInvoiceId: 'third_part_invoice_id',
      thirdPartProjectId: 'third_part_project_id',
      userId: 'user_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      primaryId: 'number',
      thirdPartCostCenterId: 'string',
      thirdPartDepartmentId: 'string',
      thirdPartInvoiceId: 'string',
      thirdPartProjectId: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

