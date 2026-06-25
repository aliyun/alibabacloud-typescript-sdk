// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateOrUpdateSwimmingLaneGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the baseline applications.
   */
  appIds?: string[];
  /**
   * @remarks
   * The unique ID of the gateway.
   * 
   * @example
   * gw-ea43f648ac46485aa8c894ba1b******
   */
  entryAppId?: string;
  /**
   * @remarks
   * The type of the gateway that acts as the application\\"s entry point.
   * 
   * - **apig:** cloud-native API gateway
   * 
   * - **mse:** java service gateway
   * 
   * - **mse-gw:** MSE Cloud Native Gateway
   * 
   * @example
   * mse-gw
   */
  entryAppType?: string;
  /**
   * @remarks
   * The ID of the swimming lane group. This parameter is required when you update a swimming lane group.
   * 
   * @example
   * 110272
   */
  groupId?: number;
  /**
   * @remarks
   * The name of the swimming lane group.
   * 
   * @example
   * mse-test
   */
  groupName?: string;
  /**
   * @remarks
   * The ID of the namespace.
   * 
   * @example
   * cn-beijing:test
   */
  namespaceId?: string;
  /**
   * @remarks
   * The version of the end-to-end canary release. Valid values: 0 and 2. The value 2 is recommended.
   * 
   * @example
   * 2
   */
  swimVersion?: string;
  static names(): { [key: string]: string } {
    return {
      appIds: 'AppIds',
      entryAppId: 'EntryAppId',
      entryAppType: 'EntryAppType',
      groupId: 'GroupId',
      groupName: 'GroupName',
      namespaceId: 'NamespaceId',
      swimVersion: 'SwimVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appIds: { 'type': 'array', 'itemType': 'string' },
      entryAppId: 'string',
      entryAppType: 'string',
      groupId: 'number',
      groupName: 'string',
      namespaceId: 'string',
      swimVersion: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.appIds)) {
      $dara.Model.validateArray(this.appIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

