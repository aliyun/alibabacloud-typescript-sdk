// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteClusterRequestDeleteOptions extends $dara.Model {
  /**
   * @remarks
   * The deletion mode for this type of resource. Valid values:
   * - delete: Deletes this type of resource.
   * - retain: Retains this type of resource.
   * 
   * @example
   * delete
   */
  deleteMode?: string;
  /**
   * @remarks
   * The resource type. Valid values:
   * - SLB: SLB resources created by using services. By default, these resources are deleted. You can choose to retain them.
   * - ALB: ALB resources created by ALB Ingress Controller. By default, these resources are retained. You can choose to delete them.
   * - SLS_Data: SLS projects used for the cluster logging feature. By default, these resources are retained. You can choose to delete them.
   * - SLS_ControlPlane: SLS projects used for the control plane logs of managed clusters. By default, these resources are retained. You can choose to delete them.
   * - PrivateZone: PrivateZone resources created by ACK Serverless clusters. By default, these resources are retained. You can choose to delete them.
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
   * The deletion options for the resources associated with the cluster.
   */
  deleteOptions?: DeleteClusterRequestDeleteOptions[];
  /**
   * @remarks
   * **[Deprecated]** Use `SLB` in `delete_options` instead. Specifies whether to retain the SLB instances. Valid values:
   * 
   * - `true`: Retains the created SLB resources.
   * - `false`: Does not retain the created SLB resources.
   * 
   * Default value: `false`.
   * 
   * @example
   * false
   * 
   * @deprecated
   */
  keepSlb?: boolean;
  /**
   * @remarks
   * Specifies whether to retain all resources. If you set this parameter to `true`, the `retain_resources` parameter is ignored, and the cloud resources created by the cluster that are queried by calling the `DescribeClusterResources` operation are retained. If you set this parameter to `false`, note that the resources that are retained by default in `delete_options` are still retained. To delete these resources, set `delete_mode` to `delete` in `delete_options`.
   * 
   * Valid values:
   * - `true`: Retains all resources, including all cloud resources created by the cluster.
   * - `false`: Does not retain all resources, except for the resources that are retained by default in `delete_options`. For example, `ALB` resources are still retained even if this parameter is set to `false`.
   * 
   * Default value: `false`.
   * 
   * @example
   * false
   */
  retainAllResources?: boolean;
  /**
   * @remarks
   * The list of resources to retain. If you want to retain resources when deleting a cluster, you must provide the IDs of the corresponding resources.
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

