// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { VideoPreviewPlayInfo } from "./VideoPreviewPlayInfo";


export class GetVideoPreviewPlayInfoResponseBody extends $dara.Model {
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
   * The information about video playback.
   */
  videoPreviewPlayInfo?: VideoPreviewPlayInfo;
  static names(): { [key: string]: string } {
    return {
      domainId: 'domain_id',
      driveId: 'drive_id',
      fileId: 'file_id',
      shareId: 'share_id',
      videoPreviewPlayInfo: 'video_preview_play_info',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainId: 'string',
      driveId: 'string',
      fileId: 'string',
      shareId: 'string',
      videoPreviewPlayInfo: VideoPreviewPlayInfo,
    };
  }

  validate() {
    if(this.videoPreviewPlayInfo && typeof (this.videoPreviewPlayInfo as any).validate === 'function') {
      (this.videoPreviewPlayInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

