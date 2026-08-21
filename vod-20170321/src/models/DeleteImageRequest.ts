// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteImageRequest extends $dara.Model {
  /**
   * @remarks
   * The type of image deletion operation. Valid values:
   * 
   * - **ImageURL**: deletes images based on image URLs.
   * - **ImageId**: deletes images based on image IDs.
   * - **VideoId**: deletes images associated with a video based on the video ID.
   * 
   * This parameter is required.
   * 
   * @example
   * VideoId
   */
  deleteImageType?: string;
  /**
   * @remarks
   * The image IDs. Separate multiple IDs with commas (,). A maximum of 20 IDs are supported. You can obtain image IDs by using the following methods:
   * - Log on to the [ApsaraVideo VOD console](https://vod.console.aliyun.com) and choose **Media Files** > **Image** to view the IDs.
   * - Obtain the IDs from the response of the [CreateUploadImage](~~CreateUploadImage~~) operation that is called to obtain the upload URL and credential.
   * - Obtain the IDs from the response of the [SearchMedia](~~SearchMedia~~) operation that is called to query images.
   * 
   * > This parameter is available and required only when **DeleteImageType** is set to **ImageId**.
   * 
   * @example
   * bbc65bba53fed90de118a7849****,594228cdd14b4d069fc17a8c4a****
   */
  imageIds?: string;
  /**
   * @remarks
   * The type of images associated with the video that you want to delete. Valid values:
   * 
   * - **CoverSnapshot**: thumbnail snapshot.
   * - **NormalSnapshot**: regular snapshot.
   * - **SpriteSnapshot**: sprite snapshot.
   * - **SpriteOriginSnapshot**: sprite source image.
   * - **All**: all of the preceding image types. If the value is not `All`, you can specify multiple image types. Separate multiple values with commas (,).
   * 
   * > This parameter is available and required only when **DeleteImageType** is set to **VideoId**.
   * 
   * @example
   * All
   */
  imageType?: string;
  /**
   * @remarks
   * The image URLs. The value is the `ImageURL` parameter returned by the [CreateUploadImage](~~CreateUploadImage~~) operation. Separate multiple URLs with commas (,). A maximum of 20 URLs are supported.
   * 
   * > This parameter is available and required only when **DeleteImageType** is set to **ImageURL**.
   * 
   * @example
   * https://example.aliyundoc.com/image/default/41AE7ADABBE*****.png
   */
  imageURLs?: string;
  /**
   * @remarks
   * The video ID. Only a single video ID is supported. You can obtain the video ID by using the following methods:
   * - Log on to the [ApsaraVideo VOD console](https://vod.console.aliyun.com) and choose **Media Files** > **Audio/Video** to view the video ID.
   * - Obtain the ID from the response of the [CreateUploadVideo](~~CreateUploadVideo~~) operation that is called to obtain the upload URL and credential.
   * - Obtain the ID from the response of the [SearchMedia](~~SearchMedia~~) operation that is called to query videos.
   * 
   * > This parameter is available and required only when **DeleteImageType** is set to **VideoId**.
   * 
   * @example
   * eb1861d2c9a8842340e989dd56****
   */
  videoId?: string;
  static names(): { [key: string]: string } {
    return {
      deleteImageType: 'DeleteImageType',
      imageIds: 'ImageIds',
      imageType: 'ImageType',
      imageURLs: 'ImageURLs',
      videoId: 'VideoId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deleteImageType: 'string',
      imageIds: 'string',
      imageType: 'string',
      imageURLs: 'string',
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

