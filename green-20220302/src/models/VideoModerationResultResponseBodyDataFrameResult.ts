// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { VideoModerationResultResponseBodyDataFrameResultFrameSummarys } from "./VideoModerationResultResponseBodyDataFrameResultFrameSummarys";
import { VideoModerationResultResponseBodyDataFrameResultFrames } from "./VideoModerationResultResponseBodyDataFrameResultFrames";


export class VideoModerationResultResponseBodyDataFrameResult extends $dara.Model {
  /**
   * @remarks
   * The number of captured frames that are returned for the video file.
   * 
   * @example
   * 10
   */
  frameNum?: number;
  /**
   * @remarks
   * The summary of the labels against which captured frames are matched.
   */
  frameSummarys?: VideoModerationResultResponseBodyDataFrameResultFrameSummarys[];
  /**
   * @remarks
   * The information about the frames that match the labels.
   */
  frames?: VideoModerationResultResponseBodyDataFrameResultFrames[];
  /**
   * @remarks
   * Risk Level.
   * 
   * @example
   * high
   */
  riskLevel?: string;
  static names(): { [key: string]: string } {
    return {
      frameNum: 'FrameNum',
      frameSummarys: 'FrameSummarys',
      frames: 'Frames',
      riskLevel: 'RiskLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      frameNum: 'number',
      frameSummarys: { 'type': 'array', 'itemType': VideoModerationResultResponseBodyDataFrameResultFrameSummarys },
      frames: { 'type': 'array', 'itemType': VideoModerationResultResponseBodyDataFrameResultFrames },
      riskLevel: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.frameSummarys)) {
      $dara.Model.validateArray(this.frameSummarys);
    }
    if(Array.isArray(this.frames)) {
      $dara.Model.validateArray(this.frames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

