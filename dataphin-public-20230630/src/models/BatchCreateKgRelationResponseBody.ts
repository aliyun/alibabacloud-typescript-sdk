// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchCreateKgRelationResponseBodyCreateResultSuccessRelationList extends $dara.Model {
  /**
   * @remarks
   * The relationship record ID.
   * 
   * @example
   * abc-xxx
   */
  relationId?: string;
  /**
   * @remarks
   * The relationship type code.
   * 
   * @example
   * BELONG_TO
   */
  relationType?: string;
  static names(): { [key: string]: string } {
    return {
      relationId: 'RelationId',
      relationType: 'RelationType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      relationId: 'string',
      relationType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchCreateKgRelationResponseBodyCreateResult extends $dara.Model {
  /**
   * @remarks
   * The number of failed records.
   * 
   * @example
   * 0
   */
  failCount?: number;
  /**
   * @remarks
   * The number of successfully created records.
   * 
   * @example
   * 10
   */
  successCount?: number;
  /**
   * @remarks
   * The list of successfully created entity records.
   */
  successRelationList?: BatchCreateKgRelationResponseBodyCreateResultSuccessRelationList[];
  static names(): { [key: string]: string } {
    return {
      failCount: 'FailCount',
      successCount: 'SuccessCount',
      successRelationList: 'SuccessRelationList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failCount: 'number',
      successCount: 'number',
      successRelationList: { 'type': 'array', 'itemType': BatchCreateKgRelationResponseBodyCreateResultSuccessRelationList },
    };
  }

  validate() {
    if(Array.isArray(this.successRelationList)) {
      $dara.Model.validateArray(this.successRelationList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchCreateKgRelationResponseBody extends $dara.Model {
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
   * The result of batch relationship record creation.
   */
  createResult?: BatchCreateKgRelationResponseBodyCreateResult;
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
      createResult: BatchCreateKgRelationResponseBodyCreateResult,
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

