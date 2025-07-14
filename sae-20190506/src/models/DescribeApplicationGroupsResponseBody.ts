// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApplicationGroupsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The version of the container, such as Ali-Tomcat, in which an application that is developed based on High-speed Service Framework (HSF) is deployed.
   * 
   * @example
   * 3.5.3
   */
  edasContainerVersion?: string;
  /**
   * @remarks
   * The ID of the instance group.
   * 
   * @example
   * b2a8a925-477a-eswa-b823-d5e22500****
   */
  groupId?: string;
  /**
   * @remarks
   * The name of the instance group.
   * 
   * @example
   * _DEFAULT_GROUP
   */
  groupName?: string;
  /**
   * @remarks
   * The type of the instance group.
   * 
   * @example
   * 0
   */
  groupType?: number;
  /**
   * @remarks
   * The URL of the image. This parameter is returned only if the **PackageType** parameter is set to **Image**.
   * 
   * @example
   * registry-vpc.cn-hangzhou.aliyuncs.com/demo/nginx:latest
   */
  imageUrl?: string;
  /**
   * @remarks
   * The version of the JDK on which the deployment package of the application depends. This parameter is not returned if the **PackageType** parameter is set to **Image**.
   * 
   * @example
   * Open JDK 8
   */
  jdk?: string;
  /**
   * @remarks
   * The type of the deployment package. Valid values:
   * 
   * *   If you deploy a Java application, the value of this parameter can be **FatJar**, **War**, or **Image**.
   * 
   * *   If you deploy a PHP application, the value of this parameter can be one of the following values:
   * 
   *     *   **PhpZip**
   *     *   **IMAGE_PHP_5_4**
   *     *   **IMAGE_PHP_5_4_ALPINE**
   *     *   **IMAGE_PHP_5_5**
   *     *   **IMAGE_PHP_5_5_ALPINE**
   *     *   **IMAGE_PHP_5_6**
   *     *   **IMAGE_PHP_5_6_ALPINE**
   *     *   **IMAGE_PHP_7_0**
   *     *   **IMAGE_PHP_7_0_ALPINE**
   *     *   **IMAGE_PHP_7_1**
   *     *   **IMAGE_PHP_7_1_ALPINE**
   *     *   **IMAGE_PHP_7_2**
   *     *   **IMAGE_PHP_7_2_ALPINE**
   *     *   **IMAGE_PHP_7_3**
   *     *   **IMAGE_PHP_7_3_ALPINE**
   * 
   * @example
   * Image
   */
  packageType?: string;
  /**
   * @remarks
   * The URL of the deployment package. This parameter is returned only if the **PackageType** parameter is set to **FatJar**, **War**, or **PhpZip**.
   * 
   * @example
   * registry-vpc.cn-hangzhou.aliyuncs.com/demo/nginx:latest
   */
  packageUrl?: string;
  /**
   * @remarks
   * The version of the deployment package. This parameter is returned only if the **PackageType** parameter is set to **FatJar**, **War**, or **PhpZip**. The value of this parameter is automatically generated only if the **ImageUrl** is returned.
   * 
   * @example
   * 1.0.0
   */
  packageVersion?: string;
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
   * The version of the Tomcat container on which the deployment package depends. This parameter is not returned if the **PackageType** parameter is set to **Image**.
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
   * The HTTP status code. Valid values:
   * 
   * *   **2xx**: The call was successful.
   * *   **3xx**: The call was redirected.
   * *   **4xx**: The call failed.
   * *   **5xx**: A server error occurred.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The information about the instance groups of the application.
   */
  data?: DescribeApplicationGroupsResponseBodyData[];
  /**
   * @remarks
   * The error code. Valid values:
   * 
   * *   If the call is successful, the **ErrorCode** parameter is not returned.
   * *   If the call fails, the **ErrorCode** parameter is returned. For more information, see the **Error codes** section in this topic.
   */
  errorCode?: string;
  /**
   * @remarks
   * The returned message.
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
   * Indicates whether the instance groups of an application were obtained. Valid values:
   * 
   * *   **true**: The instance groups were obtained.
   * *   **false**: The instance groups failed to be obtained.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The trace ID that is used to query the details of the request.
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

