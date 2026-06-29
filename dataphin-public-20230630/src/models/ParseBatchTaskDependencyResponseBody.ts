// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ParseBatchTaskDependencyResponseBodyParseResultDependNodeListScheduleNodeInfoList extends $dara.Model {
  /**
   * @remarks
   * The list of fields. This parameter applies only to logical table dependencies.
   */
  fieldList?: string[];
  /**
   * @remarks
   * The node ID. A value of -1 is returned if no node is found for the corresponding input table.
   * 
   * @example
   * n_11013121
   */
  nodeId?: string;
  /**
   * @remarks
   * The node name. This parameter is empty if no node is found for the corresponding input table.
   * 
   * @example
   * test11
   */
  nodeName?: string;
  /**
   * @remarks
   * The output name of the node.
   * 
   * @example
   * t_test
   */
  outputName?: string;
  /**
   * @remarks
   * The owner of the node. This parameter is empty if no node is found for the corresponding input table.
   * 
   * @example
   * 张三
   */
  ownerName?: string;
  /**
   * @remarks
   * The owner of the node. This parameter is empty if no node is found for the corresponding input table.
   * 
   * @example
   * 201122301
   */
  ownerUserId?: string;
  /**
   * @remarks
   * The output table name of the node.
   * 
   * @example
   * t_test
   */
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      fieldList: 'FieldList',
      nodeId: 'NodeId',
      nodeName: 'NodeName',
      outputName: 'OutputName',
      ownerName: 'OwnerName',
      ownerUserId: 'OwnerUserId',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fieldList: { 'type': 'array', 'itemType': 'string' },
      nodeId: 'string',
      nodeName: 'string',
      outputName: 'string',
      ownerName: 'string',
      ownerUserId: 'string',
      tableName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.fieldList)) {
      $dara.Model.validateArray(this.fieldList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ParseBatchTaskDependencyResponseBodyParseResultDependNodeList extends $dara.Model {
  /**
   * @remarks
   * The input/output type. Valid values: input (dependent node) and output (node output name).
   * 
   * @example
   * input
   */
  nodeIoType?: string;
  /**
   * @remarks
   * The list of schedule nodes.
   */
  scheduleNodeInfoList?: ParseBatchTaskDependencyResponseBodyParseResultDependNodeListScheduleNodeInfoList[];
  static names(): { [key: string]: string } {
    return {
      nodeIoType: 'NodeIoType',
      scheduleNodeInfoList: 'ScheduleNodeInfoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeIoType: 'string',
      scheduleNodeInfoList: { 'type': 'array', 'itemType': ParseBatchTaskDependencyResponseBodyParseResultDependNodeListScheduleNodeInfoList },
    };
  }

  validate() {
    if(Array.isArray(this.scheduleNodeInfoList)) {
      $dara.Model.validateArray(this.scheduleNodeInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ParseBatchTaskDependencyResponseBodyParseResult extends $dara.Model {
  /**
   * @remarks
   * The list of dependent nodes.
   */
  dependNodeList?: ParseBatchTaskDependencyResponseBodyParseResultDependNodeList[];
  static names(): { [key: string]: string } {
    return {
      dependNodeList: 'DependNodeList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dependNodeList: { 'type': 'array', 'itemType': ParseBatchTaskDependencyResponseBodyParseResultDependNodeList },
    };
  }

  validate() {
    if(Array.isArray(this.dependNodeList)) {
      $dara.Model.validateArray(this.dependNodeList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ParseBatchTaskDependencyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code. A value of OK indicates that the request was successful.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The HTTP status code returned by the backend.
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
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The parsing result.
   */
  parseResult?: ParseBatchTaskDependencyResponseBodyParseResult;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      parseResult: 'ParseResult',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      parseResult: ParseBatchTaskDependencyResponseBodyParseResult,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.parseResult && typeof (this.parseResult as any).validate === 'function') {
      (this.parseResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

