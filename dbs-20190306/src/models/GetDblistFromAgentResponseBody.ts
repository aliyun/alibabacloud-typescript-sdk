// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDBListFromAgentResponseBodyDbList extends $dara.Model {
  dbName?: string[];
  static names(): { [key: string]: string } {
    return {
      dbName: 'dbName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.dbName)) {
      $dara.Model.validateArray(this.dbName);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDBListFromAgentResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the databases.
   */
  dbList?: GetDBListFromAgentResponseBodyDbList;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * InvalidParameter
   */
  errCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * This backupPlan can\\"t support this action
   */
  errMessage?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 400
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * EB4DFD5E-3618-498D-BE35-4DBEA0072122
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      dbList: 'DbList',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbList: GetDBListFromAgentResponseBodyDbList,
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.dbList && typeof (this.dbList as any).validate === 'function') {
      (this.dbList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

