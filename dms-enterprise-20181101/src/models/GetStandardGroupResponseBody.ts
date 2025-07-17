// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetStandardGroupResponseBodyStandardGroup extends $dara.Model {
  /**
   * @example
   * mysql
   */
  dbType?: string;
  description?: string;
  /**
   * @example
   * 41****
   */
  groupId?: number;
  /**
   * @example
   * COMMON
   */
  groupMode?: string;
  /**
   * @example
   * poc_test
   */
  groupName?: string;
  /**
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
   * @example
   * UnknownError
   */
  errorCode?: string;
  /**
   * @example
   * UnknownError
   */
  errorMessage?: string;
  /**
   * @example
   * BF7E9543-F431-566A-991A-B5C493EA36C2
   */
  requestId?: string;
  standardGroup?: GetStandardGroupResponseBodyStandardGroup;
  /**
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

