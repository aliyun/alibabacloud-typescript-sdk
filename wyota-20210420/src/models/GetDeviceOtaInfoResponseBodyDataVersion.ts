// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDeviceOtaInfoResponseBodyDataVersion extends $dara.Model {
  androidHorizontalMultiCnImageDownloadUrl?: string;
  androidHorizontalMultiEnImageDownloadUrl?: string;
  androidVerticalMultiCnImageDownloadUrl?: string;
  androidVerticalMultiEnImageDownloadUrl?: string;
  cnImageDownloadUrl?: string;
  creator?: string;
  customForceUpgrade?: boolean;
  downloadUrl?: string;
  enImageDownloadUrl?: string;
  forceUpgrade?: number;
  isAppDownloadUrl?: boolean;
  localDownloadUrl?: string;
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
  wyForceUpgrade?: boolean;
  static names(): { [key: string]: string } {
    return {
      androidHorizontalMultiCnImageDownloadUrl: 'AndroidHorizontalMultiCnImageDownloadUrl',
      androidHorizontalMultiEnImageDownloadUrl: 'AndroidHorizontalMultiEnImageDownloadUrl',
      androidVerticalMultiCnImageDownloadUrl: 'AndroidVerticalMultiCnImageDownloadUrl',
      androidVerticalMultiEnImageDownloadUrl: 'AndroidVerticalMultiEnImageDownloadUrl',
      cnImageDownloadUrl: 'CnImageDownloadUrl',
      creator: 'Creator',
      customForceUpgrade: 'CustomForceUpgrade',
      downloadUrl: 'DownloadUrl',
      enImageDownloadUrl: 'EnImageDownloadUrl',
      forceUpgrade: 'ForceUpgrade',
      isAppDownloadUrl: 'IsAppDownloadUrl',
      localDownloadUrl: 'LocalDownloadUrl',
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
      wyForceUpgrade: 'WyForceUpgrade',
    };
  }

  static types(): { [key: string]: any } {
    return {
      androidHorizontalMultiCnImageDownloadUrl: 'string',
      androidHorizontalMultiEnImageDownloadUrl: 'string',
      androidVerticalMultiCnImageDownloadUrl: 'string',
      androidVerticalMultiEnImageDownloadUrl: 'string',
      cnImageDownloadUrl: 'string',
      creator: 'string',
      customForceUpgrade: 'boolean',
      downloadUrl: 'string',
      enImageDownloadUrl: 'string',
      forceUpgrade: 'number',
      isAppDownloadUrl: 'boolean',
      localDownloadUrl: 'string',
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
      wyForceUpgrade: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

