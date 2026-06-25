// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApplicationGroupsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The version of the application runtime environment in the High-Speed Service Framework (HSF), such as an Ali-Tomcat container.
   * 
   * @example
   * 3.5.3
   */
  edasContainerVersion?: string;
  /**
   * @remarks
   * The ID of the application group.
   * 
   * @example
   * b2a8a925-477a-eswa-b823-d5e22500****
   */
  groupId?: string;
  /**
   * @remarks
   * The name of the application group.
   * 
   * @example
   * _DEFAULT_GROUP
   */
  groupName?: string;
  /**
   * @remarks
   * The type of the application group.
   * 
   * @example
   * 0
   */
  groupType?: number;
  /**
   * @remarks
   * The image URL. This parameter is required when **package type** is set to **Image**.
   * 
   * @example
   * registry-vpc.cn-hangzhou.aliyuncs.com/demo/nginx:latest
   */
  imageUrl?: string;
  /**
   * @remarks
   * The JDK version required by the deployment package. This parameter is not supported when **package type** is set to **Image**.
   * 
   * @example
   * Open JDK 8
   */
  jdk?: string;
  /**
   * @remarks
   * The type of the deployment package. Valid values:
   * 
   * - For Java applications, the supported types are **FatJar**, **War**, and **Image**.
   * 
   * - For PHP applications, the supported types are:
   * 
   *   - **PhpZip**
   * 
   *   - **IMAGE_PHP_5_4**
   * 
   *   - **IMAGE_PHP_5_4_ALPINE**
   * 
   *   - **IMAGE_PHP_5_5**
   * 
   *   - **IMAGE_PHP_5_5_ALPINE**
   * 
   *   - **IMAGE_PHP_5_6**
   * 
   *   - **IMAGE_PHP_5_6_ALPINE**
   * 
   *   - **IMAGE_PHP_7_0**
   * 
   *   - **IMAGE_PHP_7_0_ALPINE**
   * 
   *   - **IMAGE_PHP_7_1**
   * 
   *   - **IMAGE_PHP_7_1_ALPINE**
   * 
   *   - **IMAGE_PHP_7_2**
   * 
   *   - **IMAGE_PHP_7_2_ALPINE**
   * 
   *   - **IMAGE_PHP_7_3**
   * 
   *   - **IMAGE_PHP_7_3_ALPINE**
   * 
   * @example
   * Image
   */
  packageType?: string;
  /**
   * @remarks
   * The URL of the deployment package. This parameter is required when **package type** is set to **FatJar**, **War**, or **PhpZip**.
   * 
   * @example
   * registry-vpc.cn-hangzhou.aliyuncs.com/demo/nginx:latest
   */
  packageUrl?: string;
  /**
   * @remarks
   * The deployment package version. This parameter is required when **package type** is set to **FatJar**, **War**, or **PhpZip**. This parameter is automatically generated if you deploy the application by using an **image**.
   * 
   * @example
   * 1.0.0
   */
  packageVersion?: string;
  /**
   * @remarks
   * The ID of the deployment package version.
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
   * The Tomcat container version required by the deployment package. This parameter is not supported when **package type** is set to **Image**.
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
   * The HTTP status code or the POP error code. Valid values:
   * 
   * - **2xx**: The request is successful.
   * 
   * - **3xx**: The request is redirected.
   * 
   * - **4xx**: The request is invalid.
   * 
   * - **5xx**: A server error occurs.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * A list of application groups.
   */
  data?: DescribeApplicationGroupsResponseBodyData[];
  /**
   * @remarks
   * The error code.
   * 
   * - This parameter is not returned if the request is successful.
   * 
   * - This parameter is returned if the request fails. For more information, see the **error codes** section.
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
   * Indicates whether the application groups were successfully retrieved. Valid values:
   * 
   * - **true**: The application groups were retrieved.
   * 
   * - **false**: The application groups were not retrieved.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The trace ID used to query the details of a request.
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

