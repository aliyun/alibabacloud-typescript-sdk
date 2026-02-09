// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateEnvironmentRequest extends $dara.Model {
  /**
   * @remarks
   * The request body.
   * 
   * This parameter is required.
   * 
   * @example
   * The environment name.
   */
  alias?: string;
  /**
   * @remarks
   * The environment alias.
   * 
   * @example
   * Test environment
   */
  description?: string;
  /**
   * @remarks
   * The environment description, such as its purpose and owner.
   * 
   * This parameter is required.
   * 
   * @example
   * gw-cq7l5s5lhtgi6qasrdc0
   */
  gatewayId?: string;
  /**
   * @remarks
   * Create environment.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * Testing environment for xx project of xxx
   * 
   * @example
   * rg-ahr5uil8raz0rq3b
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      alias: 'alias',
      description: 'description',
      gatewayId: 'gatewayId',
      name: 'name',
      resourceGroupId: 'resourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: 'string',
      description: 'string',
      gatewayId: 'string',
      name: 'string',
      resourceGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

