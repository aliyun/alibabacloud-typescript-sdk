// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddHostsToGroupResponseBodyResults extends $dara.Model {
  /**
   * @remarks
   * The return code that indicates whether the call was successful. Valid values:
   * 
   * *   **OK**: The call was successful.
   * 
   * *   **UNEXPECTED**: An unknown error occurred.
   * 
   * *   **INVALID_ARGUMENT**: A request parameter is invalid.
   *     >Make sure that the request parameters are valid and call the operation again.
   * 
   * *   **OBJECT_NOT_FOUND**: The specified object on which you want to perform the operation does not exist.
   *     > Make sure that the specified bastion host ID and host IDs are valid. Then, call the operation again.
   * 
   * *   **OBJECT_AlREADY_EXISTS**: The specified object on which you want to perform the operation already exists.
   * 
   * @example
   * OK
   */
  code?: string;
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
   * The host ID.
   * 
   * @example
   * 1
   */
  hostId?: string;
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * @example
   * N/A
   */
  message?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      hostGroupId: 'HostGroupId',
      hostId: 'HostId',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      hostGroupId: 'string',
      hostId: 'string',
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

export class AddHostsToGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 81500666-d7f5-4143-8329-0223cc738105
   */
  requestId?: string;
  /**
   * @remarks
   * The result of the call.
   */
  results?: AddHostsToGroupResponseBodyResults[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      results: 'Results',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      results: { 'type': 'array', 'itemType': AddHostsToGroupResponseBodyResults },
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

