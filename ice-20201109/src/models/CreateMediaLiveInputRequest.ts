// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMediaLiveInputRequestInputSettings extends $dara.Model {
  /**
   * @remarks
   * The ID of the flow from MediaConnect. This parameter is required when Type is set to MEDIA_CONNECT.
   * 
   * @example
   * ******81-9693-40dc-bbab-db5e49******
   */
  flowId?: string;
  /**
   * @remarks
   * The output name of the MediaConnect flow. This parameter is required when Type is set to MEDIA_CONNECT.
   * 
   * @example
   * myFlowOutputName
   */
  flowOutputName?: string;
  /**
   * @remarks
   * The source URL from which the stream is pulled. This parameter is required for PULL inputs.
   * 
   * @example
   * rtmp://domain/app/stream
   */
  sourceUrl?: string;
  /**
   * @remarks
   * The latency of the SRT stream, in milliseconds (ms). Valid values: [100, 10000]. This parameter is optional when Type is SRT_PUSH or SRT_PULL.
   * 
   * @example
   * 1000
   */
  srtLatency?: number;
  /**
   * @remarks
   * The maximum bitrate of the SRT stream, in bits per second (bps). Valid values: [100, 100000000]. This parameter is optional when Type is SRT_PUSH or SRT_PULL.
   * 
   * @example
   * 3000000
   */
  srtMaxBitrate?: number;
  /**
   * @remarks
   * The SRT encryption configuration. The password for the SRT stream consists of 10 to 79 visible ASCII characters. This parameter is optional when Type is SRT_PUSH or SRT_PULL.
   * 
   * If the encryption configuration is not empty, all SRT clients must use the correct password to publish or playback; otherwise, the SRT connection will be denied.
   * 
   * @example
   * srtencryption
   */
  srtPassphrase?: string;
  /**
   * @remarks
   * The SRT encryption configuration. The key length for the SRT stream. Valid values: 0, 16, 24, 32. This parameter is optional when Type is SRT_PUSH or SRT_PULL.
   * 
   * @example
   * 16
   */
  srtPbKeyLen?: number;
  /**
   * @remarks
   * The name of the pushed stream. This parameter is required for PUSH inputs. It can be up to 255 characters in length.
   * 
   * @example
   * mystream
   */
  streamName?: string;
  static names(): { [key: string]: string } {
    return {
      flowId: 'FlowId',
      flowOutputName: 'FlowOutputName',
      sourceUrl: 'SourceUrl',
      srtLatency: 'SrtLatency',
      srtMaxBitrate: 'SrtMaxBitrate',
      srtPassphrase: 'SrtPassphrase',
      srtPbKeyLen: 'SrtPbKeyLen',
      streamName: 'StreamName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flowId: 'string',
      flowOutputName: 'string',
      sourceUrl: 'string',
      srtLatency: 'number',
      srtMaxBitrate: 'number',
      srtPassphrase: 'string',
      srtPbKeyLen: 'number',
      streamName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMediaLiveInputRequest extends $dara.Model {
  /**
   * @remarks
   * The input settings. An input can have up to two sources: primary and backup sources.
   * 
   * This parameter is required.
   */
  inputSettings?: CreateMediaLiveInputRequestInputSettings[];
  /**
   * @remarks
   * The name of the input. Letters, digits, hyphens (-), and underscores (_) are supported. It can be up to 64 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * myinput
   */
  name?: string;
  /**
   * @remarks
   * The IDs of the security groups to be associated with the input. This parameter is required for PUSH inputs.
   * 
   * @example
   * ["G6G4X5T4SZYPSTT5"]
   */
  securityGroupIds?: string[];
  /**
   * @remarks
   * The input type. Valid values: RTMP_PUSH, RTMP_PULL, SRT_PUSH, SRT_PULL, and MEDIA_CONNECT.
   * 
   * This parameter is required.
   * 
   * @example
   * RTMP_PUSH
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      inputSettings: 'InputSettings',
      name: 'Name',
      securityGroupIds: 'SecurityGroupIds',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputSettings: { 'type': 'array', 'itemType': CreateMediaLiveInputRequestInputSettings },
      name: 'string',
      securityGroupIds: { 'type': 'array', 'itemType': 'string' },
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.inputSettings)) {
      $dara.Model.validateArray(this.inputSettings);
    }
    if(Array.isArray(this.securityGroupIds)) {
      $dara.Model.validateArray(this.securityGroupIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

