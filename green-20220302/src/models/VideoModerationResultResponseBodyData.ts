// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { VideoModerationResultResponseBodyDataAudioResult } from "./VideoModerationResultResponseBodyDataAudioResult";
import { VideoModerationResultResponseBodyDataFrameResult } from "./VideoModerationResultResponseBodyDataFrameResult";


export class VideoModerationResultResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The voice moderation results. The moderation results contain a structure.
   */
  audioResult?: VideoModerationResultResponseBodyDataAudioResult;
  /**
   * @remarks
   * The value of dataId that is specified in the API request. If this parameter is not specified in the API request, the dataId field is not available in the response.
   * 
   * @example
   * product_content-2055763
   */
  dataId?: string;
  /**
   * @remarks
   * The image moderation results. If the call is successful, the HTTP status code 200 and moderation results are returned. The moderation results contain a structure.
   */
  frameResult?: VideoModerationResultResponseBodyDataFrameResult;
  /**
   * @remarks
   * The unique ID of the live stream.
   * 
   * @example
   * liveId
   */
  liveId?: string;
  manualTaskId?: string;
  /**
   * @remarks
   * Risk Level.
   * 
   * @example
   * high
   */
  riskLevel?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * xxxxx-xxxxx
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      audioResult: 'AudioResult',
      dataId: 'DataId',
      frameResult: 'FrameResult',
      liveId: 'LiveId',
      manualTaskId: 'ManualTaskId',
      riskLevel: 'RiskLevel',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioResult: VideoModerationResultResponseBodyDataAudioResult,
      dataId: 'string',
      frameResult: VideoModerationResultResponseBodyDataFrameResult,
      liveId: 'string',
      manualTaskId: 'string',
      riskLevel: 'string',
      taskId: 'string',
    };
  }

  validate() {
    if(this.audioResult && typeof (this.audioResult as any).validate === 'function') {
      (this.audioResult as any).validate();
    }
    if(this.frameResult && typeof (this.frameResult as any).validate === 'function') {
      (this.frameResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

