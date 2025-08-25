// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListImageCachesRequestTags extends $dara.Model {
  /**
   * @example
   * imc
   */
  key?: string;
  /**
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
   * @example
   * my-imc
   */
  imageCacheName?: string;
  /**
   * @example
   * 30
   */
  maxResults?: number;
  /**
   * @example
   * AAAAAdDWBF*****
   */
  nextToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * rg-aekzh43v*****
   */
  resourceGroupId?: string;
  /**
   * @example
   * Ready
   */
  status?: string;
  tags?: ListImageCachesRequestTags[];
  static names(): { [key: string]: string } {
    return {
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

