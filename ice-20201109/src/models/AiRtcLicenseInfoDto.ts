// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AiRtcLicenseInfoDTO extends $dara.Model {
  availableCapacity?: number;
  beginOn?: string;
  contractNo?: string;
  creationTime?: string;
  expiredOn?: string;
  instanceId?: string;
  licenseCount?: number;
  licenseItemId?: string;
  modificationTime?: string;
  status?: number;
  type?: number;
  validDays?: number;
  static names(): { [key: string]: string } {
    return {
      availableCapacity: 'AvailableCapacity',
      beginOn: 'BeginOn',
      contractNo: 'ContractNo',
      creationTime: 'CreationTime',
      expiredOn: 'ExpiredOn',
      instanceId: 'InstanceId',
      licenseCount: 'LicenseCount',
      licenseItemId: 'LicenseItemId',
      modificationTime: 'ModificationTime',
      status: 'Status',
      type: 'Type',
      validDays: 'ValidDays',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableCapacity: 'number',
      beginOn: 'string',
      contractNo: 'string',
      creationTime: 'string',
      expiredOn: 'string',
      instanceId: 'string',
      licenseCount: 'number',
      licenseItemId: 'string',
      modificationTime: 'string',
      status: 'number',
      type: 'number',
      validDays: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

