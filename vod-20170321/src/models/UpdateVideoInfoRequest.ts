// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateVideoInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The category ID. You can obtain the ID by using one of the following methods:
   * - Log on to the [ApsaraVideo VOD console](https://vod.console.aliyun.com) and choose **Configuration Management** > **Media Asset Management Settings** > **Category Management** to view the category ID.
   * - When you call the [AddCategory](https://help.aliyun.com/document_detail/56401.html) operation to create a category, the category ID is the value of the CateId response parameter.
   * - When you call the [GetCategories](https://help.aliyun.com/document_detail/56406.html) operation to query categories, the category ID is the value of the CateId response parameter.
   * 
   * @example
   * 384761111
   */
  cateId?: number;
  /**
   * @remarks
   * The URL of the thumbnail for the audio or video file.
   * 
   * @example
   * https://example.aliyundoc.com/****.jpg
   */
  coverURL?: string;
  /**
   * @remarks
   * The description of the audio or video file.
   * 
   * - The description can be up to 1,024 bytes in length.
   * - The description must be encoded in UTF-8.
   * 
   * @example
   * Alibaba Cloud VOD video description
   */
  description?: string;
  /**
   * @remarks
   * The custom ID. The ID must be 6 to 64 characters in length and can contain only lowercase letters, uppercase letters, digits, hyphens, and underscores. The ID must be unique per user.
   * 
   * @example
   * 123-123
   */
  referenceId?: string;
  /**
   * @remarks
   * The tags.
   * 
   * - A single tag can be up to 32 bytes in length. You can add up to 16 tags.
   * - Separate multiple tags with commas (,).
   * - Tags must be encoded in UTF-8.
   * 
   * @example
   * tag1,tag2
   */
  tags?: string;
  /**
   * @remarks
   * The title of the audio or video file.
   * 
   * - The title can be up to 128 bytes in length.
   * - The title must be encoded in UTF-8.
   * 
   * @example
   * Alibaba Cloud VOD Video Title
   */
  title?: string;
  /**
   * @remarks
   * The custom settings. The value is a JSON string that supports settings such as message callbacks and upload acceleration. For more information, see [UserData](https://help.aliyun.com/document_detail/86952.html).
   * 
   * @example
   * {"MessageCallback":{"CallbackURL":"http://example.aliyundoc.com"},"Extend":{"localId":"*****","test":"www"}}
   */
  userData?: string;
  /**
   * @remarks
   * The audio or video file ID. You can obtain the ID by using one of the following methods:
   * - For videos uploaded through the console, log on to the [ApsaraVideo VOD console](https://vod.console.aliyun.com) and choose **Media Assets** > **Audio and Video** to view the audio or video file ID.
   * - When you call the [CreateUploadVideo](https://help.aliyun.com/document_detail/55407.html) operation to obtain the upload URL and credential, the audio or video file ID is the value of the VideoId response parameter.
   * - After a video is uploaded, you can call the [SearchMedia](https://help.aliyun.com/document_detail/86044.html) operation to query the audio or video file ID. The ID is the value of the VideoId response parameter.
   * 
   * @example
   * 2deda93265312baf9b0ed810d****
   */
  videoId?: string;
  static names(): { [key: string]: string } {
    return {
      cateId: 'CateId',
      coverURL: 'CoverURL',
      description: 'Description',
      referenceId: 'ReferenceId',
      tags: 'Tags',
      title: 'Title',
      userData: 'UserData',
      videoId: 'VideoId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cateId: 'number',
      coverURL: 'string',
      description: 'string',
      referenceId: 'string',
      tags: 'string',
      title: 'string',
      userData: 'string',
      videoId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

