// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddMediaConnectFlowInputRequest extends $dara.Model {
  /**
   * @remarks
   * IP address whitelist in CIDR notation. Separate multiple CIDR blocks with commas.
   * 
   * @example
   * 19.168.1.1/32,18.168.1.1/16
   */
  cidrs?: string;
  /**
   * @remarks
   * Flow instance ID
   * 
   * This parameter is required.
   * 
   * @example
   * 34900dc6-90ec-4968-af3c-fcd87f231a5f
   */
  flowId?: string;
  /**
   * @remarks
   * Input URL. Required only when the input type is RTMP-PULL or SRT-Listener.
   * 
   * @example
   * rtmp://pull.test.alivecdn.com/live/alitest
   */
  inputFromUrl?: string;
  /**
   * @remarks
   * Input name
   * 
   * This parameter is required.
   * 
   * @example
   * AliTestInput
   */
  inputName?: string;
  /**
   * @remarks
   * Input type
   * 
   * This parameter is required.
   * 
   * @example
   * RTMP-PUSH
   */
  inputProtocol?: string;
  /**
   * @remarks
   * Maximum bitrate in bits per second (bps)
   * 
   * @example
   * 2000000
   */
  maxBitrate?: number;
  /**
   * @remarks
   * Upstream Flow ID. Required only when the input type is Flow.
   * 
   * @example
   * 805fbdd0-575e-4146-b35d-ec7f63937b20
   */
  pairFlowId?: string;
  /**
   * @remarks
   * Upstream Flow output name. Required only when the input type is Flow.
   * 
   * @example
   * AliTestOutput
   */
  pairOutputName?: string;
  /**
   * @remarks
   * SRT latency in milliseconds. Required only when the input type is SRT-Listener or SRT-Caller.
   * 
   * @example
   * 1000
   */
  srtLatency?: number;
  /**
   * @remarks
   * SRT encryption key. Required only when the input type is SRT-Listener or SRT-Caller.
   * 
   * @example
   * BETTERG08S01
   */
  srtPassphrase?: string;
  /**
   * @remarks
   * SRT encryption key length in bytes. Required only when the input type is SRT-Listener or SRT-Caller.
   * 
   * @example
   * 32
   */
  srtPbkeyLen?: string;
  withInternalVip?: string;
  static names(): { [key: string]: string } {
    return {
      cidrs: 'Cidrs',
      flowId: 'FlowId',
      inputFromUrl: 'InputFromUrl',
      inputName: 'InputName',
      inputProtocol: 'InputProtocol',
      maxBitrate: 'MaxBitrate',
      pairFlowId: 'PairFlowId',
      pairOutputName: 'PairOutputName',
      srtLatency: 'SrtLatency',
      srtPassphrase: 'SrtPassphrase',
      srtPbkeyLen: 'SrtPbkeyLen',
      withInternalVip: 'WithInternalVip',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidrs: 'string',
      flowId: 'string',
      inputFromUrl: 'string',
      inputName: 'string',
      inputProtocol: 'string',
      maxBitrate: 'number',
      pairFlowId: 'string',
      pairOutputName: 'string',
      srtLatency: 'number',
      srtPassphrase: 'string',
      srtPbkeyLen: 'string',
      withInternalVip: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

