// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpgradePolarClawSkillsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pa-**************
   */
  applicationId?: string;
  /**
   * @example
   * polarclaw
   */
  applicationType?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  upgradeMethod?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      applicationType: 'ApplicationType',
      regionId: 'RegionId',
      upgradeMethod: 'UpgradeMethod',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      applicationType: 'string',
      regionId: 'string',
      upgradeMethod: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

