// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { LicenseInstanceAppDTOLicenseConfigs } from "./LicenseInstanceAppDtolicenseConfigs";


export class LicenseInstanceAppDTO extends $dara.Model {
  appId?: string;
  beginOn?: string;
  contractNo?: string;
  creationTime?: string;
  expiredOn?: string;
  instanceId?: string;
  itemId?: string;
  licenseConfigs?: LicenseInstanceAppDTOLicenseConfigs[];
  modificationTime?: string;
  status?: string;
  userId?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      beginOn: 'BeginOn',
      contractNo: 'ContractNo',
      creationTime: 'CreationTime',
      expiredOn: 'ExpiredOn',
      instanceId: 'InstanceId',
      itemId: 'ItemId',
      licenseConfigs: 'LicenseConfigs',
      modificationTime: 'ModificationTime',
      status: 'Status',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      beginOn: 'string',
      contractNo: 'string',
      creationTime: 'string',
      expiredOn: 'string',
      instanceId: 'string',
      itemId: 'string',
      licenseConfigs: { 'type': 'array', 'itemType': LicenseInstanceAppDTOLicenseConfigs },
      modificationTime: 'string',
      status: 'string',
      userId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.licenseConfigs)) {
      $dara.Model.validateArray(this.licenseConfigs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

