// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMigrationOperationsResponseBodyDataListOperationParam extends $dara.Model {
  /**
   * @remarks
   * The parameter information.
   * 
   * @example
   * {
   *       "action": "MIGRATE_FORWARD",
   *       "targetStage": "MIGRATE_FINISH"
   * }
   */
  paramData?: any;
  static names(): { [key: string]: string } {
    return {
      paramData: 'paramData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      paramData: 'any',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMigrationOperationsResponseBodyDataListOperationResult extends $dara.Model {
  /**
   * @remarks
   * The operation result.
   * 
   * @example
   * {
   *       "checkStatus": "WAIT_CHECK",
   *       "sourceTopicStatus": "PERM_6",
   *       "targetTopicStatus": "PERM_4",
   *       "checkResult": {},
   *       "migrateStage": "DOUBLE_READ"
   * }
   */
  resultData?: any;
  static names(): { [key: string]: string } {
    return {
      resultData: 'resultData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resultData: 'any',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMigrationOperationsResponseBodyDataList extends $dara.Model {
  /**
   * @remarks
   * The operation business status.
   * 
   * @example
   * DOUBLE_READ
   */
  businessStatus?: string;
  /**
   * @remarks
   * The creation time, in the format of YYYY-MM-DD HH:mm:ss.
   * 
   * @example
   * 2022-08-01 00:00:00
   */
  createTime?: string;
  /**
   * @remarks
   * The migration ID.
   * 
   * @example
   * 1
   */
  migrationId?: number;
  /**
   * @remarks
   * The migration operation ID.
   * 
   * @example
   * 183
   */
  operationId?: number;
  /**
   * @remarks
   * The primary key of the operation object.
   * 
   * 
   * > 
   * > - During the message migration stage, the operation object is the topic name.
   * 
   * @example
   * normal-topic-1
   */
  operationKey?: string;
  /**
   * @remarks
   * The operation parameter.
   */
  operationParam?: ListMigrationOperationsResponseBodyDataListOperationParam;
  /**
   * @remarks
   * The operation result.
   */
  operationResult?: ListMigrationOperationsResponseBodyDataListOperationResult;
  /**
   * @remarks
   * The operation status.
   * 
   * @example
   * DOING
   */
  operationStatus?: string;
  /**
   * @remarks
   * The operation type.
   * 
   * @example
   * MIGRATE_MESSAGE
   */
  operationType?: string;
  /**
   * @remarks
   * The migration stage type.
   * 
   * @example
   * MIGRATE_MESSAGE
   */
  stageType?: string;
  /**
   * @remarks
   * The update time, in the format of YYYY-MM-DD HH:mm:ss.
   * 
   * @example
   * 2022-08-01 20:05:50
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      businessStatus: 'businessStatus',
      createTime: 'createTime',
      migrationId: 'migrationId',
      operationId: 'operationId',
      operationKey: 'operationKey',
      operationParam: 'operationParam',
      operationResult: 'operationResult',
      operationStatus: 'operationStatus',
      operationType: 'operationType',
      stageType: 'stageType',
      updateTime: 'updateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessStatus: 'string',
      createTime: 'string',
      migrationId: 'number',
      operationId: 'number',
      operationKey: 'string',
      operationParam: ListMigrationOperationsResponseBodyDataListOperationParam,
      operationResult: ListMigrationOperationsResponseBodyDataListOperationResult,
      operationStatus: 'string',
      operationType: 'string',
      stageType: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    if(this.operationParam && typeof (this.operationParam as any).validate === 'function') {
      (this.operationParam as any).validate();
    }
    if(this.operationResult && typeof (this.operationResult as any).validate === 'function') {
      (this.operationResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMigrationOperationsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The paginated data.
   */
  list?: ListMigrationOperationsResponseBodyDataList[];
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The page size.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'list',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': ListMigrationOperationsResponseBodyDataList },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.list)) {
      $dara.Model.validateArray(this.list);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMigrationOperationsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * Instance.NotFound
   */
  code?: string;
  /**
   * @remarks
   * The response data.
   */
  data?: ListMigrationOperationsResponseBodyData;
  /**
   * @remarks
   * The dynamic error code.
   * 
   * @example
   * InstanceId
   */
  dynamicCode?: string;
  /**
   * @remarks
   * The dynamic error message.
   * 
   * @example
   * consumerGroupId
   */
  dynamicMessage?: string;
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
   * The topic already exists.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C7E8AE3A-219B-52EE-BE32-4036F5F88833
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      dynamicCode: 'dynamicCode',
      dynamicMessage: 'dynamicMessage',
      httpStatusCode: 'httpStatusCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListMigrationOperationsResponseBodyData,
      dynamicCode: 'string',
      dynamicMessage: 'string',
      httpStatusCode: 'number',
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

