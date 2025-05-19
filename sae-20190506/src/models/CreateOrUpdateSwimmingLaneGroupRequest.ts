// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateOrUpdateSwimmingLaneGroupRequest extends $dara.Model {
  appIds?: string[];
  /**
   * @example
   * mse_ingresspost-cn-axc49******
   */
  entryAppId?: string;
  /**
   * @example
   * mse-gw
   */
  entryAppType?: string;
  /**
   * @example
   * 2047
   */
  groupId?: number;
  /**
   * @example
   * mse-test
   */
  groupName?: string;
  /**
   * @example
   * cn-beijing:test
   */
  namespaceId?: string;
  /**
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

