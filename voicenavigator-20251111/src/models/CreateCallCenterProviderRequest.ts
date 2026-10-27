// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCallCenterProviderRequest extends $dara.Model {
  /**
   * @remarks
   * The callee number during the transfer. This parameter is required when the transfer method is Bridge.
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
   * Internal service provider of Cloud Call Center
   */
  displayName?: string;
  /**
   * @remarks
   * The attached data.
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
   * Internal service provider of Cloud Call Center
   */
  name?: string;
  /**
   * @remarks
   * The caller number during the transfer. This parameter is required when the transfer method is Bridge.
   * 
   * @example
   * 010****
   */
  originator?: string;
  /**
   * @remarks
   * The provider type.
   * > 
   * > - CCC: Cloud Call Center.
   * >- CUSTOM: Customer-owned call center.
   * 
   * @example
   * CCC
   */
  providerType?: string;
  /**
   * @remarks
   * The Refer address.<notice>This parameter is required when the transfer method is Refer.</notice>
   * 
   * @example
   * -
   */
  referTo?: string;
  /**
   * @remarks
   * The trunk ID.
   * >Notice: This parameter is required when the transfer method is Bridge.</notice>
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

