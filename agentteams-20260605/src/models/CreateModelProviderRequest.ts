// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateModelProviderRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  address?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  apiKeys?: string[];
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
  protocols?: string[];
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
      apiKeys: 'ApiKeys',
      clientToken: 'ClientToken',
      description: 'Description',
      instanceId: 'InstanceId',
      name: 'Name',
      protocols: 'Protocols',
      provider: 'Provider',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      apiKeys: { 'type': 'array', 'itemType': 'string' },
      clientToken: 'string',
      description: 'string',
      instanceId: 'string',
      name: 'string',
      protocols: { 'type': 'array', 'itemType': 'string' },
      provider: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.apiKeys)) {
      $dara.Model.validateArray(this.apiKeys);
    }
    if(Array.isArray(this.protocols)) {
      $dara.Model.validateArray(this.protocols);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

