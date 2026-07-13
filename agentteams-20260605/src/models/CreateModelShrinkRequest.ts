// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateModelShrinkRequest extends $dara.Model {
  clientToken?: string;
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * AgentTeams
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  protocolsShrink?: string;
  provider?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  providerId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  providerName?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      description: 'Description',
      instanceId: 'InstanceId',
      name: 'Name',
      protocolsShrink: 'Protocols',
      provider: 'Provider',
      providerId: 'ProviderId',
      providerName: 'ProviderName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      description: 'string',
      instanceId: 'string',
      name: 'string',
      protocolsShrink: 'string',
      provider: 'string',
      providerId: 'string',
      providerName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

