// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTableMetaRequestFields extends $dara.Model {
  /**
   * @remarks
   * The logical data type of the field.
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
   * The business definition of the field.
   * 
   * This parameter is required.
   * 
   * @example
   * this is gender of people
   */
  meaning?: string;
  /**
   * @remarks
   * The name of the field.
   * 
   * This parameter is required.
   * 
   * @example
   * gender
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

export class CreateTableMetaRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the data table.
   * 
   * This parameter is required.
   * 
   * @example
   * this is a test table
   */
  description?: string;
  /**
   * @remarks
   * The list of fields.
   * 
   * This parameter is required.
   */
  fields?: CreateTableMetaRequestFields[];
  /**
   * @remarks
   * The instance ID. To get this ID, call the [ListInstances](https://help.aliyun.com/document_detail/2411819.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * pairec-cn-test123
   */
  instanceId?: string;
  /**
   * @remarks
   * The module to which the data table belongs.
   * 
   * - ABTest: The data table for A/B testing.
   * 
   * - ExperimentTool: The data table for the experiment tool.
   * 
   * - DataDiagnosis: The data table for data diagnosis.
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
   * The resource ID. To get this ID, call the ListInstanceResources operation.
   * 
   * This parameter is required.
   * 
   * @example
   * reso-2s416t146ffjc3yefx
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
      fields: { 'type': 'array', 'itemType': CreateTableMetaRequestFields },
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

