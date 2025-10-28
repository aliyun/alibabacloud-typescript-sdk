// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InsertApplicationRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the application. The name can contain only digits, letters, hyphens (-), and underscores (_) and must start with a letter. The name can be up to 36 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * hello-edas-test-1
   */
  applicationName?: string;
  /**
   * @remarks
   * The build package number of EDAS Container. This parameter is required if you create a High-Speed Service Framework (HSF) application. You can query the build package number by using one of the following methods:
   * 
   * *   Call the ListBuildPack operation. For more information, see [ListBuildPack](https://help.aliyun.com/document_detail/149391.html).
   * *   Obtain the value in the **Build package number** column of the [Release notes for EDAS Container](https://help.aliyun.com/document_detail/92614.html) topic.
   * 
   * @example
   * 59
   */
  buildPackId?: number;
  /**
   * @remarks
   * The ID of the ECS cluster in which you want to create the application. If you specify an ID, the application is created in the specified ECS cluster. If you leave this parameter empty, the application is created in the default cluster. We recommend that you specify this parameter.
   * 
   * @example
   * 13136119-f384-4f50-b76e-xxxxxxxxxxx
   */
  clusterId?: string;
  /**
   * @remarks
   * The ID of the application component. You can call the ListComponents operation to query the component IDs. For more information, see [ListComponents](https://help.aliyun.com/document_detail/97502.html).
   * 
   * This parameter is required if the application runs in Apache Tomcat or in a standard Java application runtime environment. The Apache Tomcat application runtime environment is applicable to Dubbo applications that are deployed by using WAR packages. A standard Java application runtime environment is applicable to Spring Boot or Spring Cloud applications that are deployed by using JAR packages.
   * 
   * Valid values for common application components:
   * 
   * *   4: Apache Tomcat 7.0.91
   * *   7: Apache Tomcat 8.5.42
   * *   5: OpenJDK 1.8.x
   * *   6: OpenJDK 1.7.x
   * 
   * This parameter is available only for Java SDK 2.57.3 or later, or Python SDK 2.57.3 or later. Assume that you use an SDK that is not provided by EDAS, for example, aliyun-python-sdk-core, aliyun-java-sdk-core, and Alibaba Cloud CLI. In this case, you can directly specify this parameter.
   * 
   * @example
   * 7
   */
  componentIds?: string;
  /**
   * @remarks
   * The number of CPU cores that can be used by the application container in a Swarm cluster. \\*\\*This parameter is deprecated.\\*\\*
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
   * The value of `ecu_id` of the ECS instance to be added during scale-out. The ECU ID is the unique identity for an ECS instance that is imported to EDAS. Separate multiple values of `ecu_id` with commas (,). You can call the ListScaleOutEcu operation to query the value of `ecu_id`. For more information, see [ListScaleOutEcu](https://help.aliyun.com/document_detail/149371.html).
   * 
   * @example
   * 07bd417a-b863-477d-****-************
   */
  ecuInfo?: string;
  /**
   * @remarks
   * Specifies whether to enable the port health check. Valid values:
   * 
   * *   **true**: enable the port health check.
   * *   **false**: does not enable the port health check.
   * 
   * @example
   * true
   */
  enablePortCheck?: boolean;
  /**
   * @remarks
   * Specifies whether to enable the URL health check. Valid values:
   * 
   * *   **true**: enables the URL health check.
   * *   **false**: does not enable the URL health check.
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
   * The script to mount. Set the value in the JSON format. Example: `[{"ignoreFail":false,"name":"postprepareInstanceEnvironmentOnScaleOut","script":"ls"},{"ignoreFail":true,"name":"postdeleteInstanceDataOnScaleIn","script":""},{"ignoreFail":true,"name":"prestartInstance","script":""},{"ignoreFail":true,"name":"poststartInstance","script":""},{"ignoreFail":true,"name":"prestopInstance","script":""},{"ignoreFail":true,"name":"poststopInstance","script":""}]`
   * 
   * @example
   * [{"ignoreFail":false,"name":"postprepareInstanceEnvironmentOnScaleOut","script":"ls"}]
   */
  hooks?: string;
  /**
   * @remarks
   * The version of the Java Development Kit (JDK) used to deploy the application. **This parameter is deprecated.
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
   * The ID of the microservices namespace. To query the ID of a microservices namespace, you can choose **Resource Management** > **Microservice Namespaces** in the left-side navigation pane of the EDAS console or call the ListUserDefineRegion operation. For more information, see [ListUserDefineRegion](https://help.aliyun.com/document_detail/149377.html).
   * 
   * *   This parameter is required if the cluster you specify is not deployed in the default microservices namespace. Otherwise, the message `application regionId is different with cluster regionId!` appears.
   * *   If the cluster you specify is deployed in the default microservices namespace, you do not need to specify this parameter. Set this parameter to the ID of the microservices namespace in which the cluster you specify is deployed.
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
   * The size of the permanent generation heap memory. Unit: MB.
   * 
   * @example
   * 200
   */
  maxPermSize?: number;
  /**
   * @remarks
   * The memory size that can be used by the application container in a Swarm cluster. \\*\\*This parameter is deprecated.\\*\\*
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
   * The type of the application deployment package. Valid values: war and jar.
   * 
   * @example
   * war
   */
  packageType?: string;
  /**
   * @remarks
   * The reserved port for the application. This parameter is deprecated.
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
   * The version of Apache Tomcat. **This parameter is deprecated.
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

