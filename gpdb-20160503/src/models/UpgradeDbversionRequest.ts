// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpgradeDBVersionRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * > You can call the [DescribeDBInstances](https://help.aliyun.com/document_detail/86911.html) operation to query the details of all AnalyticDB for PostgreSQL instances in the specified region, including instance IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * gp-wz9kmr708m155j***
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The effective period. Valid values:
   * * **Immediate** (default): The upgrade takes effect immediately.
   * * **MaintainTime**: The upgrade takes effect during the O&M window. For more information, see ModifyDBInstanceMaintainTime.
   * 
   * @example
   * Immediate
   */
  effectiveTime?: string;
  /**
   * @remarks
   * **[Deprecated]** This parameter is deprecated. You do not need to specify this parameter.
   * 
   * @example
   * null
   */
  majorVersion?: string;
  /**
   * @remarks
   * The minor version.
   * 
   * @example
   * 6.3.6.1-202112012048
   */
  minorVersion?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * > You can call the [DescribeRegions](https://help.aliyun.com/document_detail/86912.html) operation to query available region IDs.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * **[Deprecated]** This parameter is deprecated. You do not need to specify this parameter.
   * 
   * @example
   * null
   */
  switchTime?: string;
  /**
   * @remarks
   * **[Deprecated]** This parameter is deprecated. You do not need to specify this parameter.
   * 
   * @example
   * null
   */
  switchTimeMode?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      effectiveTime: 'EffectiveTime',
      majorVersion: 'MajorVersion',
      minorVersion: 'MinorVersion',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      switchTime: 'SwitchTime',
      switchTimeMode: 'SwitchTimeMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      effectiveTime: 'string',
      majorVersion: 'string',
      minorVersion: 'string',
      ownerId: 'number',
      regionId: 'string',
      switchTime: 'string',
      switchTimeMode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

