// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAppOtaVersionRequest extends $dara.Model {
  appVersion?: string;
  channel?: string;
  clientType?: number;
  creator?: string;
  nullChannel?: boolean;
  otaType?: number;
  project?: string;
  status?: number;
  versionUid?: string;
  static names(): { [key: string]: string } {
    return {
      appVersion: 'AppVersion',
      channel: 'Channel',
      clientType: 'ClientType',
      creator: 'Creator',
      nullChannel: 'NullChannel',
      otaType: 'OtaType',
      project: 'Project',
      status: 'Status',
      versionUid: 'VersionUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appVersion: 'string',
      channel: 'string',
      clientType: 'number',
      creator: 'string',
      nullChannel: 'boolean',
      otaType: 'number',
      project: 'string',
      status: 'number',
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

