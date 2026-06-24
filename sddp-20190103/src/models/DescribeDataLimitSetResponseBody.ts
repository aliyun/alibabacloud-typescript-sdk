// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDataLimitSetResponseBodyDataLimitSetDataLimitList extends $dara.Model {
  /**
   * @remarks
   * The status of the connectivity test between Security Center and the authorized data asset.
   * 
   * - **2**: The connectivity test is in progress.
   * 
   * - **3**: The connectivity test is passed.
   * 
   * - **4**: The connectivity test has failed.
   * 
   * @example
   * 3
   */
  checkStatus?: number;
  /**
   * @remarks
   * The name of the connectivity test status.
   * 
   * @example
   * Connected
   */
  checkStatusName?: string;
  /**
   * @remarks
   * The connection string for the data asset.
   * 
   * @example
   * jdbc:mysql://10.*.*.94:3306/test_demo
   */
  connector?: string;
  /**
   * @remarks
   * The time when the data asset was created. This value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1625587423000
   */
  gmtCreate?: number;
  /**
   * @remarks
   * The unique ID of the data asset.
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * The name of the region where the data asset is located.
   * 
   * @example
   * cn-hangzhou
   */
  localName?: string;
  /**
   * @remarks
   * The ID of the parent asset.
   * 
   * @example
   * db
   */
  parentId?: string;
  /**
   * @remarks
   * The ID of the region where the data asset is located.
   * 
   * @example
   * cn-****
   */
  regionId?: string;
  /**
   * @remarks
   * The type of the data asset. Valid values:
   * 
   * - **1**: MaxCompute.
   * 
   * - **2**: OSS.
   * 
   * - **3**: ADS.
   * 
   * - **4**: OTS.
   * 
   * - **5**: RDS.
   * 
   * - **6**: SELF_DB.
   * 
   * @example
   * 2
   */
  resourceType?: number;
  /**
   * @remarks
   * The code for the data asset type. Valid values:
   * 
   * - **MaxCompute**
   * 
   * - **OSS**
   * 
   * - **ADS**
   * 
   * - **OTS**
   * 
   * - **RDS**
   * 
   * - **SELF_DB**
   * 
   * @example
   * OSS
   */
  resourceTypeCode?: string;
  /**
   * @remarks
   * The username of the data owner.
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
   * The name of the OSS bucket.
   * 
   * @example
   * oss-bucket
   */
  bucketName?: string;
  /**
   * @remarks
   * The ID of the region where the OSS bucket is located.
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
   * The region name.
   * 
   * @example
   * cn-hangzhou
   */
  localName?: string;
  /**
   * @remarks
   * The region ID.
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
   * A list of authorized data assets.
   */
  dataLimitList?: DescribeDataLimitSetResponseBodyDataLimitSetDataLimitList[];
  /**
   * @remarks
   * A list of authorized OSS buckets.
   */
  ossBucketList?: DescribeDataLimitSetResponseBodyDataLimitSetOssBucketList[];
  /**
   * @remarks
   * A list of regions that support scanning.
   */
  regionList?: DescribeDataLimitSetResponseBodyDataLimitSetRegionList[];
  /**
   * @remarks
   * The type of the data asset. Valid values:
   * 
   * - **1**: MaxCompute.
   * 
   * - **2**: OSS.
   * 
   * - **3**: ADS.
   * 
   * - **4**: OTS.
   * 
   * - **5**: RDS.
   * 
   * - **6**: SELF_DB.
   * 
   * @example
   * 2
   */
  resourceType?: number;
  /**
   * @remarks
   * The code for the data asset type. Valid values:
   * 
   * - **MaxCompute**
   * 
   * - **OSS**
   * 
   * - **ADS**
   * 
   * - **OTS**
   * 
   * - **RDS**
   * 
   * - **SELF_DB**
   * 
   * @example
   * OSS
   */
  resourceTypeCode?: string;
  /**
   * @remarks
   * The total number of assets found.
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
   * Information about the authorized data assets.
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

