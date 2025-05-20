// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DownloadFileRequest extends $dara.Model {
  /**
   * @remarks
   * The drive ID.
   * 
   * @example
   * 1
   */
  driveId?: string;
  /**
   * @remarks
   * The file ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 9520943DC264
   */
  fileId?: string;
  /**
   * @remarks
   * The method used to generate the thumbnail of an image. If this parameter is specified, you are redirected to the URL of the generated thumbnail.
   * 
   * @example
   * image/resize,m_fill,h_128,w_128,limit_0
   */
  imageThumbnailProcess?: string;
  /**
   * @remarks
   * The method used to generate the thumbnail of a document. If this parameter is specified, you are redirected to the URL of the generated thumbnail.
   * 
   * @example
   * image/resize,w_200
   */
  officeThumbnailProcess?: string;
  /**
   * @remarks
   * The share ID. If you want to manage a file by using a share link, carry the `x-share-token` header for authentication in the request and specify share_id. In this case, `drive_id` is invalid. Otherwise, use an `AccessKey pair` or `access token` for authentication and specify `drive_id`. You must specify one of `share_id` and `drive_id`.
   * 
   * @example
   * 7JQX1FswpQ8
   */
  shareId?: string;
  /**
   * @remarks
   * The method used to generate the thumbnail of a video. If this parameter is specified, you are redirected to the URL of the generated thumbnail.
   * 
   * @example
   * video/snapshot,t_7000,f_jpg,w_800,h_600,m_fast
   */
  videoThumbnailProcess?: string;
  static names(): { [key: string]: string } {
    return {
      driveId: 'drive_id',
      fileId: 'file_id',
      imageThumbnailProcess: 'image_thumbnail_process',
      officeThumbnailProcess: 'office_thumbnail_process',
      shareId: 'share_id',
      videoThumbnailProcess: 'video_thumbnail_process',
    };
  }

  static types(): { [key: string]: any } {
    return {
      driveId: 'string',
      fileId: 'string',
      imageThumbnailProcess: 'string',
      officeThumbnailProcess: 'string',
      shareId: 'string',
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

