// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListNodePoolComponentsRequest extends $dara.Model {
  /**
   * @example
   * aliyun_3_x64_20G_container_optimized_alibase_20250629.vhd
   */
  imageId?: string;
  /**
   * @example
   * AliyunLinux3
   */
  imageType?: string;
  /**
   * @example
   * ["ecs.c6.xlarge"]
   */
  instanceTypes?: string[];
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * 5c0a1c0f91c14c6****
   */
  nextToken?: string;
  /**
   * @example
   * np1855b102ac434f5990d87b77a****
   */
  nodepoolId?: string;
  /**
   * @example
   * ess
   */
  nodepoolType?: string;
  static names(): { [key: string]: string } {
    return {
      imageId: 'image_id',
      imageType: 'image_type',
      instanceTypes: 'instance_types',
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
      instanceTypes: { 'type': 'array', 'itemType': 'string' },
      maxResults: 'number',
      nextToken: 'string',
      nodepoolId: 'string',
      nodepoolType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instanceTypes)) {
      $dara.Model.validateArray(this.instanceTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

