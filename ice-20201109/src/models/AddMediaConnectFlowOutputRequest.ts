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
   * The output name.
   * 
   * This parameter is required.
   * 
   * @example
   * AliTestOutput
   */
  outputName?: string;
  /**
   * @remarks
   * The output type.
   * 
   * Valid values:
   * 
   * *   RTMP-PUSH
   * *   SRT-Caller
   * *   RTMP-PULL
   * *   SRT-Listener
   * *   Flow
   * 
   * This parameter is required.
   * 
   * @example
   * RTMP-PULL
   */
  outputProtocol?: string;
  /**
   * @remarks
   * The output URL. This parameter is required when OutputProtocol is set to RTMP-PUSH or SRT-Caller.
   * 
   * @example
   * rtmp://push.test.alivecdn.com/live/alitest
   */
  outputToUrl?: string;
  /**
   * @remarks
   * The ID of the destination flow. This parameter is required when OutputProtocol is set to Flow.
   * 
   * @example
   * 8666ec062190f00e263012666319a5be
   */
  pairFlowId?: string;
  /**
   * @remarks
   * The source name of the destination flow. This parameter is required when OutputProtocol is set to Flow.
   * 
   * @example
   * AliTestInput
   */
  pairInputName?: string;
  /**
   * @remarks
   * The maximum number of viewers.
   * 
   * @example
   * 5
   */
  playerLimit?: number;
  /**
   * @remarks
   * The latency for the SRT stream. This parameter is required when the source type is SRT-Listener or SRT-Caller.
   * 
   * @example
   * 1000
   */
  srtLatency?: number;
  /**
   * @remarks
   * The SRT key. This parameter is required when the source type is SRT-Listener or SRT-Caller.
   * 
   * @example
   * BETTERG08S01
   */
  srtPassphrase?: string;
  /**
   * @remarks
   * The encryption key length. This parameter is required when the source type is SRT-Listener or SRT-Caller.
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

