// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { VideoModerationResultResponseBodyDataAudioResultAudioSummarys } from "./VideoModerationResultResponseBodyDataAudioResultAudioSummarys";
import { VideoModerationResultResponseBodyDataAudioResultSliceDetails } from "./VideoModerationResultResponseBodyDataAudioResultSliceDetails";


export class VideoModerationResultResponseBodyDataAudioResult extends $dara.Model {
  /**
   * @remarks
   * Summary of voice labels.
   */
  audioSummarys?: VideoModerationResultResponseBodyDataAudioResultAudioSummarys[];
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
   * The details about the text in the moderated voice. The value is a JSON array that contains one or more elements. Each element corresponds to a text entry.
   */
  sliceDetails?: VideoModerationResultResponseBodyDataAudioResultSliceDetails[];
  static names(): { [key: string]: string } {
    return {
      audioSummarys: 'AudioSummarys',
      riskLevel: 'RiskLevel',
      sliceDetails: 'SliceDetails',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioSummarys: { 'type': 'array', 'itemType': VideoModerationResultResponseBodyDataAudioResultAudioSummarys },
      riskLevel: 'string',
      sliceDetails: { 'type': 'array', 'itemType': VideoModerationResultResponseBodyDataAudioResultSliceDetails },
    };
  }

  validate() {
    if(Array.isArray(this.audioSummarys)) {
      $dara.Model.validateArray(this.audioSummarys);
    }
    if(Array.isArray(this.sliceDetails)) {
      $dara.Model.validateArray(this.sliceDetails);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

