// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMessageGroupResponseBodyResult extends $dara.Model {
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
   * 
   * @example
   * 1
   */
  extension?: { [key: string]: any };
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
   * Indicates whether all members in this message group are muted.
   * 
   * - true: All members are muted.
   * - false: All members are not muted.
   * 
   * @example
   * true
   */
  isMuteAll?: boolean;
  /**
   * @remarks
   * Message group status. The default value is **1**, which indicates that the message group status is normal.
   * 
   * @example
   * 1
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      creatorId: 'CreatorId',
      extension: 'Extension',
      groupId: 'GroupId',
      isMuteAll: 'IsMuteAll',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      creatorId: 'string',
      extension: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      groupId: 'string',
      isMuteAll: 'boolean',
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

export class GetMessageGroupResponseBody extends $dara.Model {
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
  result?: GetMessageGroupResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: GetMessageGroupResponseBodyResult,
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

