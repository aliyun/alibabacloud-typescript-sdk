// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDeviceOtaInfoTestResponseBodyDataVersion extends $dara.Model {
  creator?: string;
  downloadUrl?: string;
  forceUpgrade?: number;
  localDownloadUrl?: string;
  md5?: string;
  model?: string;
  releaseNote?: string;
  size?: number;
  version?: string;
  versionCode?: string;
  versionType?: string;
  static names(): { [key: string]: string } {
    return {
      creator: 'Creator',
      downloadUrl: 'DownloadUrl',
      forceUpgrade: 'ForceUpgrade',
      localDownloadUrl: 'LocalDownloadUrl',
      md5: 'Md5',
      model: 'Model',
      releaseNote: 'ReleaseNote',
      size: 'Size',
      version: 'Version',
      versionCode: 'VersionCode',
      versionType: 'VersionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creator: 'string',
      downloadUrl: 'string',
      forceUpgrade: 'number',
      localDownloadUrl: 'string',
      md5: 'string',
      model: 'string',
      releaseNote: 'string',
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

export class GetDeviceOtaInfoTestResponseBodyData extends $dara.Model {
  version?: GetDeviceOtaInfoTestResponseBodyDataVersion;
  static names(): { [key: string]: string } {
    return {
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      version: GetDeviceOtaInfoTestResponseBodyDataVersion,
    };
  }

  validate() {
    if(this.version && typeof (this.version as any).validate === 'function') {
      (this.version as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceOtaInfoTestResponseBody extends $dara.Model {
  code?: string;
  data?: GetDeviceOtaInfoTestResponseBodyData;
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
      data: GetDeviceOtaInfoTestResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

