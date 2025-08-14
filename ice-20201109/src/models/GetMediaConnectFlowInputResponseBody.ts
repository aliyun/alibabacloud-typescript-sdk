// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMediaConnectFlowInputResponseBodyContent extends $dara.Model {
  backupCidrs?: string;
  backupCreateTime?: string;
  backupInputName?: string;
  backupInputStatus?: string;
  backupInputUrl?: string;
  backupMaxBitrate?: number;
  backupSrtLatency?: number;
  backupSrtPassphrase?: string;
  backupSrtPbkeyLen?: number;
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
  /**
   * @remarks
   * The source name.
   * 
   * @example
   * AliTestInput
   */
  inputName?: string;
  /**
   * @remarks
   * The source type.
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
   * RTMP-PUSH
   */
  inputProtocol?: string;
  inputStatus?: string;
  /**
   * @remarks
   * The source URL.
   * 
   * @example
   * rtmp://1.2.3.4:1935/live/AliTestInput_8666ec062190f00e263012666319a5be
   */
  inputUrl?: string;
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
   * The ID of the source flow. This parameter is returned when the source type is Flow.
   * 
   * @example
   * 05c3adf4-aa0e-421d-a991-48ceae3e642e
   */
  pairFlowId?: string;
  /**
   * @remarks
   * The output of the source flow. This parameter is returned when the source type is Flow.
   * 
   * @example
   * AliTestOutput
   */
  pairOutputName?: string;
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
      backupCidrs: 'BackupCidrs',
      backupCreateTime: 'BackupCreateTime',
      backupInputName: 'BackupInputName',
      backupInputStatus: 'BackupInputStatus',
      backupInputUrl: 'BackupInputUrl',
      backupMaxBitrate: 'BackupMaxBitrate',
      backupSrtLatency: 'BackupSrtLatency',
      backupSrtPassphrase: 'BackupSrtPassphrase',
      backupSrtPbkeyLen: 'BackupSrtPbkeyLen',
      cidrs: 'Cidrs',
      createTime: 'CreateTime',
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
      backupInputName: 'string',
      backupInputStatus: 'string',
      backupInputUrl: 'string',
      backupMaxBitrate: 'number',
      backupSrtLatency: 'number',
      backupSrtPassphrase: 'string',
      backupSrtPbkeyLen: 'number',
      cidrs: 'string',
      createTime: 'string',
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
   * The call description.
   * 
   * @example
   * OK
   */
  description?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * D4C231DF-103A-55FF-8D09-E699552457DE
   */
  requestId?: string;
  /**
   * @remarks
   * The returned error code. A value of 0 indicates the call is successful.
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

