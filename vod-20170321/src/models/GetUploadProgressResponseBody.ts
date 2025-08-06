// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUploadProgressResponseBodyUploadProgressUploadProgressList extends $dara.Model {
  appVersion?: string;
  authInfo?: string;
  authTimestamp?: string;
  businessType?: string;
  clientId?: string;
  deviceModel?: string;
  donePartsCount?: number;
  fileCreateTime?: string;
  fileHash?: string;
  fileName?: string;
  fileSize?: number;
  partSize?: number;
  source?: string;
  terminalType?: string;
  totalPart?: string;
  uploadAddress?: string;
  uploadId?: string;
  uploadPoint?: string;
  uploadRatio?: number;
  uploadSpeed?: number;
  videoId?: string;
  static names(): { [key: string]: string } {
    return {
      appVersion: 'AppVersion',
      authInfo: 'AuthInfo',
      authTimestamp: 'AuthTimestamp',
      businessType: 'BusinessType',
      clientId: 'ClientId',
      deviceModel: 'DeviceModel',
      donePartsCount: 'DonePartsCount',
      fileCreateTime: 'FileCreateTime',
      fileHash: 'FileHash',
      fileName: 'FileName',
      fileSize: 'FileSize',
      partSize: 'PartSize',
      source: 'Source',
      terminalType: 'TerminalType',
      totalPart: 'TotalPart',
      uploadAddress: 'UploadAddress',
      uploadId: 'UploadId',
      uploadPoint: 'UploadPoint',
      uploadRatio: 'UploadRatio',
      uploadSpeed: 'UploadSpeed',
      videoId: 'VideoId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appVersion: 'string',
      authInfo: 'string',
      authTimestamp: 'string',
      businessType: 'string',
      clientId: 'string',
      deviceModel: 'string',
      donePartsCount: 'number',
      fileCreateTime: 'string',
      fileHash: 'string',
      fileName: 'string',
      fileSize: 'number',
      partSize: 'number',
      source: 'string',
      terminalType: 'string',
      totalPart: 'string',
      uploadAddress: 'string',
      uploadId: 'string',
      uploadPoint: 'string',
      uploadRatio: 'number',
      uploadSpeed: 'number',
      videoId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUploadProgressResponseBodyUploadProgress extends $dara.Model {
  uploadProgressList?: GetUploadProgressResponseBodyUploadProgressUploadProgressList[];
  static names(): { [key: string]: string } {
    return {
      uploadProgressList: 'UploadProgressList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      uploadProgressList: { 'type': 'array', 'itemType': GetUploadProgressResponseBodyUploadProgressUploadProgressList },
    };
  }

  validate() {
    if(Array.isArray(this.uploadProgressList)) {
      $dara.Model.validateArray(this.uploadProgressList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUploadProgressResponseBody extends $dara.Model {
  requestId?: string;
  uploadProgress?: GetUploadProgressResponseBodyUploadProgress;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      uploadProgress: 'UploadProgress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      uploadProgress: GetUploadProgressResponseBodyUploadProgress,
    };
  }

  validate() {
    if(this.uploadProgress && typeof (this.uploadProgress as any).validate === 'function') {
      (this.uploadProgress as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

