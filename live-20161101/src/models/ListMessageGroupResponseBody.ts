// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMessageGroupResponseBodyResultGroupList extends $dara.Model {
  /**
   * @remarks
   * The ID of the interactive messaging application.
   * 
   * @example
   * VKL3***
   */
  appId?: string;
  /**
   * @remarks
   * The time when the message group was created. The time is displayed in UTC.
   * 
   * @example
   * 1502280113
   */
  createTime?: number;
  /**
   * @remarks
   * The ID of the creator.
   * 
   * @example
   * as****hs
   */
  creatorId?: string;
  /**
   * @remarks
   * The extended field.
   */
  extension?: { [key: string]: string };
  /**
   * @remarks
   * The ID of the message group.
   * 
   * @example
   * AE35-****-T95F
   */
  groupId?: string;
  /**
   * @remarks
   * The status of the message group. The default value is **1**, which indicates that the status of the message group is normal.
   * 
   * @example
   * 1
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      createTime: 'CreateTime',
      creatorId: 'CreatorId',
      extension: 'Extension',
      groupId: 'GroupId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      createTime: 'number',
      creatorId: 'string',
      extension: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      groupId: 'string',
      status: 'number',
    };
  }

  validate() {
    if(this.extension) {
      $dara.Model.validateMap(this.extension);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMessageGroupResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The list of message groups.
   */
  groupList?: ListMessageGroupResponseBodyResultGroupList[];
  /**
   * @remarks
   * Indicates whether the current page is followed by another page. Valid values:
   * 
   * *   true: The current page is followed by another page.
   * *   false: The current page is not followed by another page.
   * 
   * @example
   * false
   */
  hasMore?: boolean;
  /**
   * @remarks
   * The total number of message groups.
   * 
   * @example
   * 5
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      groupList: 'GroupList',
      hasMore: 'HasMore',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupList: { 'type': 'array', 'itemType': ListMessageGroupResponseBodyResultGroupList },
      hasMore: 'boolean',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.groupList)) {
      $dara.Model.validateArray(this.groupList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMessageGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 16A96B9A-****-CB92E68F4CD8
   */
  requestId?: string;
  /**
   * @remarks
   * The returned result.
   */
  result?: ListMessageGroupResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: ListMessageGroupResponseBodyResult,
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

