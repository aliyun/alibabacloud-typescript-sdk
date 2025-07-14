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
   * If is deleting this application.
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
   * Test
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
   * The way to deploy applications.
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
   * The CPU sepcification.
   * 
   * @example
   * 2000
   */
  cpu?: number;
  /**
   * @remarks
   * The number of instances.
   * 
   * @example
   * 2
   */
  instances?: number;
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
   * If this application has enabled MSE.
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
   * The application edition.
   * 
   * - lite: the lightweight edition.
   * - std: the standard edition.
   * - pro: the professional edition.
   * 
   * @example
   * pro
   */
  newSaeVersion?: string;
  /**
   * @remarks
   * The programming language of this application.
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
   * The number of instances in running state.
   * 
   * @example
   * 2
   */
  runningInstances?: number;
  /**
   * @remarks
   * If the scale rule is enabled.
   * 
   * @example
   * false
   */
  scaleRuleEnabled?: boolean;
  /**
   * @remarks
   * The type of the scale rule.
   * 
   * @example
   * timing
   */
  scaleRuleType?: string;
  /**
   * @remarks
   * The application tag.
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
      instances: 'Instances',
      isStateful: 'IsStateful',
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
      isStateful: 'boolean',
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

export class ListApplicationsResponseBodyDataApplicationsTags extends $dara.Model {
  /**
   * @remarks
   * The key of the tag.
   * 
   * @example
   * key
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag.
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
  /**
   * @remarks
   * The application type.
   * 
   * @example
   * Image
   */
  appType?: string;
  /**
   * @remarks
   * The base app ID. Only gray-release applications have this property.
   * 
   * @example
   * xxx-xxx-xx-xxx
   */
  baseAppId?: string;
  /**
   * @remarks
   * The gray-release application list of this application.
   */
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
  /**
   * @remarks
   * The disk size. Unit: GB.
   * 
   * @example
   * 20
   */
  diskSize?: number;
  /**
   * @remarks
   * If the idle mode is enabled.
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
  /**
   * @remarks
   * The application has enabled MSE or not.
   * 
   * @example
   * true
   */
  mseEnabled?: boolean;
  /**
   * @remarks
   * The name space of MSE:
   * 
   * - default: the free edition.
   * - sae-pro: the professional edition.
   * - sae-ent: the enterprise eiditon.
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
   * The name of the namespace.
   * 
   * @example
   * demo
   */
  namespaceName?: string;
  /**
   * @remarks
   * The application edition.
   * 
   * - lite: the lightweight edition.
   * - std: the standard edition.
   * - pro: the professional edition.
   * 
   * @example
   * pro
   */
  newSaeVersion?: string;
  /**
   * @remarks
   * The package URL.
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
  /**
   * @remarks
   * VPC ID.
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

export class ListApplicationsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The queried applications.
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
   * The number of records in each page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The number of applications.
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
   * The HTTP status code. Take note of the following rules:
   * 
   * - **2xx**: The call was successful.
   * - **3xx**: The call was redirected.
   * - **4xx**: The call failed.
   * - **5xx**: A server error occurred.
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
   * The queried applications.
   */
  data?: ListApplicationsResponseBodyData;
  /**
   * @remarks
   * The returned error code. Valid values:
   * 
   * *   If the call is successful, the **ErrorCode** parameter is not returned.
   * *   If the call fails, the **ErrorCode** parameter is returned. For more information, see the "**Error codes**" section of this topic.
   * 
   * @example
   * The ID of the request.
   */
  errorCode?: string;
  /**
   * @remarks
   * Additional message.
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
   * Request ID.
   * 
   * @example
   * B4D805CA-926D-41B1-8E63-7AD0C1ED****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**: The request was successful.
   * *   **false**: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The number of applications.
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

