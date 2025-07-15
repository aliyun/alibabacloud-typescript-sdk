// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMessageGroupResponseBodyResult extends $dara.Model {
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
   * 
   * @example
   * 1
   */
  extension?: { [key: string]: any };
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
   * Indicates whether the message group is muted.
   * 
   * *   true: The message group is muted.
   * *   false: The message group is not muted.
   * 
   * @example
   * true
   */
  isMuteAll?: boolean;
  /**
   * @remarks
   * The status of the message group. The default value is **1**, which indicates that the message group is normal.
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

