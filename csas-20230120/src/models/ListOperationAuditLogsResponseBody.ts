// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListOperationAuditLogsResponseBodyLogs extends $dara.Model {
  /**
   * @remarks
   * The snapshot after the operation. It is recorded as-is by the audit framework and is not localized. This field is empty for historical logs that are not connected to the audit framework.
   * 
   * @example
   * {"RequestId":"01A03244-5BAD-5FAA-93D6-E4F4A1A2****"}
   */
  afterAction?: string;
  /**
   * @remarks
   * The snapshot before the operation. It is recorded as-is by the audit framework and is not localized. This field is empty for historical logs that are not connected to the audit framework.
   * 
   * @example
   * "pa-application-ea73352b4b75****"
   */
  beforeAction?: string;
  /**
   * @remarks
   * The error code returned when the operation fails. This field is empty when the operation is successful.
   * 
   * @example
   * ResourceNotFound
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned when the operation fails. This field is empty when the operation is successful.
   * 
   * @example
   * the specified resource is not found
   */
  errorMessage?: string;
  /**
   * @remarks
   * The source type of the event. Valid values:
   * - **console**: The event is triggered by a console call.
   * - **sdk**: The event is triggered by an SDK call.
   * 
   * @example
   * console
   */
  eventType?: string;
  /**
   * @remarks
   * The operation feature module. The return value is localized based on the request language.
   * 
   * @example
   * Office data protection
   */
  operationFunc?: string;
  /**
   * @remarks
   * The operation page. The return value is localized based on the request language.
   * 
   * @example
   * Peripheral management
   */
  operationPage?: string;
  /**
   * @remarks
   * The operation time.
   * 
   * @example
   * 2026-08-24 13:38:06
   */
  operationTime?: string;
  /**
   * @remarks
   * The operation type. The return value is localized based on the request language.
   * 
   * @example
   * Modify peripheral control policy
   */
  operationType?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID (AliUid) of the operator.
   * 
   * @example
   * 1234****
   */
  operatorId?: string;
  /**
   * @remarks
   * Indicates whether the operation was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      afterAction: 'AfterAction',
      beforeAction: 'BeforeAction',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      eventType: 'EventType',
      operationFunc: 'OperationFunc',
      operationPage: 'OperationPage',
      operationTime: 'OperationTime',
      operationType: 'OperationType',
      operatorId: 'OperatorId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      afterAction: 'string',
      beforeAction: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      eventType: 'string',
      operationFunc: 'string',
      operationPage: 'string',
      operationTime: 'string',
      operationType: 'string',
      operatorId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOperationAuditLogsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of administrator operation audit logs. The logs are sorted in descending order of operation time.
   */
  logs?: ListOperationAuditLogsResponseBodyLogs[];
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * E9D4B681-0E79-57B7-AF0D-4A675D40141C
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of logs that meet the query conditions.
   * 
   * @example
   * 4
   */
  totalNum?: number;
  static names(): { [key: string]: string } {
    return {
      logs: 'Logs',
      requestId: 'RequestId',
      totalNum: 'TotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logs: { 'type': 'array', 'itemType': ListOperationAuditLogsResponseBodyLogs },
      requestId: 'string',
      totalNum: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.logs)) {
      $dara.Model.validateArray(this.logs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

