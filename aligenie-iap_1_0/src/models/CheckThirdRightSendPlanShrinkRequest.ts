// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckThirdRightSendPlanShrinkRequest extends $dara.Model {
  /**
   * @example
   * cc
   */
  bizGroup?: string;
  /**
   * @example
   * ailabs
   */
  bizType?: string;
  /**
   * @example
   * {}
   */
  extendInfoShrink?: string;
  /**
   * @example
   * 01000019100307010000600
   */
  sn?: string;
  /**
   * @example
   * 1
   */
  supplierId?: number;
  static names(): { [key: string]: string } {
    return {
      bizGroup: 'BizGroup',
      bizType: 'BizType',
      extendInfoShrink: 'ExtendInfo',
      sn: 'Sn',
      supplierId: 'SupplierId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizGroup: 'string',
      bizType: 'string',
      extendInfoShrink: 'string',
      sn: 'string',
      supplierId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

