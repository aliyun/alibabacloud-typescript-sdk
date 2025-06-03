// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeQualityDistributionStatDataResponseBodyQualityStatDataList extends $dara.Model {
  /**
   * @example
   * 554
   */
  audioDelay?: number;
  /**
   * @example
   * 0.9953
   */
  audioHighQualityTransmissionRate?: string;
  /**
   * @example
   * 0.0014
   */
  audioStuckRate?: string;
  /**
   * @example
   * 1.0000
   */
  callDurationRatio?: string;
  /**
   * @example
   * 0.9560
   */
  joinChannelSucFiveSecRate?: string;
  /**
   * @example
   * 0.9575
   */
  joinChannelSucRate?: string;
  /**
   * @example
   * ONE_TO_FIVE
   */
  name?: string;
  /**
   * @example
   * 517
   */
  videoDelay?: number;
  /**
   * @example
   * 1299
   */
  videoFirstPicDuration?: number;
  /**
   * @example
   * 0.9981
   */
  videoHighQualityTransmissionRate?: string;
  /**
   * @example
   * 0.0264
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

