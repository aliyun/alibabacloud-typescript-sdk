// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDataLimitDetailResponseBodyDataLimit extends $dara.Model {
  /**
   * @remarks
   * The status of the connectivity test between the data asset and DSC. Valid values:
   * 
   * *   **2**: indicates that the data asset was being connected.
   * *   **3**: indicates that the data asset was connected to DSC.
   * *   **4**: indicates that the data asset failed to be connected.
   * 
   * @example
   * 3
   */
  checkStatus?: number;
  /**
   * @remarks
   * The result that indicates the status of the connectivity test between the data asset and DSC. Valid values:
   * 
   * *   **Passed**
   * *   **Failed**
   * *   **Testing**
   * 
   * @example
   * Passed
   */
  checkStatusName?: string;
  /**
   * @remarks
   * The time when the data asset was connected to DSC. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 145600000
   */
  gmtCreate?: number;
  /**
   * @remarks
   * The ID of the data asset.
   * 
   * @example
   * 12300
   */
  id?: number;
  /**
   * @remarks
   * The region in which the data asset resides.
   * 
   * @example
   * China (Qingdao)
   */
  localName?: string;
  /**
   * @remarks
   * The ID and name of the data asset in the service to which the data asset belongs.
   * 
   * @example
   * rm-m5eup49p6o274****.RDS_example
   */
  parentId?: string;
  /**
   * @remarks
   * The port number that is used to connect to the database.
   * 
   * @example
   * 3306
   */
  port?: number;
  /**
   * @remarks
   * The ID of the region in which the data asset resides.
   * 
   * @example
   * cn-qingdao
   */
  regionId?: string;
  /**
   * @remarks
   * The type of the service to which the data asset belongs. Valid values:
   * 
   * *   **1**: MaxCompute
   * *   **2**: OSS
   * *   **3**: AnalyticDB for MySQL
   * *   **4**: Tablestore
   * *   **5**: ApsaraDB RDS
   * 
   * @example
   * 1
   */
  resourceType?: number;
  /**
   * @remarks
   * The service to which the data asset belongs. Valid values:
   * 
   * *   **MaxCompute**
   * *   **OSS**
   * *   **ADS**
   * *   **OTS**
   * *   **RDS**
   * 
   * @example
   * RDS
   */
  resourceTypeCode?: string;
  /**
   * @remarks
   * The account of the user who manages the data asset.
   * 
   * @example
   * User01
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      checkStatus: 'CheckStatus',
      checkStatusName: 'CheckStatusName',
      gmtCreate: 'GmtCreate',
      id: 'Id',
      localName: 'LocalName',
      parentId: 'ParentId',
      port: 'Port',
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
      gmtCreate: 'number',
      id: 'number',
      localName: 'string',
      parentId: 'string',
      port: 'number',
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

export class DescribeDataLimitDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the data asset.
   */
  dataLimit?: DescribeDataLimitDetailResponseBodyDataLimit;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 769FB3C1-F4C9-42DF-9B72-7077A8989C13
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dataLimit: 'DataLimit',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataLimit: DescribeDataLimitDetailResponseBodyDataLimit,
      requestId: 'string',
    };
  }

  validate() {
    if(this.dataLimit && typeof (this.dataLimit as any).validate === 'function') {
      (this.dataLimit as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

