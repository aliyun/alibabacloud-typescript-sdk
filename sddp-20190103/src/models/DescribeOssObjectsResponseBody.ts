// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeOssObjectsResponseBodyItemsRuleList extends $dara.Model {
  /**
   * @remarks
   * The number of times the rule is matched.
   * 
   * @example
   * 100
   */
  count?: number;
  /**
   * @remarks
   * The name of the rule.
   * 
   * @example
   * ID card
   */
  name?: string;
  /**
   * @remarks
   * The risk level ID of the rule. Valid values:
   * 
   * - **1**: N/A. No sensitive data is detected.
   * 
   * - **2**: S1. Level 1 sensitive data.
   * 
   * - **3**: S2. Level 2 sensitive data.
   * 
   * - **4**: S3. Level 3 sensitive data.
   * 
   * - **5**: S4. Level 4 sensitive data.
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
   * The bucket name.
   * 
   * @example
   * oss-duplicate-***
   */
  bucketName?: string;
  /**
   * @remarks
   * The type of the OSS object, such as **900001** (MP4 video file), **800015** (PDF document), and **800005** (OSS configuration file).
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
   * MP4
   */
  categoryName?: string;
  /**
   * @remarks
   * The code of the file category.
   * 
   * @example
   * 1
   */
  fileCategoryCode?: number;
  /**
   * @remarks
   * The name of the file category.
   * 
   * @example
   * text file
   */
  fileCategoryName?: string;
  /**
   * @remarks
   * The ID of the OSS file.
   * 
   * @example
   * file-22***
   */
  fileId?: string;
  /**
   * @remarks
   * The unique ID of the OSS object.
   * 
   * @example
   * 17383
   */
  id?: string;
  /**
   * @remarks
   * The ID of the asset instance to which the OSS object belongs.
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
   * The region ID of the OSS object owner.
   * 
   * @example
   * cn-***
   */
  regionId?: string;
  /**
   * @remarks
   * The risk level ID of the OSS object. Valid values:
   * 
   * - **1**: N/A. No sensitive data is detected.
   * 
   * - **2**: S1. Level 1 sensitive data.
   * 
   * - **3**: S2. Level 2 sensitive data.
   * 
   * - **4**: S3. Level 3 sensitive data.
   * 
   * - **5**: S4. Level 4 sensitive data.
   * 
   * @example
   * 2
   */
  riskLevelId?: number;
  /**
   * @remarks
   * The name of the risk level for the OSS object.
   * 
   * @example
   * High risk
   */
  riskLevelName?: string;
  /**
   * @remarks
   * The number of matched rules.
   * 
   * @example
   * 100
   */
  ruleCount?: number;
  /**
   * @remarks
   * A list of rules.
   */
  ruleList?: DescribeOssObjectsResponseBodyItemsRuleList[];
  /**
   * @remarks
   * The number of matched fields.
   * 
   * @example
   * 50
   */
  sensitiveCount?: number;
  /**
   * @remarks
   * The file size. Unit: bytes.
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
   * A list of OSS objects.
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
   * The token that marks the start of the next page of results.
   * 
   * > This parameter is returned only when `Truncated` is `true`.
   * 
   * @example
   * 1754786235714378752
   */
  nextMarker?: string;
  /**
   * @remarks
   * The number of entries returned on each page.
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
   * Indicates whether the results are truncated. The default value is false. Valid values:
   * 
   * - **true**: The results are truncated.
   * 
   * - **false**: The results are not truncated.
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

