// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateEnsServiceRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the resource that you want to obtain. You can specify only one ID in a request.
   * 
   * This parameter is required.
   * 
   * @example
   * ens-20190806****
   */
  ensServiceId?: string;
  /**
   * @remarks
   * The operation to perform after you preview the created edge service. Valid values:
   * 
   * *   **Buy**: create
   * *   **Upgrade**: change
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

