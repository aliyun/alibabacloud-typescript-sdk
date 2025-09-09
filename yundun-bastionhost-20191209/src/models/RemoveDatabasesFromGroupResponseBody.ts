// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveDatabasesFromGroupResponseBodyResults extends $dara.Model {
  /**
   * @remarks
   * The error code that is returned. If OK is returned, the operation was successful. If another error code is returned, the operation failed.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The database ID.
   * 
   * @example
   * 20
   */
  databaseId?: string;
  /**
   * @remarks
   * The asset group ID.
   * 
   * @example
   * 1
   */
  hostGroupId?: string;
  /**
   * @remarks
   * The error message that is returned.
   */
  message?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      databaseId: 'DatabaseId',
      hostGroupId: 'HostGroupId',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      databaseId: 'string',
      hostGroupId: 'string',
      message: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveDatabasesFromGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * EC9BF0F4-8983-491A-BC8C-1B4DD94976DE
   */
  requestId?: string;
  /**
   * @remarks
   * The result of the call.
   */
  results?: RemoveDatabasesFromGroupResponseBodyResults[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      results: 'Results',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      results: { 'type': 'array', 'itemType': RemoveDatabasesFromGroupResponseBodyResults },
    };
  }

  validate() {
    if(Array.isArray(this.results)) {
      $dara.Model.validateArray(this.results);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

