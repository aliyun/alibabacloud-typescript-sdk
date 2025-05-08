// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteEnsSaleControlRequestSaleControls extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  moduleCode?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  orderType?: string;
  static names(): { [key: string]: string } {
    return {
      moduleCode: 'ModuleCode',
      orderType: 'OrderType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      moduleCode: 'string',
      orderType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

