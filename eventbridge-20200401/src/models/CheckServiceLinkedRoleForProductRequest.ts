// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckServiceLinkedRoleForProductRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the service-linked role (SLR) for the cloud product.
   * 
   * @example
   * AliyunServiceRoleForEventBridgeConnectVPC
   */
  productName?: string;
  static names(): { [key: string]: string } {
    return {
      productName: 'ProductName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

