// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateMediaRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the category to which the media file belongs. The value must be an integer.
   * 
   * *   If you do not specify this parameter, the value is NULL.
   * *   The value cannot be negative.
   * 
   * @example
   * 1
   */
  cateId?: number;
  /**
   * @remarks
   * The URL of the thumbnail. This parameter is used to specify the storage location of the thumbnail. To obtain the URL, you can log on to the **MPS console** and choose **Workflows** > **Media Buckets** in the left-side navigation pane. Alternatively, you can log on to the **OSS console** and click **Buckets** in the left-side navigation pane.
   * 
   * *   The value can be up to 3,200 bytes in length.
   * *   The URL complies with RFC 2396 and is encoded in UTF-8, with reserved characters being percent-encoded. For more information, see [URL encoding](https://help.aliyun.com/document_detail/423796.html).
   * 
   * @example
   * http://example-bucket-****.oss-cn-hangzhou.aliyuncs.com/test****.jpg
   */
  coverURL?: string;
  /**
   * @remarks
   * The description of the media file. Multiple character types, such as letters and digits, are supported.
   * 
   * *   If you do not specify this parameter, the value is NULL.
   * *   The value is encoded in UTF-8 and can be up to 1,024 bytes in length.
   * 
   * @example
   * example description
   */
  description?: string;
  /**
   * @remarks
   * The ID of the media file whose basic information you want to update. To obtain the ID of the media file, you can log on to the **ApsaraVideo Media Processing (MPS) console** and choose **Media Management** > **Media List** in the left-side navigation pane.
   * 
   * This parameter is required.
   * 
   * @example
   * 3e1cd21131a94525be55acf65888****
   */
  mediaId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The tags that you want to add to the media file.
   * 
   * *   You can specify up to 16 tags for a media file. Separate multiple tags with commas (,).
   * *   Each tag can be up to 32 bytes in length.
   * *   The value is encoded in UTF-8.
   * 
   * @example
   * tag1,tag2
   */
  tags?: string;
  /**
   * @remarks
   * The title of the media file. Multiple character types, such as letters and digits, are supported.
   * 
   * *   If you do not specify this parameter, the value is NULL.
   * *   The value is encoded in UTF-8 and can be up to 128 bytes in length.
   * 
   * @example
   * hello
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      cateId: 'CateId',
      coverURL: 'CoverURL',
      description: 'Description',
      mediaId: 'MediaId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      tags: 'Tags',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cateId: 'number',
      coverURL: 'string',
      description: 'string',
      mediaId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      tags: 'string',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

