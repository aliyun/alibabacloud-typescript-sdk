// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTableLineagesResponseBodyTableLineageList extends $dara.Model {
  /**
   * @example
   * 1
   */
  inputBizUnitId?: number;
  /**
   * @example
   * 1
   */
  inputDataSourceId?: number;
  /**
   * @example
   * MAX_COMPUTE
   */
  inputDataSourceType?: string;
  /**
   * @example
   * 1233
   */
  inputProjectId?: number;
  inputTableDeleted?: boolean;
  /**
   * @example
   * dev
   */
  inputTableEnv?: string;
  /**
   * @example
   * 123211
   */
  inputTableGuid?: string;
  /**
   * @example
   * t_input
   */
  inputTableName?: string;
  /**
   * @example
   * dev
   */
  nodeEnv?: string;
  /**
   * @example
   * 110021
   */
  nodeId?: string;
  /**
   * @example
   * 1
   */
  outputBizUnitId?: number;
  /**
   * @example
   * 1
   */
  outputDataSourceId?: number;
  /**
   * @example
   * MAX_COMPUTE
   */
  outputDataSourceType?: string;
  /**
   * @example
   * 1233
   */
  outputProjectId?: number;
  outputTableDeleted?: boolean;
  /**
   * @example
   * dev
   */
  outputTableEnv?: string;
  /**
   * @example
   * 2231
   */
  outputTableGuid?: string;
  /**
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
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
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
  success?: boolean;
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

