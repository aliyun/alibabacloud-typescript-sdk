// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ProjectAddRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  code?: string;
  hasManager?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  projectName?: string;
  thirdPartCostCenterId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  thirdPartId?: string;
  thirdPartInvoiceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      hasManager: 'has_manager',
      projectName: 'project_name',
      thirdPartCostCenterId: 'third_part_cost_center_id',
      thirdPartId: 'third_part_id',
      thirdPartInvoiceId: 'third_part_invoice_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      hasManager: 'boolean',
      projectName: 'string',
      thirdPartCostCenterId: 'string',
      thirdPartId: 'string',
      thirdPartInvoiceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

