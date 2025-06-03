// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeQoeMetricDataResponseBodyAudioData } from "./DescribeQoeMetricDataResponseBodyAudioData";
import { DescribeQoeMetricDataResponseBodyVideoData } from "./DescribeQoeMetricDataResponseBodyVideoData";


export class DescribeQoeMetricDataResponseBody extends $dara.Model {
  audioData?: DescribeQoeMetricDataResponseBodyAudioData[];
  /**
   * @example
   * 231470C1-ACFB-4C9F-844F-4CFE1E3804C5
   */
  requestId?: string;
  videoData?: DescribeQoeMetricDataResponseBodyVideoData[];
  static names(): { [key: string]: string } {
    return {
      audioData: 'AudioData',
      requestId: 'RequestId',
      videoData: 'VideoData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioData: { 'type': 'array', 'itemType': DescribeQoeMetricDataResponseBodyAudioData },
      requestId: 'string',
      videoData: { 'type': 'array', 'itemType': DescribeQoeMetricDataResponseBodyVideoData },
    };
  }

  validate() {
    if(Array.isArray(this.audioData)) {
      $dara.Model.validateArray(this.audioData);
    }
    if(Array.isArray(this.videoData)) {
      $dara.Model.validateArray(this.videoData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

