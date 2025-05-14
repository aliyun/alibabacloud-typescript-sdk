// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPlayInfoResponseBodyMediaBase extends $dara.Model {
  /**
   * @remarks
   * The category ID. You can use one of the following methods to obtain the ID:
   * 
   * *   Log on to the [Intelligent Media Services (IMS) console](https://ims.console.aliyun.com) and choose **Media Asset Management** > **Category Management** to view the category ID.
   * *   View the value of the CateId parameter returned by the AddCategory operation that you called to create a category.
   * *   View the value of the CateId parameter returned by the GetCategories operation that you called to query a category.
   * 
   * @example
   * 4220
   */
  cateId?: number;
  /**
   * @remarks
   * The URL of the thumbnail.
   * 
   * @example
   * https://***.oss-cn-shanghai.aliyuncs.com/cover/281c64d6-b5fb-4c57-97cd-84da56a8b151_large_cover_url.jpg
   */
  coverURL?: string;
  /**
   * @remarks
   * The time when the media asset was created.
   * 
   * @example
   * 2021-09-22T10:07:31+08:00
   */
  creationTime?: string;
  /**
   * @remarks
   * The content description.
   * 
   * @example
   * desc
   */
  description?: string;
  /**
   * @remarks
   * The ID of the media asset.
   * 
   * @example
   * 2eea77a61c7b4ddd95bec34a6f65b***
   */
  mediaId?: string;
  /**
   * @remarks
   * The tags.
   * 
   * *   Up to 16 tags are supported.
   * *   Multiple tags are separated by commas (,).
   * *   Each tag can be up to 32 bytes in length.
   * *   The value is encoded in UTF-8.
   * 
   * @example
   * test,ccc
   */
  mediaTags?: string;
  /**
   * @remarks
   * The type of the media asset. Valid values:
   * 
   * video audio
   * 
   * @example
   * video
   */
  mediaType?: string;
  /**
   * @remarks
   * The resource status. Valid values:
   * 
   * Init: the initial state, which indicates that the source file is not ready.
   * 
   * Preparing: The source file is being prepared. For example, the file is being uploaded or edited.
   * 
   * PrepareFail: The source file failed to be prepared. For example, the information of the source file failed to be obtained.
   * 
   * Normal: The source file is ready.
   * 
   * @example
   * Normal
   */
  status?: string;
  /**
   * @remarks
   * The title.
   * 
   * @example
   * testTitle
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      cateId: 'CateId',
      coverURL: 'CoverURL',
      creationTime: 'CreationTime',
      description: 'Description',
      mediaId: 'MediaId',
      mediaTags: 'MediaTags',
      mediaType: 'MediaType',
      status: 'Status',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cateId: 'number',
      coverURL: 'string',
      creationTime: 'string',
      description: 'string',
      mediaId: 'string',
      mediaTags: 'string',
      mediaType: 'string',
      status: 'string',
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

