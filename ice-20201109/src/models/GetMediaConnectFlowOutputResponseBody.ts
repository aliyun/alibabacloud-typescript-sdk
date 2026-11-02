// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMediaConnectFlowOutputResponseBodyContent extends $dara.Model {
  /**
   * @remarks
   * The IP address whitelist in CIDR format. Multiple CIDR blocks are separated by commas (,).
   * 
   * @example
   * 10.211.0.0/17
   */
  cidrs?: string;
  /**
   * @remarks
   * The time when the flow was created. The time follows the ISO 8601 standard in UTC (ending with Z).
   * 
   * @example
   * 2024-07-18T01:29:24Z
   */
  createTime?: string;
  /**
   * @remarks
   * Indicates whether the output is disabled. Valid values: yes and no.
   * 
   * @example
   * no
   */
  forbid?: string;
  /**
   * @remarks
   * The name of the output.
   * 
   * @example
   * AliTestInput
   */
  outputName?: string;
  /**
   * @remarks
   * The output protocol.
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
   * The instance ID of the peer flow. This parameter is required when the output type is Flow.
   * 
   * @example
   * 805fbdd0-575e-4146-b35d-ec7f63937b20
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
   * The maximum number of players.
   * 
   * @example
   * 5
   */
  playerLimit?: number;
  /**
   * @remarks
   * The SRT latency in milliseconds. This parameter is required only when the input type is SRT-Listener or SRT-Caller.
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
   * FICUBPX4Q77DYHRF
   */
  srtPassphrase?: string;
  /**
   * @remarks
   * The SRT encryption key length. This parameter is required only when the input type is SRT-Listener or SRT-Caller.
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

export class GetMediaConnectFlowOutputResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response body.
   */
  content?: GetMediaConnectFlowOutputResponseBodyContent;
  /**
   * @remarks
   * The description of the API call.
   * 
   * @example
   * OK
   */
  description?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0DB23DCE-0D69-598B-AA7C-7268D55E2F89
   */
  requestId?: string;
  /**
   * @remarks
   * The returned error code. A value of 0 indicates success.
   * 
   * @example
   * 0
   */
  retCode?: number;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      description: 'Description',
      requestId: 'RequestId',
      retCode: 'RetCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: GetMediaConnectFlowOutputResponseBodyContent,
      description: 'string',
      requestId: 'string',
      retCode: 'number',
    };
  }

  validate() {
    if(this.content && typeof (this.content as any).validate === 'function') {
      (this.content as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

