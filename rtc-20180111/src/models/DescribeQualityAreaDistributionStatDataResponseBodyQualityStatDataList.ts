// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeQualityAreaDistributionStatDataResponseBodyQualityStatDataList extends $dara.Model {
  /**
   * @example
   * 347
   */
  audioDelay?: number;
  /**
   * @example
   * 0.9933
   */
  audioHighQualityTransmissionRate?: string;
  /**
   * @example
   * 0.0021
   */
  audioStuckRate?: string;
  /**
   * @example
   * 0.6654
   */
  callDurationRatio?: string;
  /**
   * @example
   * 0.9338
   */
  joinChannelSucFiveSecRate?: string;
  /**
   * @example
   * 0.9356
   */
  joinChannelSucRate?: string;
  /**
   * @example
   * 中国_浙江省
   */
  name?: string;
  /**
   * @example
   * 291
   */
  videoDelay?: number;
  /**
   * @example
   * 1363
   */
  videoFirstPicDuration?: number;
  /**
   * @example
   * 0.9967
   */
  videoHighQualityTransmissionRate?: string;
  /**
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

