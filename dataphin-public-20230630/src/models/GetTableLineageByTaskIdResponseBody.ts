// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTableLineageByTaskIdResponseBodyData extends $dara.Model {
  /**
   * @example
   * 123
   */
  inputBizUnitId?: number;
  /**
   * @example
   * 123
   */
  inputDataSourceId?: number;
  /**
   * @example
   * MAX_COMPUTE
   */
  inputDataSourceType?: string;
  /**
   * @example
   * MAX_COMPUTE
   */
  inputDbType?: string;
  /**
   * @example
   * DEV
   */
  inputEnv?: string;
  /**
   * @example
   * 123
   */
  inputProjectId?: number;
  inputTableDeleted?: boolean;
  /**
   * @example
   * odps.123.test_project.order
   */
  inputTableId?: string;
  /**
   * @example
   * order
   */
  inputTableName?: string;
  /**
   * @example
   * PHYSICAL_TABLE
   */
  inputTableType?: string;
  /**
   * @example
   * 123
   */
  outputBizUnitId?: number;
  /**
   * @example
   * 123
   */
  outputDataSourceId?: number;
  /**
   * @example
   * MAX_COMPUTE
   */
  outputDataSourceType?: string;
  /**
   * @example
   * MAX_COMPUTE
   */
  outputDbType?: string;
  /**
   * @example
   * DEV/PROD
   */
  outputEnv?: string;
  /**
   * @example
   * 123
   */
  outputProjectId?: number;
  outputTableDeleted?: boolean;
  /**
   * @example
   * odps.123.test_project.order
   */
  outputTableId?: string;
  /**
   * @example
   * order
   */
  outputTableName?: string;
  /**
   * @example
   * PHYSICAL_TABLE
   */
  outputTableType?: string;
  /**
   * @example
   * DEV
   */
  taskEnv?: string;
  /**
   * @example
   * n_123
   */
  taskId?: string;
  /**
   * @example
   * 12345
   */
  tenantId?: number;
  static names(): { [key: string]: string } {
    return {
      inputBizUnitId: 'InputBizUnitId',
      inputDataSourceId: 'InputDataSourceId',
      inputDataSourceType: 'InputDataSourceType',
      inputDbType: 'InputDbType',
      inputEnv: 'InputEnv',
      inputProjectId: 'InputProjectId',
      inputTableDeleted: 'InputTableDeleted',
      inputTableId: 'InputTableId',
      inputTableName: 'InputTableName',
      inputTableType: 'InputTableType',
      outputBizUnitId: 'OutputBizUnitId',
      outputDataSourceId: 'OutputDataSourceId',
      outputDataSourceType: 'OutputDataSourceType',
      outputDbType: 'OutputDbType',
      outputEnv: 'OutputEnv',
      outputProjectId: 'OutputProjectId',
      outputTableDeleted: 'OutputTableDeleted',
      outputTableId: 'OutputTableId',
      outputTableName: 'OutputTableName',
      outputTableType: 'OutputTableType',
      taskEnv: 'TaskEnv',
      taskId: 'TaskId',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputBizUnitId: 'number',
      inputDataSourceId: 'number',
      inputDataSourceType: 'string',
      inputDbType: 'string',
      inputEnv: 'string',
      inputProjectId: 'number',
      inputTableDeleted: 'boolean',
      inputTableId: 'string',
      inputTableName: 'string',
      inputTableType: 'string',
      outputBizUnitId: 'number',
      outputDataSourceId: 'number',
      outputDataSourceType: 'string',
      outputDbType: 'string',
      outputEnv: 'string',
      outputProjectId: 'number',
      outputTableDeleted: 'boolean',
      outputTableId: 'string',
      outputTableName: 'string',
      outputTableType: 'string',
      taskEnv: 'string',
      taskId: 'string',
      tenantId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTableLineageByTaskIdResponseBody extends $dara.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  data?: GetTableLineageByTaskIdResponseBodyData[];
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': GetTableLineageByTaskIdResponseBodyData },
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

