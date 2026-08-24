// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateKVCacheStoreRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the resource.
   * 
   * @example
   * projectId
   */
  tagKey?: string;
  /**
   * @remarks
   * The tag value of the resource.
   * 
   * @example
   * projectName
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateKVCacheStoreRequest extends $dara.Model {
  /**
   * @remarks
   * The new storage capacity in GiB. The value must be a multiple of 300 TiB and greater than the current capacity.
   * 
   * @example
   * 4096
   */
  capacity?: number;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can be up to 64 ASCII characters in length.
   * 
   * @example
   * YOUR_CLIENT_TOKEN
   */
  clientToken?: string;
  /**
   * @remarks
   * The new KVCacheStore description. The description must be 2 to 256 characters in length and can contain English and Chinese characters. The description cannot start with http:// or https://. Default value: empty.
   * 
   * @example
   * project name pass the check
   */
  description?: string;
  /**
   * @remarks
   * The KVCacheStore instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * kvcs-your-id
   */
  kvcsId?: string;
  /**
   * @remarks
   * The new KVCacheStore name. The name must be 2 to 128 characters in length and can contain characters that are categorized as letter in Unicode (including English and Chinese characters) and digits. The name can contain colons (:), underscores (_), periods (.), and hyphens (-). If this parameter is not specified, the default value is the KVCacheStore ID.
   * 
   * @example
   * 1633730290118313-HD-m3u8
   */
  name?: string;
  /**
   * @remarks
   * The region ID, such as cn-hangzhou.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The list of resource tag key-value pairs. A maximum of 20 tags are supported.
   */
  tag?: UpdateKVCacheStoreRequestTag[];
  static names(): { [key: string]: string } {
    return {
      capacity: 'Capacity',
      clientToken: 'ClientToken',
      description: 'Description',
      kvcsId: 'KvcsId',
      name: 'Name',
      regionId: 'RegionId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      capacity: 'number',
      clientToken: 'string',
      description: 'string',
      kvcsId: 'string',
      name: 'string',
      regionId: 'string',
      tag: { 'type': 'array', 'itemType': UpdateKVCacheStoreRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

