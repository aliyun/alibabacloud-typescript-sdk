// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateOrUpdateSwimmingLaneGroupShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the baseline applications.
   */
  appIdsShrink?: string;
  /**
   * @remarks
   * The unique ID of the corresponding gateway.
   * 
   * @example
   * gw-ea43f648ac46485aa8c894ba1b******
   */
  entryAppId?: string;
  /**
   * @remarks
   * The application entry type (gateway type). Valid values:
   * 
   * - **apig**: Cloud-native API gateway.
   * 
   * - **mse**: Java service gateway.
   * 
   * - **mse-gw**: MSE cloud-native gateway.
   * 
   * @example
   * mse-gw
   */
  entryAppType?: string;
  /**
   * @remarks
   * The ID of the traffic lane group. Required when updating a traffic lane group.
   * 
   * @example
   * 110272
   */
  groupId?: number;
  /**
   * @remarks
   * The name of the traffic lane group.
   * 
   * @example
   * mse-test
   */
  groupName?: string;
  /**
   * @remarks
   * The namespace ID.
   * 
   * @example
   * cn-beijing:test
   */
  namespaceId?: string;
  /**
   * @remarks
   * The end-to-end canary release version. Valid values: 0 and 2 (recommended).
   * 
   * @example
   * 2
   */
  swimVersion?: string;
  static names(): { [key: string]: string } {
    return {
      appIdsShrink: 'AppIds',
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
      appIdsShrink: 'string',
      entryAppId: 'string',
      entryAppType: 'string',
      groupId: 'number',
      groupName: 'string',
      namespaceId: 'string',
      swimVersion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

