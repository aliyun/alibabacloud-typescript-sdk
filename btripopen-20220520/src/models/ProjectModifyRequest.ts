// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ProjectModifyRequest extends $dara.Model {
  /**
   * @example
   * pro_code
   */
  code?: string;
  /**
   * @example
   * false
   */
  hasManager?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 商旅出差项目
   */
  projectName?: string;
  /**
   * @example
   * 234
   */
  thirdPartCostCenterId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 340049
   */
  thirdPartId?: string;
  /**
   * @example
   * 123
   */
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

