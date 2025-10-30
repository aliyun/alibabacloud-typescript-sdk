// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateOrUpdateSwimmingLaneGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the baseline application.
   */
  appIds?: string[];
  /**
   * @remarks
   * The unique ID of the corresponding gateway.
   * 
   * @example
   * mse_ingresspost-cn-axc49******
   */
  entryAppId?: string;
  /**
   * @remarks
   * The application entry type (gateway type).
   * 
   * *   **apig:** cloud-native API Gateway
   * *   **mse:** Java Services Gateway
   * *   **mse-gw:** MSE cloud-native Gateway
   * 
   * @example
   * mse-gw
   */
  entryAppType?: string;
  /**
   * @remarks
   * The ID of the lane group. This is required when you update a lane group.
   * 
   * @example
   * 2047
   */
  groupId?: number;
  /**
   * @remarks
   * The name of the lane group.
   * 
   * @example
   * mse-test
   */
  groupName?: string;
  /**
   * @remarks
   * The ID of a namespace.
   * 
   * @example
   * cn-beijing:test
   */
  namespaceId?: string;
  /**
   * @remarks
   * The end-to-end grayscale version. Valid values: 0 and 2 (recommended).
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

