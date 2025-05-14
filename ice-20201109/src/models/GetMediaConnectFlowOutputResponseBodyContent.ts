// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMediaConnectFlowOutputResponseBodyContent extends $dara.Model {
  /**
   * @remarks
   * The IP address whitelist in CIDR format. CIDR blocks are separated with commas (,).
   * 
   * @example
   * 10.211.0.0/17
   */
  cidrs?: string;
  /**
   * @remarks
   * The time when the flow was created.
   * 
   * @example
   * 2024-07-18T01:29:24Z
   */
  createTime?: string;
  forbid?: string;
  /**
   * @remarks
   * The output name.
   * 
   * @example
   * AliTestInput
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
   * @example
   * SRT-PULL
   */
  outputProtocol?: string;
  /**
   * @remarks
   * The output URL.
   * 
   * @example
   * srt://1.2.3.4:1025
   */
  outputUrl?: string;
  /**
   * @remarks
   * The ID of the destination flow. This parameter is returned when the output type is Flow.
   * 
   * @example
   * 805fbdd0-575e-4146-b35d-ec7f63937b20
   */
  pairFlowId?: string;
  /**
   * @remarks
   * The source name of the destination flow. This parameter is returned when the output type is Flow.
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
   * The latency for the SRT stream. Unit: milliseconds. This parameter is returned when the source type is SRT-Listener or SRT-Caller.
   * 
   * @example
   * 1000
   */
  srtLatency?: number;
  /**
   * @remarks
   * The SRT key. This parameter is returned when the source type is SRT-Listener or SRT-Caller.
   * 
   * @example
   * FICUBPX4Q77DYHRF
   */
  srtPassphrase?: string;
  /**
   * @remarks
   * The encryption key length. This parameter is returned when the source type is SRT-Listener or SRT-Caller.
   * 
   * Valid values:
   * 
   * *   0
   * *   16
   * *   24
   * *   32
   * 
   * @example
   * 32
   */
  srtPbkeyLen?: number;
  static names(): { [key: string]: string } {
    return {
      cidrs: 'Cidrs',
      createTime: 'CreateTime',
      forbid: 'Forbid',
      outputName: 'OutputName',
      outputProtocol: 'OutputProtocol',
      outputUrl: 'OutputUrl',
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
      createTime: 'string',
      forbid: 'string',
      outputName: 'string',
      outputProtocol: 'string',
      outputUrl: 'string',
      pairFlowId: 'string',
      pairInputName: 'string',
      playerLimit: 'number',
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

