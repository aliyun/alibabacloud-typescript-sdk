// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetApiPathFieldConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the cloud-native API gateway.
   * 
   * @example
   * gw-123456
   */
  gatewayId?: string;
  /**
   * @remarks
   * The ID of the HTTP API.
   * 
   * @example
   * api-123456
   */
  httpApiId?: string;
  static names(): { [key: string]: string } {
    return {
      gatewayId: 'gatewayId',
      httpApiId: 'httpApiId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayId: 'string',
      httpApiId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

