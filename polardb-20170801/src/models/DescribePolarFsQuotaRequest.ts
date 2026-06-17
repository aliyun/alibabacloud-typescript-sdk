// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePolarFsQuotaRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * > To find the cluster ID for enterprise, basic, or data lakehouse edition clusters, call the [DescribeDBClusters](https://help.aliyun.com/document_detail/2319131.html) operation.
   * 
   * @example
   * pc-**************
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The destination path.
   * 
   * @example
   * /data
   */
  path?: string;
  /**
   * @remarks
   * The PolarFS instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pfs-2ze0i74ka607*****
   */
  polarFsInstanceId?: string;
  /**
   * @remarks
   * The quota type to query.
   * 
   * @example
   * quotaPolicy
   */
  quotaType?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * > Call the [DescribeRegions](https://help.aliyun.com/document_detail/98041.html) operation to find the IDs of all available regions in your account.
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

