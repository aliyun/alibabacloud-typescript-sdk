// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTableLineagesResponseBodyTableLineageList extends $dara.Model {
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
   * Indicates whether the input table has been deleted.
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
   * The GUID of the input table. Each asset has a unique identifier.
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
   * The environment to which the task belongs. Valid values: dev and prod.
   * 
   * @example
   * dev
   */
  nodeEnv?: string;
  /**
   * @remarks
   * The task ID associated with the lineage.
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
   * Indicates whether the output table has been deleted.
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
   * The GUID of the output table. Each asset has a unique identifier.
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

export class GetTableLineagesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code.
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
   * The error message.
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
   * Indicates whether the request was successful.
   */
  success?: boolean;
  /**
   * @remarks
   * The table lineage list.
   */
  tableLineageList?: GetTableLineagesResponseBodyTableLineageList[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      tableLineageList: 'TableLineageList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      tableLineageList: { 'type': 'array', 'itemType': GetTableLineagesResponseBodyTableLineageList },
    };
  }

  validate() {
    if(Array.isArray(this.tableLineageList)) {
      $dara.Model.validateArray(this.tableLineageList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

