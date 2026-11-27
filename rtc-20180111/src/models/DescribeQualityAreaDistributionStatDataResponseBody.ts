// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeQualityAreaDistributionStatDataResponseBodyQualityStatDataList extends $dara.Model {
  /**
   * @remarks
   * The audio delay, in milliseconds.
   * 
   * @example
   * 347
   */
  audioDelay?: number;
  /**
   * @remarks
   * The high-quality transmission rate of audio, represented by a four-decimal number.
   * 
   * @example
   * 0.9933
   */
  audioHighQualityTransmissionRate?: string;
  /**
   * @remarks
   * The audio stuttering rate, represented by a four-decimal number.
   * 
   * @example
   * 0.0021
   */
  audioStuckRate?: string;
  /**
   * @remarks
   * The ratio of the call duration, represented by a four-decimal number. For example, 1.0000 indicates that the call duration ratio is 100%.
   * 
   * @example
   * 0.6654
   */
  callDurationRatio?: string;
  /**
   * @remarks
   * The success rate of joining a channel within 5 seconds, represented by a four-decimal number.
   * 
   * @example
   * 0.9338
   */
  joinChannelSucFiveSecRate?: string;
  /**
   * @remarks
   * The success rate of joining a channel, represented by a four-decimal number.
   * 
   * @example
   * 0.9356
   */
  joinChannelSucRate?: string;
  /**
   * @remarks
   * The name of the region.
   * 
   * @example
   * China_Zhejiang Province
   */
  name?: string;
  /**
   * @remarks
   * The video delay, in milliseconds.
   * 
   * @example
   * 291
   */
  videoDelay?: number;
  /**
   * @remarks
   * The time taken to render the first video frame, in milliseconds.
   * 
   * @example
   * 1363
   */
  videoFirstPicDuration?: number;
  /**
   * @remarks
   * The high-quality transmission rate of video, represented by a four-decimal number.
   * 
   * @example
   * 0.9967
   */
  videoHighQualityTransmissionRate?: string;
  /**
   * @remarks
   * The video stuttering rate, represented by a four-decimal number.
   * 
   * @example
   * 0.0058
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

export class DescribeQualityAreaDistributionStatDataResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of quality distribution data.
   */
  qualityStatDataList?: DescribeQualityAreaDistributionStatDataResponseBodyQualityStatDataList[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 231470C1-ACFB-4C9F-844F-4CFE1E3804C5
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      qualityStatDataList: 'QualityStatDataList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      qualityStatDataList: { 'type': 'array', 'itemType': DescribeQualityAreaDistributionStatDataResponseBodyQualityStatDataList },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.qualityStatDataList)) {
      $dara.Model.validateArray(this.qualityStatDataList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

