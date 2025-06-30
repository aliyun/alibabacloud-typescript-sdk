// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeColumnsV2ResponseBodyItemsModelTags } from "./DescribeColumnsV2responseBodyItemsModelTags";


export class DescribeColumnsV2ResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The creation time of the column data in the data asset table, in milliseconds.
   * 
   * @example
   * 1536751124000
   */
  creationTime?: number;
  /**
   * @remarks
   * The data type of the column data in the data asset table.
   * 
   * @example
   * varchar
   */
  dataType?: string;
  /**
   * @remarks
   * Engine type. Values:
   * - **MySQL**
   * - **MariaDB**
   * - **Oracle**
   * - **PostgreSQL**
   * - **SQLServer**
   * 
   * @example
   * MySQL
   */
  engineType?: string;
  /**
   * @remarks
   * The unique identifier ID of the column in the data asset table.
   * 
   * @example
   * 111111
   */
  id?: string;
  /**
   * @remarks
   * The ID of the asset instance to which the column data in the data asset table belongs.
   * 
   * @example
   * 1232122
   */
  instanceId?: number;
  /**
   * @remarks
   * The name of the asset instance to which the column data in the data asset table belongs.
   * 
   * @example
   * rm-1234
   */
  instanceName?: string;
  /**
   * @remarks
   * Column encryption status. Values:
   * 
   * - **-1**: Not encrypted
   * 
   * - **1**: Encryption successful
   * 
   * - **2**: Encryption failed
   * 
   * @example
   * -1
   */
  maskingStatus?: number;
  /**
   * @remarks
   * Data tag list.
   */
  modelTags?: DescribeColumnsV2ResponseBodyItemsModelTags[];
  /**
   * @remarks
   * The name of the column in the data asset table.
   * 
   * @example
   * obj_id
   */
  name?: string;
  /**
   * @remarks
   * The risk level name of the asset. Values:
   * - **N/A**：No sensitive data detected.
   * - **S1**：Level 1 sensitive data.
   * - **S2**：Level 2 sensitive data.
   * - **S3**：Level 3 sensitive data.
   * - **S4**：Level 4 sensitive data.
   * 
   * @example
   * S4
   */
  odpsRiskLevelName?: string;
  /**
   * @remarks
   * The risk level code of the asset. Values:
   * 
   * - **1**：N/A.
   * - **2**：S1.
   * - **3**：S2.
   * - **4**：S3.
   * - **5**：S4.
   * 
   * > A return value <= 1 represents N/A.
   * 
   * @example
   * 3
   */
  odpsRiskLevelValue?: number;
  /**
   * @remarks
   * The product name to which the column data in the data asset table belongs. Values: **MaxCompute, OSS, ADS, OTS, RDS**, etc.
   * 
   * @example
   * RDS
   */
  productCode?: string;
  /**
   * @remarks
   * The ID corresponding to the product name of the data asset. Values:
   * - **1**: MaxCompute
   * - **2**: OSS
   * - **3**: ADS
   * - **4**: OTS
   * - **5**: RDS
   * - **6**: SELF_DB
   * 
   * @example
   * 5
   */
  productId?: number;
  /**
   * @remarks
   * The region where the asset is located.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Correction record ID.
   * 
   * @example
   * 12
   */
  revisionId?: number;
  /**
   * @remarks
   * Correction status. Values:
   * - 1: Corrected.
   * - 0: Not corrected.
   * 
   * @example
   * 1
   */
  revisionStatus?: number;
  /**
   * @remarks
   * The risk level ID of the column data in the data asset table. Values:
   * - **1**：N/A.
   * - **2**：S1.
   * - **3**：S2.
   * - **4**：S3.
   * - **5**：S4.
   * 
   * > A return value <= 1 represents N/A.
   * 
   * @example
   * 4
   */
  riskLevelId?: number;
  /**
   * @remarks
   * The risk level name of the column data in the data asset table. Values:
   * - **N/A**：No sensitive data detected.
   * - **S1**：Level 1 sensitive data.
   * - **S2**：Level 2 sensitive data.
   * - **S3**：Level 3 sensitive data.
   * - **S4**：Level 4 sensitive data.
   * 
   * @example
   * S1
   */
  riskLevelName?: string;
  /**
   * @remarks
   * The ID of the sensitive data recognition rule that the column data in the data asset table hits.
   * 
   * @example
   * 1004
   */
  ruleId?: number;
  /**
   * @remarks
   * The name of the sensitive data recognition rule that the column data in the data asset table hits.
   * 
   * @example
   * name
   */
  ruleName?: string;
  /**
   * @remarks
   * The sensitivity level name. Values:
   * - **N/A**：No sensitive data detected.
   * - **S1**：Level 1 sensitive data.
   * - **S2**：Level 2 sensitive data.
   * - **S3**：Level 3 sensitive data.
   * - **S4**：Level 4 sensitive data.
   * 
   * @example
   * S2
   */
  sensLevelName?: string;
  /**
   * @remarks
   * Whether the column data in the data asset table contains sensitive data. Values:
   * 
   * - true: The column data in the data asset table contains sensitive data.
   * - false: The column data in the data asset table does not contain sensitive data.
   * 
   * @example
   * true
   */
  sensitive?: boolean;
  /**
   * @remarks
   * The ID of the asset table to which the column data in the data asset table belongs.
   * 
   * @example
   * 123
   */
  tableId?: number;
  /**
   * @remarks
   * The name of the table to which the target column for correction belongs.
   * 
   * @example
   * it_table
   */
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      dataType: 'DataType',
      engineType: 'EngineType',
      id: 'Id',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      maskingStatus: 'MaskingStatus',
      modelTags: 'ModelTags',
      name: 'Name',
      odpsRiskLevelName: 'OdpsRiskLevelName',
      odpsRiskLevelValue: 'OdpsRiskLevelValue',
      productCode: 'ProductCode',
      productId: 'ProductId',
      regionId: 'RegionId',
      revisionId: 'RevisionId',
      revisionStatus: 'RevisionStatus',
      riskLevelId: 'RiskLevelId',
      riskLevelName: 'RiskLevelName',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      sensLevelName: 'SensLevelName',
      sensitive: 'Sensitive',
      tableId: 'TableId',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'number',
      dataType: 'string',
      engineType: 'string',
      id: 'string',
      instanceId: 'number',
      instanceName: 'string',
      maskingStatus: 'number',
      modelTags: { 'type': 'array', 'itemType': DescribeColumnsV2ResponseBodyItemsModelTags },
      name: 'string',
      odpsRiskLevelName: 'string',
      odpsRiskLevelValue: 'number',
      productCode: 'string',
      productId: 'number',
      regionId: 'string',
      revisionId: 'number',
      revisionStatus: 'number',
      riskLevelId: 'number',
      riskLevelName: 'string',
      ruleId: 'number',
      ruleName: 'string',
      sensLevelName: 'string',
      sensitive: 'boolean',
      tableId: 'number',
      tableName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.modelTags)) {
      $dara.Model.validateArray(this.modelTags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

