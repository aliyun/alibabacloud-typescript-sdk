// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateEnvironmentRequest extends $dara.Model {
  /**
   * @remarks
   * Environment alias.
   * 
   * This parameter is required.
   * 
   * @example
   * 测试环境
   */
  alias?: string;
  /**
   * @remarks
   * Description of the environment, which can include information such as the purpose of the environment and its owner.
   * 
   * @example
   * 这是xxx的xx项目测试环境
   */
  description?: string;
  /**
   * @remarks
   * Gateway ID.
   * 
   * This parameter is required.
   * 
   * @example
   * gw-cq7l5s5lhtgi6qasrdc0
   */
  gatewayId?: string;
  /**
   * @remarks
   * Environment name.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmycs5expl7oq
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

