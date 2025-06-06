// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Tag } from "./Tag";
import { Taint } from "./Taint";


export class DescribeClusterNodePoolsResponseBodyNodepoolsKubernetesConfig extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to install the CloudMonitor agent on ECS nodes. After the CloudMonitor agent is installed on ECS nodes, you can view the monitoring information about the instances in the CloudMonitor console. We recommend that you install the CloudMonitor agent. Valid values:
   * 
   * *   `true`
   * *   `false`
   * 
   * @example
   * true
   */
  cmsEnabled?: boolean;
  /**
   * @remarks
   * The CPU management policy of the nodes in the node pool. The following policies are supported if the version of the cluster is Kubernetes 1.12.6 or later:
   * 
   * *   `static`: allows pods with specific resource characteristics on the node to be granted enhanced CPU affinity and exclusivity.
   * *   `none`: specifies that the default CPU affinity is used.
   * 
   * @example
   * none
   */
  cpuPolicy?: string;
  /**
   * @remarks
   * The node labels.
   */
  labels?: Tag[];
  /**
   * @remarks
   * The name of the custom node.
   * 
   * The custom node name. A custom node name consists of a prefix, an IP substring, and a suffix.
   * 
   * *   The prefix and suffix can contain multiple parts that are separated by periods (.). Each part can contain lowercase letters, digits, and hyphens (-). A custom node name must start and end with a digit or lowercase letter.
   * *   The IP substring length specifies the number of digits to be truncated from the end of the node IP address. The IP substring length ranges from 5 to 12.
   * 
   * For example, if the node IP address is 192.168.0.55, the prefix is aliyun.com, the IP substring length is 5, and the suffix is test, the node name will aliyun.com00055test.
   * 
   * @example
   * customized,test.,5,.com
   */
  nodeNameMode?: string;
  /**
   * @remarks
   * The user-defined script that is executed before nodes are initialized. For more information, see [Generate user-defined data](https://help.aliyun.com/document_detail/49121.html).
   * 
   * @example
   * IyEvYmluL3NoCmVjaG8gIkhlbGxvIEFD
   */
  preUserData?: string;
  /**
   * @remarks
   * The name of the container runtime. The following types of runtime are supported by ACK:
   * 
   * *   containerd: containerd is the recommended runtime and supports all Kubernetes versions.
   * *   Sandboxed-Container.runv: The Sandbox-Container runtime provides improved isolation and supports Kubernetes 1.31 and earlier.
   * *   Docker (deprecated): supports Kubernetes 1.22 and earlier.
   * 
   * @example
   * docker
   */
  runtime?: string;
  /**
   * @remarks
   * The version of the container runtime.
   * 
   * @example
   * 19.03.5
   */
  runtimeVersion?: string;
  /**
   * @remarks
   * The taint. Taints can be used together with tolerations to avoid scheduling pods to specified nodes. For more information, see [taint-and-toleration](https://kubernetes.io/zh/docs/concepts/scheduling-eviction/taint-and-toleration/).
   */
  taints?: Taint[];
  /**
   * @remarks
   * Specifies whether the nodes are unschedulable after a scale-out activity is performed.
   * 
   * *   true: The node cannot be scheduled.
   * *   false: The node can be scheduled.
   * 
   * @example
   * true
   */
  unschedulable?: boolean;
  /**
   * @remarks
   * The user-defined script that is executed after nodes are initialized. For more information, see [Generate user-defined data](https://help.aliyun.com/document_detail/49121.html).
   * 
   * @example
   * IyEvYmluL3NoCmVjaG8gIkhlbGxvIEFD****
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      cmsEnabled: 'cms_enabled',
      cpuPolicy: 'cpu_policy',
      labels: 'labels',
      nodeNameMode: 'node_name_mode',
      preUserData: 'pre_user_data',
      runtime: 'runtime',
      runtimeVersion: 'runtime_version',
      taints: 'taints',
      unschedulable: 'unschedulable',
      userData: 'user_data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cmsEnabled: 'boolean',
      cpuPolicy: 'string',
      labels: { 'type': 'array', 'itemType': Tag },
      nodeNameMode: 'string',
      preUserData: 'string',
      runtime: 'string',
      runtimeVersion: 'string',
      taints: { 'type': 'array', 'itemType': Taint },
      unschedulable: 'boolean',
      userData: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.labels)) {
      $dara.Model.validateArray(this.labels);
    }
    if(Array.isArray(this.taints)) {
      $dara.Model.validateArray(this.taints);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

