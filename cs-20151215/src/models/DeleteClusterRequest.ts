// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteClusterRequestDeleteOptions extends $dara.Model {
  /**
   * @remarks
   * The deletion policy for the specified type of resource. Valid values:
   * 
   * *   delete: deletes the specified type of resource.
   * *   retain: retains the specified type of resource.
   * 
   * @example
   * delete
   */
  deleteMode?: string;
  /**
   * @remarks
   * The type of the resource. Valid values:
   * 
   * *   SLB: SLB resources created for Services. By default, the SLB resources are automatically deleted.
   * *   ALB: Application Load Balancer (ALB) resources created by the ALB Ingress controller. By default, the ALB resources are retained.
   * *   SLS_Data: Simple Log Service projects used by the cluster logging feature. By default, the Simple Log Service projects are retained.
   * *   SLS_ControlPlane: Simple Log Service projects used to store the logs of control planes in ACK managed clusters. By default, the Simple Log Service projects are retained.
   * *   PrivateZone: PrivateZone resources created by ACK Serverless clusters. By default, the PrivateZone resources are retained.
   * 
   * @example
   * SLS_Data
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      deleteMode: 'delete_mode',
      resourceType: 'resource_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deleteMode: 'string',
      resourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

