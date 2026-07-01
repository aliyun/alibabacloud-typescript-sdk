// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMediaConnectFlowInputResponseBodyContent extends $dara.Model {
  /**
   * @remarks
   * The IP address whitelist for the backup input.
   */
  backupCidrs?: string;
  /**
   * @remarks
   * The time when the backup input was created.
   */
  backupCreateTime?: string;
  backupInnerInputUrl?: string;
  /**
   * @remarks
   * The name of the backup input.
   */
  backupInputName?: string;
  /**
   * @remarks
   * The status of the backup input. It indicates whether the backup stream is being pushed.
   */
  backupInputStatus?: string;
  /**
   * @remarks
   * The URL of the backup input.
   */
  backupInputUrl?: string;
  /**
   * @remarks
   * The bitrate of the backup input.
   */
  backupMaxBitrate?: number;
  /**
   * @remarks
   * The SRT latency for the backup input.
   */
  backupSrtLatency?: number;
  /**
   * @remarks
   * The SRT encryption key for the backup input.
   */
  backupSrtPassphrase?: string;
  /**
   * @remarks
   * The SRT encryption key length for the backup input.
   */
  backupSrtPbkeyLen?: number;
  /**
   * @remarks
   * The IP address whitelist in CIDR format. Separate multiple IP address segments with commas.
   * 
   * @example
   * 10.211.0.0/17
   */
  cidrs?: string;
  /**
   * @remarks
   * The time when the input was created.
   * 
   * @example
   * 2024-07-18T01:29:24Z
   */
  createTime?: string;
  innerInputUrl?: string;
  /**
   * @remarks
   * The input name.
   * 
   * @example
   * AliTestInput
   */
  inputName?: string;
  /**
   * @remarks
   * The input type.
   * 
   * @example
   * RTMP-PUSH
   */
  inputProtocol?: string;
  /**
   * @remarks
   * The input status. It indicates whether the primary stream is being pushed.
   */
  inputStatus?: string;
  /**
   * @remarks
   * The input URL.
   * 
   * @example
   * rtmp://1.2.3.4:1935/live/AliTestInput_8666ec062190f00e263012666319a5be
   */
  inputUrl?: string;
  /**
   * @remarks
   * The input bitrate, in bps.
   * 
   * @example
   * 2000000
   */
  maxBitrate?: number;
  /**
   * @remarks
   * The ID of the peer Flow instance. This parameter is required only if the output type is Flow.
   * 
   * @example
   * 05c3adf4-aa0e-421d-a991-48ceae3e642e
   */
  pairFlowId?: string;
  /**
   * @remarks
   * The output name of the peer Flow. This parameter is required only when the input type is Flow.
   * 
   * @example
   * AliTestOutput
   */
  pairOutputName?: string;
  /**
   * @remarks
   * The SRT latency in milliseconds (ms). This parameter is required only when the input type is SRT-Listener or SRT-Caller.
   * 
   * @example
   * 1000
   */
  srtLatency?: number;
  /**
   * @remarks
   * The SRT encryption key. This parameter is required only when the input type is SRT-Listener or SRT-Caller.
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
      backupCidrs: 'BackupCidrs',
      backupCreateTime: 'BackupCreateTime',
      backupInnerInputUrl: 'BackupInnerInputUrl',
      backupInputName: 'BackupInputName',
      backupInputStatus: 'BackupInputStatus',
      backupInputUrl: 'BackupInputUrl',
      backupMaxBitrate: 'BackupMaxBitrate',
      backupSrtLatency: 'BackupSrtLatency',
      backupSrtPassphrase: 'BackupSrtPassphrase',
      backupSrtPbkeyLen: 'BackupSrtPbkeyLen',
      cidrs: 'Cidrs',
      createTime: 'CreateTime',
      innerInputUrl: 'InnerInputUrl',
      inputName: 'InputName',
      inputProtocol: 'InputProtocol',
      inputStatus: 'InputStatus',
      inputUrl: 'InputUrl',
      maxBitrate: 'MaxBitrate',
      pairFlowId: 'PairFlowId',
      pairOutputName: 'PairOutputName',
      srtLatency: 'SrtLatency',
      srtPassphrase: 'SrtPassphrase',
      srtPbkeyLen: 'SrtPbkeyLen',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupCidrs: 'string',
      backupCreateTime: 'string',
      backupInnerInputUrl: 'string',
      backupInputName: 'string',
      backupInputStatus: 'string',
      backupInputUrl: 'string',
      backupMaxBitrate: 'number',
      backupSrtLatency: 'number',
      backupSrtPassphrase: 'string',
      backupSrtPbkeyLen: 'number',
      cidrs: 'string',
      createTime: 'string',
      innerInputUrl: 'string',
      inputName: 'string',
      inputProtocol: 'string',
      inputStatus: 'string',
      inputUrl: 'string',
      maxBitrate: 'number',
      pairFlowId: 'string',
      pairOutputName: 'string',
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

export class GetMediaConnectFlowInputResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response body.
   */
  content?: GetMediaConnectFlowInputResponseBodyContent;
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
   * D4C231DF-103A-55FF-8D09-E699552457DE
   */
  requestId?: string;
  /**
   * @remarks
   * The error code returned. A value of 0 indicates success.
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
      content: GetMediaConnectFlowInputResponseBodyContent,
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

