// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdatePublicNetworkStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The CIDR blocks.
   * 
   * @example
   * ``192.168.**.**``/24,``172.1.**.**``/16
   */
  cidr?: string;
  /**
   * @remarks
   * The component type. Valid values:
   * 
   * *   Proxy
   * 
   * This parameter is required.
   * 
   * @example
   * Proxy
   */
  componentType?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * c-123xxx
   */
  instanceId?: string;
  /**
   * @remarks
   * Enable /disable the Internet.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  publicNetworkEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      cidr: 'Cidr',
      componentType: 'ComponentType',
      instanceId: 'InstanceId',
      publicNetworkEnabled: 'PublicNetworkEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidr: 'string',
      componentType: 'string',
      instanceId: 'string',
      publicNetworkEnabled: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

