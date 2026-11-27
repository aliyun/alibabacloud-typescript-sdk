// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeQoeMetricDataResponseBodyAudioDataNodes extends $dara.Model {
  /**
   * @remarks
   * X-axis coordinate in the audio trend indicator.
   * 
   * @example
   * 1548670256
   */
  x?: string;
  /**
   * @remarks
   * Y-axis coordinate in the audio trend indicator.
   * 
   * @example
   * 123
   */
  y?: string;
  static names(): { [key: string]: string } {
    return {
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      x: 'string',
      y: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeQoeMetricDataResponseBodyAudioData extends $dara.Model {
  /**
   * @remarks
   * List of coordinate points for the audio trend indicator.
   */
  nodes?: DescribeQoeMetricDataResponseBodyAudioDataNodes[];
  /**
   * @remarks
   * Communication experience. Valid values:  
   * - **AUDIO**: Audio bitrate.  
   * - **AUDIO_STUCK**: Audio downlink stuttering.
   * 
   * @example
   * AUDIO
   */
  type?: string;
  /**
   * @remarks
   * User ID.
   * 
   * @example
   * testuserid
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      nodes: 'Nodes',
      type: 'Type',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodes: { 'type': 'array', 'itemType': DescribeQoeMetricDataResponseBodyAudioDataNodes },
      type: 'string',
      userId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.nodes)) {
      $dara.Model.validateArray(this.nodes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeQoeMetricDataResponseBodyVideoDataNodes extends $dara.Model {
  /**
   * @remarks
   * The x-axis coordinate in the video metric trend graph.
   * 
   * @example
   * 1548670256
   */
  x?: string;
  /**
   * @remarks
   * The y-axis coordinate in the Video Trend Indicator.
   * 
   * @example
   * 123
   */
  y?: string;
  static names(): { [key: string]: string } {
    return {
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      x: 'string',
      y: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeQoeMetricDataResponseBodyVideoData extends $dara.Model {
  /**
   * @remarks
   * List of coordinate points for the video metric trend graph.
   */
  nodes?: DescribeQoeMetricDataResponseBodyVideoDataNodes[];
  /**
   * @remarks
   * The type of metric that impacts communication experience. Valid values:
   * - **VIDEO_CAMERA**: Camera bitrate.
   * - **VIDEO_SCREEN_SHARE**: Screen sharing stream bitrate.
   * - **VIDEO_STUCK_CAMERA**: Camera stuttering.
   * - **VIDEO_STUCK_SCREEN_SHARE**: Screen sharing stuttering.
   * - **VIDEO_VAGUE_CAMERA**: Camera blur.
   * - **VIDEO_VAGUE_SCREEN_SHARE**: Screen sharing blur.
   * 
   * @example
   * VIDEO_CAMERA
   */
  type?: string;
  /**
   * @remarks
   * User ID
   * 
   * @example
   * testuserid
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      nodes: 'Nodes',
      type: 'Type',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodes: { 'type': 'array', 'itemType': DescribeQoeMetricDataResponseBodyVideoDataNodes },
      type: 'string',
      userId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.nodes)) {
      $dara.Model.validateArray(this.nodes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeQoeMetricDataResponseBody extends $dara.Model {
  /**
   * @remarks
   * Audio data.
   */
  audioData?: DescribeQoeMetricDataResponseBodyAudioData[];
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 231470C1-ACFB-4C9F-844F-4CFE1E3804C5
   */
  requestId?: string;
  /**
   * @remarks
   * Video data.
   */
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

