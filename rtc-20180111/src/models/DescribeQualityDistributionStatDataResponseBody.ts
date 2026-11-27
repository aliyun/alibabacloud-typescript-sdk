// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeQualityDistributionStatDataResponseBodyQualityStatDataList extends $dara.Model {
  /**
   * @remarks
   * Audio delay, in milliseconds.
   * 
   * @example
   * 554
   */
  audioDelay?: number;
  /**
   * @remarks
   * Audio high-quality transmission rate, represented as a four-digit decimal.
   * 
   * @example
   * 0.9953
   */
  audioHighQualityTransmissionRate?: string;
  /**
   * @remarks
   * The Audio Lag Rate, represented as a four-digit decimal.
   * 
   * @example
   * 0.0014
   */
  audioStuckRate?: string;
  /**
   * @remarks
   * The call duration ratio, represented as a four-digit decimal. For example, 1.0000 indicates that the call duration accounts for 100% of the total usage.
   * 
   * @example
   * 1.0000
   */
  callDurationRatio?: string;
  /**
   * @remarks
   * Five-second channel join success rate, represented as a four-digit decimal.
   * 
   * @example
   * 0.9560
   */
  joinChannelSucFiveSecRate?: string;
  /**
   * @remarks
   * The channel join success rate, represented as a four-digit decimal.
   * 
   * @example
   * 0.9575
   */
  joinChannelSucRate?: string;
  /**
   * @remarks
   * Statistical dimension. Valid values:  
   * - When StatDim is CHANNELONLINE: **ONE_TO_FIVE** (1–5 participants), **SIX_TO_TEN** (6–10 participants), **ELEVEN_TO_TWENTY** (11–20 participants), **TWENTYONE_TO_FIFTY** (21–50 participants), **ABOVE_FIFTY** (more than 50 participants).  
   * - When StatDim is NETWORK: **WiFi**, **4G**, etc.  
   * - When StatDim is OS: **iOS**, **Android**, etc.
   * 
   * @example
   * ONE_TO_FIVE
   */
  name?: string;
  /**
   * @remarks
   * Video delay, in milliseconds.
   * 
   * @example
   * 517
   */
  videoDelay?: number;
  /**
   * @remarks
   * Time to first video frame, in milliseconds.
   * 
   * @example
   * 1299
   */
  videoFirstPicDuration?: number;
  /**
   * @remarks
   * Video high-quality transmission rate, represented as a four-digit decimal.
   * 
   * @example
   * 0.9981
   */
  videoHighQualityTransmissionRate?: string;
  /**
   * @remarks
   * The Video Lag Rate, represented as a four-digit decimal.
   * 
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

export class DescribeQualityDistributionStatDataResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of quality statistics data.
   */
  qualityStatDataList?: DescribeQualityDistributionStatDataResponseBodyQualityStatDataList[];
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
      qualityStatDataList: { 'type': 'array', 'itemType': DescribeQualityDistributionStatDataResponseBodyQualityStatDataList },
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

