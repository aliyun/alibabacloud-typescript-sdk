// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InsertApplicationRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the application. The name can contain only digits, letters, hyphens (-), and underscores (_). It must start with a letter and can be up to 36 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * hello-edas-test-1
   */
  applicationName?: string;
  /**
   * @remarks
   * The build package number of EDAS-Container. This parameter is required when you create a High-speed Service Framework (HSF) application. You can obtain the build package number in one of the following ways:
   * 
   * - Call the ListBuildPack operation. For more information, see [ListBuildPack](https://help.aliyun.com/document_detail/149391.html).
   * 
   * - Obtain the build package number from the **Build Package Number** column in the [Container versions](https://help.aliyun.com/document_detail/92614.html) table.
   * 
   * @example
   * 59
   */
  buildPackId?: number;
  /**
   * @remarks
   * The ID of the ECS cluster. Specify this parameter to create the application in a specific ECS cluster. If you leave this parameter empty, the application is created in the default cluster. We recommend that you specify this parameter.
   * 
   * @example
   * 13136119-f384-4f50-b76e-xxxxxxxxxxx
   */
  clusterId?: string;
  /**
   * @remarks
   * The ID of the application component. You can call the ListComponents operation to query the component ID. For more information, see [ListComponents](https://help.aliyun.com/document_detail/97502.html).
   * 
   * This parameter is required if the application runs in an Apache Tomcat container (for Dubbo applications that are deployed in a WAR package) or a standard Java application runtime environment (for Spring Boot or Spring Cloud applications that are deployed in a JAR package).
   * 
   * The following application component IDs are commonly used:
   * 
   * - 4: Apache Tomcat 7.0.91
   * 
   * - 7: Apache Tomcat 8.5.42
   * 
   * - 5: OpenJDK 1.8.x
   * 
   * - 6: OpenJDK 1.7.x
   * 
   * To set this parameter, you must update the Java or Python software development kit (SDK) to version 2.57.3 or later. If you do not use an EDAS SDK, such as aliyun-python-sdk-core, aliyun-java-sdk-core, or Alibaba Cloud CLI, you can set this parameter.
   * 
   * @example
   * 7
   */
  componentIds?: string;
  /**
   * @remarks
   * \\*\\*(Deprecated)\\*\\* The number of CPU cores for the application container in a Swarm cluster.
   * 
   * @example
   * 2
   */
  cpu?: number;
  /**
   * @remarks
   * The description of the application.
   * 
   * @example
   * create by edas pop api
   */
  description?: string;
  /**
   * @remarks
   * The \\`ecu_id\\` of the ECS instance to which you want to scale out the application. The \\`ecu_id\\` is the unique ID of an ECS instance that is imported to EDAS. To specify multiple \\`ecu_id\\`s, separate them with commas (,). You can call the ListScaleOutEcu operation to query the \\`ecu_id\\`. For more information, see [ListScaleOutEcu](https://help.aliyun.com/document_detail/149371.html).
   * 
   * @example
   * 07bd417a-b863-477d-****-************
   */
  ecuInfo?: string;
  /**
   * @remarks
   * Specifies whether to enable the port health check. Valid values:
   * 
   * - **true**: Enabled
   * 
   * - **false**: Disabled
   * 
   * @example
   * true
   */
  enablePortCheck?: boolean;
  /**
   * @remarks
   * Specifies whether to enable the health check URL. Valid values:
   * 
   * - **true**: Enabled
   * 
   * - **false**: Disabled
   * 
   * @example
   * true
   */
  enableUrlCheck?: boolean;
  /**
   * @remarks
   * The health check URL of the application. This parameter is equivalent to the HealthCheckURL parameter.
   * 
   * @example
   * http://127.0.0.1:8080/_ehc.html
   */
  healthCheckUrl?: string;
  /**
   * @remarks
   * The configuration of the mounted script. The value is a JSON string. Example:
   * `[{"ignoreFail":false,"name":"postprepareInstanceEnvironmentOnScaleOut","script":"ls"},{"ignoreFail":true,"name":"postdeleteInstanceDataOnScaleIn","script":""},{"ignoreFail":true,"name":"prestartInstance","script":""},{"ignoreFail":true,"name":"poststartInstance","script":""},{"ignoreFail":true,"name":"prestopInstance","script":""},{"ignoreFail":true,"name":"poststopInstance","script":""}]`
   * 
   * @example
   * [{"ignoreFail":false,"name":"postprepareInstanceEnvironmentOnScaleOut","script":"ls"}]
   */
  hooks?: string;
  /**
   * @remarks
   * **(Deprecated)** The version of the Java Development Kit (JDK) that the application uses.
   * 
   * @example
   * 8
   */
  jdk?: string;
  /**
   * @remarks
   * The custom parameters.
   * 
   * @example
   * -Dproperty=value
   */
  jvmOptions?: string;
  /**
   * @remarks
   * The ID of the microservices namespace. In the EDAS console, choose **Resource Management** > **Microservices Namespace** in the navigation pane on the left to view the ID of the microservices namespace. You can also call the ListUserDefineRegion operation to query the ID. For more information, see [ListUserDefineRegion](https://help.aliyun.com/document_detail/149377.html).
   * 
   * - If the specified cluster is not in the default microservices namespace, you must specify this parameter. Otherwise, the \\`application regionId is different with cluster regionId!\\` error is reported.
   * 
   * - If the cluster is in the default microservices namespace, you do not need to specify this parameter. The microservices namespace of the application must be the same as the microservices namespace of the specified cluster.
   * 
   * @example
   * cn-beijing:prod
   */
  logicalRegionId?: string;
  /**
   * @remarks
   * The maximum size of the heap memory. Unit: MB.
   * 
   * @example
   * 1000
   */
  maxHeapSize?: number;
  /**
   * @remarks
   * The size of the permanent generation memory. Unit: MB.
   * 
   * @example
   * 200
   */
  maxPermSize?: number;
  /**
   * @remarks
   * \\*\\*(Deprecated)\\*\\* The memory size for the application container in a Swarm cluster.
   * 
   * @example
   * 2048
   */
  mem?: number;
  /**
   * @remarks
   * The initial size of the heap memory. Unit: MB.
   * 
   * @example
   * 500
   */
  minHeapSize?: number;
  /**
   * @remarks
   * The format of the application deployment package. Valid values: war and jar.
   * 
   * @example
   * war
   */
  packageType?: string;
  /**
   * @remarks
   * \\*\\*(Deprecated)\\*\\* The reserved port of the application.
   * 
   * @example
   * 8090
   */
  reservedPortStr?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-aek24j4s4b*****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * **(Deprecated)** The version of Apache Tomcat.
   * 
   * @example
   * 4
   */
  webContainer?: string;
  static names(): { [key: string]: string } {
    return {
      applicationName: 'ApplicationName',
      buildPackId: 'BuildPackId',
      clusterId: 'ClusterId',
      componentIds: 'ComponentIds',
      cpu: 'Cpu',
      description: 'Description',
      ecuInfo: 'EcuInfo',
      enablePortCheck: 'EnablePortCheck',
      enableUrlCheck: 'EnableUrlCheck',
      healthCheckUrl: 'HealthCheckUrl',
      hooks: 'Hooks',
      jdk: 'Jdk',
      jvmOptions: 'JvmOptions',
      logicalRegionId: 'LogicalRegionId',
      maxHeapSize: 'MaxHeapSize',
      maxPermSize: 'MaxPermSize',
      mem: 'Mem',
      minHeapSize: 'MinHeapSize',
      packageType: 'PackageType',
      reservedPortStr: 'ReservedPortStr',
      resourceGroupId: 'ResourceGroupId',
      webContainer: 'WebContainer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationName: 'string',
      buildPackId: 'number',
      clusterId: 'string',
      componentIds: 'string',
      cpu: 'number',
      description: 'string',
      ecuInfo: 'string',
      enablePortCheck: 'boolean',
      enableUrlCheck: 'boolean',
      healthCheckUrl: 'string',
      hooks: 'string',
      jdk: 'string',
      jvmOptions: 'string',
      logicalRegionId: 'string',
      maxHeapSize: 'number',
      maxPermSize: 'number',
      mem: 'number',
      minHeapSize: 'number',
      packageType: 'string',
      reservedPortStr: 'string',
      resourceGroupId: 'string',
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

