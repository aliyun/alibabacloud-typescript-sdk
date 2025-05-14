// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DeleteClusterRequestDeleteOptions } from "./DeleteClusterRequestDeleteOptions";


export class DeleteClusterRequest extends $dara.Model {
  /**
   * @remarks
   * The type of cluster resource that you want to delete or retain.
   */
  deleteOptions?: DeleteClusterRequestDeleteOptions[];
  /**
   * @remarks
   * Specifies whether to retain the Server Load Balancer (SLB) resources that are created by the cluster.
   * 
   * *   `true`: retains the SLB instances that are created by the cluster.
   * *   `false`: does not retain the SLB instances that are created by the cluster.
   * 
   * Default value: `false`. Set resource_type to `SLB` in the `delete_options` parameter to manage SLB instances.
   * 
   * @example
   * false
   * 
   * @deprecated
   */
  keepSlb?: boolean;
  /**
   * @remarks
   * Specifies whether to retain all resources. If you set the parameter to `true`, the `retain_resources` parameter is ignored. The cloud resources that are created by the cluster are retained. You can call the `DescribeClusterResources` operation to query cloud resources created by the cluster. If you set the parameter to `false`, resources to be retained by default in the `delete_options` parameter are still retained. To delete these resources, set `delete_mode` to `delete` in `delete_options`.
   * 
   * *   `true`: retains all resources, including cloud resources created by the cluster.
   * *   `false`: does not retain all resources. Resources to be retained by default in the `delete_options` parameter are retained. For example, `ALB` instances are retained when this parameter is set to `false`.
   * 
   * Default value: `false`.
   * 
   * @example
   * false
   */
  retainAllResources?: boolean;
  /**
   * @remarks
   * The list of resources. To retain resources when you delete a cluster, you need to specify the IDs of the resources to be retained.
   */
  retainResources?: string[];
  static names(): { [key: string]: string } {
    return {
      deleteOptions: 'delete_options',
      keepSlb: 'keep_slb',
      retainAllResources: 'retain_all_resources',
      retainResources: 'retain_resources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deleteOptions: { 'type': 'array', 'itemType': DeleteClusterRequestDeleteOptions },
      keepSlb: 'boolean',
      retainAllResources: 'boolean',
      retainResources: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.deleteOptions)) {
      $dara.Model.validateArray(this.deleteOptions);
    }
    if(Array.isArray(this.retainResources)) {
      $dara.Model.validateArray(this.retainResources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

