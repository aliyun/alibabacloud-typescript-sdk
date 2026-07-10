// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListApplicationsResponseBodyDataApplicationsChildrenTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * key
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * value
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationsResponseBodyDataApplicationsChildren extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the application is being deleted.
   * 
   * @example
   * false
   */
  appDeletingStatus?: boolean;
  /**
   * @remarks
   * The application description.
   * 
   * @example
   * Test application
   */
  appDescription?: string;
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * xxx-xxx-xxx-xxx
   */
  appId?: string;
  /**
   * @remarks
   * The application name.
   * 
   * @example
   * app1
   */
  appName?: string;
  /**
   * @remarks
   * The deployment type of the application.
   * 
   * @example
   * Image
   */
  appType?: string;
  /**
   * @remarks
   * The base application ID.
   * 
   * @example
   * ee99cce6-1c8e-4bfa-96c3-3e2fa9******
   */
  baseAppId?: string;
  /**
   * @remarks
   * The CPU size.
   * 
   * @example
   * 2000
   */
  cpu?: number;
  /**
   * @remarks
   * Indicates whether idle mode is enabled.
   */
  enableIdle?: string;
  /**
   * @remarks
   * The number of instances.
   * 
   * @example
   * 2
   */
  instances?: number;
  /**
   * @remarks
   * Specifies whether the application is stateful.
   */
  isStateful?: boolean;
  /**
   * @remarks
   * The memory size.
   * 
   * @example
   * 2048
   */
  mem?: number;
  /**
   * @remarks
   * Indicates whether MSE microservice governance is enabled for the application.
   * 
   * @example
   * true
   */
  mseEnabled?: boolean;
  /**
   * @remarks
   * The namespace ID.
   * 
   * @example
   * cn-beijing:demo
   */
  namespaceId?: string;
  /**
   * @remarks
   * The namespace name.
   * 
   * @example
   * demo
   */
  namespaceName?: string;
  /**
   * @remarks
   * The application version. Valid values:
   * 
   * - lite: Lite Edition
   * - std: Standard Edition
   * - pro: Professional Edition
   * 
   * @example
   * pro
   */
  newSaeVersion?: string;
  /**
   * @remarks
   * The programming language of the application.
   * 
   * @example
   * java
   */
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
   * The resource type.
   */
  resourceType?: string;
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
   * Indicates whether the elastic scaling policy is enabled.
   * 
   * @example
   * false
   */
  scaleRuleEnabled?: boolean;
  /**
   * @remarks
   * The type of the elastic scaling rule.
   * 
   * @example
   * timing
   */
  scaleRuleType?: string;
  /**
   * @remarks
   * The application tags.
   */
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
      enableIdle: 'EnableIdle',
      instances: 'Instances',
      isStateful: 'IsStateful',
      mem: 'Mem',
      mseEnabled: 'MseEnabled',
      namespaceId: 'NamespaceId',
      namespaceName: 'NamespaceName',
      newSaeVersion: 'NewSaeVersion',
      programmingLanguage: 'ProgrammingLanguage',
      regionId: 'RegionId',
      resourceType: 'ResourceType',
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
      enableIdle: 'string',
      instances: 'number',
      isStateful: 'boolean',
      mem: 'number',
      mseEnabled: 'boolean',
      namespaceId: 'string',
      namespaceName: 'string',
      newSaeVersion: 'string',
      programmingLanguage: 'string',
      regionId: 'string',
      resourceType: 'string',
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

