// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpgradeApplicationVersionRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pa-**************
   */
  applicationId?: string;
  /**
   * @remarks
   * The upgrade policy.
   * 
   * @example
   * HOT
   */
  upgradePolicy?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      upgradePolicy: 'UpgradePolicy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      upgradePolicy: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

