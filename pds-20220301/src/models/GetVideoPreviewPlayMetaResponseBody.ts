// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { VideoPreviewPlayMeta } from "./VideoPreviewPlayMeta";


export class GetVideoPreviewPlayMetaResponseBody extends $dara.Model {
  /**
   * @remarks
   * The domain ID.
   * 
   * @example
   * bj1
   */
  domainId?: string;
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
   * @example
   * fileid1
   */
  fileId?: string;
  /**
   * @remarks
   * The share ID.
   * 
   * @example
   * 7JQX1FswpQ8
   */
  shareId?: string;
  /**
   * @remarks
   * The preview metadata of the video.
   */
  videoPreviewPlayMeta?: VideoPreviewPlayMeta;
  static names(): { [key: string]: string } {
    return {
      domainId: 'domain_id',
      driveId: 'drive_id',
      fileId: 'file_id',
      shareId: 'share_id',
      videoPreviewPlayMeta: 'video_preview_play_meta',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainId: 'string',
      driveId: 'string',
      fileId: 'string',
      shareId: 'string',
      videoPreviewPlayMeta: VideoPreviewPlayMeta,
    };
  }

  validate() {
    if(this.videoPreviewPlayMeta && typeof (this.videoPreviewPlayMeta as any).validate === 'function') {
      (this.videoPreviewPlayMeta as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

