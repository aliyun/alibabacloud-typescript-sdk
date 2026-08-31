// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchCreateKgEntityResponseBodyCreateResultSuccessEntityList extends $dara.Model {
  /**
   * @remarks
   * The entity record ID.
   * 
   * @example
   * abc-xxx
   */
  entityId?: string;
  /**
   * @remarks
   * The entity type code.
   * 
   * @example
   * Company
   */
  entityType?: string;
  static names(): { [key: string]: string } {
    return {
      entityId: 'EntityId',
      entityType: 'EntityType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityId: 'string',
      entityType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchCreateKgEntityResponseBodyCreateResult extends $dara.Model {
  /**
   * @remarks
   * The number of entity records that failed to be created.
   * 
   * @example
   * 0
   */
  failCount?: number;
  /**
   * @remarks
   * The number of successfully created entity records.
   * 
   * @example
   * 10
   */
  successCount?: number;
  /**
   * @remarks
   * The list of IDs of successfully created entity records.
   */
  successEntityList?: BatchCreateKgEntityResponseBodyCreateResultSuccessEntityList[];
  static names(): { [key: string]: string } {
    return {
      failCount: 'FailCount',
      successCount: 'SuccessCount',
      successEntityList: 'SuccessEntityList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failCount: 'number',
      successCount: 'number',
      successEntityList: { 'type': 'array', 'itemType': BatchCreateKgEntityResponseBodyCreateResultSuccessEntityList },
    };
  }

  validate() {
    if(Array.isArray(this.successEntityList)) {
      $dara.Model.validateArray(this.successEntityList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchCreateKgEntityResponseBody extends $dara.Model {
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
   * The result of creating entity records in batches.
   */
  createResult?: BatchCreateKgEntityResponseBodyCreateResult;
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
   * The backend exception details.
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
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      createResult: 'CreateResult',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      createResult: BatchCreateKgEntityResponseBodyCreateResult,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.createResult && typeof (this.createResult as any).validate === 'function') {
      (this.createResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

