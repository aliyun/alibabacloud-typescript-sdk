// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListHandshakesForAccountResponseBodyHandshakesHandshake extends $dara.Model {
  createTime?: string;
  expireTime?: string;
  handshakeId?: string;
  masterAccountId?: string;
  masterAccountName?: string;
  modifyTime?: string;
  note?: string;
  resourceDirectoryId?: string;
  status?: string;
  targetEntity?: string;
  targetType?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      expireTime: 'ExpireTime',
      handshakeId: 'HandshakeId',
      masterAccountId: 'MasterAccountId',
      masterAccountName: 'MasterAccountName',
      modifyTime: 'ModifyTime',
      note: 'Note',
      resourceDirectoryId: 'ResourceDirectoryId',
      status: 'Status',
      targetEntity: 'TargetEntity',
      targetType: 'TargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      expireTime: 'string',
      handshakeId: 'string',
      masterAccountId: 'string',
      masterAccountName: 'string',
      modifyTime: 'string',
      note: 'string',
      resourceDirectoryId: 'string',
      status: 'string',
      targetEntity: 'string',
      targetType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHandshakesForAccountResponseBodyHandshakes extends $dara.Model {
  handshake?: ListHandshakesForAccountResponseBodyHandshakesHandshake[];
  static names(): { [key: string]: string } {
    return {
      handshake: 'Handshake',
    };
  }

  static types(): { [key: string]: any } {
    return {
      handshake: { 'type': 'array', 'itemType': ListHandshakesForAccountResponseBodyHandshakesHandshake },
    };
  }

  validate() {
    if(Array.isArray(this.handshake)) {
      $dara.Model.validateArray(this.handshake);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHandshakesForAccountResponseBody extends $dara.Model {
  handshakes?: ListHandshakesForAccountResponseBodyHandshakes;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 9B34724D-54B0-4A51-B34D-4512372FE1BE
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of invitations.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      handshakes: 'Handshakes',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      handshakes: ListHandshakesForAccountResponseBodyHandshakes,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.handshakes && typeof (this.handshakes as any).validate === 'function') {
      (this.handshakes as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

