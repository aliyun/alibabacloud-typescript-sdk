// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListAllSwimmingLaneGroupsResponseBodyDataApps } from "./ListAllSwimmingLaneGroupsResponseBodyDataApps";
import { ListAllSwimmingLaneGroupsResponseBodyDataEntryApp } from "./ListAllSwimmingLaneGroupsResponseBodyDataEntryApp";


export class ListAllSwimmingLaneGroupsResponseBodyData extends $dara.Model {
  appIds?: string[];
  apps?: ListAllSwimmingLaneGroupsResponseBodyDataApps[];
  /**
   * @example
   * 0
   */
  canaryModel?: number;
  entryApp?: ListAllSwimmingLaneGroupsResponseBodyDataEntryApp;
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
   * 2074
   */
  groupId?: number;
  /**
   * @example
   * mse-test
   */
  groupName?: string;
  /**
   * @example
   * sae-test
   */
  mseNamespaceId?: string;
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
      apps: 'Apps',
      canaryModel: 'CanaryModel',
      entryApp: 'EntryApp',
      entryAppId: 'EntryAppId',
      entryAppType: 'EntryAppType',
      groupId: 'GroupId',
      groupName: 'GroupName',
      mseNamespaceId: 'MseNamespaceId',
      namespaceId: 'NamespaceId',
      swimVersion: 'SwimVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appIds: { 'type': 'array', 'itemType': 'string' },
      apps: { 'type': 'array', 'itemType': ListAllSwimmingLaneGroupsResponseBodyDataApps },
      canaryModel: 'number',
      entryApp: ListAllSwimmingLaneGroupsResponseBodyDataEntryApp,
      entryAppId: 'string',
      entryAppType: 'string',
      groupId: 'number',
      groupName: 'string',
      mseNamespaceId: 'string',
      namespaceId: 'string',
      swimVersion: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.appIds)) {
      $dara.Model.validateArray(this.appIds);
    }
    if(Array.isArray(this.apps)) {
      $dara.Model.validateArray(this.apps);
    }
    if(this.entryApp && typeof (this.entryApp as any).validate === 'function') {
      (this.entryApp as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

