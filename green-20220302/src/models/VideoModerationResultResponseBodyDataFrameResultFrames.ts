// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { VideoModerationResultResponseBodyDataFrameResultFramesResults } from "./VideoModerationResultResponseBodyDataFrameResultFramesResults";


export class VideoModerationResultResponseBodyDataFrameResultFrames extends $dara.Model {
  /**
   * @remarks
   * The interval between the start of the video file and the captured frame. Unit: seconds.
   * 
   * @example
   * 338
   */
  offset?: number;
  /**
   * @remarks
   * The results of frame moderation parameters such as the label parameter and the confidence parameter.
   */
  results?: VideoModerationResultResponseBodyDataFrameResultFramesResults[];
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
   * The temporary URL of a captured frame.
   * 
   * @example
   * http://xxxx.abc.jpg
   */
  tempUrl?: string;
  /**
   * @remarks
   * The absolute timestamp. Unit: milliseconds.
   * 
   * @example
   * 1684559739000
   */
  timestamp?: number;
  static names(): { [key: string]: string } {
    return {
      offset: 'Offset',
      results: 'Results',
      riskLevel: 'RiskLevel',
      tempUrl: 'TempUrl',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      offset: 'number',
      results: { 'type': 'array', 'itemType': VideoModerationResultResponseBodyDataFrameResultFramesResults },
      riskLevel: 'string',
      tempUrl: 'string',
      timestamp: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.results)) {
      $dara.Model.validateArray(this.results);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

