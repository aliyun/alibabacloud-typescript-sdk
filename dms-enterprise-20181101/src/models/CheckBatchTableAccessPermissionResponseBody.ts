// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckBatchTableAccessPermissionResponseBodyData extends $dara.Model {
  /**
   * @example
   * The productKey is empty.
   */
  errorMessage?: string;
  /**
   * @example
   * True
   */
  success?: string;
  /**
   * @example
   * tab_add_teacher_record
   */
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      success: 'Success',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      success: 'string',
      tableName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckBatchTableAccessPermissionResponseBody extends $dara.Model {
  data?: CheckBatchTableAccessPermissionResponseBodyData[];
  /**
   * @example
   * UnknownError
   */
  errorCode?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * B43AD641-49C2-5299-9E06-1B37EC1B****
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': CheckBatchTableAccessPermissionResponseBodyData },
      errorCode: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

