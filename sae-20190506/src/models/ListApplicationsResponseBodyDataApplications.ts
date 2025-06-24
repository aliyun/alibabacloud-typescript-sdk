// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListApplicationsResponseBodyDataApplicationsChildren } from "./ListApplicationsResponseBodyDataApplicationsChildren";
import { ListApplicationsResponseBodyDataApplicationsTags } from "./ListApplicationsResponseBodyDataApplicationsTags";


export class ListApplicationsResponseBodyDataApplications extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the application is being deleted. Valid values:
   * 
   * *   **true**: The application is being deleted.
   * *   **false**: The application is not being deleted.
   * 
   * @example
   * false
   */
  appDeletingStatus?: boolean;
  /**
   * @remarks
   * The description of the application.
   * 
   * @example
   * description
   */
  appDescription?: string;
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * f7730764-d88f-4b9a-8d8e-cd8efbfe****
   */
  appId?: string;
  /**
   * @remarks
   * The application name.
   * 
   * @example
   * demo-app
   */
  appName?: string;
  appType?: string;
  baseAppId?: string;
  children?: ListApplicationsResponseBodyDataApplicationsChildren[];
  /**
   * @remarks
   * The CPU specifications that are required for each instance. Unit: millicores. This parameter cannot be set to 0. Valid values:
   * 
   * *   **500**
   * *   **1000**
   * *   **2000**
   * *   **4000**
   * *   **8000**
   * *   **16000**
   * *   **32000**
   * 
   * @example
   * 1000
   */
  cpu?: number;
  diskSize?: number;
  enableIdle?: string;
  imageUrl?: string;
  /**
   * @remarks
   * The number of application instances.
   * 
   * @example
   * 2
   */
  instances?: number;
  isStateful?: boolean;
  /**
   * @remarks
   * The memory size that is required by each instance. Unit: MB. This parameter cannot be set to 0. The values of this parameter correspond to the values of the Cpu parameter:
   * 
   * *   This parameter is set to **1024** if the Cpu parameter is set to 500 or 1000.
   * *   This parameter is set to **2048** if the Cpu parameter is set to 500, 1000, or 2000.
   * *   This parameter is set to **4096** if the Cpu parameter is set to 1000, 2000, or 4000.
   * *   This parameter is set to **8192** if the Cpu parameter is set to 2000, 4000, or 8000.
   * *   This parameter is set to **12288** if the Cpu parameter is set to 12000.
   * *   This parameter is set to **16384** if the Cpu parameter is set to 4000, 8000, or 16000.
   * *   This parameter is set to **24576** if the Cpu parameter is set to 12000.
   * *   This parameter is set to **32768** if the Cpu parameter is set to 16000.
   * *   This parameter is set to **65536** if the Cpu parameter is set to 8000, 16000, or 32000.
   * *   This parameter is set to **131072** if the Cpu parameter is set to 32000.
   * 
   * @example
   * 1024
   */
  mem?: number;
  mseEnabled?: boolean;
  mseNamespaceId?: string;
  /**
   * @remarks
   * The namespace ID.
   * 
   * @example
   * cn-beijing:demo
   */
  namespaceId?: string;
  namespaceName?: string;
  newSaeVersion?: string;
  packageUrl?: string;
  programmingLanguage?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The number of running instances.
   * 
   * @example
   * 2
   */
  runningInstances?: number;
  /**
   * @remarks
   * The tags of the application.
   */
  tags?: ListApplicationsResponseBodyDataApplicationsTags[];
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      appDeletingStatus: 'AppDeletingStatus',
      appDescription: 'AppDescription',
      appId: 'AppId',
      appName: 'AppName',
      appType: 'AppType',
      baseAppId: 'BaseAppId',
      children: 'Children',
      cpu: 'Cpu',
      diskSize: 'DiskSize',
      enableIdle: 'EnableIdle',
      imageUrl: 'ImageUrl',
      instances: 'Instances',
      isStateful: 'IsStateful',
      mem: 'Mem',
      mseEnabled: 'MseEnabled',
      mseNamespaceId: 'MseNamespaceId',
      namespaceId: 'NamespaceId',
      namespaceName: 'NamespaceName',
      newSaeVersion: 'NewSaeVersion',
      packageUrl: 'PackageUrl',
      programmingLanguage: 'ProgrammingLanguage',
      regionId: 'RegionId',
      runningInstances: 'RunningInstances',
      tags: 'Tags',
      vpcId: 'VpcId',
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
      children: { 'type': 'array', 'itemType': ListApplicationsResponseBodyDataApplicationsChildren },
      cpu: 'number',
      diskSize: 'number',
      enableIdle: 'string',
      imageUrl: 'string',
      instances: 'number',
      isStateful: 'boolean',
      mem: 'number',
      mseEnabled: 'boolean',
      mseNamespaceId: 'string',
      namespaceId: 'string',
      namespaceName: 'string',
      newSaeVersion: 'string',
      packageUrl: 'string',
      programmingLanguage: 'string',
      regionId: 'string',
      runningInstances: 'number',
      tags: { 'type': 'array', 'itemType': ListApplicationsResponseBodyDataApplicationsTags },
      vpcId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.children)) {
      $dara.Model.validateArray(this.children);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

