// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDataLimitSetResponseBodyDataLimitSetDataLimitList } from "./DescribeDataLimitSetResponseBodyDataLimitSetDataLimitList";
import { DescribeDataLimitSetResponseBodyDataLimitSetOssBucketList } from "./DescribeDataLimitSetResponseBodyDataLimitSetOssBucketList";
import { DescribeDataLimitSetResponseBodyDataLimitSetRegionList } from "./DescribeDataLimitSetResponseBodyDataLimitSetRegionList";


export class DescribeDataLimitSetResponseBodyDataLimitSet extends $dara.Model {
  /**
   * @remarks
   * An array that consists of data assets that DSC is authorized to scan.
   */
  dataLimitList?: DescribeDataLimitSetResponseBodyDataLimitSetDataLimitList[];
  /**
   * @remarks
   * An array consisting of the OSS objects that DSC is authorized to scan.
   */
  ossBucketList?: DescribeDataLimitSetResponseBodyDataLimitSetOssBucketList[];
  /**
   * @remarks
   * An array consisting of the regions in which the data assets can be scanned.
   */
  regionList?: DescribeDataLimitSetResponseBodyDataLimitSetRegionList[];
  /**
   * @remarks
   * The type of service to which the data asset belongs. Valid values:
   * 
   * *   **1**: MaxCompute
   * *   **2**: OSS
   * *   **3**: AnalyticDB for MySQL
   * *   **4**: Tablestore
   * *   **5**: ApsaraDB RDS
   * 
   * @example
   * 2
   */
  resourceType?: number;
  /**
   * @remarks
   * The service to which the data asset belongs. Valid values:
   * 
   * *   **ODPS**
   * *   **OSS**
   * *   **ADS**
   * *   **OTS**
   * *   **RDS**
   * 
   * @example
   * OSS
   */
  resourceTypeCode?: string;
  /**
   * @remarks
   * The total number of data objects in the data assets.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      dataLimitList: 'DataLimitList',
      ossBucketList: 'OssBucketList',
      regionList: 'RegionList',
      resourceType: 'ResourceType',
      resourceTypeCode: 'ResourceTypeCode',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataLimitList: { 'type': 'array', 'itemType': DescribeDataLimitSetResponseBodyDataLimitSetDataLimitList },
      ossBucketList: { 'type': 'array', 'itemType': DescribeDataLimitSetResponseBodyDataLimitSetOssBucketList },
      regionList: { 'type': 'array', 'itemType': DescribeDataLimitSetResponseBodyDataLimitSetRegionList },
      resourceType: 'number',
      resourceTypeCode: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.dataLimitList)) {
      $dara.Model.validateArray(this.dataLimitList);
    }
    if(Array.isArray(this.ossBucketList)) {
      $dara.Model.validateArray(this.ossBucketList);
    }
    if(Array.isArray(this.regionList)) {
      $dara.Model.validateArray(this.regionList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

