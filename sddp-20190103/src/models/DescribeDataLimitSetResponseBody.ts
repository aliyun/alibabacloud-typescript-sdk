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

export class DescribeDataLimitSetResponseBodyDataLimitSetOssBucketList extends $dara.Model {
  /**
   * @remarks
   * The name of the OSS bucket to which the OSS object belongs.
   * 
   * @example
   * oss-bucket
   */
  bucketName?: string;
  /**
   * @remarks
   * The region ID of the OSS object.
   * 
   * @example
   * cn-****
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      bucketName: 'BucketName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketName: 'string',
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

export class DescribeDataLimitSetResponseBodyDataLimitSetRegionList extends $dara.Model {
  /**
   * @remarks
   * The name of the region.
   * 
   * @example
   * China (Hangzhou)
   */
  localName?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-****
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      localName: 'LocalName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      localName: 'string',
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

export class DescribeDataLimitSetResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the data asset.
   */
  dataLimitSet?: DescribeDataLimitSetResponseBodyDataLimitSet;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 769FB3C1-F4C9-42DF-9B72-7077A8989C13
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dataLimitSet: 'DataLimitSet',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataLimitSet: DescribeDataLimitSetResponseBodyDataLimitSet,
      requestId: 'string',
    };
  }

  validate() {
    if(this.dataLimitSet && typeof (this.dataLimitSet as any).validate === 'function') {
      (this.dataLimitSet as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

