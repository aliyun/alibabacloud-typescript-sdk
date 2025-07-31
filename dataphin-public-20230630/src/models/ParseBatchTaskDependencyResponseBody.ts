// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ParseBatchTaskDependencyResponseBodyParseResultDependNodeListScheduleNodeInfoList extends $dara.Model {
  fieldList?: string[];
  /**
   * @example
   * n_11013121
   */
  nodeId?: string;
  /**
   * @example
   * test11
   */
  nodeName?: string;
  /**
   * @example
   * t_test
   */
  outputName?: string;
  /**
   * @example
   * 张三
   */
  ownerName?: string;
  /**
   * @example
   * 201122301
   */
  ownerUserId?: string;
  /**
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
   * @example
   * input
   */
  nodeIoType?: string;
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
   * successful
   */
  message?: string;
  parseResult?: ParseBatchTaskDependencyResponseBodyParseResult;
  /**
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
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

