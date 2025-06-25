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

