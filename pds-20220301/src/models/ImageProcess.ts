// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImageProcess extends $dara.Model {
  /**
   * @remarks
   * The thumbnail processing rules for images. For more information, see the "IMG implementation modes" topic of Object Storage Service (OSS). Default value: image/resize,m_fill,h_128,w_128,limit_0.
   * 
   * @example
   * image/resize,m_fill,h_128,w_128,limit_0
   */
  imageThumbnailProcess?: string;
  /**
   * @remarks
   * The thumbnail processing rules for documents. For a document, the snapshot of one of the pages in the document is used as the thumbnail. This parameter takes effect on this snapshot. Default value: image/resize,m_fill,h_128,w_128,limit_0.
   * 
   * @example
   * image/resize,m_fill,h_128,w_128,limit_0
   */
  officeThumbnailProcess?: string;
  /**
   * @remarks
   * The thumbnail processing rules for videos. For more information, see the "Video snapshots" topic of OSS. Default value: video/snapshot,t_1000,f_jpg,w_0,h_0,m_fast,ar_auto.
   * 
   * @example
   * video/snapshot,t_1000,f_jpg,w_0,h_0,m_fast,ar_auto
   */
  videoThumbnailProcess?: string;
  static names(): { [key: string]: string } {
    return {
      imageThumbnailProcess: 'image_thumbnail_process',
      officeThumbnailProcess: 'office_thumbnail_process',
      videoThumbnailProcess: 'video_thumbnail_process',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageThumbnailProcess: 'string',
      officeThumbnailProcess: 'string',
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

