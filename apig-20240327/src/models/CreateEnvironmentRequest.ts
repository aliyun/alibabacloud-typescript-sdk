// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateEnvironmentRequest extends $dara.Model {
  /**
   * @remarks
   * The environment alias.
   * 
   * This parameter is required.
   * 
   * @example
   * 测试环境
   */
  alias?: string;
  /**
   * @remarks
   * The description of the environment. You can specify information such as the purpose and owner of the environment.
   * 
   * @example
   * 这是xxx的xx项目测试环境
   */
  description?: string;
  /**
   * @remarks
   * The gateway ID.
   * 
   * This parameter is required.
   * 
   * @example
   * gw-cq7l5s5lhtgi6qasrdc0
   */
  gatewayId?: string;
  /**
   * @remarks
   * The environment name.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The resource group ID.
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

