// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCaseDetailRequest extends $dara.Model {
  /**
   * @remarks
   * The case ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 35fdb65e-9c20-42af-9d89-a24068547cb6
   */
  caseId?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 4eee9bf8-1319-468f-ac82-83c50ae389f8
   */
  instanceId?: string;
  /**
   * @remarks
   * The product code.
   * 
   * @example
   * OUTBOUND_BOT
   */
  productCode?: string;
  static names(): { [key: string]: string } {
    return {
      caseId: 'CaseId',
      instanceId: 'InstanceId',
      productCode: 'ProductCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      caseId: 'string',
      instanceId: 'string',
      productCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

