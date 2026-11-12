// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePolarFsQuotaRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * > For Enterprise Edition, Basic Edition, and Data Lakehouse Edition: You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/2319131.html) operation to query the cluster ID.
   * 
   * @example
   * pc-**************
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The target path.
   * 
   * @example
   * /data
   */
  path?: string;
  /**
   * @remarks
   * The Polarlakebase instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pfs-2ze0i74ka607*****
   */
  polarFsInstanceId?: string;
  /**
   * @remarks
   * The type of the quota to query.
   * 
   * @example
   * quotaPolicy
   */
  quotaType?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * > You can call the [DescribeRegions](https://help.aliyun.com/document_detail/98041.html) operation to view all available regions under the current account, including the region IDs.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      path: 'Path',
      polarFsInstanceId: 'PolarFsInstanceId',
      quotaType: 'QuotaType',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      path: 'string',
      polarFsInstanceId: 'string',
      quotaType: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

