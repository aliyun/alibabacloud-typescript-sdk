// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTableColumnLineagesResponseBodyTableColumnLineageList extends $dara.Model {
  /**
   * @remarks
   * The ID of the business unit to which the input table belongs.
   * 
   * @example
   * 1
   */
  inputBizUnitId?: number;
  /**
   * @remarks
   * The GUID of the input column. Format: table GUID.column name.
   * 
   * @example
   * 1121.col1
   */
  inputColumnGuid?: string;
  /**
   * @remarks
   * The name of the input column.
   * 
   * @example
   * col1
   */
  inputColumnName?: string;
  /**
   * @remarks
   * The ID of the data source to which the input table belongs.
   * 
   * @example
   * 1
   */
  inputDataSourceId?: number;
  /**
   * @remarks
   * The type of the data source to which the input table belongs.
   * 
   * @example
   * MAX_COMPUTE
   */
  inputDataSourceType?: string;
  /**
   * @remarks
   * The ID of the project to which the input table belongs.
   * 
   * @example
   * 1233
   */
  inputProjectId?: number;
  /**
   * @remarks
   * Indicates whether the input table is deleted.
   */
  inputTableDeleted?: boolean;
  /**
   * @remarks
   * The environment to which the input table belongs. Valid values: dev and prod.
   * 
   * @example
   * dev
   */
  inputTableEnv?: string;
  /**
   * @remarks
   * The GUID of the input table, which uniquely identifies the asset.
   * 
   * @example
   * 123211
   */
  inputTableGuid?: string;
  /**
   * @remarks
   * The name of the input table.
   * 
   * @example
   * t_input
   */
  inputTableName?: string;
  /**
   * @remarks
   * The environment to which the node belongs. Valid values: dev and prod.
   * 
   * @example
   * dev
   */
  nodeEnv?: string;
  /**
   * @remarks
   * The ID of the node corresponding to the lineage.
   * 
   * @example
   * 110021
   */
  nodeId?: string;
  /**
   * @remarks
   * The ID of the business unit to which the output table belongs.
   * 
   * @example
   * 1
   */
  outputBizUnitId?: number;
  /**
   * @remarks
   * The GUID of the output column. Format: table ID.column name.
   * 
   * @example
   * 2231.col2
   */
  outputColumnGuid?: string;
  /**
   * @remarks
   * The name of the output column.
   * 
   * @example
   * col2
   */
  outputColumnName?: string;
  /**
   * @remarks
   * The ID of the data source to which the output table belongs.
   * 
   * @example
   * 1
   */
  outputDataSourceId?: number;
  /**
   * @remarks
   * The type of the data source to which the output table belongs.
   * 
   * @example
   * MAX_COMPUTE
   */
  outputDataSourceType?: string;
  /**
   * @remarks
   * The ID of the project to which the output table belongs.
   * 
   * @example
   * 1233
   */
  outputProjectId?: number;
  /**
   * @remarks
   * Indicates whether the output table is deleted.
   */
  outputTableDeleted?: boolean;
  /**
   * @remarks
   * The environment to which the output table belongs. Valid values: dev and prod.
   * 
   * @example
   * dev
   */
  outputTableEnv?: string;
  /**
   * @remarks
   * The GUID of the output table, which uniquely identifies the asset.
   * 
   * @example
   * 2231
   */
  outputTableGuid?: string;
  /**
   * @remarks
   * The name of the output table.
   * 
   * @example
   * t_output
   */
  outputTableName?: string;
  static names(): { [key: string]: string } {
    return {
      inputBizUnitId: 'InputBizUnitId',
      inputColumnGuid: 'InputColumnGuid',
      inputColumnName: 'InputColumnName',
      inputDataSourceId: 'InputDataSourceId',
      inputDataSourceType: 'InputDataSourceType',
      inputProjectId: 'InputProjectId',
      inputTableDeleted: 'InputTableDeleted',
      inputTableEnv: 'InputTableEnv',
      inputTableGuid: 'InputTableGuid',
      inputTableName: 'InputTableName',
      nodeEnv: 'NodeEnv',
      nodeId: 'NodeId',
      outputBizUnitId: 'OutputBizUnitId',
      outputColumnGuid: 'OutputColumnGuid',
      outputColumnName: 'OutputColumnName',
      outputDataSourceId: 'OutputDataSourceId',
      outputDataSourceType: 'OutputDataSourceType',
      outputProjectId: 'OutputProjectId',
      outputTableDeleted: 'OutputTableDeleted',
      outputTableEnv: 'OutputTableEnv',
      outputTableGuid: 'OutputTableGuid',
      outputTableName: 'OutputTableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputBizUnitId: 'number',
      inputColumnGuid: 'string',
      inputColumnName: 'string',
      inputDataSourceId: 'number',
      inputDataSourceType: 'string',
      inputProjectId: 'number',
      inputTableDeleted: 'boolean',
      inputTableEnv: 'string',
      inputTableGuid: 'string',
      inputTableName: 'string',
      nodeEnv: 'string',
      nodeId: 'string',
      outputBizUnitId: 'number',
      outputColumnGuid: 'string',
      outputColumnName: 'string',
      outputDataSourceId: 'number',
      outputDataSourceType: 'string',
      outputProjectId: 'number',
      outputTableDeleted: 'boolean',
      outputTableEnv: 'string',
      outputTableGuid: 'string',
      outputTableName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTableColumnLineagesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The backend response code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The details of the backend exception.
   * 
   * @example
   * internal error
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 82E78D6B-AA8F-1FEF-8AA3-5C9DA2A79140
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   */
  success?: boolean;
  /**
   * @remarks
   * The list of table column lineage.
   */
  tableColumnLineageList?: GetTableColumnLineagesResponseBodyTableColumnLineageList[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      tableColumnLineageList: 'TableColumnLineageList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      tableColumnLineageList: { 'type': 'array', 'itemType': GetTableColumnLineagesResponseBodyTableColumnLineageList },
    };
  }

  validate() {
    if(Array.isArray(this.tableColumnLineageList)) {
      $dara.Model.validateArray(this.tableColumnLineageList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

