// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApplicationGroupsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The application runtime environment version in the HSF framework, such as the Ali-Tomcat container.
   * 
   * @example
   * 3.5.3
   */
  edasContainerVersion?: string;
  /**
   * @remarks
   * The group ID.
   * 
   * @example
   * b2a8a925-477a-eswa-b823-d5e22500****
   */
  groupId?: string;
  /**
   * @remarks
   * The group name.
   * 
   * @example
   * _DEFAULT_GROUP
   */
  groupName?: string;
  /**
   * @remarks
   * The group type.
   * 
   * @example
   * 0
   */
  groupType?: number;
  /**
   * @remarks
   * The image address. This parameter is required when **Package Type** is set to **Image**.
   * 
   * @example
   * registry-vpc.cn-hangzhou.aliyuncs.com/demo/nginx:latest
   */
  imageUrl?: string;
  /**
   * @remarks
   * The JDK version on which the deployment package depends. This parameter is not supported when **Package Type** is set to **Image**.
   * 
   * @example
   * Open JDK 8
   */
  jdk?: string;
  /**
   * @remarks
   * The application package type. Valid values:
   * 
   * - If you deploy the application by using Java, valid values are **FatJar**, **War**, and **Image**.
   * - If you deploy the application by using PHP, valid values are:
   *     - **PhpZip**
   *     - **IMAGE_PHP_5_4**
   *     - **IMAGE_PHP_5_4_ALPINE**
   *     - **IMAGE_PHP_5_5**
   *     - **IMAGE_PHP_5_5_ALPINE**
   *     - **IMAGE_PHP_5_6**
   *     - **IMAGE_PHP_5_6_ALPINE**
   *     - **IMAGE_PHP_7_0**
   *     - **IMAGE_PHP_7_0_ALPINE**
   *     - **IMAGE_PHP_7_1**
   *     - **IMAGE_PHP_7_1_ALPINE**
   *     - **IMAGE_PHP_7_2**
   *     - **IMAGE_PHP_7_2_ALPINE**
   *     - **IMAGE_PHP_7_3**
   *     - **IMAGE_PHP_7_3_ALPINE**
   * 
   * @example
   * Image
   */
  packageType?: string;
  /**
   * @remarks
   * The deployment package address. This parameter is required when **Package Type** is set to **FatJar**, **War**, or **PhpZip**.
   * 
   * @example
   * registry-vpc.cn-hangzhou.aliyuncs.com/demo/nginx:latest
   */
  packageUrl?: string;
  /**
   * @remarks
   * The version number of the deployment package. This parameter is required when **Package Type** is set to **FatJar**, **War**, or **PhpZip**. If the application is deployed by using **ImageUrl**, this parameter is automatically generated.
   * 
   * @example
   * 1.0.0
   */
  packageVersion?: string;
  /**
   * @remarks
   * The version ID of the deployment package.
   * 
   * @example
   * 12345678-1234-4abc-8def-1234567890ab
   */
  packageVersionId?: string;
  /**
   * @remarks
   * The total number of instances.
   * 
   * @example
   * 10
   */
  replicas?: number;
  /**
   * @remarks
   * The number of running instances.
   * 
   * @example
   * 1
   */
  runningInstances?: number;
  /**
   * @remarks
   * The Tomcat version on which the deployment package depends. This parameter is not supported when **Package Type** is set to **Image**.
   * 
   * @example
   * Apache Tomcat 7
   */
  webContainer?: string;
  static names(): { [key: string]: string } {
    return {
      edasContainerVersion: 'EdasContainerVersion',
      groupId: 'GroupId',
      groupName: 'GroupName',
      groupType: 'GroupType',
      imageUrl: 'ImageUrl',
      jdk: 'Jdk',
      packageType: 'PackageType',
      packageUrl: 'PackageUrl',
      packageVersion: 'PackageVersion',
      packageVersionId: 'PackageVersionId',
      replicas: 'Replicas',
      runningInstances: 'RunningInstances',
      webContainer: 'WebContainer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      edasContainerVersion: 'string',
      groupId: 'string',
      groupName: 'string',
      groupType: 'number',
      imageUrl: 'string',
      jdk: 'string',
      packageType: 'string',
      packageUrl: 'string',
      packageVersion: 'string',
      packageVersionId: 'string',
      replicas: 'number',
      runningInstances: 'number',
      webContainer: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationGroupsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The API status code or POP error code. Valid values:
   * 
   * - **2xx**: success
   * - **3xx**: redirection
   * - **4xx**: request error
   * - **5xx**: server error
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The application group information.
   */
  data?: DescribeApplicationGroupsResponseBodyData[];
  /**
   * @remarks
   * The error code. Valid values:
   * 
   * - If the request is successful, the **ErrorCode** parameter is not returned.
   * - If the request fails, the **ErrorCode** parameter is returned. For more information, see the **Error codes** section in this topic.
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
   * The request ID.
   * 
   * @example
   * 91F93257-7A4A-4BD3-9A7E-2F6EAE6D****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the application instance groups were retrieved successfully. Valid values:
   * 
   * - **true**: The application instance groups were retrieved successfully.
   * - **false**: The application instance groups failed to be retrieved.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The trace ID used to precisely query call information.
   * 
   * @example
   * 0a98a02315955564772843261e****
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': DescribeApplicationGroupsResponseBodyData },
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

