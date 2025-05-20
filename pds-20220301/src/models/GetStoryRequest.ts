// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetStoryRequest extends $dara.Model {
  /**
   * @example
   * image/resize,m_fill,h_128,w_128,limit_0/format,jpg
   * 
   * @deprecated
   */
  coverImageThumbnailProcess?: string;
  /**
   * @example
   * video/snapshot,t_1000,f_jpg,w_0,h_0,m_fast,ar_auto
   * 
   * @deprecated
   */
  coverVideoThumbnailProcess?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  driveId?: string;
  /**
   * @example
   * image/resize,m_fill,h_128,w_128,limit_0/format,jpg
   * 
   * @deprecated
   */
  imageThumbnailProcess?: string;
  /**
   * @example
   * image/resize,m_fill,h_128,w_128,limit_0/format,jpg
   * 
   * @deprecated
   */
  imageUrlProcess?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 9132e0d8-fe92-4e56-86c3-f5f112308003
   */
  storyId?: string;
  /**
   * @example
   * 900
   * 
   * @deprecated
   */
  urlExpireSec?: number;
  /**
   * @example
   * video/snapshot,t_1000,f_jpg,w_0,h_0,m_fast,ar_auto
   * 
   * @deprecated
   */
  videoThumbnailProcess?: string;
  static names(): { [key: string]: string } {
    return {
      coverImageThumbnailProcess: 'cover_image_thumbnail_process',
      coverVideoThumbnailProcess: 'cover_video_thumbnail_process',
      driveId: 'drive_id',
      imageThumbnailProcess: 'image_thumbnail_process',
      imageUrlProcess: 'image_url_process',
      storyId: 'story_id',
      urlExpireSec: 'url_expire_sec',
      videoThumbnailProcess: 'video_thumbnail_process',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coverImageThumbnailProcess: 'string',
      coverVideoThumbnailProcess: 'string',
      driveId: 'string',
      imageThumbnailProcess: 'string',
      imageUrlProcess: 'string',
      storyId: 'string',
      urlExpireSec: 'number',
      videoThumbnailProcess: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

