// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateTableMetaRequestFields extends $dara.Model {
  /**
   * @remarks
   * The data type of the field.
   * 
   * @example
   * primary_key
   */
  dataType?: string;
  /**
   * @remarks
   * Indicates whether the field is a dimension field.
   * 
   * This parameter is required.
   * 
   * @example
   * false
   */
  isDimensionField?: boolean;
  /**
   * @remarks
   * Indicates whether the field is a partition field.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  isPartitionField?: string;
  /**
   * @remarks
   * The business meaning of the field.
   * 
   * This parameter is required.
   * 
   * @example
   * 名称字段
   */
  meaning?: string;
  /**
   * @remarks
   * The field name.
   * 
   * This parameter is required.
   * 
   * @example
   * name
   */
  name?: string;
  /**
   * @remarks
   * The data type of the field.
   * 
   * This parameter is required.
   * 
   * @example
   * BIGINT
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      dataType: 'DataType',
      isDimensionField: 'IsDimensionField',
      isPartitionField: 'IsPartitionField',
      meaning: 'Meaning',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataType: 'string',
      isDimensionField: 'boolean',
      isPartitionField: 'string',
      meaning: 'string',
      name: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTableMetaRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the data table.
   * 
   * @example
   * this is a test table
   */
  description?: string;
  /**
   * @remarks
   * The fields of the data table.
   * 
   * This parameter is required.
   */
  fields?: UpdateTableMetaRequestFields[];
  /**
   * @remarks
   * The instance ID. You can call the [ListInstances](https://help.aliyun.com/document_detail/2411819.html) operation to obtain the instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pairec-cn-test1
   */
  instanceId?: string;
  /**
   * @remarks
   * The module to which the data table belongs.
   * 
   * - ABTest: a data table for A/B testing.
   * 
   * - ExperimentTool: a data table for experiment tools.
   * 
   * - DataDiagnosis: a data table for data diagnosis.
   * 
   * This parameter is required.
   * 
   * @example
   * ABTest
   */
  module?: string;
  /**
   * @remarks
   * The name of the data table.
   * 
   * This parameter is required.
   * 
   * @example
   * table_test
   */
  name?: string;
  /**
   * @remarks
   * The resource ID. You can call the [ListInstanceResource](https://help.aliyun.com/document_detail/2672886.html) operation to obtain the resource ID.
   * 
   * This parameter is required.
   * 
   * @example
   * reso-2s416t***
   */
  resourceId?: string;
  /**
   * @remarks
   * The name of the table in the database.
   * 
   * This parameter is required.
   * 
   * @example
   * table_mysql
   */
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      fields: 'Fields',
      instanceId: 'InstanceId',
      module: 'Module',
      name: 'Name',
      resourceId: 'ResourceId',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      fields: { 'type': 'array', 'itemType': UpdateTableMetaRequestFields },
      instanceId: 'string',
      module: 'string',
      name: 'string',
      resourceId: 'string',
      tableName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.fields)) {
      $dara.Model.validateArray(this.fields);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

