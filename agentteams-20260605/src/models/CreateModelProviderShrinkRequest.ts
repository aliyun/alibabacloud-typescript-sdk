// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateModelProviderShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  address?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  apiKeysShrink?: string;
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * RUNNING
   */
  provider?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      apiKeysShrink: 'ApiKeys',
      clientToken: 'ClientToken',
      description: 'Description',
      instanceId: 'InstanceId',
      name: 'Name',
      protocolsShrink: 'Protocols',
      provider: 'Provider',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      apiKeysShrink: 'string',
      clientToken: 'string',
      description: 'string',
      instanceId: 'string',
      name: 'string',
      protocolsShrink: 'string',
      provider: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

