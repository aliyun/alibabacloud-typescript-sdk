// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyApplicationEndpointAddressRequestNewPorts extends $dara.Model {
  /**
   * @remarks
   * The new port value.
   * 
   * @example
   * 443
   */
  newPort?: number;
  /**
   * @remarks
   * The old port value.
   * 
   * @example
   * 18789
   */
  oldPort?: number;
  /**
   * @remarks
   * The port name.
   * 
   * @example
   * polarclaw
   */
  portName?: string;
  static names(): { [key: string]: string } {
    return {
      newPort: 'NewPort',
      oldPort: 'OldPort',
      portName: 'PortName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      newPort: 'number',
      oldPort: 'number',
      portName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyApplicationEndpointAddressRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pa-**************
   */
  applicationId?: string;
  /**
   * @remarks
   * The endpoint ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pa-**************
   */
  endpointId?: string;
  /**
   * @remarks
   * The network type of the endpoint address. Valid values: 
   * 
   * * **Public**: public network.
   * * **Private**: private network.
   * 
   * This parameter is required.
   * 
   * @example
   * Public
   */
  netType?: string;
  /**
   * @remarks
   * The new endpoint prefix.
   * 
   * @example
   * xg06iror0l
   */
  newConnectionStringPrefix?: string;
  /**
   * @remarks
   * The list of new ports.
   */
  newPorts?: ModifyApplicationEndpointAddressRequestNewPorts[];
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      endpointId: 'EndpointId',
      netType: 'NetType',
      newConnectionStringPrefix: 'NewConnectionStringPrefix',
      newPorts: 'NewPorts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      endpointId: 'string',
      netType: 'string',
      newConnectionStringPrefix: 'string',
      newPorts: { 'type': 'array', 'itemType': ModifyApplicationEndpointAddressRequestNewPorts },
    };
  }

  validate() {
    if(Array.isArray(this.newPorts)) {
      $dara.Model.validateArray(this.newPorts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

