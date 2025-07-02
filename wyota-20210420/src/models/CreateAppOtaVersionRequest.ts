// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAppOtaVersionRequest extends $dara.Model {
  appVersion?: string;
  arch?: string;
  channel?: string;
  clientType?: number;
  creator?: string;
  downloadUrl?: string;
  md5?: string;
  os?: string;
  osType?: string;
  otaType?: number;
  project?: string;
  relationVersionUids?: string[];
  releaseNote?: string;
  releaseNoteEn?: string;
  releaseNoteJp?: string;
  size?: number;
  snapshotId?: string;
  snapshotRegionId?: string;
  status?: number;
  versionType?: string;
  static names(): { [key: string]: string } {
    return {
      appVersion: 'AppVersion',
      arch: 'Arch',
      channel: 'Channel',
      clientType: 'ClientType',
      creator: 'Creator',
      downloadUrl: 'DownloadUrl',
      md5: 'Md5',
      os: 'Os',
      osType: 'OsType',
      otaType: 'OtaType',
      project: 'Project',
      relationVersionUids: 'RelationVersionUids',
      releaseNote: 'ReleaseNote',
      releaseNoteEn: 'ReleaseNoteEn',
      releaseNoteJp: 'ReleaseNoteJp',
      size: 'Size',
      snapshotId: 'SnapshotId',
      snapshotRegionId: 'SnapshotRegionId',
      status: 'Status',
      versionType: 'VersionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appVersion: 'string',
      arch: 'string',
      channel: 'string',
      clientType: 'number',
      creator: 'string',
      downloadUrl: 'string',
      md5: 'string',
      os: 'string',
      osType: 'string',
      otaType: 'number',
      project: 'string',
      relationVersionUids: { 'type': 'array', 'itemType': 'string' },
      releaseNote: 'string',
      releaseNoteEn: 'string',
      releaseNoteJp: 'string',
      size: 'number',
      snapshotId: 'string',
      snapshotRegionId: 'string',
      status: 'number',
      versionType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.relationVersionUids)) {
      $dara.Model.validateArray(this.relationVersionUids);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

