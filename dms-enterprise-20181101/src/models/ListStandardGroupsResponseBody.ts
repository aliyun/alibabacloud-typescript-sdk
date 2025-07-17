// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListStandardGroupsResponseBodyStandardGroupList extends $dara.Model {
  /**
   * @remarks
   * The type of the database engine. For more information about the valid values of this parameter, see [DbType parameter](https://help.aliyun.com/document_detail/198106.html).
   * 
   * @example
   * mysql
   */
  dbType?: string;
  /**
   * @remarks
   * The description of the security rule set.
   * 
   * @example
   * test_rule
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
   * test_group
   */
  groupName?: string;
  /**
   * @remarks
   * The ID of the user who queries the security sets.
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

export class ListStandardGroupsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code returned if the request fails.
   * 
   * @example
   * 403
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned if the request fails.
   * 
   * @example
   * xxx
   */
  errorMessage?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 34E01EDD-6A16-4CF0-9541-C644D1BE01AA
   */
  requestId?: string;
  /**
   * @remarks
   * The security rule sets returned.
   */
  standardGroupList?: ListStandardGroupsResponseBodyStandardGroupList[];
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
      standardGroupList: 'StandardGroupList',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      standardGroupList: { 'type': 'array', 'itemType': ListStandardGroupsResponseBodyStandardGroupList },
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.standardGroupList)) {
      $dara.Model.validateArray(this.standardGroupList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

