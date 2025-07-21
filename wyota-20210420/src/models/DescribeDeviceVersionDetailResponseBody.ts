// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDeviceVersionDetailResponseBodyData extends $dara.Model {
  androidHorizontalMultiCnImageDownloadUrl?: string;
  androidHorizontalMultiEnImageDownloadUrl?: string;
  androidVerticalMultiCnImageDownloadUrl?: string;
  androidVerticalMultiEnImageDownloadUrl?: string;
  channel?: string;
  clientType?: number;
  cnImageDownloadUrl?: string;
  creator?: string;
  downloadUrl?: string;
  enImageDownloadUrl?: string;
  md5?: string;
  model?: string;
  multiCnImageDownloadUrl?: string;
  multiEnImageDownloadUrl?: string;
  releaseNote?: string;
  releaseNoteEn?: string;
  size?: number;
  version?: string;
  versionCode?: string;
  versionType?: string;
  static names(): { [key: string]: string } {
    return {
      androidHorizontalMultiCnImageDownloadUrl: 'AndroidHorizontalMultiCnImageDownloadUrl',
      androidHorizontalMultiEnImageDownloadUrl: 'AndroidHorizontalMultiEnImageDownloadUrl',
      androidVerticalMultiCnImageDownloadUrl: 'AndroidVerticalMultiCnImageDownloadUrl',
      androidVerticalMultiEnImageDownloadUrl: 'AndroidVerticalMultiEnImageDownloadUrl',
      channel: 'Channel',
      clientType: 'ClientType',
      cnImageDownloadUrl: 'CnImageDownloadUrl',
      creator: 'Creator',
      downloadUrl: 'DownloadUrl',
      enImageDownloadUrl: 'EnImageDownloadUrl',
      md5: 'Md5',
      model: 'Model',
      multiCnImageDownloadUrl: 'MultiCnImageDownloadUrl',
      multiEnImageDownloadUrl: 'MultiEnImageDownloadUrl',
      releaseNote: 'ReleaseNote',
      releaseNoteEn: 'ReleaseNoteEn',
      size: 'Size',
      version: 'Version',
      versionCode: 'VersionCode',
      versionType: 'VersionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      androidHorizontalMultiCnImageDownloadUrl: 'string',
      androidHorizontalMultiEnImageDownloadUrl: 'string',
      androidVerticalMultiCnImageDownloadUrl: 'string',
      androidVerticalMultiEnImageDownloadUrl: 'string',
      channel: 'string',
      clientType: 'number',
      cnImageDownloadUrl: 'string',
      creator: 'string',
      downloadUrl: 'string',
      enImageDownloadUrl: 'string',
      md5: 'string',
      model: 'string',
      multiCnImageDownloadUrl: 'string',
      multiEnImageDownloadUrl: 'string',
      releaseNote: 'string',
      releaseNoteEn: 'string',
      size: 'number',
      version: 'string',
      versionCode: 'string',
      versionType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeviceVersionDetailResponseBody extends $dara.Model {
  code?: string;
  data?: DescribeDeviceVersionDetailResponseBodyData[];
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': DescribeDeviceVersionDetailResponseBodyData },
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

