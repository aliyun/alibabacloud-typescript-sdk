// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConfigureResultExportShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * >  You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/129857.html) operation to query the information about all AnalyticDB for MySQL clusters within a region, including cluster IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-wz9509beptiz****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The export type. Valid values:
   * 
   * *   SLS: Specifies that the export destination is SLS.
   * *   OSS: Specifies that the export destination is OSS.
   * 
   * @example
   * SLS
   */
  exportType?: string;
  /**
   * @remarks
   * The OSS configuration details if the destination is of the OSS type.
   */
  ossInfoShrink?: string;
  /**
   * @remarks
   * The ID of the region where the instance resides.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shenzhen
   */
  regionId?: string;
  /**
   * @remarks
   * The SLS configuration details if the destination is of the SLS type.
   */
  slsInfoShrink?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      exportType: 'ExportType',
      ossInfoShrink: 'OssInfo',
      regionId: 'RegionId',
      slsInfoShrink: 'SlsInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      exportType: 'string',
      ossInfoShrink: 'string',
      regionId: 'string',
      slsInfoShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

