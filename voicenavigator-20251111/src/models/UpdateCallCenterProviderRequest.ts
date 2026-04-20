// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCallCenterProviderRequest extends $dara.Model {
  /**
   * @example
   * 153*********
   */
  destination?: string;
  displayName?: string;
  /**
   * @example
   * key1=value1
   */
  extras?: string;
  /**
   * @example
   * 36e9a4cd-a821-4f78-86fa-a9a4aefeea2e
   */
  instanceId?: string;
  name?: string;
  /**
   * @example
   * 010****
   */
  originator?: string;
  /**
   * @example
   * xxxxxxxxx
   */
  providerId?: string;
  /**
   * @example
   * CCC
   */
  providerType?: string;
  /**
   * @example
   * -
   */
  referTo?: string;
  /**
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

