// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateMediaConnectFlowInputRequest extends $dara.Model {
  /**
   * @remarks
   * The IP address whitelist.
   * 
   * @example
   * 19.168.1.1/32,18.168.1.1/16
   */
  cidrs?: string;
  /**
   * @remarks
   * The flow ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 34900dc6-90ec-4968-af3c-fcd87f231a5f
   */
  flowId?: string;
  /**
   * @remarks
   * The source URL. You can modify this parameter only when the source type is RTMP-PULL or SRT-Listener.
   * 
   * @example
   * rtmp://pull.test.alivecdn.com/live/alitest
   */
  inputFromUrl?: string;
  inputName?: string;
  /**
   * @remarks
   * The maximum bitrate. Unit: bit/s.
   * 
   * @example
   * 2000000
   */
  maxBitrate?: number;
  /**
   * @remarks
   * The latency for the SRT stream. You can modify this parameter only when the source type is SRT-Listener or SRT-Caller.
   * 
   * @example
   * 1000
   */
  srtLatency?: number;
  /**
   * @remarks
   * The SRT key. You can modify this parameter only when the source type is SRT-Listener or SRT-Caller.
   * 
   * @example
   * FICUBPX4Q77DYHRF
   */
  srtPassphrase?: string;
  /**
   * @remarks
   * The encryption key length. You can modify this parameter only when the source type is SRT-Listener or SRT-Caller.
   * 
   * @example
   * 32
   */
  srtPbkeyLen?: number;
  static names(): { [key: string]: string } {
    return {
      cidrs: 'Cidrs',
      flowId: 'FlowId',
      inputFromUrl: 'InputFromUrl',
      inputName: 'InputName',
      maxBitrate: 'MaxBitrate',
      srtLatency: 'SrtLatency',
      srtPassphrase: 'SrtPassphrase',
      srtPbkeyLen: 'SrtPbkeyLen',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidrs: 'string',
      flowId: 'string',
      inputFromUrl: 'string',
      inputName: 'string',
      maxBitrate: 'number',
      srtLatency: 'number',
      srtPassphrase: 'string',
      srtPbkeyLen: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

