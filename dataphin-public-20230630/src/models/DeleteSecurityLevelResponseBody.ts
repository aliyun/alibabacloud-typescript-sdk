// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteSecurityLevelResponseBodyDeleteResult extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * E10012011
   */
  errorCode?: string;
  /**
   * @remarks
   * The list of data classification IDs that are associated with the current classification level. This parameter is returned only when this error is triggered.
   */
  relatedClassifyIdList?: number[];
  /**
   * @remarks
   * Indicates whether the deletion was successful.
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      relatedClassifyIdList: 'RelatedClassifyIdList',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      relatedClassifyIdList: { 'type': 'array', 'itemType': 'number' },
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.relatedClassifyIdList)) {
      $dara.Model.validateArray(this.relatedClassifyIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSecurityLevelResponseBody extends $dara.Model {
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
   * The deletion result.
   */
  deleteResult?: DeleteSecurityLevelResponseBodyDeleteResult;
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
   * The details of the backend exception.
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
      deleteResult: 'DeleteResult',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      deleteResult: DeleteSecurityLevelResponseBodyDeleteResult,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.deleteResult && typeof (this.deleteResult as any).validate === 'function') {
      (this.deleteResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

