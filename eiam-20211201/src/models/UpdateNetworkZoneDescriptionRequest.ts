// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateNetworkZoneDescriptionRequest extends $dara.Model {
  /**
   * @remarks
   * A client token. It is used to ensure the idempotence of the request.
   * 
   * @example
   * client-token-examplexxxx
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the network zone.
   * 
   * This parameter is required.
   * 
   * @example
   * Test description
   */
  description?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The network zone ID.
   * 
   * This parameter is required.
   * 
   * @example
   * network_m5wsaclfvfrf5623xnirgxxxxx
   */
  networkZoneId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      description: 'Description',
      instanceId: 'InstanceId',
      networkZoneId: 'NetworkZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      description: 'string',
      instanceId: 'string',
      networkZoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

