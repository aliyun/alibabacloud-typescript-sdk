// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyBackupPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * hb-t4naqsay5gn****
   */
  clusterId?: string;
  /**
   * @example
   * 18:00Z
   */
  preferredBackupEndTimeUTC?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Thursday
   */
  preferredBackupPeriod?: string;
  /**
   * @example
   * 17:00Z
   */
  preferredBackupStartTimeUTC?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 01:00-02:00
   */
  preferredBackupTime?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      preferredBackupEndTimeUTC: 'PreferredBackupEndTimeUTC',
      preferredBackupPeriod: 'PreferredBackupPeriod',
      preferredBackupStartTimeUTC: 'PreferredBackupStartTimeUTC',
      preferredBackupTime: 'PreferredBackupTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      preferredBackupEndTimeUTC: 'string',
      preferredBackupPeriod: 'string',
      preferredBackupStartTimeUTC: 'string',
      preferredBackupTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

