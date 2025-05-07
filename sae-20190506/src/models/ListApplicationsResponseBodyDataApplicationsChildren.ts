// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListApplicationsResponseBodyDataApplicationsChildrenTags } from "./ListApplicationsResponseBodyDataApplicationsChildrenTags";


export class ListApplicationsResponseBodyDataApplicationsChildren extends $dara.Model {
  appDeletingStatus?: boolean;
  appDescription?: string;
  appId?: string;
  appName?: string;
  appType?: string;
  baseAppId?: string;
  cpu?: number;
  instances?: number;
  mem?: number;
  mseEnabled?: boolean;
  namespaceId?: string;
  namespaceName?: string;
  newSaeVersion?: string;
  programmingLanguage?: string;
  regionId?: string;
  runningInstances?: number;
  scaleRuleEnabled?: boolean;
  scaleRuleType?: string;
  tags?: ListApplicationsResponseBodyDataApplicationsChildrenTags[];
  static names(): { [key: string]: string } {
    return {
      appDeletingStatus: 'AppDeletingStatus',
      appDescription: 'AppDescription',
      appId: 'AppId',
      appName: 'AppName',
      appType: 'AppType',
      baseAppId: 'BaseAppId',
      cpu: 'Cpu',
      instances: 'Instances',
      mem: 'Mem',
      mseEnabled: 'MseEnabled',
      namespaceId: 'NamespaceId',
      namespaceName: 'NamespaceName',
      newSaeVersion: 'NewSaeVersion',
      programmingLanguage: 'ProgrammingLanguage',
      regionId: 'RegionId',
      runningInstances: 'RunningInstances',
      scaleRuleEnabled: 'ScaleRuleEnabled',
      scaleRuleType: 'ScaleRuleType',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appDeletingStatus: 'boolean',
      appDescription: 'string',
      appId: 'string',
      appName: 'string',
      appType: 'string',
      baseAppId: 'string',
      cpu: 'number',
      instances: 'number',
      mem: 'number',
      mseEnabled: 'boolean',
      namespaceId: 'string',
      namespaceName: 'string',
      newSaeVersion: 'string',
      programmingLanguage: 'string',
      regionId: 'string',
      runningInstances: 'number',
      scaleRuleEnabled: 'boolean',
      scaleRuleType: 'string',
      tags: { 'type': 'array', 'itemType': ListApplicationsResponseBodyDataApplicationsChildrenTags },
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

