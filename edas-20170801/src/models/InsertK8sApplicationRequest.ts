// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InsertK8sApplicationRequest extends $dara.Model {
  /**
   * @remarks
   * The annotations of the application pod.
   * 
   * @example
   * {"annotation-name-1":"annotation-value-1","annotation-name-2":"annotation-value-2"}
   */
  annotations?: string;
  /**
   * @remarks
   * The application configuration when an application template is used. The value is a JSON string.
   * 
   * @example
   * {}
   */
  appConfig?: string;
  /**
   * @remarks
   * The name of the application. The name must start with a letter and can contain digits, letters, and hyphens (-). The name can be up to 36 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * doc-test
   */
  appName?: string;
  /**
   * @remarks
   * The name of the application template that is used to create the application. If you specify an application template when you create the application, the application template and the AppConfig parameter are preferentially used to determine the application configuration. Other configurations are ignored.
   * 
   * @example
   * app-template001
   */
  appTemplateName?: string;
  /**
   * @remarks
   * The description of the application.
   * 
   * @example
   * Production Environment
   */
  applicationDescription?: string;
  /**
   * @remarks
   * The version of EDAS Container. This parameter conflicts with `EdasContainerVersion`. Use the `EdasContainerVersion` parameter instead.
   * 
   * @example
   * -1
   */
  buildPackId?: string;
  /**
   * @remarks
   * The ID of the cluster. You can call the ListCluster operation to query the cluster ID. For more information, see [ListCluster](https://help.aliyun.com/document_detail/154995.html).
   * 
   * This parameter is required.
   * 
   * @example
   * c9cd****
   */
  clusterId?: string;
  /**
   * @remarks
   * The startup command of the application. If you set this parameter, the original startup command of the image is overridden.
   * 
   * @example
   * ls
   */
  command?: string;
  /**
   * @remarks
   * The arguments for the startup command. The arguments are a JSON array of strings. Example: `[{"argument":"-c"},{"argument":"test"}]`. In this example, `-c` and `test` are two arguments.
   * 
   * @example
   * [{"argument":"-lh"}]
   */
  commandArgs?: string;
  /**
   * @remarks
   * The configuration for mounting Kubernetes ConfigMaps and Secrets. You can mount ConfigMaps and Secrets to specified directories in a container. The following parameters are included in ConfigMountDescs:
   * 
   * - name: The name of the ConfigMap or Secret.
   * 
   * - type: The configuration type. Valid values: ConfigMap and Secret.
   * 
   * - mountPath: The mount path. The path must be an absolute path that starts with a forward slash (/).
   * 
   * @example
   * [{"name":"nginx-config","type":"ConfigMap","mountPath":"/etc/nginx"},{"name":"tls-secret","type":"secret","mountPath":"/etc/ssh"}]
   */
  configMountDescs?: string;
  /**
   * @remarks
   * The ID of the repository that is used to build the image repository. If you leave this parameter empty, the default repository provided by EDAS is used. Currently, only the default repository provided by EDAS is supported.
   * 
   * @example
   * leave empty
   */
  containerRegistryId?: string;
  /**
   * @remarks
   * You must specify CsClusterId only when you create an application in a cluster that has never been imported.
   * 
   * @example
   * abcdefg
   */
  csClusterId?: string;
  /**
   * @remarks
   * The custom affinity.
   * 
   * @example
   * demo
   */
  customAffinity?: string;
  /**
   * @remarks
   * The version of the agent.
   * 
   * @example
   * 2.8.3,3.2.10,4.3.1
   */
  customAgentVersion?: string;
  /**
   * @remarks
   * The custom tolerations.
   * 
   * @example
   * demo
   */
  customTolerations?: string;
  /**
   * @remarks
   * Specifies whether to distribute application instances to multiple nodes. A value of `true` means yes. Other values mean no.
   * 
   * @example
   * true
   */
  deployAcrossNodes?: string;
  /**
   * @remarks
   * Specifies whether to distribute application instances to multiple zones. A value of `true` means yes. Other values mean no.
   * 
   * @example
   * true
   */
  deployAcrossZones?: string;
  /**
   * @remarks
   * The version of the `EDAS-Container` on which the deployment package depends.
   * 
   * > This parameter is not supported for image-based deployments.
   * 
   * @example
   * 3.5.9
   */
  edasContainerVersion?: string;
  /**
   * @remarks
   * The configuration for mounting a Kubernetes emptyDir volume. You can mount an emptyDir volume to a specified directory in a container. The following parameters are included in EmptyDirs:
   * 
   * - mountPath: The mount path in the container. This parameter is required.
   * 
   * - readOnly: Specifies whether the volume is read-only. This parameter is optional. true specifies read-only. false specifies read and write. Default value: false.
   * 
   * - subPathExpr: The subdirectory expression. This parameter is optional.
   * 
   * @example
   * [{"mountPath":"/app-log","subPathExpr":"$(POD_IP)"},{"readOnly":true,"mountPath":"/etc/nginx"}]
   */
  emptyDirs?: string;
  /**
   * @remarks
   * Specifies whether to enable Application High Availability Service (AHAS):
   * 
   * - true: Enable AHAS.
   * 
   * - false: Do not enable AHAS.
   * 
   * @example
   * true
   */
  enableAhas?: boolean;
  /**
   * @remarks
   * You must set this parameter to true only when you create an application in a cluster that has never been imported and enable Service Mesh (ASM).
   * 
   * @example
   * false
   */
  enableAsm?: boolean;
  /**
   * @remarks
   * Specifies whether to enable protection against empty pushes:
   * 
   * - true: Enable protection against empty pushes.
   * 
   * - false: Do not enable protection against empty pushes.
   * 
   * @example
   * false
   */
  enableEmptyPushReject?: boolean;
  /**
   * @remarks
   * Specifies whether to enable the graceful start rule:
   * 
   * - true: Enable the graceful start rule.
   * 
   * - false: Do not enable the graceful start rule.
   * 
   * @example
   * true
   */
  enableLosslessRule?: boolean;
  /**
   * @remarks
   * The configuration for environment variables of the Kubernetes EnvFrom type. You can mount a specified ConfigMap or Secret to a specified directory. Each key corresponds to a file in the directory. The content of the file is the value of the key.
   * 
   * The following parameters are included in EnvFroms:
   * 
   * - configMapRef: The reference to the ConfigMap. This field includes the following parameter:
   * 
   *   - name: The name of the ConfigMap.
   * 
   * - secretRef: The reference to the Secret. This field includes the following parameter:
   * 
   *   - name: The name of the Secret.
   * 
   * @example
   * [{"name":"appname","valueFrom":{"configMapKeyRef":{"name":"appconf","key":"name"}}}]
   */
  envFroms?: string;
  /**
   * @remarks
   * The environment variables for the deployment. The value must be a JSON array of objects. Three types of environment variables are supported: regular environment variables, Kubernetes ConfigMap environment variables, and Kubernetes Secret environment variables. The format of a regular environment variable is as follows:
   * 
   * `{"name":"x", "value": "y"}`
   * 
   * You can use a ConfigMap to inject the value of a specific key into a container\\"s environment variable. The format is as follows:
   * 
   * `{ "name": "x2", "valueFrom": { "configMapKeyRef": { "name": "my-config", "key": "y2" } } }`
   * 
   * You can use a Secret to inject the value of a specific key into a container\\"s environment variable. The format is as follows:
   * 
   * `{ "name": "x3", "valueFrom": { "secretKeyRef": { "name": "my-secret", "key": "y3" } } }`
   * 
   * > To clear this configuration, set the value to an empty JSON array ([]).
   * 
   * @example
   * [{"name":"x1","value":"y1"},{"name":"x2","valueFrom":{"configMapKeyRef":{"name":"my-config","key":"y2"}}},{"name":"x3","valueFrom":{"secretKeyRef":{"name":"my-secret","key":"y3"}}}]
   */
  envs?: string;
  /**
   * @remarks
   * The configuration of the custom monitoring and administration solution.
   * 
   * @example
   * {"features":[{"name":"base.combination.arms","enable":true},{"name":"base.combination.mse","enable":true}]}
   */
  featureConfig?: string;
  /**
   * @remarks
   * The architecture of the image platform. This parameter is valid when you use a WAR or JAR package for deployment. Examples:
   * 
   * - To specify the x86-64 architecture, enter linux/amd64.
   * 
   * - To specify the ARM64 architecture, enter linux/arm64.
   * 
   * - To build a dual-architecture image, enter linux/amd64,linux/arm64.
   * 
   * - If you do not enter a value, the default architecture is used.
   * 
   * @example
   * linux/arm64,linux/amd64
   */
  imagePlatforms?: string;
  /**
   * @remarks
   * The address of the image. This parameter is required when you set `PackageType` to `Image`.
   * 
   * @example
   * registry.cn-beijing.aliyuncs.com/****_test/****-cons****:1.0
   */
  imageUrl?: string;
  /**
   * @remarks
   * The init containers for the application pod. You can set the container configuration in the YAML format. The value is the Base64-encoded YAML configuration of the init container.
   * 
   * @example
   * [
   *       {
   *             "yamlEncoded": "Y29tbWFuZDoKICAtIHNsZWVwCiAgLSAnNjAnCmltYWdlOiAnYnVzeWJveDpsYXRlc3QnCm5hbWU6IGluaXQtYnVzeWJveAo="
   *       }
   * ]
   */
  initContainers?: string;
  /**
   * @remarks
   * The ID of the internet-facing SLB instance. If you do not specify this parameter, EDAS automatically purchases a new SLB instance for you.
   * 
   * @example
   * a3d4********
   */
  internetSlbId?: string;
  /**
   * @remarks
   * The frontend port of the internet-facing SLB instance. The value must be in the range of 1 to 65535.
   * 
   * @example
   * 80
   */
  internetSlbPort?: number;
  /**
   * @remarks
   * The protocol used by the internet-facing SLB instance. Valid values: TCP, HTTP, and HTTPS.
   * 
   * @example
   * TCP
   */
  internetSlbProtocol?: string;
  /**
   * @remarks
   * The backend port of the internal SLB instance, which also serves as the service port for the application. The port number must be an integer from 1 to 65535.
   * 
   * @example
   * 8080
   */
  internetTargetPort?: number;
  /**
   * @remarks
   * The ID of the internal-facing SLB instance. If you do not specify this parameter, EDAS automatically purchases a new SLB instance for you.
   * 
   * @example
   * ae93********
   */
  intranetSlbId?: string;
  /**
   * @remarks
   * The frontend port of the internal-facing SLB instance. The value must be in the range of 1 to 65535.
   * 
   * @example
   * 80
   */
  intranetSlbPort?: number;
  /**
   * @remarks
   * The protocol used by the internal-facing SLB instance. Valid values: TCP, HTTP, and HTTPS.
   * 
   * @example
   * TCP
   */
  intranetSlbProtocol?: string;
  /**
   * @remarks
   * The backend port of the internal-facing SLB instance. This is also the service port of the application. The value must be in the range of 1 to 65535.
   * 
   * @example
   * 80
   */
  intranetTargetPort?: number;
  /**
   * @remarks
   * Specifies whether the application is a multilingual application.
   * 
   * @example
   * true
   */
  isMultilingualApp?: boolean;
  /**
   * @remarks
   * The version of the Java Development Kit (JDK) on which the deployment package depends. Valid values: Open JDK 7, Open JDK 8, and Custom OpenJDK. This parameter is not supported for image-based deployments. If you select Custom OpenJDK, you must also specify the UserBaseImageUrl parameter.
   * 
   * @example
   * Open JDK 8
   */
  JDK?: string;
  /**
   * @remarks
   * The Java startup parameters. You can configure startup parameters for a Java application. You can configure memory, application, garbage collection (GC) policy, tools, service registration and discovery, and custom parameters. Proper parameter configuration helps reduce GC overhead, shorten server response time, and improve throughput. The value is a JSON string. original specifies the configuration value, and startup specifies the startup parameter. The system automatically concatenates all startup values as the Java startup parameters for the application. To clear the configuration, set the value to `""` or `"{}"`. The keys in the JSON string are described as follows:
   * 
   * - InitialHeapSize: the initial heap size.
   * 
   * - MaxHeapSize: the maximum heap size.
   * 
   * - CustomParams: custom content, such as JVM -D parameters.
   * 
   * - Other keys: You can view the JSON structure submitted by the frontend.
   * 
   * @example
   * {"InitialHeapSize":{"original":512,"startup":"-Xms512m"},"MaxHeapSize":{"original":1024,"startup":"-Xmx1024m"},"CustomParams":{"original":"-Dcustom.property.sample=false","startup":"-Dcustom.property.sample=false"}}
   */
  javaStartUpConfig?: string;
  /**
   * @remarks
   * The labels of the application pod.
   * 
   * @example
   * {"label-name-1":"label-value-1","label-name-2":"label-value-2"}
   */
  labels?: string;
  /**
   * @remarks
   * The maximum number of CPU cores that can be used by an application instance. If you specify LimitmCpu, this parameter is ignored.
   * 
   * @example
   * 4
   */
  limitCpu?: number;
  /**
   * @remarks
   * The maximum ephemeral storage. Unit: GB. A value of 0 means no limit.
   * 
   * @example
   * 4
   */
  limitEphemeralStorage?: number;
  /**
   * @remarks
   * The maximum amount of memory that can be used by an application instance. Unit: MB. The value of LimitMem must be greater than or equal to the value of RequestsMem.
   * 
   * @example
   * 2
   */
  limitMem?: number;
  /**
   * @remarks
   * The maximum number of CPU cores that can be used by an application instance. Unit: millicores. A value of 0 means no limit.
   * 
   * @example
   * 1000
   */
  limitmCpu?: number;
  /**
   * @remarks
   * The liveness probe of the container. Example: `{"failureThreshold": 3,"initialDelaySeconds": 5,"successThreshold": 1,"timeoutSeconds": 1,"tcpSocket":{"host":"", "port":8080}}`.
   * 
   * To clear this configuration, set the value to `""` or `{}`. If you do not set this parameter, it is ignored.
   * 
   * @example
   * {"failureThreshold": 3,"initialDelaySeconds": 5,"successThreshold": 1,"timeoutSeconds": 1,"tcpSocket":{"host":"", "port":8080}}
   */
  liveness?: string;
  /**
   * @remarks
   * The configuration for mounting a host file to a container. Example: `[{"type":"","nodePath":"/localfiles","mountPath":"/app/files"},{"type":"Directory","nodePath":"/mnt","mountPath":"/app/storage"}]`. The following parameters are included:
   * 
   * - `nodePath`: the path on the host.
   * 
   * - `mountPath`: the path in the container.
   * 
   * - `type`: the mount type.
   * 
   * @example
   * [{"type":"","nodePath":"/localfiles","mountPath":"/app/files"},{"type":"Directory","nodePath":"/mnt","mountPath":"/app/storage"}]
   */
  localVolume?: string;
  /**
   * @remarks
   * The ID of the EDAS namespace. This parameter is required if you want to use a non-default namespace.
   * 
   * @example
   * cn-shenzhen:beta****
   */
  logicalRegionId?: string;
  /**
   * @remarks
   * Specifies whether to enable the graceful rolling deployment mode in which service registration is complete before the readiness probe is passed:
   * 
   * - true: A health check URL is provided for the application on port 55199. The path is /health. The URL returns 200 after the service is registered. Otherwise, the URL returns 500.
   * 
   *   > If you also set `LosslessRuleRelated` to `true`, this URL is used to check whether the service warm-up is complete.
   * 
   * - false: A URL is not provided for the application to check whether the service is registered.
   * 
   * @example
   * false
   */
  losslessRuleAligned?: boolean;
  /**
   * @remarks
   * The delay of service registration. Unit: seconds. The value must be in the range of 0 to 86400.
   * 
   * @example
   * 0
   */
  losslessRuleDelayTime?: number;
  /**
   * @remarks
   * The warm-up curve of the service. The value must be in the range of 0 to 20. Default value: 2. This value is suitable for normal warm-up scenarios and indicates that the traffic that the service provider receives follows a quadratic curve during the warm-up period.
   * 
   * @example
   * 2
   */
  losslessRuleFuncType?: number;
  /**
   * @remarks
   * Specifies whether to enable the graceful rolling deployment mode in which service warm-up is complete before the readiness probe is passed:
   * 
   * - true: A health check URL is provided for the application on port 55199. The path is /health. The URL returns 200 after the service warm-up is complete. Otherwise, the URL returns 500.
   * 
   * - false: A URL is not provided for the application to check whether the service warm-up is complete.
   * 
   * @example
   * false
   */
  losslessRuleRelated?: boolean;
  /**
   * @remarks
   * The warm-up duration of the service. Unit: seconds. The value must be in the range of 0 to 86400.
   * 
   * @example
   * 120
   */
  losslessRuleWarmupTime?: number;
  /**
   * @remarks
   * The description of the mount configuration. The value is a serialized JSON string. Example: `[{"nasPath": "/k8s","mountPath": "/mnt"},{"nasPath": "/files","mountPath": "/app/files"}]`. `nasPath` specifies the file storage path. `mountPath` specifies the path to which the file system is mounted in the container.
   * 
   * @example
   * [{"nasPath": "/k8s","mountPath": "/mnt"},{"nasPath": "/files","mountPath": "/app/files"}]
   */
  mountDescs?: string;
  /**
   * @remarks
   * The namespace of the Kubernetes cluster. This parameter determines the Kubernetes namespace in which your application is deployed. The default value is default.
   * 
   * @example
   * default
   */
  namespace?: string;
  /**
   * @remarks
   * The ID of the NAS file system that you want to mount. If you do not specify this parameter but mountDescs is specified, a new NAS file system is automatically purchased and mounted to a vSwitch in the VPC.
   * 
   * @example
   * dfs23****
   */
  nasId?: string;
  /**
   * @remarks
   * The type of the application package. Valid values: FatJar, WAR, and Image.
   * 
   * @example
   * WAR
   */
  packageType?: string;
  /**
   * @remarks
   * The URL of the deployment package. This parameter is required for applications that are deployed using a FatJar or WAR package.
   * 
   * > The version of the EDAS POP API SDK for Java or Python must be 2.44.0 or later.
   * 
   * @example
   * https://e***.oss-cn-beijing.aliyuncs.com/s***-1.0-SNAPSHOT-spring-boot.jar
   */
  packageUrl?: string;
  /**
   * @remarks
   * The version number of the deployment package. This parameter is required for WAR and FatJar packages. You can define the meaning of the version number.
   * 
   * > The version of the EDAS POP API SDK for Java or Python must be 2.44.0 or later.
   * 
   * @example
   * 20200720
   */
  packageVersion?: string;
  /**
   * @remarks
   * The script that is run after the container is started. Example: `{"exec":{"command":["cat","/etc/group"]}}`.
   * 
   * To clear this configuration, set the value to `""` or `{}`. If you do not set this parameter, it is ignored.
   * 
   * @example
   * {\\"exec\\":{\\"command\\":[\\"ls\\",\\"/\\"]}}"
   */
  postStart?: string;
  /**
   * @remarks
   * The script that is run before the container is stopped. Example: `{"tcpSocket":{"host":"", "port":8080}}`.
   * 
   * To clear this configuration, set the value to `""` or `{}`. If you do not set this parameter, it is ignored.
   * 
   * @example
   * {\\"exec\\":{\\"command\\":[\\"ls\\",\\"/\\"]}}"
   */
  preStop?: string;
  /**
   * @remarks
   * The configuration for mounting a Kubernetes PersistentVolumeClaim (PVC). You can mount a Kubernetes PVC volume to a specified directory in a container. The following parameters are included in PvcMountDescs:
   * 
   * - pvcName: The name of the PVC volume. The PVC volume must exist and be in the Bound state.
   * 
   * - mountPaths: The list of mount directories. You can configure multiple mount directories. Each mount directory supports two parameters.
   * 
   *   - mountPath: The mount path. The path must be an absolute path that starts with a forward slash (/).
   * 
   *   - readOnly: The mount mode. true specifies the read-only mode. false specifies the read and write mode. Default value: false.
   * 
   * @example
   * [{"pvcName":"nas-pvc-1","mountPaths":[{"mountPath":"/usr/share/nginx/data"},{"mountPath":"/usr/share/nginx/html","readOnly":true}]}]
   */
  pvcMountDescs?: string;
  /**
   * @remarks
   * The readiness probe of the container. If the check fails, traffic is not routed to the container through the Kubernetes Service. Example: `{"failureThreshold": 3,"initialDelaySeconds": 5,"successThreshold": 1,"timeoutSeconds": 1,"httpGet": {"path": "/consumer","port": 8080,"scheme": "HTTP","httpHeaders": [{"name": "test","value": "testvalue"}]}}`.
   * 
   * To clear this configuration, set the value to `""` or `{}`. If you do not set this parameter, it is ignored.
   * 
   * @example
   * {"failureThreshold": 3,"initialDelaySeconds": 5,"successThreshold": 1,"timeoutSeconds": 1,"httpGet": {"path": "/consumer","port": 8080,"scheme": "HTTP","httpHeaders": [{"name": "test","value": "testvalue"}]}}
   */
  readiness?: string;
  /**
   * @remarks
   * The number of application instances.
   * 
   * @example
   * 4
   */
  replicas?: number;
  /**
   * @remarks
   * The ID of the image repository.
   * 
   * @example
   * ced********
   */
  repoId?: string;
  /**
   * @remarks
   * The number of CPU cores requested for an application instance upon creation. Unit: cores. A value of 0 means no limit. If you specify RequestsmCpu, this parameter is ignored.
   * 
   * @example
   * 0
   */
  requestsCpu?: number;
  /**
   * @remarks
   * The minimum ephemeral storage. Unit: GB. A value of 0 means no limit.
   * 
   * @example
   * 2
   */
  requestsEphemeralStorage?: number;
  /**
   * @remarks
   * The amount of memory requested for an application instance upon creation. Unit: MB. A value of 0 means no limit. The value of RequestsMem cannot be greater than the value of LimitMem.
   * 
   * @example
   * 0
   */
  requestsMem?: number;
  /**
   * @remarks
   * The number of CPU cores requested for an application instance upon creation. Unit: millicores.
   * 
   * @example
   * 500
   */
  requestsmCpu?: number;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * 461
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The type of the container runtime. This parameter is applicable only to clusters that use sandboxed containers.
   * 
   * @example
   * runc
   */
  runtimeClassName?: string;
  /**
   * @remarks
   * The name of the image pull secret. You must create the secret.
   * 
   * @example
   * edas-app-01-image-secret
   */
  secretName?: string;
  /**
   * @remarks
   * The SecurityContext attribute for the application pod container. The value is the Base64-encoded YAML configuration of the SecurityContext.
   * 
   * @example
   * {"yamlEncoded":"cnVuQXNVc2VyOiAwCnJ1bkFzR3JvdXA6IDA="}
   */
  securityContext?: string;
  /**
   * @remarks
   * The configuration of the Kubernetes Service.
   * 
   * @example
   * [{"name": "test-svc-create","serviceType":"ClusterIP","portMappings":[{"servicePort": {"targetPort":8080,"port":80,"protocol":"TCP"}}]}]
   */
  serviceConfigs?: string;
  /**
   * @remarks
   * The sidecar containers for the application pod. You can set the container configuration in the YAML format. The value is the Base64-encoded YAML configuration of the sidecar container.
   * 
   * @example
   * [{"yamlEncoded":"Y29tbWFuZDoKICAtIHRhaWwKICAtICctZicKICAtIC9kZXYvbnVsbAppbWFnZTogJ2J1c3lib3g6bGF0ZXN0JwpuYW1lOiBidXN5Ym94Cg=="}]
   */
  sidecars?: string;
  /**
   * @remarks
   * The Logstore configuration. To clear the configuration, set the value to `""` or `"{}"`:
   * 
   * - Configs:
   * 
   *   - type: The collection type. file indicates the file type. stdout indicates the standard output type.
   * 
   *   - Logstore: The name of the Logstore. Make sure that the Logstore name is unique in the same cluster and meets the following naming conventions:
   * 
   *     - The name can contain only lowercase letters, digits, hyphens (-), and underscores (_).
   * 
   *     - The name must start and end with a lowercase letter or a digit.
   * 
   *     - The name must be 3 to 63 characters in length. If you leave this parameter empty, the system automatically generates a name.
   * 
   *   - LogDir: If the collection type is standard output, the collection path is stdout.log. If the collection type is file, the collection path is the path of the file to be collected. Wildcards are supported. The collection path must match the following regular expression: `^/(.+)/(.*)^/$`.
   * 
   * @example
   * [{"logstore":"thisisanotherfilelog","type":"file","logDir":"/var/log/*"},{"logstore":"","type":"stdout","logDir":"stdout.log"},{"logstore":"thisisafilelog","type":"file","logDir":"/tmp/log/*"}]
   */
  slsConfigs?: string;
  /**
   * @remarks
   * The startup probe. You can use a startup probe to check the liveness of a slow-start container and prevent the container from being killed before it is started. Example: {"failureThreshold": 3,"initialDelaySeconds": 5,"successThreshold": 1,"timeoutSeconds": 1,"httpGet": {"path": "/consumer","port": 8080,"scheme": "HTTP","httpHeaders": [{"name": "test","value": "testvalue"}]}}.
   * 
   * To clear this configuration, set the value to "" or {}. If you do not set this parameter, it is ignored.
   * 
   * @example
   * {"failureThreshold": 3,"initialDelaySeconds": 5,"successThreshold": 1,"timeoutSeconds": 1,"tcpSocket":{"host":"", "port":8080}}
   */
  startup?: string;
  /**
   * @remarks
   * The storage type of the NAS file system. Valid values:
   * 
   * - General-purpose NAS file systems: Capacity and Performance
   * 
   * - Extreme NAS file systems: Standard and Advance
   * 
   * Currently, only the Performance type is supported.
   * 
   * @example
   * Performance
   */
  storageType?: string;
  /**
   * @remarks
   * The timeout period for a graceful stop. Unit: seconds.
   * 
   * @example
   * 120
   */
  terminateGracePeriod?: number;
  /**
   * @remarks
   * The timeout period for the change process. Unit: seconds. The value must be in the range of 1 to 1800. If you do not specify this parameter, the default value 1800 is used.
   * 
   * @example
   * 60
   */
  timeout?: number;
  /**
   * @remarks
   * The URI encoding scheme. Valid values: ISO-8859-1, GBK, GB2312, and UTF-8.
   * 
   * > If you do not set this parameter for the application, the default value of Tomcat is used.
   * 
   * @example
   * GBK
   */
  uriEncoding?: string;
  /**
   * @remarks
   * Specifies whether to enable useBodyEncodingForURI.
   * 
   * > If you do not set this parameter for the application, the default value false is used.
   * 
   * @example
   * false
   */
  useBodyEncoding?: boolean;
  /**
   * @remarks
   * If you use a custom JDK runtime, you must configure the address of the base image. The address must be accessible over the Internet. The EDAS server pulls the image to build an application image.
   * 
   * @example
   * openjdk:8u302
   */
  userBaseImageUrl?: string;
  /**
   * @remarks
   * The version of the Tomcat container on which the deployment package depends. This parameter is applicable to Spring Cloud and Dubbo applications that are deployed using a WAR package. This parameter is not supported for image-based deployments.
   * 
   * @example
   * apache-tomcat-7.0.91
   */
  webContainer?: string;
  /**
   * @remarks
   * The configuration of the Tomcat container. To clear the configuration, set the value to "" or "{}":
   * 
   * - useDefaultConfig: Specifies whether to use the default configuration. If you set this parameter to true, the custom configuration is not used. If you set this parameter to false, the custom configuration is used. If you do not use the custom configuration, the following parameter settings do not take effect.
   * 
   * - contextInputType: The access path of the application.
   * 
   *   - war: You do not need to specify a custom path. The access path is the name of the WAR package.
   * 
   *   - root: You do not need to specify a custom path. The access path is `/`.
   * 
   *   - custom: You must specify a custom path in the contextPath parameter.
   * 
   * - contextPath: The custom path. This parameter is required only when you set contextInputType to custom.
   * 
   * - httpPort: The port number. The value must be in the range of 1024 to 65535. Ports smaller than 1024 require root permissions. Because the container is configured with administrator permissions, specify a port number greater than 1024. If you do not specify this parameter, the default port 8080 is used.
   * 
   * - maxThreads: The maximum number of connections in the connection pool. Default value: 400.
   * 
   *   > This parameter greatly affects application performance. Configure this parameter with the help of a professional.
   * 
   * - uriEncoding: The encoding format for Tomcat. Valid values: UTF-8, ISO-8859-1, GBK, and GB2312. If you do not specify this parameter, the default value ISO-8859-1 is used.
   * 
   * - useBodyEncoding: Specifies whether to use BodyEncoding for URLs.
   * 
   * - useAdvancedServerXml: Specifies whether to use advanced settings to customize the server.xml file. If the preceding parameter types and specific parameters cannot meet your requirements, you can use advanced settings to directly edit the server.xml file of Tomcat.
   * 
   * - serverXml: The content of the server.xml file that is customized in the advanced settings. This parameter takes effect only when useAdvancedServerXml is set to true.
   * 
   * @example
   * {"useDefaultConfig":false,"contextInputType":"custom","contextPath":"hello","httpPort":8088,"maxThreads":400,"uriEncoding":"UTF-8","useBodyEncoding":true,"useAdvancedServerXml":false}
   */
  webContainerConfig?: string;
  /**
   * @remarks
   * The type of the workload. Currently, only deployments are supported.
   * 
   * @example
   * Deployment
   */
  workloadType?: string;
  static names(): { [key: string]: string } {
    return {
      annotations: 'Annotations',
      appConfig: 'AppConfig',
      appName: 'AppName',
      appTemplateName: 'AppTemplateName',
      applicationDescription: 'ApplicationDescription',
      buildPackId: 'BuildPackId',
      clusterId: 'ClusterId',
      command: 'Command',
      commandArgs: 'CommandArgs',
      configMountDescs: 'ConfigMountDescs',
      containerRegistryId: 'ContainerRegistryId',
      csClusterId: 'CsClusterId',
      customAffinity: 'CustomAffinity',
      customAgentVersion: 'CustomAgentVersion',
      customTolerations: 'CustomTolerations',
      deployAcrossNodes: 'DeployAcrossNodes',
      deployAcrossZones: 'DeployAcrossZones',
      edasContainerVersion: 'EdasContainerVersion',
      emptyDirs: 'EmptyDirs',
      enableAhas: 'EnableAhas',
      enableAsm: 'EnableAsm',
      enableEmptyPushReject: 'EnableEmptyPushReject',
      enableLosslessRule: 'EnableLosslessRule',
      envFroms: 'EnvFroms',
      envs: 'Envs',
      featureConfig: 'FeatureConfig',
      imagePlatforms: 'ImagePlatforms',
      imageUrl: 'ImageUrl',
      initContainers: 'InitContainers',
      internetSlbId: 'InternetSlbId',
      internetSlbPort: 'InternetSlbPort',
      internetSlbProtocol: 'InternetSlbProtocol',
      internetTargetPort: 'InternetTargetPort',
      intranetSlbId: 'IntranetSlbId',
      intranetSlbPort: 'IntranetSlbPort',
      intranetSlbProtocol: 'IntranetSlbProtocol',
      intranetTargetPort: 'IntranetTargetPort',
      isMultilingualApp: 'IsMultilingualApp',
      JDK: 'JDK',
      javaStartUpConfig: 'JavaStartUpConfig',
      labels: 'Labels',
      limitCpu: 'LimitCpu',
      limitEphemeralStorage: 'LimitEphemeralStorage',
      limitMem: 'LimitMem',
      limitmCpu: 'LimitmCpu',
      liveness: 'Liveness',
      localVolume: 'LocalVolume',
      logicalRegionId: 'LogicalRegionId',
      losslessRuleAligned: 'LosslessRuleAligned',
      losslessRuleDelayTime: 'LosslessRuleDelayTime',
      losslessRuleFuncType: 'LosslessRuleFuncType',
      losslessRuleRelated: 'LosslessRuleRelated',
      losslessRuleWarmupTime: 'LosslessRuleWarmupTime',
      mountDescs: 'MountDescs',
      namespace: 'Namespace',
      nasId: 'NasId',
      packageType: 'PackageType',
      packageUrl: 'PackageUrl',
      packageVersion: 'PackageVersion',
      postStart: 'PostStart',
      preStop: 'PreStop',
      pvcMountDescs: 'PvcMountDescs',
      readiness: 'Readiness',
      replicas: 'Replicas',
      repoId: 'RepoId',
      requestsCpu: 'RequestsCpu',
      requestsEphemeralStorage: 'RequestsEphemeralStorage',
      requestsMem: 'RequestsMem',
      requestsmCpu: 'RequestsmCpu',
      resourceGroupId: 'ResourceGroupId',
      runtimeClassName: 'RuntimeClassName',
      secretName: 'SecretName',
      securityContext: 'SecurityContext',
      serviceConfigs: 'ServiceConfigs',
      sidecars: 'Sidecars',
      slsConfigs: 'SlsConfigs',
      startup: 'Startup',
      storageType: 'StorageType',
      terminateGracePeriod: 'TerminateGracePeriod',
      timeout: 'Timeout',
      uriEncoding: 'UriEncoding',
      useBodyEncoding: 'UseBodyEncoding',
      userBaseImageUrl: 'UserBaseImageUrl',
      webContainer: 'WebContainer',
      webContainerConfig: 'WebContainerConfig',
      workloadType: 'WorkloadType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      annotations: 'string',
      appConfig: 'string',
      appName: 'string',
      appTemplateName: 'string',
      applicationDescription: 'string',
      buildPackId: 'string',
      clusterId: 'string',
      command: 'string',
      commandArgs: 'string',
      configMountDescs: 'string',
      containerRegistryId: 'string',
      csClusterId: 'string',
      customAffinity: 'string',
      customAgentVersion: 'string',
      customTolerations: 'string',
      deployAcrossNodes: 'string',
      deployAcrossZones: 'string',
      edasContainerVersion: 'string',
      emptyDirs: 'string',
      enableAhas: 'boolean',
      enableAsm: 'boolean',
      enableEmptyPushReject: 'boolean',
      enableLosslessRule: 'boolean',
      envFroms: 'string',
      envs: 'string',
      featureConfig: 'string',
      imagePlatforms: 'string',
      imageUrl: 'string',
      initContainers: 'string',
      internetSlbId: 'string',
      internetSlbPort: 'number',
      internetSlbProtocol: 'string',
      internetTargetPort: 'number',
      intranetSlbId: 'string',
      intranetSlbPort: 'number',
      intranetSlbProtocol: 'string',
      intranetTargetPort: 'number',
      isMultilingualApp: 'boolean',
      JDK: 'string',
      javaStartUpConfig: 'string',
      labels: 'string',
      limitCpu: 'number',
      limitEphemeralStorage: 'number',
      limitMem: 'number',
      limitmCpu: 'number',
      liveness: 'string',
      localVolume: 'string',
      logicalRegionId: 'string',
      losslessRuleAligned: 'boolean',
      losslessRuleDelayTime: 'number',
      losslessRuleFuncType: 'number',
      losslessRuleRelated: 'boolean',
      losslessRuleWarmupTime: 'number',
      mountDescs: 'string',
      namespace: 'string',
      nasId: 'string',
      packageType: 'string',
      packageUrl: 'string',
      packageVersion: 'string',
      postStart: 'string',
      preStop: 'string',
      pvcMountDescs: 'string',
      readiness: 'string',
      replicas: 'number',
      repoId: 'string',
      requestsCpu: 'number',
      requestsEphemeralStorage: 'number',
      requestsMem: 'number',
      requestsmCpu: 'number',
      resourceGroupId: 'string',
      runtimeClassName: 'string',
      secretName: 'string',
      securityContext: 'string',
      serviceConfigs: 'string',
      sidecars: 'string',
      slsConfigs: 'string',
      startup: 'string',
      storageType: 'string',
      terminateGracePeriod: 'number',
      timeout: 'number',
      uriEncoding: 'string',
      useBodyEncoding: 'boolean',
      userBaseImageUrl: 'string',
      webContainer: 'string',
      webContainerConfig: 'string',
      workloadType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

