// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateVideoInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The category ID. You can use one of the following methods to obtain the ID:
   * 
   * *   Log on to the [ApsaraVideo VOD console](https://vod.console.aliyun.com). In the left-side navigation pane, choose **Configuration Management** > **Media Management** > **Categories** to view the category ID of the media file.
   * *   View the value of the CateId parameter returned by the [AddCategory](https://help.aliyun.com/document_detail/56401.html) operation that you called to create a category.
   * *   View the value of the CateId parameter returned by the [GetCategories](https://help.aliyun.com/document_detail/56406.html) operation that you called to query a category.
   * 
   * @example
   * 384761111
   */
  cateId?: number;
  /**
   * @remarks
   * The URL of the audio/video thumbnail.
   * 
   * @example
   * https://example.aliyundoc.com/****.jpg
   */
  coverURL?: string;
  /**
   * @remarks
   * The description of the audio or video file.
   * 
   * *   The description can be up to 1,024 bytes in length.
   * *   The value is encoded in UTF-8.
   * 
   * @example
   * video description
   */
  description?: string;
  /**
   * @example
   * 123-123
   */
  referenceId?: string;
  /**
   * @remarks
   * The tags of the media file.
   * 
   * *   Each tag can be up to 32 bytes in length. You can specify up to 16 tags.
   * *   Separate multiple tags with commas (,).
   * *   The value is encoded in UTF-8.
   * 
   * @example
   * tag1,tag2
   */
  tags?: string;
  /**
   * @remarks
   * The title of the audio or video file.
   * 
   * *   The name cannot exceed 128 bytes.
   * *   The value is encoded in UTF-8.
   * 
   * @example
   * video title
   */
  title?: string;
  /**
   * @remarks
   * Custom settings. This is a JSON string that supports message callbacks, upload acceleration, and other settings. For more information, please refer to [UserData](https://help.aliyun.com/document_detail/86952.html).
   * 
   * @example
   * {"MessageCallback":{"CallbackURL":"http://example.aliyundoc.com"},"Extend":{"localId":"*****","test":"www"}}
   */
  userData?: string;
  /**
   * @remarks
   * The ID of the audio or video file. Perform the following operations to obtain the storage address:
   * 
   * *   Log on to the [ApsaraVideo VOD console](https://vod.console.aliyun.com). In the left-side navigation pane, choose **Media Files** > **Audio/Video**. On the Video and Audio page, view the ID of the audio or video file. This method is applicable to files that are uploaded by using the ApsaraVideo VOD console.
   * *   Obtain the value of VideoId from the response to the [CreateUploadVideo](https://help.aliyun.com/document_detail/55407.html) operation that you called to obtain the upload URL and credential.
   * *   View the value of the VideoId parameter returned by the [SearchMedia](https://help.aliyun.com/document_detail/86044.html) operation that you called to query media information after the audio or video file is uploaded.
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

