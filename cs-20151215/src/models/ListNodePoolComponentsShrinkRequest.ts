// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListNodePoolComponentsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The image ID of the node pool. Either this parameter or image_type is required if nodepool_id is not specified.
   * 
   * @example
   * aliyun_3_x64_20G_container_optimized_alibase_20250629.vhd
   */
  imageId?: string;
  /**
   * @remarks
   * The image type of the node pool. Either this parameter or image_id is required if nodepool_id is not specified.
   * 
   * @example
   * AliyunLinux3
   */
  imageType?: string;
  /**
   * @remarks
   * The instance types of the node pool. This parameter is required if nodepool_id is not specified.
   * 
   * @example
   * ["ecs.c6.xlarge"]
   */
  instanceTypesShrink?: string;
  /**
   * @remarks
   * The maximum number of results to return. Default value: 200.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token.
   * 
   * @example
   * 5c0a1c0f91c14c6****
   */
  nextToken?: string;
  /**
   * @remarks
   * The node pool ID. If you specify a node pool ID, the system queries the list of components available for the node pool and ignores other parameters.
   * 
   * @example
   * np1855b102ac434f5990d87b77a****
   */
  nodepoolId?: string;
  /**
   * @remarks
   * The node pool type. This parameter is required if nodepool_id is not specified.
   * 
   * @example
   * ess
   */
  nodepoolType?: string;
  static names(): { [key: string]: string } {
    return {
      imageId: 'image_id',
      imageType: 'image_type',
      instanceTypesShrink: 'instance_types',
      maxResults: 'max_results',
      nextToken: 'next_token',
      nodepoolId: 'nodepool_id',
      nodepoolType: 'nodepool_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageId: 'string',
      imageType: 'string',
      instanceTypesShrink: 'string',
      maxResults: 'number',
      nextToken: 'string',
      nodepoolId: 'string',
      nodepoolType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

