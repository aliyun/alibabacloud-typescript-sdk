// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateMediaLiveInputRequestInputSettings extends $dara.Model {
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
  srtLatency?: number;
  srtMaxBitrate?: number;
  srtPassphrase?: string;
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

export class UpdateMediaLiveInputRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the input.
   * 
   * This parameter is required.
   * 
   * @example
   * SEGK5KA6KYKAWQQH
   */
  inputId?: string;
  /**
   * @remarks
   * The input settings. An input can have up to two sources: primary and backup sources.
   * 
   * This parameter is required.
   */
  inputSettings?: UpdateMediaLiveInputRequestInputSettings[];
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
  static names(): { [key: string]: string } {
    return {
      inputId: 'InputId',
      inputSettings: 'InputSettings',
      name: 'Name',
      securityGroupIds: 'SecurityGroupIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputId: 'string',
      inputSettings: { 'type': 'array', 'itemType': UpdateMediaLiveInputRequestInputSettings },
      name: 'string',
      securityGroupIds: { 'type': 'array', 'itemType': 'string' },
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

