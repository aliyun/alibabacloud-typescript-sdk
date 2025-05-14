// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateMediaConnectFlowOutputRequest extends $dara.Model {
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
   * The output URL. You can modify this parameter only when the output type is RTMP-PUSH or SRT-Caller.
   * 
   * @example
   * rtmp://push.test.alivecdn.com/live/alitest
   */
  outputToUrl?: string;
  /**
   * @remarks
   * The maximum number of viewers.
   * 
   * @example
   * 5
   */
  playerLimit?: string;
  /**
   * @remarks
   * The latency for the SRT stream. You can modify this parameter only when the source type is SRT-Listener or SRT-Caller.
   * 
   * @example
   * 1000
   */
  srtLatency?: string;
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
  srtPbkeyLen?: string;
  static names(): { [key: string]: string } {
    return {
      cidrs: 'Cidrs',
      flowId: 'FlowId',
      outputName: 'OutputName',
      outputToUrl: 'OutputToUrl',
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
      outputToUrl: 'string',
      playerLimit: 'string',
      srtLatency: 'string',
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

