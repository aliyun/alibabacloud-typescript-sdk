// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListOfficeSiteOverviewResponseBodyOfficeSiteOverviewResults extends $dara.Model {
  /**
   * @remarks
   * The number of expired cloud computers in the office network.
   * 
   * @example
   * 0
   */
  hasExpiredEdsCount?: number;
  /**
   * @remarks
   * The number of expired cloud computers in the cloud computer pool.
   * 
   * @example
   * 0
   */
  hasExpiredEdsCountForGroup?: number;
  /**
   * @remarks
   * The office network ID.
   * 
   * @example
   * cn-hangzhou+dir-363353****
   */
  officeSiteId?: string;
  /**
   * @remarks
   * The office network name.
   * 
   * @example
   * test
   */
  officeSiteName?: string;
  /**
   * @remarks
   * The office network status.
   * 
   * Default values:
   * 
   * *   CONFIGUSERFAILED
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   REGISTERING
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   REGISTERED
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   NEEDCONFIGTRUST
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   CONFIGUSERING
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   CONFIGTRUSTFAILED
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   ERROR
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   CONFIGTRUSTING
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   NEEDCONFIGUSER
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * REGISTERED
   */
  officeSiteStatus?: string;
  /**
   * @remarks
   * The ID of the region where the office network resides.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The number of cloud computers that are running in the office network.
   * 
   * @example
   * 1
   */
  runningEdsCount?: number;
  /**
   * @remarks
   * The number of running cloud computers in the cloud computer pool.
   * 
   * @example
   * 1
   */
  runningEdsCountForGroup?: number;
  /**
   * @remarks
   * The total number of cloud computers in the office network.
   * 
   * @example
   * 1
   */
  totalEdsCount?: number;
  /**
   * @remarks
   * The total number of cloud computers in the cloud computer pool.
   * 
   * @example
   * 1
   */
  totalEdsCountForGroup?: number;
  /**
   * @remarks
   * The office network type and its suitable VPC type.
   * 
   * Valid values:
   * 
   * *   standard (default): standard, exclusive VPC
   * *   customized: custom, user VPC
   * *   basic: basic, shared VPC
   * 
   * @example
   * standard
   */
  vpcType?: string;
  /**
   * @remarks
   * The number of cloud computers that are about to expire in the office network.
   * 
   * @example
   * 0
   */
  willExpiredEdsCount?: number;
  /**
   * @remarks
   * The number of cloud computers that are about to expire in the cloud computer pool.
   * 
   * @example
   * 0
   */
  willExpiredEdsCountForGroup?: number;
  static names(): { [key: string]: string } {
    return {
      hasExpiredEdsCount: 'HasExpiredEdsCount',
      hasExpiredEdsCountForGroup: 'HasExpiredEdsCountForGroup',
      officeSiteId: 'OfficeSiteId',
      officeSiteName: 'OfficeSiteName',
      officeSiteStatus: 'OfficeSiteStatus',
      regionId: 'RegionId',
      runningEdsCount: 'RunningEdsCount',
      runningEdsCountForGroup: 'RunningEdsCountForGroup',
      totalEdsCount: 'TotalEdsCount',
      totalEdsCountForGroup: 'TotalEdsCountForGroup',
      vpcType: 'VpcType',
      willExpiredEdsCount: 'WillExpiredEdsCount',
      willExpiredEdsCountForGroup: 'WillExpiredEdsCountForGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hasExpiredEdsCount: 'number',
      hasExpiredEdsCountForGroup: 'number',
      officeSiteId: 'string',
      officeSiteName: 'string',
      officeSiteStatus: 'string',
      regionId: 'string',
      runningEdsCount: 'number',
      runningEdsCountForGroup: 'number',
      totalEdsCount: 'number',
      totalEdsCountForGroup: 'number',
      vpcType: 'string',
      willExpiredEdsCount: 'number',
      willExpiredEdsCountForGroup: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

