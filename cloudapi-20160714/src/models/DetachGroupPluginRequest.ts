// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DetachGroupPluginRequest extends $dara.Model {
  /**
   * @remarks
   * API group ID
   * 
   * This parameter is required.
   * 
   * @example
   * 0009db9c828549768a200320714b8930
   */
  groupId?: string;
  /**
   * @remarks
   * API Gateway plugin ID
   * 
   * This parameter is required.
   * 
   * @example
   * a96926e82f994915a8da40a119374537
   */
  pluginId?: string;
  securityToken?: string;
  /**
   * @remarks
   * Specify the environment of the API to operate on.
   * 
   * - **RELEASE**: Production
   * - **PRE**: Pre-release
   * - **TEST**: Test
   * 
   * This parameter is required.
   * 
   * @example
   * RELEASE
   */
  stageName?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      pluginId: 'PluginId',
      securityToken: 'SecurityToken',
      stageName: 'StageName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      pluginId: 'string',
      securityToken: 'string',
      stageName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

