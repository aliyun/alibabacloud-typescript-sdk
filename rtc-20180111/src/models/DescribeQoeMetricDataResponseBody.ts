// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeQoeMetricDataResponseBodyAudioDataNodes extends $dara.Model {
  /**
   * @example
   * 1548670256
   */
  x?: string;
  /**
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
  nodes?: DescribeQoeMetricDataResponseBodyAudioDataNodes[];
  /**
   * @example
   * AUDIO
   */
  type?: string;
  /**
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
   * @example
   * 1548670256
   */
  x?: string;
  /**
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
  nodes?: DescribeQoeMetricDataResponseBodyVideoDataNodes[];
  /**
   * @example
   * VIDEO_CAMERA
   */
  type?: string;
  /**
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

