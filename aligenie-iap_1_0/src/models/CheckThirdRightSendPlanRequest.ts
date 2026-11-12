// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckThirdRightSendPlanRequest extends $dara.Model {
  /**
   * @remarks
   * Device group
   * 
   * @example
   * cc
   */
  bizGroup?: string;
  /**
   * @remarks
   * Device type
   * 
   * @example
   * ailabs
   */
  bizType?: string;
  /**
   * @remarks
   * Extension field
   * 
   * @example
   * {}
   */
  extendInfo?: { [key: string]: any };
  /**
   * @remarks
   * Device SN
   * 
   * @example
   * 01000019100307010000600
   */
  sn?: string;
  /**
   * @remarks
   * Supplier ID
   * 
   * @example
   * 1
   */
  supplierId?: number;
  static names(): { [key: string]: string } {
    return {
      bizGroup: 'BizGroup',
      bizType: 'BizType',
      extendInfo: 'ExtendInfo',
      sn: 'Sn',
      supplierId: 'SupplierId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizGroup: 'string',
      bizType: 'string',
      extendInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      sn: 'string',
      supplierId: 'number',
    };
  }

  validate() {
    if(this.extendInfo) {
      $dara.Model.validateMap(this.extendInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

