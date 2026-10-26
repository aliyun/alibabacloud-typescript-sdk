// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExecuteMigrationOperationResponseBodyDataOperationParam extends $dara.Model {
  /**
   * @remarks
   * The parameter information.
   * 
   * @example
   * {"action":"MIGRATE_FORWARD","targetStage":"MIGRATE_FINISH"}
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

export class ExecuteMigrationOperationResponseBodyDataOperationResult extends $dara.Model {
  /**
   * @remarks
   * The operation result.
   * 
   * @example
   * {
   *     "checkStatus": "WAIT_CHECK",
   *     "sourceTopicStatus": "PERM_6",
   *     "targetTopicStatus": "PERM_4",
   *     "checkResult": {},
   *     "migrateStage": "DOUBLE_READ"
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

export class ExecuteMigrationOperationResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The operation business status.
   * 
   * @example
   * MIGRATE_WAIT
   */
  businessStatus?: string;
  /**
   * @remarks
   * The creation time, in YYYY-MM-DD HH:mm:ss format.
   * 
   * @example
   * 2022-08-01 20:05:50
   */
  createTime?: string;
  /**
   * @remarks
   * The migration ID.
   * 
   * @example
   * 6
   */
  migrationId?: number;
  /**
   * @remarks
   * The migration operation ID.
   * 
   * @example
   * 110
   */
  operationId?: number;
  /**
   * @remarks
   * The primary key of the operation object.
   * 
   * @example
   * normal-topic-1
   */
  operationKey?: string;
  /**
   * @remarks
   * The operation parameter.
   */
  operationParam?: ExecuteMigrationOperationResponseBodyDataOperationParam;
  /**
   * @remarks
   * The operation result.
   */
  operationResult?: ExecuteMigrationOperationResponseBodyDataOperationResult;
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
   * The modification time, in YYYY-MM-DD HH:mm:ss format.
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
      operationParam: ExecuteMigrationOperationResponseBodyDataOperationParam,
      operationResult: ExecuteMigrationOperationResponseBodyDataOperationResult,
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

export class ExecuteMigrationOperationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * Topic.NotFound
   */
  code?: string;
  /**
   * @remarks
   * The return result.
   */
  data?: ExecuteMigrationOperationResponseBodyData;
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
   * instanceId
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
   * 814BCD66-2D76-5080-AAD2-E50E5BDB0995
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
      data: ExecuteMigrationOperationResponseBodyData,
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

