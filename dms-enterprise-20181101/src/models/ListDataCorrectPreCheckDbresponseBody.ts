// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataCorrectPreCheckDBResponseBodyPreCheckDBList extends $dara.Model {
  /**
   * @remarks
   * The ID of the database.
   * 
   * @example
   * 43***
   */
  dbId?: number;
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * test@localhost:3306
   */
  searchName?: string;
  /**
   * @remarks
   * The number of SQL statements.
   * 
   * @example
   * 1
   */
  sqlNum?: number;
  static names(): { [key: string]: string } {
    return {
      dbId: 'DbId',
      searchName: 'SearchName',
      sqlNum: 'SqlNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbId: 'number',
      searchName: 'string',
      sqlNum: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataCorrectPreCheckDBResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code returned.
   * 
   * @example
   * UnknownError
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * UnknownError
   */
  errorMessage?: string;
  /**
   * @remarks
   * The information about the databases that are involved in the precheck.
   */
  preCheckDBList?: ListDataCorrectPreCheckDBResponseBodyPreCheckDBList[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 95A972AF-FAED-4768-9360-7C0DF5D594D0
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
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      preCheckDBList: 'PreCheckDBList',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      preCheckDBList: { 'type': 'array', 'itemType': ListDataCorrectPreCheckDBResponseBodyPreCheckDBList },
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.preCheckDBList)) {
      $dara.Model.validateArray(this.preCheckDBList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

