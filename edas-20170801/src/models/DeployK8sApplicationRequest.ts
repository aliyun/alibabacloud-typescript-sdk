// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeployK8sApplicationRequest extends $dara.Model {
  /**
   * @remarks
   * The annotations for the application pod.
   * 
   * @example
   * {"annotation-name-1":"annotation-value-1","annotation-name-2":"annotation-value-2"}
   */
  annotations?: string;
  /**
   * @remarks
   * The application ID. Obtain the ID by calling the ListApplication operation. For more information, see [ListApplication](https://help.aliyun.com/document_detail/149390.html).
   * 
   * This parameter is required.
   * 
   * @example
   * e83acea6-****-47e1-96ae-c0e953772cdc
   */
  appId?: string;
  /**
   * @remarks
   * The arguments for the container startup command. The value must be a JSON array of strings, such as `["Argument 1", "Argument 2"]`. To clear the arguments, set the parameter to an empty JSON array `"[]"`.
   * 
   * @example
   * ["args1","args2"]
   */
  args?: string;
  /**
   * @remarks
   * The timeout period for a single batch release. Unit: seconds.
   * 
   * @example
   * 60
   */
  batchTimeout?: number;
  /**
   * @remarks
   * The minimum interval for a phased release of pods. For more information, see [minReadySeconds](https://kubernetes.io/docs/concepts/workloads/controllers/deployment/#min-ready-seconds).
   * 
   * @example
   * 0
   */
  batchWaitTime?: number;
  /**
   * @remarks
   * The build package number for EDAS Container:
   * 
   * - If you do not need to change the EDAS Container version during deployment, you can leave this parameter unset.
   * 
   * - To update the EDAS Container version of the target application during this deployment, you must set this parameter.
   * 
   * You can obtain the number in two ways:
   * 
   * - Call the ListBuildPack operation to query the list of container versions. For more information, see [ListBuildPack](https://help.aliyun.com/document_detail/423222.html).
   * 
   * - Obtain it from the **Build Package Number** column in the [Version guide](https://help.aliyun.com/document_detail/92614.html) table. For example, `59` indicates `EDAS Container 3.5.8`.
   * 
   * @example
   * 59
   */
  buildPackId?: string;
  /**
   * @remarks
   * The ID of the canary release rule policy.
   * 
   * @example
   * a8daf22e-****-968c7ff2ea34
   */
  canaryRuleId?: string;
  /**
   * @remarks
   * The description of the change record.
   * 
   * @example
   * Upgrade
   */
  changeOrderDesc?: string;
  /**
   * @remarks
   * The container startup command.
   * 
   * > To clear this configuration, set the parameter to an empty string `""`.
   * 
   * @example
   * ls
   */
  command?: string;
  /**
   * @remarks
   * Configures Kubernetes ConfigMap and Secret mounts. This lets you mount a ConfigMap or Secret to a specified container directory. The parameters for \\`ConfigMountDescs\\` are as follows:
   * 
   * - \\`name\\`: The name of the ConfigMap or Secret.
   * 
   * - \\`type\\`: The configuration type. \\`ConfigMap\\` and \\`Secret\\` are supported.
   * 
   * - \\`mountPath\\`: The mount path. An absolute path in the container that starts with a forward slash (/).
   * 
   * @example
   * [
   *       {
   *             "name": "nginx-config",
   *             "type": "ConfigMap",
   *             "mountPath": "/etc/nginx"
   *       },
   *       {
   *             "name": "tls-secret",
   *             "type": "Secret",
   *             "mountPath": "/etc/ssh"
   *       }
   * ]
   */
  configMountDescs?: string;
  /**
   * @remarks
   * The CPU limit for the application instance during runtime. Unit: cores. A value of 0 means no limit.
   * 
   * @example
   * 1
   */
  cpuLimit?: number;
  /**
   * @remarks
   * The CPU quota to request for the application instance during runtime. Setting this parameter is recommended.
   * Unit: cores. A value of 0 means no limit.
   * 
   * > If you set this parameter, also set the CpuLimit parameter. The value of CpuRequest must be less than or equal to the value of CpuLimit.
   * 
   * @example
   * 0
   */
  cpuRequest?: number;
  /**
   * @remarks
   * The pod affinity configuration. This takes effect only when both \\`DeployAcrossNodes\\` and \\`DeployAcrossZones\\` are \\`false\\`.
   * 
   * @example
   * {"nodeAffinity":{"requiredDuringSchedulingIgnoredDuringExecution":{"nodeSelectorTerms":[{"matchExpressions":[{"key":"beta.kubernetes.io/arch","operator":"NotIn","values":["arm64","arm32"]}]}]},"preferredDuringSchedulingIgnoredDuringExecution":[{"weight":5,"preference":{"matchExpressions":[{"key":"kubernetes.io/os","operator":"In","values":["linux"]}]}}]},"podAffinity":{"requiredDuringSchedulingIgnoredDuringExecution":[{"namespaces":["default"],"topologyKey":"kubernetes.io/hostname","labelSelector":{"matchExpressions":[{"key":"edas.oam.acname","operator":"NotIn","values":["edas-test-app"]}]}}]},"podAntiAffinity":{"preferredDuringSchedulingIgnoredDuringExecution":[{"podAffinityTerm":{"namespaces":["default"],"topologyKey":"failure-domain.beta.kubernetes.io/zone","labelSelector":{"matchExpressions":[{"key":"edas.oam.acname","operator":"In","values":["edas-test-app-2"]}]}},"weight":15}]}}
   */
  customAffinity?: string;
  /**
   * @remarks
   * Sets the version of the custom Application Real-Time Monitoring Service (ARMS) agent to mount to the application.
   * 
   * > This feature is available only to whitelisted users. To use this feature, submit a ticket to be added to the whitelist.
   * 
   * @example
   * 3.1.4
   */
  customAgentVersion?: string;
  /**
   * @remarks
   * The pod scheduling toleration configuration. This takes effect only when both \\`DeployAcrossNodes\\` and \\`DeployAcrossZones\\` are \\`false\\`.
   * 
   * @example
   * [{"key":"edas-taint-key2","operator":"Exists","effect":"NoExecute","tolerationSeconds":50},{"key":"edas-taint-key","operator":"Equal","value":"edas-taint-value","effect":"PreferNoSchedule"}]
   */
  customTolerations?: string;
  /**
   * @remarks
   * Specifies whether to distribute application instances across multiple nodes. \\`true\\` indicates yes, and other values indicate no.
   * 
   * @example
   * true
   */
  deployAcrossNodes?: string;
  /**
   * @remarks
   * Specifies whether to distribute application instances across multiple zones. \\`true\\` indicates yes, and other values indicate no.
   * 
   * @example
   * true
   */
  deployAcrossZones?: string;
  /**
   * @remarks
   * The EDAS Container version on which the deployment package depends. This parameter applies to HSF applications deployed using WAR packages. It is not supported for image-based deployments.
   * 
   * @example
   * 3.5.9
   */
  edasContainerVersion?: string;
  /**
   * @remarks
   * Configures Kubernetes \\`emptyDir\\` mounts. This lets you mount an \\`emptyDir\\` volume to a specified container directory. The parameters for \\`EmptyDirs\\` are as follows:
   * 
   * - \\`mountPath\\`: The container mount path. This is required.
   * 
   * - \\`readOnly\\`: Specifies whether the volume is read-only. Optional. \\`true\\` for read-only, \\`false\\` for read-write. The default is \\`false\\`.
   * 
   * - \\`subPathExpr\\`: The subdirectory expression. Optional.
   * 
   * @example
   * [{"mountPath":"/app-log","subPathExpr":"$(POD_IP)"},{"readOnly":true,"mountPath":"/etc/nginx"}]
   */
  emptyDirs?: string;
  /**
   * @remarks
   * Specifies whether to connect to Application High Availability Service (AHAS).
   * 
   * @example
   * true
   */
  enableAhas?: boolean;
  /**
   * @remarks
   * Specifies whether to enable empty push protection:
   * 
   * - \\`true\\`: Enable empty push protection.
   * 
   * - \\`false\\`: Do not enable empty push protection.
   * 
   * @example
   * false
   */
  enableEmptyPushReject?: boolean;
  /**
   * @remarks
   * Specifies whether to enable the graceful start rule:
   * 
   * - \\`true\\`: Enable the graceful start rule.
   * 
   * - \\`false\\`: Do not enable the graceful start rule.
   * 
   * @example
   * true
   */
  enableLosslessRule?: boolean;
  /**
   * @remarks
   * Configures environment variables of the Kubernetes \\`EnvFrom\\` type. This mounts a specified ConfigMap or Secret to a directory. Each key corresponds to a file in the directory, and the file content is the value of the key.
   * 
   * The parameters for \\`EnvFroms\\` are as follows.
   * 
   * - \\`configMapRef\\`: A reference to a ConfigMap. This field includes the following parameter:
   * 
   *   - \\`name\\`: The name of the ConfigMap.
   * 
   * - \\`secretRef\\`: A reference to a Secret. This field includes the following parameter:
   * 
   *   - \\`name\\`: The name of the Secret.
   * 
   * @example
   * [{"name":"appname","valueFrom":{"configMapKeyRef":{"name":"appconf","key":"name"}}}]
   */
  envFroms?: string;
  /**
   * @remarks
   * The environment variables for the deployment. The value must be a JSON array of objects. Three types of environment variables are supported: regular, Kubernetes ConfigMap, and Kubernetes Secret. The format for a regular environment variable is as follows:
   * 
   * `{"name":"x", "value": "y"}`
   * 
   * A ConfigMap environment variable injects the value of a specified key from a ConfigMap into the container\\"s environment variables. The format is as follows:
   * 
   * `{ "name": "x2", "valueFrom": { "configMapKeyRef": { "name": "my-config", "key": "y2" } } }`
   * 
   * A Secret environment variable injects the value of a specified key from a Secret into the container\\"s environment variables. The format is as follows:
   * 
   * `{ "name": "x3", "valueFrom": { "secretKeyRef": { "name": "my-secret", "key": "y3" } } }`
   * 
   * > To clear this configuration, set the parameter to an empty JSON array \\`[]\\`.
   * 
   * @example
   * [{"name":"x1","value":"y1"},{"name":"x2","valueFrom":{"configMapKeyRef":{"name":"my-config","key":"y2"}}},{"name":"x3","valueFrom":{"secretKeyRef":{"name":"my-secret","key":"y3"}}}]
   */
  envs?: string;
  /**
   * @remarks
   * The full URL of the image. This parameter overwrites the ImageTag parameter.
   */
  image?: string;
  /**
   * @remarks
   * The target platform architecture for the image. This is valid when deploying with a WAR or JAR file. Examples:
   * 
   * - To specify the x86-64 architecture: \\`linux/amd64\\`
   * 
   * - To specify the ARM 64 architecture: \\`linux/arm64\\`
   * 
   * - To build a dual-architecture image: \\`linux/amd64,linux/arm64\\`
   * 
   * - If you do not enter a value, the default architecture is used.
   * 
   * @example
   * linux/arm64,linux/amd64
   */
  imagePlatforms?: string;
  /**
   * @remarks
   * The image tag.
   * 
   * @example
   * latest
   */
  imageTag?: string;
  /**
   * @remarks
   * Sets an init container for the application pod. The container configuration is in YAML format. The value is the base64-encoded YAML configuration of the init container.
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
   * The JDK version on which the deployment package depends. Valid values: Open JDK 7, Open JDK 8, or Custom OpenJDK. This parameter is not supported for image-based deployments. If you use Custom OpenJDK, you must also configure the \\`UserBaseImageUrl\\` field.
   * 
   * @example
   * Open JDK 8
   */
  JDK?: string;
  /**
   * @remarks
   * The Java startup parameters. You can configure memory, application, garbage collection (GC) policy, tools, service registration and discovery, and custom settings. Correctly configuring these parameters helps reduce GC overhead, shorten server response time, and improve throughput. The parameter is a JSON string. \\`original\\` is the configuration value, and \\`startup\\` is the startup parameter. The system automatically concatenates all \\`startup\\` values as the Java startup parameters for the application. Set to `""` or `"{}"` to delete the configuration.
   * 
   * @example
   * {"InitialHeapSize":{"original":512,"startup":"-Xms512m"},"MaxHeapSize":{"original":1024,"startup":"-Xmx1024m"}}
   */
  javaStartUpConfig?: string;
  /**
   * @remarks
   * The labels for the application pod.
   * 
   * @example
   * {"label-name-1":"label-value-1","label-name-2":"label-value-2"}
   */
  labels?: string;
  /**
   * @remarks
   * The upper limit of the temporary storage resource requirement. Unit: GB. A value of 0 means no limit.
   * 
   * @example
   * 4
   */
  limitEphemeralStorage?: number;
  /**
   * @remarks
   * The liveness probe for the container. Example: `{"failureThreshold": 3,"initialDelaySeconds": 5,"successThreshold": 1,"timeoutSeconds": 1,"tcpSocket":{"host":"", "port":8080}}`. To delete this configuration, set the parameter to `""` or `{}`. If you do not set this parameter, the configuration is ignored.
   * 
   * @example
   * {"failureThreshold": 3,"initialDelaySeconds": 5,"successThreshold": 1,"timeoutSeconds": 1,"tcpSocket":{"host":"", "port":8080}}
   */
  liveness?: string;
  /**
   * @remarks
   * The configuration for mounting a host file to a container. Example: `[{"type":"","nodePath":"/localfiles","mountPath":"/app/files"},{"type":"Directory","nodePath":"/mnt","mountPath":"/app/storage"}]`. In this example, \\`nodePath\\` is the host path, \\`mountPath\\` is the path in the container, and \\`type\\` is the mount type.
   * 
   * @example
   * [{"type":"","nodePath":"/localfiles","mountPath":"/app/files"},{"type":"Directory","nodePath":"/mnt","mountPath":"/app/storage"}]
   */
  localVolume?: string;
  /**
   * @remarks
   * Specifies whether to enable the graceful rolling deployment mode to complete service registration before the readiness probe succeeds:
   * 
   * - \\`true\\`: This switch provides a health check for the application on port 55199 and the \\`/health\\` path without intrusion. When service registration is complete, the interface returns 200. Otherwise, it returns 500.
   * 
   * > If \\`LosslessRuleRelated\\` is also set to \\`true\\`, this interface checks whether service prefetch is complete.
   * 
   * - \\`false\\`: Does not provide an interface for the application to check if service registration is complete.
   * 
   * @example
   * false
   */
  losslessRuleAligned?: boolean;
  /**
   * @remarks
   * The service registration latency. Unit: seconds. The value ranges from 0 to 86400.
   * 
   * @example
   * 0
   */
  losslessRuleDelayTime?: number;
  /**
   * @remarks
   * The service prefetch curve. The value ranges from 0 to 20. The default is 2, which is suitable for general prefetch scenarios. This indicates that the traffic receiving curve of the service provider follows a quadratic curve during the prefetch period.
   * 
   * @example
   * 2
   */
  losslessRuleFuncType?: number;
  /**
   * @remarks
   * Specifies whether to enable the graceful rolling deployment mode to complete service prefetch before the readiness probe succeeds:
   * 
   * - \\`true\\`: This switch provides a health check for the application on port 55199 and the \\`/health\\` path without intrusion. When service prefetch is complete, the interface returns 200. Otherwise, it returns 500.
   * 
   * - \\`false\\`: Does not provide an interface for the application to check if service prefetch is complete.
   * 
   * @example
   * false
   */
  losslessRuleRelated?: boolean;
  /**
   * @remarks
   * The service prefetch duration. Unit: seconds. The value ranges from 0 to 86400.
   * 
   * @example
   * 120
   */
  losslessRuleWarmupTime?: number;
  /**
   * @remarks
   * The maximum CPU that can be used. Unit: cores. A value of 0 means no limit.
   * 
   * @example
   * 0
   */
  mcpuLimit?: number;
  /**
   * @remarks
   * The minimum CPU resource requirement. Unit: cores. A value of 0 means no limit.
   * 
   * > If you set this parameter, you must also set the \\`CpuLimit\\` parameter. The value must be less than or equal to the value of \\`CpuLimit\\`.
   * 
   * @example
   * 4
   */
  mcpuRequest?: number;
  /**
   * @remarks
   * The memory limit for the application instance during runtime. Unit: MB. A value of 0 means no limit.
   * 
   * @example
   * 0
   */
  memoryLimit?: number;
  /**
   * @remarks
   * The memory quota to request for the application instance during runtime. Setting this parameter is recommended. Unit: MB. A value of 0 means no request.
   * 
   * > If you set this parameter, also set the MemoryLimit parameter. The value of MemoryRequest must be less than or equal to the value of MemoryLimit.
   * 
   * @example
   * 0
   */
  memoryRequest?: number;
  /**
   * @remarks
   * The mount configurations, which are a serialized JSON string. Example: `[{"nasPath": "/k8s","mountPath": "/mnt"},{"nasPath": "/files","mountPath": "/app/files"}]`. In this example, \\`nasPath\\` is the file storage path and \\`mountPath\\` is the path in the container to which the file system is mounted.
   * 
   * @example
   * [{"nasPath": "/k8s","mountPath": "/mnt"},{"nasPath": "/files","mountPath": "/app/files"}]
   */
  mountDescs?: string;
  /**
   * @remarks
   * The ID of the Apsara File Storage NAS (NAS) file system to mount. The NAS file system must be in the same region as the cluster. It must have an available mount target quota, or its mount target must be on a vSwitch in the VPC. If you do not set this parameter but the \\`mountDescs\\` field exists, a NAS file system is automatically purchased and mounted to a vSwitch in the VPC by default.
   * 
   * @example
   * dfs23****
   */
  nasId?: string;
  /**
   * @remarks
   * The URL of the deployment package. Configure this parameter for applications deployed using a FatJar or WAR package.
   * 
   * > The Java or Python SDK for EDAS POP API must be version 2.44.0 or later.
   * 
   * @example
   * https://e***.oss-cn-beijing.aliyuncs.com/s***-1.0-SNAPSHOT-spring-boot.jar
   */
  packageUrl?: string;
  /**
   * @remarks
   * The version number of the deployment package. This parameter is required for WAR and FatJar packages. You can define the meaning of the version number.
   * 
   * > The Java or Python SDK for EDAS POP API must be version 2.44.0 or later.
   * 
   * @example
   * 20200720
   */
  packageVersion?: string;
  /**
   * @remarks
   * The ID of the deployment package version.
   * 
   * @example
   * 2bcc********
   */
  packageVersionId?: string;
  /**
   * @remarks
   * The script to execute after the container starts. Example: `{"exec":{"command":["cat","/etc/group"]}}`. To delete this configuration, set the parameter to `{}`. If you do not set this parameter, the configuration is ignored.
   * 
   * @example
   * {
   *     "exec":{
   *         "command":[
   *             "ls",
   *             "/"
   *         ]
   *     }
   * }
   */
  postStart?: string;
  /**
   * @remarks
   * The script to execute before stopping the container. Example: `{"tcpSocket":{"host":"", "port":8080}}`.
   * To delete this configuration, set the parameter to `{}`. If you do not set this parameter, the configuration is ignored.
   * 
   * @example
   * {
   *     "exec":{
   *         "command":[
   *             "ls",
   *             "/"
   *         ]
   *     }
   * }
   */
  preStop?: string;
  /**
   * @remarks
   * Configures Kubernetes PersistentVolumeClaim (PVC) mounts. This lets you mount a Kubernetes PVC volume to a specified container directory. The parameters for \\`PvcMountDescs\\` are as follows:
   * 
   * - \\`pvcName\\`: The name of the PVC volume. The PVC volume must already exist and be in the Bound state.
   * 
   * - \\`mountPaths\\`: A list of mount directories. You can configure multiple mount directories. Each mount directory supports the following two parameters:
   * 
   *   - \\`mountPath\\`: The mount path. An absolute path in the container that starts with a forward slash (/).
   * 
   *   - \\`readOnly\\`: The mount mode. \\`true\\` for read-only, \\`false\\` for read-write. The default is \\`false\\`.
   * 
   * @example
   * [{"pvcName":"nas-pvc-1","mountPaths":[{"mountPath":"/usr/share/nginx/data"},{"mountPath":"/usr/share/nginx/html","readOnly":true}]}]
   */
  pvcMountDescs?: string;
  /**
   * @remarks
   * The readiness probe for the container. If the probe fails, traffic from the Kubernetes service is not routed to the container. Example: `{"failureThreshold": 3,"initialDelaySeconds": 5,"successThreshold": 1,"timeoutSeconds": 1,"httpGet": {"path": "/consumer","port": 8080,"scheme": "HTTP","httpHeaders": [{"name": "test","value": "testvalue"}]}}`. To delete this configuration, set the parameter to `""` or `{}`. If you do not set this parameter, the configuration is ignored.
   * 
   * @example
   * {"failureThreshold": 3,"initialDelaySeconds": 5,"successThreshold": 1,"timeoutSeconds": 1,"httpGet": {"path": "/consumer","port": 8080,"scheme": "HTTP","httpHeaders": [{"name": "test","value": "testvalue"}]}}
   */
  readiness?: string;
  /**
   * @remarks
   * The number of application instances. The minimum value is 0.
   * 
   * @example
   * 1
   */
  replicas?: number;
  /**
   * @remarks
   * The minimum temporary storage resource requirement. Unit: GB. A value of 0 means no limit.
   * 
   * @example
   * 2
   */
  requestsEphemeralStorage?: number;
  /**
   * @remarks
   * The container runtime type:
   * 
   * - \\`runc\\`: regular container runtime.
   * 
   * - \\`runv\\`: sandboxed container.
   * 
   * This parameter applies only to clusters that use sandboxed containers.
   * 
   * @example
   * runc
   */
  runtimeClassName?: string;
  /**
   * @remarks
   * Sets the \\`SecurityContext\\` property for the application pod container. The value is the base64-encoded YAML configuration of the \\`SecurityContext\\`.
   * 
   * @example
   * {"yamlEncoded":"cnVuQXNVc2VyOiAwCnJ1bkFzR3JvdXA6IDA="}
   */
  securityContext?: string;
  /**
   * @remarks
   * Sets a sidecar container for the application pod. The container configuration is in YAML format. The value is the base64-encoded YAML configuration of the sidecar container.
   * 
   * @example
   * [
   *       {
   *             "yamlEncoded": "Y29tbWFuZDoKICAtIHRhaWwKICAtICctZicKICAtIC9kZXYvbnVsbAppbWFnZTogJ2J1c3lib3g6bGF0ZXN0JwpuYW1lOiBidXN5Ym94Cg=="
   *       }
   * ]
   */
  sidecars?: string;
  /**
   * @remarks
   * The Logstore configuration. Set to `""` or `"{}"` to delete the configuration:
   * 
   * - \\`Configs\\`:
   * 
   *   - \\`type\\`: The collection type. \\`file\\` for file type, \\`stdout\\` for standard output type.
   * 
   *   - \\`Logstore\\`: The name of the Logstore. Make sure the Logstore name is unique within the same cluster. The name must follow these rules:
   * 
   *     - It can only contain lowercase letters, numbers, hyphens (-), and underscores (_).
   * 
   *     - It must start and end with a lowercase letter or a number.
   * 
   *     - The name must be 3 to 63 characters long. If left empty, the system generates a name automatically.
   * 
   *   - \\`LogDir\\`: If the type is standard output, the collection path is \\`stdout.log\\`. If the type is file, this is the path of the file to collect. Wildcards are supported. The collection path must match the regular expression: `^/(.+)/(.*)^/$`.
   * 
   * @example
   * [{"logstore":"thisisanotherfilelog","type":"file","logDir":"/var/log/*"},{"logstore":"","type":"stdout","logDir":"stdout.log"},{"logstore":"thisisafilelog","type":"file","logDir":"/tmp/log/*"}]
   */
  slsConfigs?: string;
  /**
   * @remarks
   * The startup probe can be used to perform liveness checks on slow-starting containers to prevent them from being killed before they are up and running. Example: {"failureThreshold": 3,"initialDelaySeconds": 5,"successThreshold": 1,"timeoutSeconds": 1,"httpGet": {"path": "/consumer","port": 8080,"scheme": "HTTP","httpHeaders": [{"name": "test","value": "testvalue"}]}}.
   * 
   * To delete this configuration, set the parameter to "" or {}. If you do not set this parameter, the configuration is ignored.
   * 
   * @example
   * {"failureThreshold": 3,"initialDelaySeconds": 5,"successThreshold": 1,"timeoutSeconds": 1,"tcpSocket":{"host":"", "port":8080}}
   */
  startup?: string;
  /**
   * @remarks
   * The storage type of the NAS file system. Valid values:
   * 
   * - General-purpose NAS: \\`Capacity\\` and \\`Performance\\`
   * 
   * - Extreme NAS: \\`standard\\` and \\`advance\\`
   * 
   * Currently, only the \\`Performance\\` type is supported.
   * 
   * @example
   * Performance
   */
  storageType?: string;
  /**
   * @remarks
   * The graceful stop timeout period for the application. Unit: seconds.
   * 
   * @example
   * 120
   */
  terminateGracePeriod?: number;
  /**
   * @remarks
   * The traffic control policy for phased release.
   * 
   * @example
   * {"http":{"rules":[{"conditionType":"percent","percent":10}]}}
   */
  trafficControlStrategy?: string;
  /**
   * @remarks
   * The phased release policy.
   * 
   * - Example 1: Phased release with one canary instance, followed by two batches, automatic batching, and a 1-minute interval.
   *   `{"type":"GrayBatchUpdate","batchUpdate":{"batch":2,"releaseType":"auto","batchWaitTime":1},"grayUpdate":{"gray":1}}`
   * 
   * - Example 2: Phased release with one canary instance, followed by two batches and manual batching.
   *   `{"type":"GrayBatchUpdate","batchUpdate":{"batch":2,"releaseType":"manual"},"grayUpdate":{"gray":1}}`
   * 
   * - Example 3: Phased release in two batches, with automatic batching and a 0-minute interval.
   *   `{"type":"BatchUpdate","batchUpdate":{"batch":2,"releaseType":"auto","batchWaitTime":0}}`
   * 
   * @example
   * {"type":"GrayBatchUpdate","batchUpdate":{"batch":2,"releaseType":"auto","batchWaitTime":1},"grayUpdate":{"gray":1}}
   */
  updateStrategy?: string;
  /**
   * @remarks
   * The URI encoding format. Supported formats: ISO-8859-1, GBK, GB2312, and UTF-8.
   * 
   * > If you do not set this parameter in the application configuration, the default Tomcat value is used.
   * 
   * @example
   * GBK
   */
  uriEncoding?: string;
  /**
   * @remarks
   * Specifies whether to enable \\`useBodyEncodingForURI\\`.
   * 
   * > If you do not set this parameter in the application configuration, the default value \\`false\\` is used.
   * 
   * @example
   * false
   */
  useBodyEncoding?: boolean;
  /**
   * @remarks
   * When using a custom JDK runtime, you must configure the base image address. This address must be publicly accessible. The EDAS server pulls this image to build the application image.
   * 
   * @example
   * openjdk:8u302
   */
  userBaseImageUrl?: string;
  /**
   * @remarks
   * The data volumes.
   * 
   * @example
   * test
   */
  volumesStr?: string;
  /**
   * @remarks
   * The Tomcat version on which the deployment package depends. This parameter applies to Spring Cloud and Dubbo applications deployed using WAR packages. It is not supported for image-based deployments.
   * 
   * @example
   * apache-tomcat-7.0.91
   */
  webContainer?: string;
  /**
   * @remarks
   * The Tomcat container configuration. Set to `""` or `"{}"` to delete the configuration:
   * 
   * - \\`useDefaultConfig\\`: Specifies whether to use a custom configuration. If \\`true\\`, the custom configuration is not used. If \\`false\\`, the custom configuration is used. If you do not use a custom configuration, the following parameter settings do not take effect.
   * 
   * - \\`contextInputType\\`: The access path of the application.
   * 
   *   - \\`war\\`: You do not need to enter a custom path. The access path is the name of the WAR package.
   * 
   *   - \\`root\\`: You do not need to enter a custom path. The access path is \\`/\\`.
   * 
   *   - \\`custom\\`: You need to enter a custom path in the \\`contextPath\\` parameter below.
   * 
   * - \\`contextPath\\`: The custom path. This parameter is required only when \\`contextInputType\\` is set to \\`custom\\`.
   * 
   * - \\`httpPort\\`: The port number. The valid range is 1024 to 65535. Ports smaller than 1024 require root permissions. Because the container is configured with administrator permissions, specify a port number greater than 1024. If you do not configure this, the default port is 8080.
   * 
   * - \\`maxThreads\\`: The size of the connection pool. The default value is 400.
   * 
   *   > This configuration greatly affects application performance. Configure it under professional guidance.
   * 
   * - \\`uriEncoding\\`: The encoding format for Tomcat. Valid values: UTF-8, ISO-8859-1, GBK, and GB2312. If you do not set this, the default is ISO-8859-1.
   * 
   * - \\`useBodyEncoding\\`: Specifies whether to use BodyEncoding for URLs.
   * 
   * - \\`useAdvancedServerXml\\`: Specifies whether to use advanced configuration to customize the \\`server.xml\\` file. If the preceding parameter types and values do not meet your needs, you can use the advanced settings to directly edit the Tomcat \\`Server.xml\\` file.
   * 
   * - \\`serverXml\\`: The content of the custom \\`server.xml\\` text file in the advanced configuration. This takes effect when \\`useAdvancedServerXml\\` is \\`true\\`.
   * 
   * @example
   * {"useDefaultConfig":false,"contextInputType":"custom","contextPath":"hello","httpPort":8088,"maxThreads":400,"uriEncoding":"UTF-8","useBodyEncoding":true,"useAdvancedServerXml":false}
   */
  webContainerConfig?: string;
  static names(): { [key: string]: string } {
    return {
      annotations: 'Annotations',
      appId: 'AppId',
      args: 'Args',
      batchTimeout: 'BatchTimeout',
      batchWaitTime: 'BatchWaitTime',
      buildPackId: 'BuildPackId',
      canaryRuleId: 'CanaryRuleId',
      changeOrderDesc: 'ChangeOrderDesc',
      command: 'Command',
      configMountDescs: 'ConfigMountDescs',
      cpuLimit: 'CpuLimit',
      cpuRequest: 'CpuRequest',
      customAffinity: 'CustomAffinity',
      customAgentVersion: 'CustomAgentVersion',
      customTolerations: 'CustomTolerations',
      deployAcrossNodes: 'DeployAcrossNodes',
      deployAcrossZones: 'DeployAcrossZones',
      edasContainerVersion: 'EdasContainerVersion',
      emptyDirs: 'EmptyDirs',
      enableAhas: 'EnableAhas',
      enableEmptyPushReject: 'EnableEmptyPushReject',
      enableLosslessRule: 'EnableLosslessRule',
      envFroms: 'EnvFroms',
      envs: 'Envs',
      image: 'Image',
      imagePlatforms: 'ImagePlatforms',
      imageTag: 'ImageTag',
      initContainers: 'InitContainers',
      JDK: 'JDK',
      javaStartUpConfig: 'JavaStartUpConfig',
      labels: 'Labels',
      limitEphemeralStorage: 'LimitEphemeralStorage',
      liveness: 'Liveness',
      localVolume: 'LocalVolume',
      losslessRuleAligned: 'LosslessRuleAligned',
      losslessRuleDelayTime: 'LosslessRuleDelayTime',
      losslessRuleFuncType: 'LosslessRuleFuncType',
      losslessRuleRelated: 'LosslessRuleRelated',
      losslessRuleWarmupTime: 'LosslessRuleWarmupTime',
      mcpuLimit: 'McpuLimit',
      mcpuRequest: 'McpuRequest',
      memoryLimit: 'MemoryLimit',
      memoryRequest: 'MemoryRequest',
      mountDescs: 'MountDescs',
      nasId: 'NasId',
      packageUrl: 'PackageUrl',
      packageVersion: 'PackageVersion',
      packageVersionId: 'PackageVersionId',
      postStart: 'PostStart',
      preStop: 'PreStop',
      pvcMountDescs: 'PvcMountDescs',
      readiness: 'Readiness',
      replicas: 'Replicas',
      requestsEphemeralStorage: 'RequestsEphemeralStorage',
      runtimeClassName: 'RuntimeClassName',
      securityContext: 'SecurityContext',
      sidecars: 'Sidecars',
      slsConfigs: 'SlsConfigs',
      startup: 'Startup',
      storageType: 'StorageType',
      terminateGracePeriod: 'TerminateGracePeriod',
      trafficControlStrategy: 'TrafficControlStrategy',
      updateStrategy: 'UpdateStrategy',
      uriEncoding: 'UriEncoding',
      useBodyEncoding: 'UseBodyEncoding',
      userBaseImageUrl: 'UserBaseImageUrl',
      volumesStr: 'VolumesStr',
      webContainer: 'WebContainer',
      webContainerConfig: 'WebContainerConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      annotations: 'string',
      appId: 'string',
      args: 'string',
      batchTimeout: 'number',
      batchWaitTime: 'number',
      buildPackId: 'string',
      canaryRuleId: 'string',
      changeOrderDesc: 'string',
      command: 'string',
      configMountDescs: 'string',
      cpuLimit: 'number',
      cpuRequest: 'number',
      customAffinity: 'string',
      customAgentVersion: 'string',
      customTolerations: 'string',
      deployAcrossNodes: 'string',
      deployAcrossZones: 'string',
      edasContainerVersion: 'string',
      emptyDirs: 'string',
      enableAhas: 'boolean',
      enableEmptyPushReject: 'boolean',
      enableLosslessRule: 'boolean',
      envFroms: 'string',
      envs: 'string',
      image: 'string',
      imagePlatforms: 'string',
      imageTag: 'string',
      initContainers: 'string',
      JDK: 'string',
      javaStartUpConfig: 'string',
      labels: 'string',
      limitEphemeralStorage: 'number',
      liveness: 'string',
      localVolume: 'string',
      losslessRuleAligned: 'boolean',
      losslessRuleDelayTime: 'number',
      losslessRuleFuncType: 'number',
      losslessRuleRelated: 'boolean',
      losslessRuleWarmupTime: 'number',
      mcpuLimit: 'number',
      mcpuRequest: 'number',
      memoryLimit: 'number',
      memoryRequest: 'number',
      mountDescs: 'string',
      nasId: 'string',
      packageUrl: 'string',
      packageVersion: 'string',
      packageVersionId: 'string',
      postStart: 'string',
      preStop: 'string',
      pvcMountDescs: 'string',
      readiness: 'string',
      replicas: 'number',
      requestsEphemeralStorage: 'number',
      runtimeClassName: 'string',
      securityContext: 'string',
      sidecars: 'string',
      slsConfigs: 'string',
      startup: 'string',
      storageType: 'string',
      terminateGracePeriod: 'number',
      trafficControlStrategy: 'string',
      updateStrategy: 'string',
      uriEncoding: 'string',
      useBodyEncoding: 'boolean',
      userBaseImageUrl: 'string',
      volumesStr: 'string',
      webContainer: 'string',
      webContainerConfig: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

