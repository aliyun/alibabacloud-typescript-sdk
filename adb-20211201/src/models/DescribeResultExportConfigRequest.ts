// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeResultExportConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * > You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/129857.html) operation to view the cluster IDs of all AnalyticDB for MySQL clusters in the specified region.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-8vbf80pjcz*****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The export type. Valid values:
   * 
   * - SLS: The export destination is SLS.
   * - OSS: The export destination is OSS.
   * 
   * @example
   * SLS
   */
  exportType?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shenzhen
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      exportType: 'ExportType',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      exportType: 'string',
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

