// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteClusterRequestDeleteOptions extends $dara.Model {
  /**
   * @remarks
   * The deletion policy for this resource type. Valid values:
   * - delete: deletes resources of this type.
   * - retain: retains resources of this type.
   * 
   * @example
   * delete
   */
  deleteMode?: string;
  /**
   * @remarks
   * The resource type. Valid values:
   * - SLB: SLB resources created through services. Deleted by default. You can choose to retain them.
   * - ALB: ALB resources created by ALB Ingress Controller. Retained by default. You can choose to delete them.
   * - SLS_Data: the SLS project used by the cluster logging feature. Retained by default. You can choose to delete it.
   * - SLS_ControlPlane: the SLS project used by the control plane logs of managed clusters. Retained by default. You can choose to delete it.
   * - PrivateZone: PrivateZone resources created by ACK Serverless clusters. Retained by default. You can choose to delete them.
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
   * The deletion options for cluster-associated resources.
   */
  deleteOptions?: DeleteClusterRequestDeleteOptions[];
  /**
   * @remarks
   * Specifies whether to retain SLB resources. Valid values:
   * 
   * - `true`: retains the created SLB resources.
   * - `false`: does not retain the created SLB resources.
   * 
   * Default value: `false`.
   * Use `SLB` in `delete_options` to manage this setting.
   * 
   * @example
   * false
   * 
   * @deprecated
   */
  keepSlb?: boolean;
  /**
   * @remarks
   * Specifies whether to retain all resources. If this parameter is set to `true`, `retain_resources` is ignored, and cloud resources created through the cluster that are queried by the `DescribeClusterResources` operation are retained. If this parameter is set to `false`, resources that are retained by default in `delete_options` are still retained. To delete these resources, set `delete_mode` to `delete` in `delete_options`.
   * 
   * - `true`: retains all resources, including all cloud resources created through the cluster.
   * - `false`: does not retain all resources, except resources defined as retained by default in `delete_options`. For example, `ALB` resources are still retained when this parameter is set to `false`.
   * 
   * Default value: `false`.
   * 
   * @example
   * false
   */
  retainAllResources?: boolean;
  /**
   * @remarks
   * The resource list. To retain resources when you delete a cluster, specify the IDs of the resources to retain.
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

