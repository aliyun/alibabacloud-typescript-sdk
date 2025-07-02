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

