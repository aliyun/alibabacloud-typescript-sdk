// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTrialInfoResponseBodyTrialInfo extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the service is converted to pay-as-you-go after the free trial expires.
   */
  keepAfterTrialExpiration?: boolean;
  /**
   * @remarks
   * The remaining number of free trial backup plans that can be created. The value 1 is returned if the free trial has not expired and no free trial backup plan has been created. Otherwise, the value 0 is returned.
   * 
   * @example
   * 1
   */
  trialBackupPlanQuota?: number;
  /**
   * @remarks
   * The expiration time of the free trial. UNIX timestamp, in seconds.
   * 
   * @example
   * 1584597600
   */
  trialExpireTime?: number;
  /**
   * @remarks
   * The start time of the free trial. UNIX timestamp, in seconds.
   * 
   * @example
   * 1579413159
   */
  trialStartTime?: number;
  /**
   * @remarks
   * The remaining number of free trial backup vaults that can be created. The value 1 is returned if the free trial has not expired and no free trial backup vault has been created. Otherwise, the value 0 is returned.
   * 
   * @example
   * 1
   */
  trialVaultQuota?: number;
  /**
   * @remarks
   * The release time of the free trial backup vault. UNIX timestamp, in seconds.
   * 
   * @example
   * 1594965600
   */
  trialVaultReleaseTime?: number;
  static names(): { [key: string]: string } {
    return {
      keepAfterTrialExpiration: 'KeepAfterTrialExpiration',
      trialBackupPlanQuota: 'TrialBackupPlanQuota',
      trialExpireTime: 'TrialExpireTime',
      trialStartTime: 'TrialStartTime',
      trialVaultQuota: 'TrialVaultQuota',
      trialVaultReleaseTime: 'TrialVaultReleaseTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keepAfterTrialExpiration: 'boolean',
      trialBackupPlanQuota: 'number',
      trialExpireTime: 'number',
      trialStartTime: 'number',
      trialVaultQuota: 'number',
      trialVaultReleaseTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTrialInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return code. A value of 200 indicates success.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The returned message. The value "successful" is returned on success. An error message is returned on failure.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * - true: The request was successful.
   * - false: The request failed.
   */
  success?: boolean;
  /**
   * @remarks
   * The free trial properties. This parameter is returned only when a free trial record exists for the data source.
   */
  trialInfo?: GetTrialInfoResponseBodyTrialInfo;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      trialInfo: 'TrialInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      trialInfo: GetTrialInfoResponseBodyTrialInfo,
    };
  }

  validate() {
    if(this.trialInfo && typeof (this.trialInfo as any).validate === 'function') {
      (this.trialInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

