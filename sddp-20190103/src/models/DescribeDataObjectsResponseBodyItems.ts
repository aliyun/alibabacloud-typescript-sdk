// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDataObjectsResponseBodyItemsModelTags } from "./DescribeDataObjectsResponseBodyItemsModelTags";
import { DescribeDataObjectsResponseBodyItemsRuleList } from "./DescribeDataObjectsResponseBodyItemsRuleList";


export class DescribeDataObjectsResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * List of industry categories for the sensitive data.
   */
  categories?: string[];
  /**
   * @remarks
   * The unique identifier ID of the data object.
   * 
   * @example
   * 20000
   */
  id?: string;
  /**
   * @remarks
   * The instance description of the data object.
   * 
   * @example
   * instance description
   */
  instanceDescription?: string;
  /**
   * @remarks
   * Data asset instance ID.
   * 
   * @example
   * rm-12*****
   */
  instanceId?: string;
  /**
   * @remarks
   * Latest file modification time, in milliseconds.
   * 
   * @example
   * 1687676649830
   */
  lastModifiedTime?: number;
  /**
   * @remarks
   * The timestamp of the last scan, in milliseconds.
   * 
   * @example
   * 1687676649830
   */
  lastScanTime?: number;
  /**
   * @remarks
   * Member account ID.
   * 
   * @example
   * **********8103
   */
  memberAccount?: number;
  /**
   * @remarks
   * List of data tags.
   */
  modelTags?: DescribeDataObjectsResponseBodyItemsModelTags[];
  /**
   * @remarks
   * The name of the data object.
   * 
   * @example
   * t_sddp_selfmysql_pers0
   */
  name?: string;
  /**
   * @remarks
   * File category name.
   * 
   * @example
   * text file
   */
  objectFileCategory?: string;
  /**
   * @remarks
   * The type of the data object.
   * 
   * @example
   * text type
   */
  objectType?: string;
  /**
   * @remarks
   * The path of the data object.
   * 
   * @example
   * rm-12**.db_***
   */
  path?: string;
  /**
   * @remarks
   * The product name that the data object belongs to. Values:
   * - **MaxCompute**
   * - **OSS**
   * - **ADB-MYSQL**
   * - **TableStore**
   * - **RDS**
   * - **SELF_DB**
   * - **PolarDB-X**
   * - **PolarDB**
   * - **ADB-PG**
   * - **OceanBase**
   * - **MongoDB**
   * - **Redis**
   * 
   * @example
   * RDS
   */
  productCode?: string;
  /**
   * @remarks
   * The ID corresponding to the product name that the data object belongs to. Values:
   * - **1**: MaxCompute
   * - **2**: OSS
   * - **3**: ADB-MYSQL
   * - **4**: TableStore
   * - **5**: RDS
   * - **6**: SELF_DB
   * - **7**: PolarDB-X
   * - **8**: PolarDB
   * - **9**: ADB-PG
   * - **10**: OceanBase
   * - **11**: MongoDB
   * - **25**: Redis
   * 
   * @example
   * 5
   */
  productId?: number;
  /**
   * @remarks
   * OSS存储对象所属区域ID。
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Region name.
   * 
   * @example
   * cn-hangzhou
   */
  regionName?: string;
  /**
   * @remarks
   * List of matched identification models.
   */
  ruleList?: DescribeDataObjectsResponseBodyItemsRuleList[];
  /**
   * @remarks
   * Number of sensitive data items.
   * 
   * @example
   * 1
   */
  sensitiveCount?: number;
  /**
   * @remarks
   * Industry template ID
   * 
   * @example
   * 1
   */
  templateId?: number;
  static names(): { [key: string]: string } {
    return {
      categories: 'Categories',
      id: 'Id',
      instanceDescription: 'InstanceDescription',
      instanceId: 'InstanceId',
      lastModifiedTime: 'LastModifiedTime',
      lastScanTime: 'LastScanTime',
      memberAccount: 'MemberAccount',
      modelTags: 'ModelTags',
      name: 'Name',
      objectFileCategory: 'ObjectFileCategory',
      objectType: 'ObjectType',
      path: 'Path',
      productCode: 'ProductCode',
      productId: 'ProductId',
      regionId: 'RegionId',
      regionName: 'RegionName',
      ruleList: 'RuleList',
      sensitiveCount: 'SensitiveCount',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categories: { 'type': 'array', 'itemType': 'string' },
      id: 'string',
      instanceDescription: 'string',
      instanceId: 'string',
      lastModifiedTime: 'number',
      lastScanTime: 'number',
      memberAccount: 'number',
      modelTags: { 'type': 'array', 'itemType': DescribeDataObjectsResponseBodyItemsModelTags },
      name: 'string',
      objectFileCategory: 'string',
      objectType: 'string',
      path: 'string',
      productCode: 'string',
      productId: 'number',
      regionId: 'string',
      regionName: 'string',
      ruleList: { 'type': 'array', 'itemType': DescribeDataObjectsResponseBodyItemsRuleList },
      sensitiveCount: 'number',
      templateId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.categories)) {
      $dara.Model.validateArray(this.categories);
    }
    if(Array.isArray(this.modelTags)) {
      $dara.Model.validateArray(this.modelTags);
    }
    if(Array.isArray(this.ruleList)) {
      $dara.Model.validateArray(this.ruleList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

