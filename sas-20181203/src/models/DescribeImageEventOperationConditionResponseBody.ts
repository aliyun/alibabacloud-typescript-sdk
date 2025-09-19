// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeImageEventOperationConditionResponseBodyDataOperationsConditions extends $dara.Model {
  /**
   * @remarks
   * The keyword of the condition. Valid values:
   * 
   * *   **MD5**
   * *   **PATH**
   * 
   * @example
   * MD5
   */
  conditionKey?: string;
  /**
   * @remarks
   * The name of the condition.
   * 
   * @example
   * MD5
   */
  conditionName?: string;
  /**
   * @remarks
   * The matching types.
   */
  supportedMisType?: string[];
  static names(): { [key: string]: string } {
    return {
      conditionKey: 'ConditionKey',
      conditionName: 'ConditionName',
      supportedMisType: 'SupportedMisType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conditionKey: 'string',
      conditionName: 'string',
      supportedMisType: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.supportedMisType)) {
      $dara.Model.validateArray(this.supportedMisType);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageEventOperationConditionResponseBodyDataOperations extends $dara.Model {
  /**
   * @remarks
   * The rule conditions.
   */
  conditions?: DescribeImageEventOperationConditionResponseBodyDataOperationsConditions[];
  /**
   * @remarks
   * The operation code.
   * 
   * *   Only **whitelist** may be returned, which indicates that the alert event is added to the whitelist.
   * 
   * @example
   * whitelist
   */
  operationCode?: string;
  /**
   * @remarks
   * The name of the operation.
   * 
   * @example
   * whitelist
   */
  operationName?: string;
  static names(): { [key: string]: string } {
    return {
      conditions: 'Conditions',
      operationCode: 'OperationCode',
      operationName: 'OperationName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conditions: { 'type': 'array', 'itemType': DescribeImageEventOperationConditionResponseBodyDataOperationsConditions },
      operationCode: 'string',
      operationName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.conditions)) {
      $dara.Model.validateArray(this.conditions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageEventOperationConditionResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The alert type.
   * 
   * *   Only **sensitiveFile** may be returned.
   * 
   * @example
   * sensitiveFile
   */
  eventType?: string;
  /**
   * @remarks
   * The operations.
   */
  operations?: DescribeImageEventOperationConditionResponseBodyDataOperations[];
  /**
   * @remarks
   * The application scopes of the rules.
   */
  scenarios?: string[];
  static names(): { [key: string]: string } {
    return {
      eventType: 'EventType',
      operations: 'Operations',
      scenarios: 'Scenarios',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventType: 'string',
      operations: { 'type': 'array', 'itemType': DescribeImageEventOperationConditionResponseBodyDataOperations },
      scenarios: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.operations)) {
      $dara.Model.validateArray(this.operations);
    }
    if(Array.isArray(this.scenarios)) {
      $dara.Model.validateArray(this.scenarios);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageEventOperationConditionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: DescribeImageEventOperationConditionResponseBodyData;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ADE57832-9666-511C-9A80-B87DE2E8****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: DescribeImageEventOperationConditionResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

