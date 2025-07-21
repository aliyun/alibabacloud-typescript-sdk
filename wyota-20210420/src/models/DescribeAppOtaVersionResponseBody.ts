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

export class DescribeAppOtaVersionResponseBodyData extends $dara.Model {
  appOtaInfoDTOList?: DescribeAppOtaVersionResponseBodyDataAppOtaInfoDTOList[];
  static names(): { [key: string]: string } {
    return {
      appOtaInfoDTOList: 'AppOtaInfoDTOList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appOtaInfoDTOList: { 'type': 'array', 'itemType': DescribeAppOtaVersionResponseBodyDataAppOtaInfoDTOList },
    };
  }

  validate() {
    if(Array.isArray(this.appOtaInfoDTOList)) {
      $dara.Model.validateArray(this.appOtaInfoDTOList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppOtaVersionResponseBody extends $dara.Model {
  code?: string;
  data?: DescribeAppOtaVersionResponseBodyData;
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
      data: DescribeAppOtaVersionResponseBodyData,
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

