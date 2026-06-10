// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteClusterShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The options for deleting the resources that are associated with the cluster.
   */
  deleteOptionsShrink?: string;
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

