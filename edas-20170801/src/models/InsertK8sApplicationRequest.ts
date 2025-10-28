// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InsertK8sApplicationRequest extends $dara.Model {
  /**
   * @remarks
   * The annotation of an application pod.
   * 
   * @example
   * {"annotation-name-1":"annotation-value-1","annotation-name-2":"annotation-value-2"}
   */
  annotations?: string;
  /**
   * @remarks
   * The application configuration when the application template is used. Set this parameter to a JSON array.
   * 
   * @example
   * {}
   */
  appConfig?: string;
  /**
   * @remarks
   * The name of the application. The name must start with a letter, and can contain digits, letters, and hyphens (-). It can be up to 36 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * doc-test
   */
  appName?: string;
  /**
   * @remarks
   * The name of the template used to create the application. If you specify an application template when you create an application, the application template and the AppConfig parameter are used to configure the application. Other configurations are ignored.
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
   * Application in the production environment
   */
  applicationDescription?: string;
  /**
   * @remarks
   * The version of `EDAS Container`. The value of this parameter conflicts with that of the `EdasContainerVersion` parameter. We recommend that you use the `EdasContainerVersion` parameter.
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
   * The application startup command. If you specify this parameter, the value of this parameter will replace the startup command in the image.
   * 
   * @example
   * ls
   */
  command?: string;
  /**
   * @remarks
   * The arguments in the command. The parameter value is a JSON array of strings. An example is `[{"argument":"-c"},{"argument":"test"}]`, where `-c` and `test` are two arguments that can be set.
   * 
   * @example
   * [{"argument":"-lh"}]
   */
  commandArgs?: string;
  /**
   * @remarks
   * The configuration for mounting a Kubernetes ConfigMap or Secret to a directory in an elastic container instance. The following parameters are included in the configuration:
   * 
   * *   name: the name of the Kubernetes ConfigMap or Secret.
   * *   type: the type of the API object that you want to mount. You can mount a Kubernetes ConfigMap or Secret.
   * *   mountPath: the mount path. The mount path must be an absolute path that starts with a forward slash (/).
   * 
   * @example
   * [{"name":"nginx-config","type":"ConfigMap","mountPath":"/etc/nginx"},{"name":"tls-secret","type":"secret","mountPath":"/etc/ssh"}]
   */
  configMountDescs?: string;
  /**
   * @remarks
   * The ID of the repository used to build the image repository. If this parameter is left empty, the default repository provided by EDAS is used. Only the default repository provided by EDAS is supported.
   * 
   * @example
   * Leave empty
   */
  containerRegistryId?: string;
  /**
   * @remarks
   * The ID of the cluster. This parameter is required only when you create the application in a cluster that has not been imported.
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
  customAgentVersion?: string;
  /**
   * @remarks
   * The custom tolerances.
   * 
   * @example
   * demo
   */
  customTolerations?: string;
  /**
   * @remarks
   * Specifies whether to distribute application instances across nodes. Value `true` indicates that application instances are distributed across nodes. Other values indicate that application instances are not distributed across nodes.
   * 
   * @example
   * true
   */
  deployAcrossNodes?: string;
  /**
   * @remarks
   * Specifies whether to distribute application instances across zones. Value `true` indicates that application instances are distributed across zones. Other values indicate that application instances are not distributed across zones.
   * 
   * @example
   * true
   */
  deployAcrossZones?: string;
  /**
   * @remarks
   * The version of `EDAS Container` on which the deployment package of the application depends.
   * 
   * > This parameter is unavailable if you deploy applications by using images.
   * 
   * @example
   * 3.5.9
   */
  edasContainerVersion?: string;
  /**
   * @remarks
   * The configuration for mounting a Kubernetes emptyDir volume to a directory in an elastic container instance. The following parameters are included in the configuration:
   * 
   * *   mountPath: The mount path in the container. This parameter is required.
   * *   readOnly: (Optional) The mount mode. Value true indicates the read-only mode. Value false indicates the read and write mode. Default value: false.
   * *   subPathExpr: (Optional) The regular expression that is used to match the subdirectory.
   * 
   * @example
   * [{"mountPath":"/app-log","subPathExpr":"$(POD_IP)"},{"readOnly":true,"mountPath":"/etc/nginx"}]
   */
  emptyDirs?: string;
  /**
   * @remarks
   * Specifies whether to enable access to Application High Availability Service (AHAS). Valid values:
   * 
   * *   true: enables access to AHAS.
   * *   false: does not enable access to AHAS.
   * 
   * @example
   * true
   */
  enableAhas?: boolean;
  /**
   * @remarks
   * Specifies whether to activate Alibaba Cloud Service Mesh (ASM). Set this parameter to true only when you create the application in a cluster that has not been imported and you need to use ASM.
   * 
   * @example
   * false
   */
  enableAsm?: boolean;
  /**
   * @remarks
   * Specifies whether to enable the empty list protection feature. Valid values:
   * 
   * *   true: enables the empty list protection feature.
   * *   false: disables the empty list protection feature.
   * 
   * @example
   * false
   */
  enableEmptyPushReject?: boolean;
  /**
   * @remarks
   * Specifies whether to enable graceful start rules. Valid values:
   * 
   * *   true: enables graceful start rules.
   * *   false: disables graceful start rules.
   * 
   * @example
   * true
   */
  enableLosslessRule?: boolean;
  /**
   * @remarks
   * The Kubernetes environment variables that are configured in EnvFrom mode. A ConfigMap or Secret is mounted to a directory. Each key corresponds to a file in the directory, and the content of the file is the value of the key.
   * 
   * The following parameters are included in the configuration:
   * 
   * *   configMapRef: the ConfigMap that is referenced. The following parameter is contained:
   * 
   *     *   name: the name of the ConfigMap.
   * 
   * *   secretRef: the Secret that is referenced. The following parameter is contained:
   * 
   *     *   name: the name of the Secret.
   * 
   * @example
   * [{"name":"appname","valueFrom":{"configMapKeyRef":{"name":"appconf","key":"name"}}}]
   */
  envFroms?: string;
  /**
   * @remarks
   * The environment variables that are used to deploy the application. The value must be a JSON array. Valid values: regular environment variables, Kubernetes ConfigMap environment variables, or Kubernetes Secret environment variables. Specify regular environment variables in the following format:
   * 
   * `{"name":"x", "value": "y"}`
   * 
   * Specify Kubernetes ConfigMap environment variables in the following format to reference values from ConfigMaps:
   * 
   * `{ "name": "x2", "valueFrom": { "configMapKeyRef": { "name": "my-config", "key": "y2" } } }`
   * 
   * Specify Kubernetes Secret environment variables in the following format to reference values from Secrets:
   * 
   * `{ "name": "x3", "valueFrom": { "secretKeyRef": { "name": "my-secret", "key": "y3" } } }`
   * 
   * >  If you want to cancel this configuration, set this parameter to an empty JSON array in the format of "[]".
   * 
   * @example
   * [{"name":"x1","value":"y1"},{"name":"x2","valueFrom":{"configMapKeyRef":{"name":"my-config","key":"y2"}}},{"name":"x3","valueFrom":{"secretKeyRef":{"name":"my-secret","key":"y3"}}}]
   */
  envs?: string;
  featureConfig?: string;
  /**
   * @remarks
   * Mirror the target platform architecture, which is effective when deployed using war or jar. Enter an example:
   * 
   * - Specify x86 64 architecture: Linux/amd64
   * - Specify ARM 64 architecture: Linux/arm64
   * - Specify the construction of dual architecture images: Linux/amd64, Linux/arm64
   * - Do not input: default schema
   */
  imagePlatforms?: string;
  /**
   * @remarks
   * The URL of the image. This parameter is required if you set the `PackageType` parameter to `Image`.
   * 
   * @example
   * registry.cn-beijing.aliyuncs.com/****_test/****-cons****:1.0
   */
  imageUrl?: string;
  /**
   * @remarks
   * Set the initialization container for the application Pod. Support setting the format YAML for container configuration, which is the value of Init container YAML configured with base64 encoding.
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
   * The ID of the Internet-facing SLB instance. If you do not specify this parameter, EDAS automatically purchases a new SLB instance for you.
   * 
   * @example
   * a3d4********
   */
  internetSlbId?: string;
  /**
   * @remarks
   * The frontend port of the Internet-facing SLB instance. Valid values: 1 to 65535.
   * 
   * @example
   * 80
   */
  internetSlbPort?: number;
  /**
   * @remarks
   * The protocol used by the Internet-facing SLB instance. Valid values: TCP, HTTP, and HTTPS.
   * 
   * @example
   * TCP
   */
  internetSlbProtocol?: string;
  /**
   * @remarks
   * The backend port of the internal-facing SLB instance. This port also serves as the service port of the application. Valid values: 1 to 65535.
   * 
   * @example
   * 8080
   */
  internetTargetPort?: number;
  /**
   * @remarks
   * The ID of the internal-facing SLB instance. If you do not specify this parameter, Enterprise Distributed Application Service (EDAS) automatically purchases a new SLB instance for you.
   * 
   * @example
   * ae93********
   */
  intranetSlbId?: string;
  /**
   * @remarks
   * The frontend port of the internal-facing SLB instance. Valid values: 1 to 65535.
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
   * The backend port of the internal-facing Server Load Balancer (SLB) instance. This port also serves as the service port of the application. Valid values: 1 to 65535.
   * 
   * @example
   * 80
   */
  intranetTargetPort?: number;
  /**
   * @remarks
   * Specifies whether the application is a multi-language application.
   * 
   * @example
   * true
   */
  isMultilingualApp?: boolean;
  /**
   * @remarks
   * The version of the Java Development Kit (JDK) on which the deployment package of the application depends. Valid values: Open JDK 7 and Open JDK 8. This parameter is unavailable if you deploy applications by using images.
   * 
   * @example
   * Open JDK 8
   */
  JDK?: string;
  /**
   * @remarks
   * The configuration of Java startup parameters for a Java application. These startup parameters involve the memory, application, garbage collection (GC) policy, tools, service registration and discovery, and custom configurations. Appropriate parameter settings help reduce the GC overheads, shorten the server response time, and improve the throughput. Set this parameter to a JSON string. In the example, original indicates the configuration value, and startup indicates a startup parameter. The system automatically concatenates all startup values as the settings of Java startup parameters for the application. To delete this configuration, leave the parameter value empty by entering `""` or `"{}"`. The following parameters are included in the configuration:
   * 
   * *   InitialHeapSize: the initial size of the heap memory.
   * *   MaxHeapSize: the maximum size of the heap memory.
   * *   CustomParams: the custom parameters, such as JVM -D parameters.
   * *   Other parameters: You can view the JSON structure submitted by the frontend.
   * 
   * @example
   * {"InitialHeapSize":{"original":512,"startup":"-Xms512m"},"MaxHeapSize":{"original":1024,"startup":"-Xmx1024m"},"CustomParams":{"original":"-Dcustom.property.sample=false","startup":"-Dcustom.property.sample=false"}}
   */
  javaStartUpConfig?: string;
  /**
   * @remarks
   * The label of an application pod.
   * 
   * @example
   * {"label-name-1":"label-value-1","label-name-2":"label-value-2"}
   */
  labels?: string;
  /**
   * @remarks
   * The maximum number of CPU cores allowed for each application instance when the application is running. Unit: cores. If the LimitmCpu parameter is specified, you can ignore this parameter.
   * 
   * @example
   * 4
   */
  limitCpu?: number;
  /**
   * @remarks
   * The maximum size of space required by ephemeral storage. Unit: GB. Value 0 indicates that no limit is set on the space size.
   * 
   * @example
   * 4
   */
  limitEphemeralStorage?: number;
  /**
   * @remarks
   * The maximum size of memory allowed for each application instance when the application is running. Unit: MB. The value of LimitMem must be greater than that of RequestsMem.
   * 
   * @example
   * 2
   */
  limitMem?: number;
  /**
   * @remarks
   * The maximum number of CPU cores allowed for each application instance when the application is running. Unit: millicores. Value 0 indicates that no limit is set on CPU cores.
   * 
   * @example
   * 1000
   */
  limitmCpu?: number;
  /**
   * @remarks
   * The configuration for the liveness check on the container. Example: `{"failureThreshold": 3,"initialDelaySeconds": 5,"successThreshold": 1,"timeoutSeconds": 1,"tcpSocket":{"host":"", "port":8080}}`.
   * 
   * If you want to cancel this configuration, leave the parameter value empty by entering `""` or `{}`. If you do not specify this parameter, this configuration is ignored.
   * 
   * @example
   * {"failureThreshold": 3,"initialDelaySeconds": 5,"successThreshold": 1,"timeoutSeconds": 1,"tcpSocket":{"host":"", "port":8080}}
   */
  liveness?: string;
  /**
   * @remarks
   * The configurations that are used when the host files are mounted to the container on which the application is running. Example: `[{"type":"","nodePath":"/localfiles","mountPath":"/app/files"},{"type":"Directory","nodePath":"/mnt","mountPath":"/app/storage"}\\]`. Description:
   * 
   * *   `nodePath`: the host path.
   * *   `mountPath`: the path in the container.
   * *   `type`: the mounting type.
   * 
   * @example
   * [{"type":"","nodePath":"/localfiles","mountPath":"/app/files"},{"type":"Directory","nodePath":"/mnt","mountPath":"/app/storage"}]
   */
  localVolume?: string;
  /**
   * @remarks
   * The ID of the EDAS namespace. This parameter is required for a non-default namespace.
   * 
   * @example
   * cn-shenzhen:beta****
   */
  logicalRegionId?: string;
  /**
   * @remarks
   * Specifies whether to enable the graceful rolling deployment mode and ensure that the service is registered before the readiness check. Valid values:
   * 
   * *   true: provides port 55199 and the /health path for the health check in a non-intrusive manner. When the service is registered, the system returns HTTP 200 status code. Otherwise, the system returns HTTP 500 status code.
   * 
   *     **
   * 
   *     **Note**If you set both the `LosslessRuleRelated` parameter and this parameter to `true`, the operation checks whether the service prefetching is complete.
   * 
   * *   false: does not check whether the service is registered.
   * 
   * @example
   * false
   */
  losslessRuleAligned?: boolean;
  /**
   * @remarks
   * The delay of service registration. Valid values: 0 to 86400. Unit: seconds.
   * 
   * @example
   * 0
   */
  losslessRuleDelayTime?: number;
  /**
   * @remarks
   * The number of prefetching curves. Valid values: 0 to 20. The default value is 2, which is suitable for common prefetching scenarios. This value indicates that the received traffic of the provider during prefetching is displayed as a quadratic curve.
   * 
   * @example
   * 2
   */
  losslessRuleFuncType?: number;
  /**
   * @remarks
   * Specifies whether to enable the graceful rolling deployment mode and ensure that the service prefetching is complete before the readiness check. Valid values:
   * 
   * *   true: provides port 55199 and the /health path for the health check in a non-intrusive manner. When the service prefetching is complete, the system returns HTTP 200 status code. Otherwise, the system returns HTTP 500 status code.
   * *   false: does not check whether the service prefetching is complete.
   * 
   * @example
   * false
   */
  losslessRuleRelated?: boolean;
  /**
   * @remarks
   * The service prefetching duration. Valid values: 0 to 86400. Unit: seconds.
   * 
   * @example
   * 120
   */
  losslessRuleWarmupTime?: number;
  /**
   * @remarks
   * The description of the NAS mounting configuration. Set this parameter to a serialized JSON string. Example: `[{"nasPath": "/k8s","mountPath": "/mnt"},{"nasPath": "/files","mountPath": "/app/files"}\\]`. The `nasPath` parameter specifies the file storage path, and the `mountPath` parameter specifies the path to mount the file system to the container where the application is running.
   * 
   * @example
   * [{"nasPath": "/k8s","mountPath": "/mnt"},{"nasPath": "/files","mountPath": "/app/files"}]
   */
  mountDescs?: string;
  /**
   * @remarks
   * The namespace of the Kubernetes cluster. This parameter specifies the Kubernetes namespace in which your application is deployed. By default, the default namespace is used.
   * 
   * @example
   * default
   */
  namespace?: string;
  /**
   * @remarks
   * The ID of the Network Attached Storage (NAS) file system that you want to mount to the application. If you do not specify this parameter but specify the MountDescs parameter, a NAS file system is automatically purchased and mounted to the vSwitch in the VPC.
   * 
   * @example
   * dfs23****
   */
  nasId?: string;
  /**
   * @remarks
   * The type of the deployment package. Valid values: FatJar, WAR, and Image.
   * 
   * @example
   * WAR
   */
  packageType?: string;
  /**
   * @remarks
   * The URL of the deployment package. This parameter is required if you use a FatJar or WAR package to deploy the application.
   * 
   * > The version of EDAS SDK for Java or Python must be V2.44.0 or later.
   * 
   * @example
   * https://e***.oss-cn-beijing.aliyuncs.com/s***-1.0-SNAPSHOT-spring-boot.jar
   */
  packageUrl?: string;
  /**
   * @remarks
   * The version of the deployment package. This parameter is required if you use a FatJar or WAR package to deploy the application. You must specify a version.
   * 
   * > The version of EDAS SDK for Java or Python must be V2.44.0 or later.
   * 
   * @example
   * 20200720
   */
  packageVersion?: string;
  /**
   * @remarks
   * The post-start script. Example: `{"exec":{"command":["cat","/etc/group"\\]}}`.
   * 
   * If you want to cancel this configuration, leave this parameter empty by setting it to `""` or `{}`. If you do not specify this parameter, this configuration is ignored.
   * 
   * @example
   * {\\"exec\\":{\\"command\\":[\\"ls\\",\\"/\\"]}}"
   */
  postStart?: string;
  /**
   * @remarks
   * The pre-stop script. Example: `{"tcpSocket":{"host":"", "port":8080}}`.
   * 
   * If you want to cancel this configuration, leave this parameter empty by setting it to `""` or `{}`. If you do not specify this parameter, this configuration is ignored.
   * 
   * @example
   * {\\"exec\\":{\\"command\\":[\\"ls\\",\\"/\\"]}}"
   */
  preStop?: string;
  /**
   * @remarks
   * The configuration for mounting a Kubernetes PersistentVolumeClaim (PVC) volume to a directory in an elastic container instance. The following parameters are included in the configuration:
   * 
   * *   pvcName: the name of the PVC volume. Make sure that the PVC volume is an existing volume and is in the Bound state.
   * 
   * *   mountPaths: the directory to which you want to mount the PVC volume. You can configure multiple directories. You can set the following two parameters for each mount directory:
   * 
   *     *   mountPath: the mount path. The mount path must be an absolute path that starts with a forward slash (/).
   *     *   readOnly: the mount mode. Value true indicates the read-only mode. Value false indicates the read and write mode. Default value: false.
   * 
   * @example
   * [{"pvcName":"nas-pvc-1","mountPaths":[{"mountPath":"/usr/share/nginx/data"},{"mountPath":"/usr/share/nginx/html","readOnly":true}]}]
   */
  pvcMountDescs?: string;
  /**
   * @remarks
   * The configuration for the readiness check on the container. If the check fails, the traffic that passes through the Kubernetes Service is not transmitted to the container. Example: \\`{"failureThreshold": 3,"initialDelaySeconds": 5,"successThreshold": 1,"timeoutSeconds": 1,"httpGet": {"path": "/consumer","port": 8080,"scheme": "HTTP","httpHeaders": \[{"name": "test","value": "testvalue"}\\\\]}}\\`.``
   * 
   * If you want to cancel this configuration, leave the parameter value empty by entering `""` or `{}`. If you do not specify this parameter, this configuration is ignored.
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
   * The maximum number of CPU cores allowed for each application instance when the application is created. Unit: cores. Value 0 indicates that no limit is set on CPU cores. If the RequestsmCpu parameter is specified, the value of the RequestsmCpu parameter is used. You can ignore this parameter.
   * 
   * @example
   * 0
   */
  requestsCpu?: number;
  /**
   * @remarks
   * The minimum size of space required by ephemeral storage. Unit: GB. Value 0 indicates that no limit is set on the space size.
   * 
   * @example
   * 2
   */
  requestsEphemeralStorage?: number;
  /**
   * @remarks
   * The maximum size of memory allowed for each application instance when the application is created. Unit: MB. Value 0 indicates that no limit is set on the memory size. The value of RequestsMem cannot be greater than that of LimitMem.
   * 
   * @example
   * 0
   */
  requestsMem?: number;
  /**
   * @remarks
   * The maximum number of CPU cores allowed for each application instance when the application is created. Unit: millicores.
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
   * The name of the credential that is used to pull the images specified by the user. You must configure the Secret.
   * 
   * @example
   * edas-app-01-image-secret
   */
  secretName?: string;
  /**
   * @remarks
   * The configurations of services in a Kubernetes cluster.
   * 
   * @example
   * [{"name": "test-svc-create","serviceType":"ClusterIP","portMappings":[{"servicePort": {"targetPort":8080,"port":80,"protocol":"TCP"}}]}]
   */
  serviceConfigs?: string;
  /**
   * @remarks
   * Set up a Sidecar container for the application Pod. Support setting the format YAML for container configuration, which is the value of Sidecar container YAML configured with base64 encoding.
   * 
   * @example
   * [{"yamlEncoded":"Y29tbWFuZDoKICAtIHRhaWwKICAtICctZicKICAtIC9kZXYvbnVsbAppbWFnZTogJ2J1c3lib3g6bGF0ZXN0JwpuYW1lOiBidXN5Ym94Cg=="}]
   */
  sidecars?: string;
  /**
   * @remarks
   * The Logstore configuration. To delete this configuration, leave the parameter value empty by entering `""` or `"{}"`.
   * 
   * *   The following parameters are included in the configuration:
   * 
   *     *   type: the collection type. Set this parameter to file to specify the file type. Set this parameter to stdout to specify the standard output type.
   * 
   *     *   logstore: the name of the Logstore. Make sure that the name of the Logstore is unique in the cluster. The name must comply with the following rules:
   * 
   *         *   The name can contain only lowercase letters, digits, hyphens (-), and underscores (_).
   *         *   The name must start and end with a lowercase letter or a digit.
   *         *   The name must be 3 to 63 characters in length. If you leave this parameter empty, the system automatically generates a name.
   * 
   *     *   LogDir: If the standard output type is used, the collection path is stdout.log. If the file type is used, the collection path is the path of the collected file. Wildcards (\\*) are supported. The collection path must match the following regular expression: `^/(.+)/(.*)^/$`.
   * 
   * @example
   * [{"logstore":"thisisanotherfilelog","type":"file","logDir":"/var/log/*"},{"logstore":"","type":"stdout","logDir":"stdout.log"},{"logstore":"thisisafilelog","type":"file","logDir":"/tmp/log/*"}]
   */
  slsConfigs?: string;
  /**
   * @remarks
   * The startup probe can be used to detect the viability of slow start containers, avoiding them from being killed before startup. The format is as follows: {"FailureThreshold": 3, "initialDelaySeconds": 5, "SuccessThreshold": 1, "timeoutSeconds": 1, "https Get": {"path": "/consumer", "port": 8080, "scheme": "HTTP", "https Headers": [{"name": "test", "value": "testvalue"}]}.
   * 
   * If set to "" or {}, it means delete, and if not set, it means ignore.
   * 
   * @example
   * {"failureThreshold": 3,"initialDelaySeconds": 5,"successThreshold": 1,"timeoutSeconds": 1,"tcpSocket":{"host":"", "port":8080}}
   */
  startup?: string;
  /**
   * @remarks
   * The storage type of the NAS file system.
   * 
   * *   Valid values for General-purpose NAS file systems: Capacity and Performance.
   * *   Valid values for Extreme NAS file systems: Standard and Advance.
   * 
   * You can set this parameter only to Performance.
   * 
   * @example
   * Performance
   */
  storageType?: string;
  /**
   * @remarks
   * Set the grace stop timeout for the application. Unit: seconds.
   * 
   * @example
   * 120
   */
  terminateGracePeriod?: number;
  /**
   * @remarks
   * The timeout period of the change process. Valid values: 1 to 1800. Unit: seconds. If you do not specify this Unidentifiedparameter, the default value 1800 is used.
   * 
   * @example
   * 60
   */
  timeout?: number;
  /**
   * @remarks
   * The URI encoding scheme. Valid values: ISO-8859-1, GBK, GB2312, and UTF-8.
   * 
   * > If you do not specify this parameter in the application configurations, the default URI encoding scheme in the Tomcat container is applied.
   * 
   * @example
   * GBK
   */
  uriEncoding?: string;
  /**
   * @remarks
   * Specifies whether to use the encoding scheme specified in the request body for URI query parameters.
   * 
   * > If this parameter is not specified in application configuration, the default value false is applied.
   * 
   * @example
   * false
   */
  useBodyEncoding?: boolean;
  /**
   * @remarks
   * When using custom JDK runtime, it is necessary to configure the basic image address. The address needs to be publicly accessible, and the EDAS server will pull the image to build the application image.
   * 
   * @example
   * openjdk:8u302
   */
  userBaseImageUrl?: string;
  /**
   * @remarks
   * The version of the Tomcat container on which the deployment package of the application depends. This parameter is applicable to Spring Cloud and Dubbo applications that you deploy by using WAR packages. This parameter is unavailable if you deploy applications by using images.
   * 
   * @example
   * apache-tomcat-7.0.91
   */
  webContainer?: string;
  /**
   * @remarks
   * The configuration of the Tomcat container. If you want to cancel this configuration, set this parameter to "" or "{}". The following parameters are included in the configuration:
   * 
   * *   useDefaultConfig: specifies whether to use the default configuration. Value true indicates that the default configuration is used. Value false indicates that the custom configuration is used. If the default configuration is used, the following parameters do not take effect:
   * 
   * *   contextInputType: the type of the access path for the application. Valid values:
   * 
   *     *   war: The access path is the name of the WAR package. You do not need to specify a custom path.
   *     *   root: The access path for the application is `/`. You do not need to specify a custom path.
   *     *   custom: If you select this option, you must specify a custom path for the contextPath parameter.
   * 
   * *   contextPath: the custom access path for the application. This parameter is required only when you set the contextInputType parameter to custom.
   * 
   * *   httpPort: the port number. The port number ranges from 1024 to 65535. Though the admin permissions are configured for the container, the root permissions are required to perform operations on ports whose number is less than 1024. Enter a value that ranges from 1024 to 65535 because the container has only the admin permissions. If you do not configure this parameter, the default port number 8080 is used.
   * 
   * *   maxThreads: the maximum number of connections in the connection pool. Default value: 400.
   * 
   *     **
   * 
   *     **Note**This parameter significantly affects application performance. We recommend that you consult with technical support before you set this parameter.
   * 
   * *   uriEncoding: the URI encoding scheme in the Tomcat container. Valid values: UTF-8, ISO-8859-1, GBK, and GB2312. If you do not specify this parameter, the default value ISO-8859-1 is used.
   * 
   * *   useBodyEncoding: specifies whether to use the encoding scheme specified in the request body for URI query parameters.
   * 
   * *   useAdvancedServerXml: specifies whether to use advanced configurations to customize the server.xml file. If the preceding parameter types and specific parameters cannot meet your requirements, you can use advanced configurations to customize the server.xml file of Tomcat.
   * 
   * *   serverXml: the content of the server.xml file customized by using advanced configurations. This parameter takes effect only when you set the useAdvancedServerXml parameter to true.
   * 
   * @example
   * {"useDefaultConfig":false,"contextInputType":"custom","contextPath":"hello","httpPort":8088,"maxThreads":400,"uriEncoding":"UTF-8","useBodyEncoding":true,"useAdvancedServerXml":false}
   */
  webContainerConfig?: string;
  /**
   * @remarks
   * The type of Workload when creating an application is currently only supported for the Deployment type.
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

