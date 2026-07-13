// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateModelProviderShrinkRequest extends $dara.Model {
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
  protocolsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      apiKeysShrink: 'ApiKeys',
      clientToken: 'ClientToken',
      description: 'Description',
      id: 'Id',
      instanceId: 'InstanceId',
      protocolsShrink: 'Protocols',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      apiKeysShrink: 'string',
      clientToken: 'string',
      description: 'string',
      id: 'string',
      instanceId: 'string',
      protocolsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

