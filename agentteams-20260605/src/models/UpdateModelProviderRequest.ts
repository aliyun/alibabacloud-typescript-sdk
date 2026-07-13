// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateModelProviderRequest extends $dara.Model {
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
  id?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  protocols?: string[];
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      apiKeys: 'ApiKeys',
      clientToken: 'ClientToken',
      description: 'Description',
      id: 'Id',
      instanceId: 'InstanceId',
      protocols: 'Protocols',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      apiKeys: { 'type': 'array', 'itemType': 'string' },
      clientToken: 'string',
      description: 'string',
      id: 'string',
      instanceId: 'string',
      protocols: { 'type': 'array', 'itemType': 'string' },
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

