// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCallCenterProviderRequest extends $dara.Model {
  /**
   * @remarks
   * The called number used during transfer when the transfer mode is set to Bridge.
   * 
   * @example
   * 153*********
   */
  destination?: string;
  /**
   * @remarks
   * The display name of the service provider.
   * 
   * @example
   * Cloud Call Center internal service provider
   */
  displayName?: string;
  /**
   * @remarks
   * The associated data.
   * >Notice: Format: k1=v1;k2=v2.</notice>
   * 
   * @example
   * key1=value1
   */
  extras?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * 36e9a4cd-a821-4f78-86fa-a9a4aefeea2e
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the service provider.
   * 
   * @example
   * Cloud Call Center internal service provider
   */
  name?: string;
  /**
   * @remarks
   * The calling number used during transfer when the transfer mode is set to Bridge.
   * 
   * @example
   * 010****
   */
  originator?: string;
  /**
   * @remarks
   * The ID of the agent service provider.
   * 
   * @example
   * xxxxxxxxx
   */
  providerId?: string;
  /**
   * @remarks
   * The provider type. Valid values:
   * > 
   * > - CCC: Cloud Call Center.
   * > - CUSTOM: Customer-owned call center.
   * 
   * @example
   * CCC
   */
  providerType?: string;
  /**
   * @remarks
   * The Refer address.
   * 
   * @example
   * -
   */
  referTo?: string;
  /**
   * @remarks
   * The trunk ID.
   * 
   * @example
   * trunk-xxx
   */
  trunkId?: string;
  static names(): { [key: string]: string } {
    return {
      destination: 'Destination',
      displayName: 'DisplayName',
      extras: 'Extras',
      instanceId: 'InstanceId',
      name: 'Name',
      originator: 'Originator',
      providerId: 'ProviderId',
      providerType: 'ProviderType',
      referTo: 'ReferTo',
      trunkId: 'TrunkId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destination: 'string',
      displayName: 'string',
      extras: 'string',
      instanceId: 'string',
      name: 'string',
      originator: 'string',
      providerId: 'string',
      providerType: 'string',
      referTo: 'string',
      trunkId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

