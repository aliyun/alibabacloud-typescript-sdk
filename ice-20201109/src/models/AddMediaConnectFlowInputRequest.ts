// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddMediaConnectFlowInputRequest extends $dara.Model {
  /**
   * @remarks
   * The IP address whitelist in CIDR format. Separate multiple CIDR blocks with commas (,).
   * 
   * @example
   * 19.168.1.1/32,18.168.1.1/16
   */
  cidrs?: string;
  /**
   * @remarks
   * The flow instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 34900dc6-90ec-4968-af3c-fcd87f231a5f
   */
  flowId?: string;
  /**
   * @remarks
   * The input URL. This parameter is required only when the input type is RTMP-PULL or SRT-Listener.
   * 
   * @example
   * rtmp://pull.test.alivecdn.com/live/alitest
   */
  inputFromUrl?: string;
  /**
   * @remarks
   * The name of the input.
   * 
   * This parameter is required.
   * 
   * @example
   * AliTestInput
   */
  inputName?: string;
  /**
   * @remarks
   * The input type.
   * 
   * This parameter is required.
   * 
   * @example
   * RTMP-PUSH
   */
  inputProtocol?: string;
  /**
   * @remarks
   * The input bitrate, in bit/s.
   * 
   * @example
   * 2000000
   */
  maxBitrate?: number;
  /**
   * @remarks
   * The ID of the peer flow. This parameter is required only when the input type is Flow.
   * 
   * @example
   * 805fbdd0-575e-4146-b35d-ec7f63937b20
   */
  pairFlowId?: string;
  /**
   * @remarks
   * The output name of the peer flow. This parameter is required only when the input type is Flow.
   * 
   * @example
   * AliTestOutput
   */
  pairOutputName?: string;
  /**
   * @remarks
   * The SRT latency. This parameter is required only when the input type is SRT-Listener or SRT-Caller.
   * 
   * @example
   * 1000
   */
  srtLatency?: number;
  /**
   * @remarks
   * The SRT encryption passphrase. This parameter is required only when the input type is SRT-Listener or SRT-Caller.
   * 
   * @example
   * BETTERG08S01
   */
  srtPassphrase?: string;
  /**
   * @remarks
   * The SRT encryption key length. This parameter is required only when the input type is SRT-Listener or SRT-Caller.
   * 
   * @example
   * 32
   */
  srtPbkeyLen?: string;
  /**
   * @remarks
   * Specifies whether to return the internal stream pushing IP address. This parameter is valid only when you connect to the cloud through an Express Connect circuit.
   * 
   * @example
   * off
   */
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

