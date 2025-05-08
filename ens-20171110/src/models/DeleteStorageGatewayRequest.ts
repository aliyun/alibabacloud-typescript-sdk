// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteStorageGatewayRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the gateway.
   * 
   * This parameter is required.
   * 
   * @example
   * sgw-****
   */
  gatewayId?: string;
  static names(): { [key: string]: string } {
    return {
      gatewayId: 'GatewayId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

