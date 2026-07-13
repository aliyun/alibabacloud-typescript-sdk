// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMcpShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  addressesShrink?: string;
  authConfig?: string;
  authEnabled?: boolean;
  clientToken?: string;
  createType?: string;
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
  protocol?: string;
  swaggerConfig?: string;
  static names(): { [key: string]: string } {
    return {
      addressesShrink: 'Addresses',
      authConfig: 'AuthConfig',
      authEnabled: 'AuthEnabled',
      clientToken: 'ClientToken',
      createType: 'CreateType',
      description: 'Description',
      instanceId: 'InstanceId',
      name: 'Name',
      protocol: 'Protocol',
      swaggerConfig: 'SwaggerConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressesShrink: 'string',
      authConfig: 'string',
      authEnabled: 'boolean',
      clientToken: 'string',
      createType: 'string',
      description: 'string',
      instanceId: 'string',
      name: 'string',
      protocol: 'string',
      swaggerConfig: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

