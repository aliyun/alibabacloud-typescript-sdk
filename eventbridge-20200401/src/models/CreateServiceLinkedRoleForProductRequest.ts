// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateServiceLinkedRoleForProductRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the cloud service or the name of the service-linked role with which the cloud service is associated.
   * 
   * This parameter is required.
   * 
   * @example
   * AliyunServiceRoleForEventBridgeSendToMNS
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

