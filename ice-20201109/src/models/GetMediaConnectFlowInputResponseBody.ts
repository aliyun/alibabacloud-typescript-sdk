// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMediaConnectFlowInputResponseBodyContent extends $dara.Model {
  /**
   * @remarks
   * The IP address whitelist for the backup input.
   * 
   * @example
   * 10.211.0.0/17
   */
  backupCidrs?: string;
  /**
   * @remarks
   * The time when the backup input was created.
   * 
   * @example
   * 2024-07-18T01:29:24Z
   */
  backupCreateTime?: string;
  /**
   * @remarks
   * The internal IP address for backup stream ingestion. This field is valid only when cloud access is established over an Express Connect circuit.
   * 
   * @example
   * ""
   */
  backupInnerInputUrl?: string;
  /**
   * @remarks
   * The backup input name.
   * 
   * @example
   * AliTestInput-sub
   */
  backupInputName?: string;
  /**
   * @remarks
   * The backup input status, which indicates whether the backup stream is being ingested.
   * 
   * @example
   * online
   */
  backupInputStatus?: string;
  /**
   * @remarks
   * The backup input URL.
   * 
   * @example
   * rtmp://1.2.3.4:1935/live/AliTestInput_8666ec062190f00e263012666319a5be_backup
   */
  backupInputUrl?: string;
  /**
   * @remarks
   * The maximum bitrate for the backup input.
   * 
   * @example
   * 2000000
   */
  backupMaxBitrate?: number;
  /**
   * @remarks
   * The SRT latency for the backup input.
   * 
   * @example
   * 120
   */
  backupSrtLatency?: number;
  /**
   * @remarks
   * The SRT encryption passphrase for the backup input.
   * 
   * @example
   * FICUBPX4Q77DYHRF
   */
  backupSrtPassphrase?: string;
  /**
   * @remarks
   * The SRT encryption key length for the backup input.
   * 
   * @example
   * 32
   */
  backupSrtPbkeyLen?: number;
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
   * The time when the input was created. The time is displayed in ISO 8601 format in UTC (ending with Z).
   * 
   * @example
   * 2024-07-18T01:29:24Z
   */
  createTime?: string;
  /**
   * @remarks
   * The internal IP address for stream ingestion. This field is valid only when cloud access is established over an Express Connect circuit.
   * 
   * @example
   * ""
   */
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
   * The input protocol.
   * 
   * @example
   * RTMP-PUSH
   */
  inputProtocol?: string;
  /**
   * @remarks
   * The input status, which indicates whether the primary stream is being ingested.
   * 
   * @example
   * online
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
   * The maximum input bitrate, in bps.
   * 
   * @example
   * 2000000
   */
  maxBitrate?: number;
  /**
   * @remarks
   * The peer flow instance ID. This field is required when the output type is Flow.
   * 
   * @example
   * 05c3adf4-aa0e-421d-a991-48ceae3e642e
   */
  pairFlowId?: string;
  /**
   * @remarks
   * The output name of the peer flow. This field is required only when the input type is Flow.
   * 
   * @example
   * AliTestOutput
   */
  pairOutputName?: string;
  /**
   * @remarks
   * The SRT latency, in milliseconds. This field is required only when the input type is SRT-Listener or SRT-Caller.
   * 
   * @example
   * 1000
   */
  srtLatency?: number;
  /**
   * @remarks
   * The SRT encryption passphrase. This field is required only when the input type is SRT-Listener or SRT-Caller.
   * 
   * @example
   * FICUBPX4Q77DYHRF
   */
  srtPassphrase?: string;
  /**
   * @remarks
   * The SRT encryption key length. This field is required only when the input type is SRT-Listener or SRT-Caller.
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
   * The API call description.
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