export class ListApplicationsResponseBodyDataApplicationsTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * key
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * value
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationsResponseBodyDataApplications extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the application is being deleted. Valid values:
   * 
   * - **true**: The application is being deleted.
   * - **false**: The application is not being deleted.
   * 
   * @example
   * false
   */
  appDeletingStatus?: boolean;
  /**
   * @remarks
   * The application description.
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
  /**
   * @remarks
   * The deployment type of the application.
   * 
   * @example
   * Image
   */
  appType?: string;
  /**
   * @remarks
   * The base application ID. This property exists only for canary release applications.
   * 
   * @example
   * xxx-xxx-xx-xxx
   */
  baseAppId?: string;
  /**
   * @remarks
   * The list of canary release applications for this application.
   */
  children?: ListApplicationsResponseBodyDataApplicationsChildren[];
  /**
   * @remarks
   * The CPU required for each instance, in millicores. This value cannot be 0. Only the following defined specifications are supported:
   * 
   * - **500**
   * - **1000**
   * - **2000**
   * - **4000**
   * - **8000**
   * - **16000**
   * - **32000**
   * 
   * @example
   * 1000
   */
  cpu?: number;
  /**
   * @remarks
   * The disk storage size, in GB.
   * 
   * @example
   * 20
   */
  diskSize?: number;
  /**
   * @remarks
   * Indicates whether idle mode is enabled.
   * 
   * @example
   * false
   */
  enableIdle?: string;
  /**
   * @remarks
   * The image URL.
   * 
   * @example
   * registry.cn-hangzhou.aliyuncs.com/sae-serverless-demo/sae-demo:microservice-java-provider-v1.0
   */
  imageUrl?: string;
  /**
   * @remarks
   * The number of application instances.
   * 
   * @example
   * 2
   */
  instances?: number;
  /**
   * @remarks
   * Specifies whether the application is stateful.
   */
  isStateful?: boolean;
  /**
   * @remarks
   * The labels.
   */
  labels?: { [key: string]: string };
  /**
   * @remarks
   * The memory required for each instance, in MB. This value cannot be 0. The memory has a one-to-one mapping with CPU. Only the following defined specifications are supported:
   * 
   * - **1024**: corresponds to 500 and 1000 millicores of CPU.
   * - **2048**: corresponds to 500, 1000, and 2000 millicores of CPU.
   * - **4096**: corresponds to 1000, 2000, and 4000 millicores of CPU.
   * - **8192**: corresponds to 2000, 4000, and 8000 millicores of CPU.
   * - **12288**: corresponds to 12000 millicores of CPU.
   * - **16384**: corresponds to 4000, 8000, and 16000 millicores of CPU.
   * - **24576**: corresponds to 12000 millicores of CPU.
   * - **32768**: corresponds to 16000 millicores of CPU.
   * - **65536**: corresponds to 8000, 16000, and 32000 millicores of CPU.
   * - **131072**: corresponds to 32000 millicores of CPU.
   * 
   * @example
   * 1024
   */
  mem?: number;
  /**
   * @remarks
   * Indicates whether MSE microservice governance is enabled for the application.
   * 
   * @example
   * true
   */
  mseEnabled?: boolean;
  /**
   * @remarks
   * The MSE microservice governance namespace.
   * 
   * - default: Free Edition
   * 
   * - sae-pro: Professional Edition
   * 
   * - sae-ent: Enterprise Edition
   * 
   * @example
   * sae-ent
   */
  mseNamespaceId?: string;
  /**
   * @remarks
   * The namespace ID.
   * 
   * @example
   * cn-beijing:demo
   */
  namespaceId?: string;
  /**
   * @remarks
   * The namespace name.
   * 
   * @example
   * demo
   */
  namespaceName?: string;
  /**
   * @remarks
   * The application version. Valid values:
   * 
   * - lite: Lite Edition
   * - std: Standard Edition
   * - pro: Professional Edition
   * 
   * @example
   * pro
   */
  newSaeVersion?: string;
  /**
   * @remarks
   * The deployment package URL.
   */
  packageUrl?: string;
  /**
   * @remarks
   * The programming language of the application.
   * 
   * @example
   * java
   */
  programmingLanguage?: string;
  raspEnabled?: boolean;
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
   * The resource type.
   */
  resourceType?: string;
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
   * The application tags.
   */
  tags?: ListApplicationsResponseBodyDataApplicationsTags[];
  /**
   * @remarks
   * VPC ID。
   */
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
      labels: 'Labels',
      mem: 'Mem',
      mseEnabled: 'MseEnabled',
      mseNamespaceId: 'MseNamespaceId',
      namespaceId: 'NamespaceId',
      namespaceName: 'NamespaceName',
      newSaeVersion: 'NewSaeVersion',
      packageUrl: 'PackageUrl',
      programmingLanguage: 'ProgrammingLanguage',
      raspEnabled: 'RaspEnabled',
      regionId: 'RegionId',
      resourceType: 'ResourceType',
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
      labels: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      mem: 'number',
      mseEnabled: 'boolean',
      mseNamespaceId: 'string',
      namespaceId: 'string',
      namespaceName: 'string',
      newSaeVersion: 'string',
      packageUrl: 'string',
      programmingLanguage: 'string',
      raspEnabled: 'boolean',
      regionId: 'string',
      resourceType: 'string',
      runningInstances: 'number',
      tags: { 'type': 'array', 'itemType': ListApplicationsResponseBodyDataApplicationsTags },
      vpcId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.children)) {
      $dara.Model.validateArray(this.children);
    }
    if(this.labels) {
      $dara.Model.validateMap(this.labels);
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

export class ListApplicationsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The application list.
   */
  applications?: ListApplicationsResponseBodyDataApplications[];
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The page size.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of applications.
   * 
   * @example
   * 2
   */
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      applications: 'Applications',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalSize: 'TotalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applications: { 'type': 'array', 'itemType': ListApplicationsResponseBodyDataApplications },
      currentPage: 'number',
      pageSize: 'number',
      totalSize: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.applications)) {
      $dara.Model.validateArray(this.applications);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The API status or POP error code. Valid values:
   * 
   * - **2xx**: Success.
   * - **3xx**: Redirection.
   * - **4xx**: Request error.
   * - **5xx**: Server error.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The application list.
   */
  data?: ListApplicationsResponseBodyData;
  /**
   * @remarks
   * The error code. Valid values:
   * 
   * - If the request is successful, the **ErrorCode** field is not returned.
   * - If the request fails, the **ErrorCode** field is returned. For more information, see the **Error codes** section in this topic.
   */
  errorCode?: string;
  /**
   * @remarks
   * The additional information about the call result.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The page size.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B4D805CA-926D-41B1-8E63-7AD0C1ED****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the application list is retrieved. Valid values:
   * 
   * - **true**: Retrieved.
   * - **false**: Not retrieved.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of applications.
   * 
   * @example
   * 2
   */
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      currentPage: 'CurrentPage',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalSize: 'TotalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      currentPage: 'number',
      data: ListApplicationsResponseBodyData,
      errorCode: 'string',
      message: 'string',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalSize: 'number',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

