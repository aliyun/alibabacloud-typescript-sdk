// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteClusterShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The deletion options for cluster-associated resources.
   */
  deleteOptionsShrink?: string;
  /**
   * @remarks
   * Specifies whether to retain SLB instances. Valid values:
   * 
   * - `true`: Retains the created SLB resources.
   * - `false`: Does not retain the created SLB resources.
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
   * Specifies whether to retain all resources. If this parameter is set to `true`, `retain_resources` is ignored, and cloud resources created through the cluster that are queried by the `DescribeClusterResources` operation are retained. If this parameter is set to `false`, note that resources that are retained by default in `delete_options` are still retained. To delete these resources, set `delete_mode` to `delete` separately in `delete_options`.
   * 
   * - `true`: Retains all resources, including all cloud resources created through the cluster.
   * - `false`: Does not retain all resources (except resources defined as retained by default in `delete_options`. For example, `ALB` is still retained when this parameter is set to `false`).
   * 
   * Default value: `false`.
   * 
   * @example
   * false
   */
  retainAllResources?: boolean;
  /**
   * @remarks
   * The list of resources. To retain resources when deleting a cluster, specify the IDs of the corresponding resources.
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

