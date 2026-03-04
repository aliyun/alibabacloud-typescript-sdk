// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AiRtcLicenseInfoDTO extends $dara.Model {
  /**
   * @remarks
   * The remaining usage capacity of the batch.
   * 
   * @example
   * 10000000
   */
  availableCapacity?: number;
  /**
   * @remarks
   * The time when the batch became active.
   * 
   * @example
   * 2020-12-23T13:33:49Z
   */
  beginOn?: string;
  /**
   * @remarks
   * The contract number.
   * 
   * @example
   * 258396267390***
   */
  contractNo?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2020-12-23T13:33:49Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The expiration time.
   * 
   * @example
   * 2021-12-23T13:33:49Z
   */
  expiredOn?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * ice_CoverAILicense_public_cn***
   */
  instanceId?: string;
  /**
   * @remarks
   * The total number of licenses contained within this batch.
   * 
   * @example
   * 10000
   */
  licenseCount?: number;
  /**
   * @remarks
   * The ID of the batch.
   * 
   * @example
   * 17712***
   */
  licenseItemId?: string;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 2020-12-23T13:33:49Z
   */
  modificationTime?: string;
  /**
   * @remarks
   * The status of the batch. Valid values:
   * 
   * *   1: Active
   * *   2\\. Expired
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The license type. Valid values:
   * 
   * *   1: Audio call
   * *   2: Vision call
   * 
   * @example
   * 1
   */
  type?: number;
  /**
   * @remarks
   * The validity period of the licenses in this batch, in days.
   * 
   * @example
   * 365
   */
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

