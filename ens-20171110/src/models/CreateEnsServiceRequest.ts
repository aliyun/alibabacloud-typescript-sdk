// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateEnsServiceRequest extends $dara.Model {
  /**
   * @remarks
   * The required resource ID. Only a single ID is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * ens-20190806****
   */
  ensServiceId?: string;
  /**
   * @remarks
   * The operation to perform after previewing the creation of the edge service. Valid values:
   * 
   * - **Buy**: Create.
   * 
   * - **Upgrade**: Update.
   * 
   * This parameter is required.
   * 
   * @example
   * Buy
   */
  orderType?: string;
  static names(): { [key: string]: string } {
    return {
      ensServiceId: 'EnsServiceId',
      orderType: 'OrderType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ensServiceId: 'string',
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

