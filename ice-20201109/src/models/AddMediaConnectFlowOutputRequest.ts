// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddMediaConnectFlowOutputRequest extends $dara.Model {
  /**
   * @remarks
   * The IP address whitelist in CIDR format. Separate multiple CIDR blocks with commas (,).
   * 
   * @example
   * 83.17.231.31/32
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
   * The name of the output.
   * 
   * This parameter is required.
   * 
   * @example
   * AliTestOutput
   */
  outputName?: string;
  /**
   * @remarks
   * The output protocol.
   * 
   * This parameter is required.
   * 
   * @example
   * RTMP-PULL
   */
  outputProtocol?: string;
  /**
   * @remarks
   * The output URL. This parameter is required when the output type is RTMP-PUSH or SRT-Caller.
   * 
   * @example
   * rtmp://push.test.alivecdn.com/live/alitest
   */
  outputToUrl?: string;
  /**
   * @remarks
   * The peer flow instance ID. This parameter is required when the output type is Flow.
   * 
   * @example
   * 8666ec062190f00e263012666319a5be
   */
  pairFlowId?: string;
  /**
   * @remarks
   * The input name of the peer flow. This parameter is required when the output type is Flow.
   * 
   * @example
   * AliTestInput
   */
  pairInputName?: string;
  /**
   * @remarks
   * The maximum number of concurrent players.
   * 
   * @example
   * 5
   */
  playerLimit?: number;
  /**
   * @remarks
   * The SRT latency. This parameter is required only when the output type is SRT-Listener or SRT-Caller.
   * 
   * @example
   * 1000
   */
  srtLatency?: number;
  /**
   * @remarks
   * The SRT encryption passphrase. This parameter is required only when the output type is SRT-Listener or SRT-Caller.
   * 
   * @example
   * BETTERG08S01
   */
  srtPassphrase?: string;
  /**
   * @remarks
   * The SRT encryption key length. This parameter is required only when the output type is SRT-Listener or SRT-Caller.
   * 
   * @example
   * 32
   */
  srtPbkeyLen?: string;
  static names(): { [key: string]: string } {
    return {
      cidrs: 'Cidrs',
      flowId: 'FlowId',
      outputName: 'OutputName',
      outputProtocol: 'OutputProtocol',
      outputToUrl: 'OutputToUrl',
      pairFlowId: 'PairFlowId',
      pairInputName: 'PairInputName',
      playerLimit: 'PlayerLimit',
      srtLatency: 'SrtLatency',
      srtPassphrase: 'SrtPassphrase',
      srtPbkeyLen: 'SrtPbkeyLen',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidrs: 'string',
      flowId: 'string',
      outputName: 'string',
      outputProtocol: 'string',
      outputToUrl: 'string',
      pairFlowId: 'string',
      pairInputName: 'string',
      playerLimit: 'number',
      srtLatency: 'number',
      srtPassphrase: 'string',
      srtPbkeyLen: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

