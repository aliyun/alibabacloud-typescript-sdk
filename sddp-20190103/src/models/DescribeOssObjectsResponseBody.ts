// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeOssObjectsResponseBodyItemsRuleList extends $dara.Model {
  /**
   * @remarks
   * The number of times that the rule is hit.
   * 
   * @example
   * 100
   */
  count?: number;
  /**
   * @remarks
   * The search keyword. Fuzzy match is supported.
   * 
   * @example
   * ID card
   */
  name?: string;
  /**
   * @remarks
   * The ID of the sensitivity level of the OSS object. Valid values:
   * 
   * *   **1**: N/A, which indicates that no sensitive data is detected.
   * *   **2**: S1, which indicates the low sensitivity level.
   * *   **3**: S2, which indicates the medium sensitivity level.
   * *   **4**: S3, which indicates the high sensitivity level.
   * *   **5**: S4, which indicates the highest sensitivity level.
   * 
   * @example
   * 2
   */
  riskLevelId?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      name: 'Name',
      riskLevelId: 'RiskLevelId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      name: 'string',
      riskLevelId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOssObjectsResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The name of the bucket.
   * 
   * @example
   * oss-duplicate-***
   */
  bucketName?: string;
  /**
   * @remarks
   * The type of the OSS object. Valid values include **900001**, **800015**, or **800005**, which indicates the MP4 file, PDF file, or OSS configuration file, respectively.
   * 
   * @example
   * 900001
   */
  category?: number;
  /**
   * @remarks
   * The name of the file type.
   * 
   * @example
   * MP4 file
   */
  categoryName?: string;
  /**
   * @remarks
   * The code of the file type.
   * 
   * @example
   * 1
   */
  fileCategoryCode?: number;
  /**
   * @remarks
   * The name of the file type.
   * 
   * @example
   * text file
   */
  fileCategoryName?: string;
  /**
   * @remarks
   * The file ID of the OSS object.
   * 
   * @example
   * file-22***
   */
  fileId?: string;
  /**
   * @remarks
   * The ID of the OSS object.
   * 
   * @example
   * 17383
   */
  id?: string;
  /**
   * @remarks
   * The ID of the instance to which the OSS object belongs.
   * 
   * @example
   * 1232122
   */
  instanceId?: number;
  /**
   * @remarks
   * The time when the file was last modified.
   * 
   * @example
   * 1536751124000
   */
  lastModifiedTime?: number;
  /**
   * @remarks
   * The name of the OSS object.
   * 
   * @example
   * obj_id
   */
  name?: string;
  /**
   * @remarks
   * The region ID of the OSS object.
   * 
   * @example
   * cn-***
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the sensitivity level of the OSS object. Valid values:
   * 
   * *   **1**: N/A, which indicates that no sensitive data is detected.
   * *   **2**: S1, which indicates the low sensitivity level.
   * *   **3**: S2, which indicates the medium sensitivity level.
   * *   **4**: S3, which indicates the high sensitivity level.
   * *   **5**: S4, which indicates the highest sensitivity level.
   * 
   * @example
   * 2
   */
  riskLevelId?: number;
  /**
   * @remarks
   * The name of the sensitivity level for the OSS object.
   * 
   * @example
   * Medium sensitivity level
   */
  riskLevelName?: string;
  /**
   * @remarks
   * The number of rules that are hit.
   * 
   * @example
   * 100
   */
  ruleCount?: number;
  /**
   * @remarks
   * The rules.
   */
  ruleList?: DescribeOssObjectsResponseBodyItemsRuleList[];
  /**
   * @remarks
   * The number of fields that are hit.
   * 
   * @example
   * 50
   */
  sensitiveCount?: number;
  /**
   * @remarks
   * The size of the file. Unit: bytes.
   * 
   * @example
   * 20
   */
  size?: number;
  static names(): { [key: string]: string } {
    return {
      bucketName: 'BucketName',
      category: 'Category',
      categoryName: 'CategoryName',
      fileCategoryCode: 'FileCategoryCode',
      fileCategoryName: 'FileCategoryName',
      fileId: 'FileId',
      id: 'Id',
      instanceId: 'InstanceId',
      lastModifiedTime: 'LastModifiedTime',
      name: 'Name',
      regionId: 'RegionId',
      riskLevelId: 'RiskLevelId',
      riskLevelName: 'RiskLevelName',
      ruleCount: 'RuleCount',
      ruleList: 'RuleList',
      sensitiveCount: 'SensitiveCount',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketName: 'string',
      category: 'number',
      categoryName: 'string',
      fileCategoryCode: 'number',
      fileCategoryName: 'string',
      fileId: 'string',
      id: 'string',
      instanceId: 'number',
      lastModifiedTime: 'number',
      name: 'string',
      regionId: 'string',
      riskLevelId: 'number',
      riskLevelName: 'string',
      ruleCount: 'number',
      ruleList: { 'type': 'array', 'itemType': DescribeOssObjectsResponseBodyItemsRuleList },
      sensitiveCount: 'number',
      size: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.ruleList)) {
      $dara.Model.validateArray(this.ruleList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOssObjectsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The OSS objects.
   */
  items?: DescribeOssObjectsResponseBodyItems[];
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * @example
   * -1
   */
  marker?: string;
  /**
   * @remarks
   * The ID value from which the next page of results starts.
   * 
   * >  This parameter is returned only when the `Truncated` parameter is set to `true`.
   * 
   * @example
   * 1754786235714378752
   */
  nextMarker?: string;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 12
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 769FB3C1-F4C9-42DF-9B72-7077A8989C13
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  /**
   * @remarks
   * Indicates whether the queried entries are truncated. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  truncated?: boolean;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      items: 'Items',
      marker: 'Marker',
      nextMarker: 'NextMarker',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      truncated: 'Truncated',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      items: { 'type': 'array', 'itemType': DescribeOssObjectsResponseBodyItems },
      marker: 'string',
      nextMarker: 'string',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
      truncated: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

