// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpgradePolarClawSkillsRequest extends $dara.Model {
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
   * The application type.
   * 
   * > You can omit this parameter when you first call this operation.
   * 
   * @example
   * polarclaw
   */
  applicationType?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * > You can call the [DescribeRegions](https://help.aliyun.com/document_detail/98041.html) operation to query the regions of all clusters in your account.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The upgrade method.
   * 
   * @example
   * Manual
   */
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

