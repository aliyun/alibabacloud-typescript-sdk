// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCustomImagesRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the custom image. Valid values of the tag key length: 1 to 64. Valid values of N: 1 to 20.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the custom image. Valid values of the tag value length: 1 to 64. Valid values of N: 1 to 20.
   * 
   * @example
   * TestValue
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

export class ListCustomImagesRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. A client token is generated from your client and must be unique among different requests. **ClientToken** supports only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The data cloud disk snapshot ID.
   * 
   * @example
   * s-acscasca****
   */
  dataSnapshotId?: string;
  /**
   * @remarks
   * The image IDs of the simple application servers. The value can be a JSON array that consists of up to 100 instance IDs. Separate multiple instance IDs with commas (,).
   * 
   * @example
   * ["fe9c66133a9d4688872869726b52****", "794c230fd3e64ea19f83f4d7a0ad****"]
   */
  imageIds?: string;
  /**
   * @remarks
   * The image names of the simple application servers. The value can be a JSON array that consists of up to 100 instance IDs. Separate multiple instance IDs with commas (,).
   * 
   * @example
   * ["test1****", "test2****"]
   */
  imageNames?: string;
  /**
   * @remarks
   * The instance ID of the simple application server from which the image was created.
   * 
   * @example
   * ace0706b2ac4454d984295a94213****
   */
  instanceId?: string;
  /**
   * @remarks
   * The page number of the snapshot list.
   * Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page for a paged query.
   * 
   * - Maximum value: 100.
   * - Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID of the simple application servers. You can call [ListRegions](https://help.aliyun.com/document_detail/189315.html) to query the list of supported regions.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-aek2bti7cf7yj2i
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Specifies whether to query shared images. Valid values:
   * 
   * - False: The response does not include shared images.
   * 
   * - True: Only shared images are returned.
   * 
   * If this parameter is not specified, all images are returned by default.
   * 
   * @example
   * False
   */
  share?: boolean;
  /**
   * @remarks
   * The system cloud disk snapshot ID.
   * 
   * @example
   * s-bp14m09pq8***0g6
   */
  systemSnapshotId?: string;
  /**
   * @remarks
   * The tags of the custom images.
   */
  tag?: ListCustomImagesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dataSnapshotId: 'DataSnapshotId',
      imageIds: 'ImageIds',
      imageNames: 'ImageNames',
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      share: 'Share',
      systemSnapshotId: 'SystemSnapshotId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dataSnapshotId: 'string',
      imageIds: 'string',
      imageNames: 'string',
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      share: 'boolean',
      systemSnapshotId: 'string',
      tag: { 'type': 'array', 'itemType': ListCustomImagesRequestTag },
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

