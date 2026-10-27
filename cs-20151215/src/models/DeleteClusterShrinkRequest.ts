// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteClusterShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The deletion options for the resources associated with the cluster.
   */
  deleteOptionsShrink?: string;
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
  retainResourcesShrink?: string;
  static names(): { [key: string]: string } {
    return {
      deleteOptionsShrink: 'delete_options',
      keepSlb: 'keep_slb',
      retainAllResources: 'retain_all_resources',
      retainResourcesShrink: 'retain_resources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deleteOptionsShrink: 'string',
      keepSlb: 'boolean',
      retainAllResources: 'boolean',
      retainResourcesShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

