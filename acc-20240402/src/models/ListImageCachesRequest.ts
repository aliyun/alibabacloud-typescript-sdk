// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListImageCachesRequestTags extends $dara.Model {
  /**
   * @remarks
   * The tag key of the image cache.
   * 
   * @example
   * imc
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the image cache.
   * 
   * @example
   * test
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListImageCachesRequest extends $dara.Model {
  /**
   * @remarks
   * The container image.
   * 
   * @example
   * egs-registry.cn-hangzhou.cr.aliyuncs.com/egs/vllm:0.9.0.1-pytorch2.7-cu128-20250612
   */
  image?: string;
  /**
   * @remarks
   * The name of the image cache.
   * 
   * @example
   * my-imc
   */
  imageCacheName?: string;
  /**
   * @remarks
   * The maximum number of results to return for a single request.
   * 
   * @example
   * 30
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token. Set the value to the NextToken value returned from the previous API call.
   * 
   * @example
   * AAAAAdDWBF*****
   */
  nextToken?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-aekzh43v*****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The cache status of the image cache.
   * 
   * @example
   * Ready
   */
  status?: string;
  /**
   * @remarks
   * The tags of the image cache. You can specify up to 20 tags.
   */
  tags?: ListImageCachesRequestTags[];
  static names(): { [key: string]: string } {
    return {
      image: 'Image',
      imageCacheName: 'ImageCacheName',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      status: 'Status',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      image: 'string',
      imageCacheName: 'string',
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      status: 'string',
      tags: { 'type': 'array', 'itemType': ListImageCachesRequestTags },
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

