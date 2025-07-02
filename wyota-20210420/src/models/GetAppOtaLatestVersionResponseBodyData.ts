// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAppOtaLatestVersionResponseBodyData extends $dara.Model {
  appVersion?: string;
  downloadUrl?: string;
  forceUpgrade?: number;
  md5?: string;
  releaseNote?: string;
  size?: number;
  taskUid?: string;
  versionCode?: string;
  versionType?: string;
  static names(): { [key: string]: string } {
    return {
      appVersion: 'AppVersion',
      downloadUrl: 'DownloadUrl',
      forceUpgrade: 'ForceUpgrade',
      md5: 'Md5',
      releaseNote: 'ReleaseNote',
      size: 'Size',
      taskUid: 'TaskUid',
      versionCode: 'VersionCode',
      versionType: 'VersionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appVersion: 'string',
      downloadUrl: 'string',
      forceUpgrade: 'number',
      md5: 'string',
      releaseNote: 'string',
      size: 'number',
      taskUid: 'string',
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

