// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMessageGroupResponseBodyResultGroupList extends $dara.Model {
  /**
   * @remarks
   * Interactive Messages application ID.
   * 
   * @example
   * VKL3***
   */
  appId?: string;
  /**
   * @remarks
   * UTC timestamp when the message group was created.
   * 
   * @example
   * 1502280113
   */
  createTime?: number;
  /**
   * @remarks
   * Creator ID.
   * 
   * @example
   * as****hs
   */
  creatorId?: string;
  /**
   * @remarks
   * Extension field.
   */
  extension?: { [key: string]: string };
  /**
   * @remarks
   * Message group ID.
   * 
   * @example
   * AE35-****-T95F
   */
  groupId?: string;
  /**
   * @remarks
   * Message group status. The default value is **1**, indicating that the message group status is normal.
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
   * Message group list.
   */
  groupList?: ListMessageGroupResponseBodyResultGroupList[];
  /**
   * @remarks
   * Indicates whether there is a next page. Valid values:
   * 
   * - true: There is a next page.
   * - false: There is no next page.
   * 
   * @example
   * false
   */
  hasMore?: boolean;
  /**
   * @remarks
   * Total number of message groups.
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
   * Request ID.
   * 
   * @example
   * 16A96B9A-****-CB92E68F4CD8
   */
  requestId?: string;
  /**
   * @remarks
   * Return result.
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

