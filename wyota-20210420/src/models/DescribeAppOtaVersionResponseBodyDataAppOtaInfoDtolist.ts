// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAppOtaVersionResponseBodyDataAppOtaInfoDTOList extends $dara.Model {
  appVersion?: string;
  channel?: string;
  downloadUrl?: string;
  fullDownloadUrl?: string;
  gmtCreate?: string;
  md5?: string;
  osType?: string;
  otaType?: number;
  project?: string;
  protocolType?: string;
  releaseNote?: string;
  releaseNoteEn?: string;
  sessionType?: string;
  size?: number;
  status?: number;
  versionCode?: number;
  versionType?: string;
  versionUid?: string;
  static names(): { [key: string]: string } {
    return {
      appVersion: 'AppVersion',
      channel: 'Channel',
      downloadUrl: 'DownloadUrl',
      fullDownloadUrl: 'FullDownloadUrl',
      gmtCreate: 'GmtCreate',
      md5: 'Md5',
      osType: 'OsType',
      otaType: 'OtaType',
      project: 'Project',
      protocolType: 'ProtocolType',
      releaseNote: 'ReleaseNote',
      releaseNoteEn: 'ReleaseNoteEn',
      sessionType: 'SessionType',
      size: 'Size',
      status: 'Status',
      versionCode: 'VersionCode',
      versionType: 'VersionType',
      versionUid: 'VersionUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appVersion: 'string',
      channel: 'string',
      downloadUrl: 'string',
      fullDownloadUrl: 'string',
      gmtCreate: 'string',
      md5: 'string',
      osType: 'string',
      otaType: 'number',
      project: 'string',
      protocolType: 'string',
      releaseNote: 'string',
      releaseNoteEn: 'string',
      sessionType: 'string',
      size: 'number',
      status: 'number',
      versionCode: 'number',
      versionType: 'string',
      versionUid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

