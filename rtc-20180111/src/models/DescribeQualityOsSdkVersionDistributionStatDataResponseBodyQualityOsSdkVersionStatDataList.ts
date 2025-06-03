// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeQualityOsSdkVersionDistributionStatDataResponseBodyQualityOsSdkVersionStatDataList extends $dara.Model {
  /**
   * @example
   * 248
   */
  audioDelay?: number;
  /**
   * @example
   * 0.9987
   */
  audioHighQualityTransmissionRate?: string;
  /**
   * @example
   * 0.0011
   */
  audioStuckRate?: string;
  /**
   * @example
   * 0.0984
   */
  callDurationRatio?: string;
  /**
   * @example
   * 0.8276
   */
  joinChannelSucFiveSecRate?: string;
  /**
   * @example
   * 0.8276
   */
  joinChannelSucRate?: string;
  /**
   * @example
   * 2.1.0.210316.dev--release/rtcsdk_v2.1
   */
  name?: string;
  /**
   * @example
   * macOS
   */
  os?: string;
  /**
   * @example
   * 333
   */
  videoDelay?: number;
  /**
   * @example
   * 5643
   */
  videoFirstPicDuration?: number;
  /**
   * @example
   * 0.9997
   */
  videoHighQualityTransmissionRate?: string;
  /**
   * @example
   * 0.0054
   */
  videoStuckRate?: string;
  static names(): { [key: string]: string } {
    return {
      audioDelay: 'AudioDelay',
      audioHighQualityTransmissionRate: 'AudioHighQualityTransmissionRate',
      audioStuckRate: 'AudioStuckRate',
      callDurationRatio: 'CallDurationRatio',
      joinChannelSucFiveSecRate: 'JoinChannelSucFiveSecRate',
      joinChannelSucRate: 'JoinChannelSucRate',
      name: 'Name',
      os: 'Os',
      videoDelay: 'VideoDelay',
      videoFirstPicDuration: 'VideoFirstPicDuration',
      videoHighQualityTransmissionRate: 'VideoHighQualityTransmissionRate',
      videoStuckRate: 'VideoStuckRate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioDelay: 'number',
      audioHighQualityTransmissionRate: 'string',
      audioStuckRate: 'string',
      callDurationRatio: 'string',
      joinChannelSucFiveSecRate: 'string',
      joinChannelSucRate: 'string',
      name: 'string',
      os: 'string',
      videoDelay: 'number',
      videoFirstPicDuration: 'number',
      videoHighQualityTransmissionRate: 'string',
      videoStuckRate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

