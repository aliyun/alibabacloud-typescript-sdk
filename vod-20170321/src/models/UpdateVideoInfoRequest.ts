// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateVideoInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The category ID. You can obtain the ID by using one of the following methods:
   * - Log on to the [ApsaraVideo VOD console](https://vod.console.aliyun.com) and choose **Configuration Management** > **Media Management** > **Categories** to view the category ID.
   * - Obtain the category ID from the value of the CateId response parameter when you call the [AddCategory](https://help.aliyun.com/document_detail/56401.html) operation to create a category.
   * - Call the [GetCategories](https://help.aliyun.com/document_detail/56406.html) operation to query the category ID, which is the value of the CateId response parameter.
   * 
   * @example
   * 384761111
   */
  cateId?: number;
  /**
   * @remarks
   * The thumbnail URL of the audio or video file.
   * 
   * @example
   * https://example.aliyundoc.com/****.jpg
   */
  coverURL?: string;
  /**
   * @remarks
   * The description of the audio or video file.
   * 
   * - The description can be up to 1024 bytes in length.
   * - The value is encoded in UTF-8.
   * 
   * @example
   * Alibaba Cloud VOD video description
   */
  description?: string;
  /**
   * @remarks
   * The custom ID. Only lowercase letters, uppercase letters, digits, hyphens, and underscores are supported. The value must be 6 to 64 characters in length and is unique at the user level.
   * 
   * @example
   * 123-123
   */
  referenceId?: string;
  /**
   * @remarks
   * The tags.
   * 
   * - Each tag can be up to 32 bytes in length. A maximum of 16 tags can be specified.
   * - Separate multiple tags with commas (,).
   * - The value is encoded in UTF-8.
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
   * - The value is encoded in UTF-8.
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
   * The audio or video ID. You can obtain the ID by using one of the following methods:
   * - For videos uploaded through the console, log on to the [ApsaraVideo VOD console](https://vod.console.aliyun.com) and choose **Media Files** > **Audio/Video** to view the audio or video ID.
   * - Obtain the video ID from the value of the VideoId response parameter when you call the [CreateUploadVideo](https://help.aliyun.com/document_detail/55407.html) operation to obtain the upload URL and credential.
   * - After the video is uploaded, call the [SearchMedia](https://help.aliyun.com/document_detail/86044.html) operation to query the audio or video ID, which is the value of the VideoId response parameter.
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

