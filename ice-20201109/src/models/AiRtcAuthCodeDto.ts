// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AiRtcAuthCodeDTO extends $dara.Model {
  activatedTime?: string;
  authCode?: string;
  creationTime?: string;
  deviceId?: string;
  license?: string;
  licenseItemId?: string;
  modificationTime?: string;
  status?: number;
  type?: number;
  static names(): { [key: string]: string } {
    return {
      activatedTime: 'ActivatedTime',
      authCode: 'AuthCode',
      creationTime: 'CreationTime',
      deviceId: 'DeviceId',
      license: 'License',
      licenseItemId: 'LicenseItemId',
      modificationTime: 'ModificationTime',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activatedTime: 'string',
      authCode: 'string',
      creationTime: 'string',
      deviceId: 'string',
      license: 'string',
      licenseItemId: 'string',
      modificationTime: 'string',
      status: 'number',
      type: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

