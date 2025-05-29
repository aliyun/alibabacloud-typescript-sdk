// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDeviceGatewayRequest extends $dara.Model {
  /**
   * @example
   * 192.168.0.1
   */
  clientIp?: string;
  /**
   * @example
   * 3600
   */
  expire?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 24611****70597051-cn-beijing
   */
  id?: string;
  ownerId?: number;
  static names(): { [key: string]: string } {
    return {
      clientIp: 'ClientIp',
      expire: 'Expire',
      id: 'Id',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientIp: 'string',
      expire: 'number',
      id: 'string',
      ownerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

