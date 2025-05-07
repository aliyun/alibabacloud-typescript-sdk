// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApplicationGroupsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The version of the container, such as Ali-Tomcat, in which a High-speed Service Framework (HSF) application runs.
   * 
   * @example
   * 3.5.3
   */
  edasContainerVersion?: string;
  /**
   * @remarks
   * The ID of the group.
   * 
   * @example
   * b2a8a925-477a-eswa-b823-d5e22500****
   */
  groupId?: string;
  /**
   * @remarks
   * The name of the group.
   * 
   * @example
   * _DEFAULT_GROUP
   */
  groupName?: string;
  /**
   * @remarks
   * The type of the group.
   * 
   * @example
   * 0
   */
  groupType?: number;
  /**
   * @remarks
   * The address of the image. This parameter is required when the **PackageType** parameter is set to **Image**.
   * 
   * @example
   * registry-vpc.cn-hangzhou.aliyuncs.com/demo/nginx:latest
   */
  imageUrl?: string;
  /**
   * @remarks
   * The version of the Java development kit (JDK) on which the deployment package of the application depends. This parameter is invalid when the **PackageType** parameter is set to **Image**.
   * 
   * @example
   * Open JDK 8
   */
  jdk?: string;
  /**
   * @remarks
   * The type of the application deployment package. Valid values:
   * 
   * *   When you use a Java package, set this value to **FatJar**, **War**, or **Image**.
   * 
   * *   When you use a PHP package, the following values are valid:
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
   * The address of the deployment package. This parameter is required when the **PackageType** parameter is set to **FatJar**, **War**, or **PhpZip**.
   * 
   * @example
   * registry-vpc.cn-hangzhou.aliyuncs.com/demo/nginx:latest
   */
  packageUrl?: string;
  /**
   * @remarks
   * The version of the deployment package. This parameter is required when the **PackageType** parameter is set to **FatJar**, **War**, or **PhpZip**. The parameter value will be automatically generated when you use an image to deploy the application and specify the **ImageUrl** parameter.
   * 
   * @example
   * 1.0.0
   */
  packageVersion?: string;
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
   * The version of the Apache Tomcat container on which the deployment package of the application depends. This parameter is invalid when the **PackageType** parameter is set to **Image**.
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

