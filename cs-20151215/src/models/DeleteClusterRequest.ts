// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteClusterRequestDeleteOptions extends $dara.Model {
  /**
   * @remarks
   * The deletion policy for the specified resource type. Valid values:
   * 
   * - delete: Deletes the resources.
   * 
   * - retain: Retains the resources.
   * 
   * @example
   * delete
   */
  deleteMode?: string;
  /**
   * @remarks
   * The type of resource. Valid values:
   * 
   * - SLB: the SLB resources created for Services. These resources are deleted by default, but you can choose to retain them.
   * 
   * - ALB: the ALB resources created by the ALB Ingress controller. These resources are retained by default, but you can choose to delete them.
   * 
   * - SLS_Data: the SLS project used for cluster logs. This resource is retained by default, but you can choose to delete it.
   * 
   * - SLS_ControlPlane: the SLS project used for control plane logs in a managed cluster. This resource is retained by default, but you can choose to delete it.
   * 
   * - PrivateZone: the PrivateZone resource created by an ACK Serverless cluster. This resource is retained by default, but you can choose to delete it.
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
   * The options for deleting the resources that are associated with the cluster.
   */
  deleteOptions?: DeleteClusterRequestDeleteOptions[];
  /**
   * @remarks
   * Whether to retain SLB resources. Valid values:
   * 
   * - `true`: Retains the SLB resources that are created for the cluster.
   * 
   * - `false`: Does not retain the SLB resources that are created for the cluster.
   * 
   * Default value: `false`.
   * Use the `delete_options` parameter to manage `SLB` resources instead.
   * 
   * @example
   * false
   * 
   * @deprecated
   */
  keepSlb?: boolean;
  /**
   * @remarks
   * Whether to retain all associated resources. If you set this parameter to `true`, the `retain_resources` parameter is ignored, and all cloud resources that are created with the cluster and can be queried by calling `DescribeClusterResources` are retained. If you set this parameter to `false`, note that resources that are configured to be retained by default in the `delete_options` parameter are still retained. To delete these resources, you must explicitly set the `delete_mode` parameter to `delete` for them in `delete_options`.
   * 
   * - `true`: Retains all associated cloud resources that are created with the cluster.
   * 
   * - `false`: Does not retain all associated cloud resources. Resources that are configured to be retained by default in the `delete_options` parameter, such as `ALB`, are still retained when this parameter is set to `false`.
   * 
   * Default value: `false`.
   * 
   * @example
   * false
   */
  retainAllResources?: boolean;
  /**
   * @remarks
   * The IDs of resources to retain when the cluster is deleted.
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

