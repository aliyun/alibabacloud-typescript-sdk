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
   * Indicates whether the canary release application is being deleted.
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
   * The ID of the canary release application.
   * 
   * @example
   * xxx-xxx-xxx-xxx
   */
  appId?: string;
  /**
   * @remarks
   * The name of the canary release application.
   * 
   * @example
   * app1
   */
  appName?: string;
  /**
   * @remarks
   * The application\\"s deployment method.
   * 
   * @example
   * Image
   */
  appType?: string;
  /**
   * @remarks
   * The ID of the base application.
   * 
   * @example
   * ee99cce6-1c8e-4bfa-96c3-3e2fa9******
   */
  baseAppId?: string;
  /**
   * @remarks
   * The CPU specification.
   * 
   * @example
   * 2000
   */
  cpu?: number;
  /**
   * @remarks
   * Indicates if the application is configured to stop automatically when idle.
   */
  enableIdle?: string;
  /**
   * @remarks
   * The configured number of instances for the canary release application.
   * 
   * @example
   * 2
   */
  instances?: number;
  /**
   * @remarks
   * Indicates whether the canary release application is stateful.
   */
  isStateful?: boolean;
  /**
   * @remarks
   * The memory specification.
   * 
   * @example
   * 2048
   */
  mem?: number;
  /**
   * @remarks
   * Indicates whether Microservices Engine (MSE) is enabled for the application.
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
   * The name of the namespace.
   * 
   * @example
   * demo
   */
  namespaceName?: string;
  /**
   * @remarks
   * The edition of the application:
   * 
   * - lite: Lite
   * 
   * - std: Standard
   * 
   * - pro: Pro
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
   * Indicates whether an auto scaling policy is enabled.
   * 
   * @example
   * false
   */
  scaleRuleEnabled?: boolean;
  /**
   * @remarks
   * The type of the auto scaling policy.
   * 
   * @example
   * timing
   */
  scaleRuleType?: string;
  /**
   * @remarks
   * An array of tags assigned to the canary release application.
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
   * 
   * - **false**: The application is not being deleted.
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
   * The ID of the application.
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
   * The application\\"s deployment method.
   * 
   * @example
   * Image
   */
  appType?: string;
  /**
   * @remarks
   * The ID of the base application. This parameter is returned only for canary release applications.
   * 
   * @example
   * xxx-xxx-xx-xxx
   */
  baseAppId?: string;
  /**
   * @remarks
   * An array of canary release applications associated with this application.
   */
  children?: ListApplicationsResponseBodyDataApplicationsChildren[];
  /**
   * @remarks
   * The CPU allocated to each instance, measured in millicores. This value cannot be 0. Valid values:
   * 
   * - **500**
   * 
   * - **1000**
   * 
   * - **2000**
   * 
   * - **4000**
   * 
   * - **8000**
   * 
   * - **16000**
   * 
   * - **32000**
   * 
   * @example
   * 1000
   */
  cpu?: number;
  /**
   * @remarks
   * The disk size in GB.
   * 
   * @example
   * 20
   */
  diskSize?: number;
  /**
   * @remarks
   * Indicates if the application is configured to stop automatically when idle.
   * 
   * @example
   * false
   */
  enableIdle?: string;
  /**
   * @remarks
   * The URL of the container image.
   * 
   * @example
   * registry.cn-hangzhou.aliyuncs.com/sae-serverless-demo/sae-demo:microservice-java-provider-v1.0
   */
  imageUrl?: string;
  /**
   * @remarks
   * The configured number of application instances.
   * 
   * @example
   * 2
   */
  instances?: number;
  /**
   * @remarks
   * Indicates whether the application is stateful.
   */
  isStateful?: boolean;
  /**
   * @remarks
   * The labels of the application.
   */
  labels?: { [key: string]: string };
  /**
   * @remarks
   * The memory allocated to each instance, measured in megabytes (MB). This value cannot be 0 and must be compatible with the CPU allocation. The following options are available:
   * 
   * - **1024**: For a CPU allocation of 500 or 1,000 millicores.
   * 
   * - **2048**: For a CPU allocation of 500, 1,000, or 2,000 millicores.
   * 
   * - **4096**: For a CPU allocation of 1,000, 2,000, or 4,000 millicores.
   * 
   * - **8192**: For a CPU allocation of 2,000, 4,000, or 8,000 millicores.
   * 
   * - **12288**: For a CPU allocation of 12,000 millicores.
   * 
   * - **16384**: For a CPU allocation of 4,000, 8,000, or 16,000 millicores.
   * 
   * - **24576**: For a CPU allocation of 12,000 millicores.
   * 
   * - **32768**: For a CPU allocation of 16,000 millicores.
   * 
   * - **65536**: For a CPU allocation of 8,000, 16,000, or 32,000 millicores.
   * 
   * - **131072**: For a CPU allocation of 32,000 millicores.
   * 
   * @example
   * 1024
   */
  mem?: number;
  /**
   * @remarks
   * Indicates whether Microservices Engine (MSE) is enabled for the application.
   * 
   * @example
   * true
   */
  mseEnabled?: boolean;
  /**
   * @remarks
   * The ID of the MSE namespace. This value determines the service edition.
   * 
   * - default: Free edition
   * 
   * - sae-pro: Professional edition
   * 
   * - sae-ent: Enterprise edition
   * 
   * @example
   * sae-ent
   */
  mseNamespaceId?: string;
  /**
   * @remarks
   * The ID of the namespace.
   * 
   * @example
   * cn-beijing:demo
   */
  namespaceId?: string;
  /**
   * @remarks
   * The name of the namespace.
   * 
   * @example
   * demo
   */
  namespaceName?: string;
  /**
   * @remarks
   * The edition of the application:
   * 
   * - lite: Lite
   * 
   * - std: Standard
   * 
   * - pro: Pro
   * 
   * @example
   * pro
   */
  newSaeVersion?: string;
  /**
   * @remarks
   * The URL of the application\\"s deployment package.
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
  /**
   * @remarks
   * The ID of the region where the application is deployed.
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
   * An array of tags assigned to the application.
   */
  tags?: ListApplicationsResponseBodyDataApplicationsTags[];
  /**
   * @remarks
   * The ID of the VPC.
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
   * An array of application objects.
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
   * The number of entries returned per page.
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
   * The HTTP status code. Valid values:
   * 
   * - **2xx**: The request was successful.
   * 
   * - **3xx**: The request was redirected.
   * 
   * - **4xx**: The request was invalid.
   * 
   * - **5xx**: A server error occurred.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Current page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The object that contains pagination details and the array of applications.
   */
  data?: ListApplicationsResponseBodyData;
  /**
   * @remarks
   * The error code. This parameter is returned only if the request fails. For more information, see the **Error codes** section of this topic.
   * 
   * - A successful request does not return the **ErrorCode** field.
   * 
   * - A failed request returns the **ErrorCode** field. For more information, see the **Error codes** section in this topic.
   */
  errorCode?: string;
  /**
   * @remarks
   * Additional information about the call result.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Page size.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The unique ID of the request.
   * 
   * @example
   * B4D805CA-926D-41B1-8E63-7AD0C1ED****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * - **true**: The request was successful.
   * 
   * - **false**: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * Total number of applications.
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

