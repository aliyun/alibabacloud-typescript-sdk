// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyApplicationEndpointAddressShrinkRequest extends $dara.Model {
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
  newPortsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      endpointId: 'EndpointId',
      netType: 'NetType',
      newConnectionStringPrefix: 'NewConnectionStringPrefix',
      newPortsShrink: 'NewPorts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      endpointId: 'string',
      netType: 'string',
      newConnectionStringPrefix: 'string',
      newPortsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

