// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetStandardGroupResponseBodyStandardGroup extends $dara.Model {
  /**
   * @remarks
   * The engine type.
   * 
   * @example
   * mysql
   */
  dbType?: string;
  /**
   * @remarks
   * The description of the security rule set.
   */
  description?: string;
  /**
   * @remarks
   * The ID of the security rule set.
   * 
   * @example
   * 41****
   */
  groupId?: number;
  /**
   * @remarks
   * The control mode. Valid values:
   * 
   * *   **NONE_CONTROL**: Flexible Management
   * *   **STABLE**: Stable Change
   * *   **COMMON**: Security Collaboration
   * 
   * @example
   * COMMON
   */
  groupMode?: string;
  /**
   * @remarks
   * The name of the security rule set.
   * 
   * @example
   * poc_test
   */
  groupName?: string;
  /**
   * @remarks
   * The ID of the user who last modified the security rules.
   * 
   * @example
   * 51****
   */
  lastMenderId?: number;
  static names(): { [key: string]: string } {
    return {
      dbType: 'DbType',
      description: 'Description',
      groupId: 'GroupId',
      groupMode: 'GroupMode',
      groupName: 'GroupName',
      lastMenderId: 'LastMenderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbType: 'string',
      description: 'string',
      groupId: 'number',
      groupMode: 'string',
      groupName: 'string',
      lastMenderId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStandardGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code that is returned if the request failed.
   * 
   * @example
   * UnknownError
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message that is returned if the request failed.
   * 
   * @example
   * UnknownError
   */
  errorMessage?: string;
  /**
   * @remarks
   * The request ID. You can use the ID to query logs and troubleshoot issues.
   * 
   * @example
   * BF7E9543-F431-566A-991A-B5C493EA36C2
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the security rule set.
   */
  standardGroup?: GetStandardGroupResponseBodyStandardGroup;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**: The request was successful.
   * *   **false**: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      standardGroup: 'StandardGroup',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      standardGroup: GetStandardGroupResponseBodyStandardGroup,
      success: 'boolean',
    };
  }

  validate() {
    if(this.standardGroup && typeof (this.standardGroup as any).validate === 'function') {
      (this.standardGroup as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

