// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteClusterRequestDeleteOptions extends $dara.Model {
  /**
   * @remarks
   * The deletion mode for this type of resource. Valid values:
   * - `delete`: deletes this type of resource.
   * - `retain`: retains this type of resource.
   * 
   * @example
   * delete
   */
  deleteMode?: string;
  /**
   * @remarks
   * The type of the resource. Valid values:
   * - `SLB`: the SLB resources created by using Services. By default, these resources are deleted. You can choose to retain them.
   * - `ALB`: the ALB resources created by the ALB Ingress controller. By default, these resources are retained. You can choose to delete them.
   * - `SLS_Data`: the SLS projects used for the cluster log feature. By default, these resources are retained. You can choose to delete them.
   * - `SLS_ControlPlane`: the SLS projects used for the control plane logs of managed clusters. By default, these resources are retained. You can choose to delete them.
   * - `PrivateZone`: the PrivateZone resources created by ACK Serverless clusters. By default, these resources are retained. You can choose to delete them.
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
   * Specifies whether to retain the Server Load Balancer (SLB) instances created by using Services.
   * Valid values:
   * - `true`: retains the created SLB resources.
   * - `false`: does not retain the created SLB resources.
   * 
   * Default value: `false`.
   * **[Deprecated]** Use `SLB` in `delete_options` instead.
   * 
   * @example
   * false
   * 
   * @deprecated
   */
  keepSlb?: boolean;
  /**
   * @remarks
   * Specifies whether to retain all resources. If you set this parameter to `true`, the `retain_resources` parameter is ignored, and all cloud resources created by the cluster that are queried by calling the `DescribeClusterResources` operation are retained. If you set this parameter to `false`, note that the resources that are retained by default in `delete_options` are still retained. To delete these resources, set `delete_mode` to `delete` in `delete_options`.
   * 
   * Valid values:
   * - `true`: retains all resources, including all cloud resources created by the cluster.
   * - `false`: does not retain all resources, except for the resources that are retained by default in `delete_options`. For example, ALB resources are still retained even if this parameter is set to `false`.
   * 
   * Default value: `false`.
   * 
   * @example
   * false
   */
  retainAllResources?: boolean;
  /**
   * @remarks
   * The list of resources. To retain resources when you delete the cluster, specify the IDs of the corresponding resources.
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

