// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDataLimitSetResponseBodyDataLimitSetDataLimitList extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the test of connectivity between DSC and the data asset is passed.
   * 
   * *   **2**: The connectivity test is in progress.
   * *   **3**: The connectivity test is passed.
   * *   **4**: The connectivity test failed.
   * 
   * @example
   * 3
   */
  checkStatus?: number;
  /**
   * @remarks
   * The name of the data detection status.
   * 
   * @example
   * Connectivity test status
   */
  checkStatusName?: string;
  /**
   * @remarks
   * The connection string that is used to access the data asset.
   * 
   * @example
   * Connection string
   */
  connector?: string;
  /**
   * @remarks
   * The time when the data asset was created. Unit: milliseconds.
   * 
   * @example
   * 1625587423000
   */
  gmtCreate?: number;
  /**
   * @remarks
   * The ID of the data asset.
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * The region in which the data asset resides.
   * 
   * @example
   * China (Hangzhou)
   */
  localName?: string;
  /**
   * @remarks
   * The parent asset ID of the data asset.
   * 
   * @example
   * db
   */
  parentId?: string;
  /**
   * @remarks
   * The region in which the data asset resides.
   * 
   * @example
   * cn-****
   */
  regionId?: string;
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
   * The code of the service to which the data asset belongs. Valid values:
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
   * The username that is used to access the data asset.
   * 
   * @example
   * tsts
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      checkStatus: 'CheckStatus',
      checkStatusName: 'CheckStatusName',
      connector: 'Connector',
      gmtCreate: 'GmtCreate',
      id: 'Id',
      localName: 'LocalName',
      parentId: 'ParentId',
      regionId: 'RegionId',
      resourceType: 'ResourceType',
      resourceTypeCode: 'ResourceTypeCode',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkStatus: 'number',
      checkStatusName: 'string',
      connector: 'string',
      gmtCreate: 'number',
      id: 'number',
      localName: 'string',
      parentId: 'string',
      regionId: 'string',
      resourceType: 'number',
      resourceTypeCode: 'string',
      userName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

