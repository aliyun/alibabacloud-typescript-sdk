// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AttachPluginRequest extends $dara.Model {
  /**
   * @remarks
   * The number of the API to be bound.
   * 
   * @example
   * 8afff6c8c4c6447abb035812e4d66b65
   */
  apiId?: string;
  /**
   * @remarks
   * The number of the API to be operated. Separate multiple numbers with commas (,). A maximum of 100 numbers can be entered.
   * 
   * @example
   * xxx
   */
  apiIds?: string;
  /**
   * @remarks
   * The ID of the API group that contains the API to which the plug-in is to be bound.
   * 
   * @example
   * 285bb759342649a1b70c2093a772e087
   */
  groupId?: string;
  /**
   * @remarks
   * The ID of the plug-in to be bound.
   * 
   * This parameter is required.
   * 
   * @example
   * 9a3f1a5279434f2ba74ccd91c295af9f
   */
  pluginId?: string;
  securityToken?: string;
  /**
   * @remarks
   * The name of the runtime environment. Valid values:
   * 
   * *   **RELEASE**
   * *   **PRE: the pre-release environment**
   * *   **TEST**
   * 
   * This parameter is required.
   * 
   * @example
   * TEST
   */
  stageName?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      apiIds: 'ApiIds',
      groupId: 'GroupId',
      pluginId: 'PluginId',
      securityToken: 'SecurityToken',
      stageName: 'StageName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
      apiIds: 'string',
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

