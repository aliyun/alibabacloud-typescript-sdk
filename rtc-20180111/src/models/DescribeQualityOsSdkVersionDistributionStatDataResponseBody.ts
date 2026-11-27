// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeQualityOsSdkVersionDistributionStatDataResponseBodyQualityOsSdkVersionStatDataList extends $dara.Model {
  /**
   * @remarks
   * The audio delay, in milliseconds.
   * 
   * @example
   * 248
   */
  audioDelay?: number;
  /**
   * @remarks
   * The audio high-quality transmission rate, represented by four decimal places.
   * 
   * @example
   * 0.9987
   */
  audioHighQualityTransmissionRate?: string;
  /**
   * @remarks
   * The audio stuttering rate, represented by four decimal places.
   * 
   * @example
   * 0.0011
   */
  audioStuckRate?: string;
  /**
   * @remarks
   * The call duration ratio, represented by four decimal places. For example, 1.0000 indicates that the call duration ratio is 100%.
   * 
   * @example
   * 0.0984
   */
  callDurationRatio?: string;
  /**
   * @remarks
   * The 5-second channel join success rate, represented by four decimal places.
   * 
   * @example
   * 0.8276
   */
  joinChannelSucFiveSecRate?: string;
  /**
   * @remarks
   * The channel join success rate, represented by four decimal places.
   * 
   * @example
   * 0.8276
   */
  joinChannelSucRate?: string;
  /**
   * @remarks
   * The SDK version name, such as 1.0.0 or 1.1.1.
   * 
   * @example
   * 2.1.0.210316.dev--release/rtcsdk_v2.1
   */
  name?: string;
  /**
   * @remarks
   * The operating system name, such as iOS or Android.
   * 
   * @example
   * macOS
   */
  os?: string;
  /**
   * @remarks
   * The video delay, in milliseconds.
   * 
   * @example
   * 333
   */
  videoDelay?: number;
  /**
   * @remarks
   * The first video frame rendering time, in milliseconds.
   * 
   * @example
   * 5643
   */
  videoFirstPicDuration?: number;
  /**
   * @remarks
   * The video high-quality transmission rate, represented by four decimal places.
   * 
   * @example
   * 0.9997
   */
  videoHighQualityTransmissionRate?: string;
  /**
   * @remarks
   * The video stuttering rate, represented by four decimal places.
   * 
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

export class DescribeQualityOsSdkVersionDistributionStatDataResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of data for operating systems and SDK versions in quality statistics.
   */
  qualityOsSdkVersionStatDataList?: DescribeQualityOsSdkVersionDistributionStatDataResponseBodyQualityOsSdkVersionStatDataList[];
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
      qualityOsSdkVersionStatDataList: 'QualityOsSdkVersionStatDataList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      qualityOsSdkVersionStatDataList: { 'type': 'array', 'itemType': DescribeQualityOsSdkVersionDistributionStatDataResponseBodyQualityOsSdkVersionStatDataList },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.qualityOsSdkVersionStatDataList)) {
      $dara.Model.validateArray(this.qualityOsSdkVersionStatDataList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

