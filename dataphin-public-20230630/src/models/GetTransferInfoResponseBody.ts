// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTransferInfoResponseBodyDataCreator extends $dara.Model {
  /**
   * @example
   * zhangsan
   */
  displayName?: string;
  /**
   * @example
   * 30000001
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTransferInfoResponseBodyDataLastModifier extends $dara.Model {
  /**
   * @example
   * zhangsan
   */
  displayName?: string;
  /**
   * @example
   * 30000001
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTransferInfoResponseBodyDataNewOwner extends $dara.Model {
  /**
   * @example
   * zhangsan
   */
  displayName?: string;
  /**
   * @example
   * 30000001
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTransferInfoResponseBodyDataOldOwner extends $dara.Model {
  /**
   * @example
   * zhangsan
   */
  displayName?: string;
  /**
   * @example
   * 30000001
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTransferInfoResponseBodyDataPrivilegeTransferResultEntries extends $dara.Model {
  /**
   * @example
   * userId is error
   */
  errMsg?: string;
  /**
   * @example
   * table owner
   */
  privilegeDisplayName?: string;
  /**
   * @example
   * SUCCESS
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      errMsg: 'ErrMsg',
      privilegeDisplayName: 'PrivilegeDisplayName',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errMsg: 'string',
      privilegeDisplayName: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTransferInfoResponseBodyData extends $dara.Model {
  creator?: GetTransferInfoResponseBodyDataCreator;
  /**
   * @example
   * 1753669315426
   */
  flowId?: number;
  /**
   * @example
   * 1632036495973809
   */
  gmtCreate?: string;
  /**
   * @example
   * 1632036495973809
   */
  gmtModified?: string;
  lastModifier?: GetTransferInfoResponseBodyDataLastModifier;
  newOwner?: GetTransferInfoResponseBodyDataNewOwner;
  oldOwner?: GetTransferInfoResponseBodyDataOldOwner;
  /**
   * @example
   * ONE_STOP
   */
  privilegeTransferMode?: string;
  privilegeTransferResultEntries?: GetTransferInfoResponseBodyDataPrivilegeTransferResultEntries[];
  /**
   * @example
   * 1
   */
  proposalId?: number;
  /**
   * @example
   * transefer title
   */
  title?: string;
  /**
   * @example
   * comment
   */
  transferComment?: string;
  /**
   * @example
   * APPROVED
   */
  transferStatus?: string;
  static names(): { [key: string]: string } {
    return {
      creator: 'Creator',
      flowId: 'FlowId',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      lastModifier: 'LastModifier',
      newOwner: 'NewOwner',
      oldOwner: 'OldOwner',
      privilegeTransferMode: 'PrivilegeTransferMode',
      privilegeTransferResultEntries: 'PrivilegeTransferResultEntries',
      proposalId: 'ProposalId',
      title: 'Title',
      transferComment: 'TransferComment',
      transferStatus: 'TransferStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creator: GetTransferInfoResponseBodyDataCreator,
      flowId: 'number',
      gmtCreate: 'string',
      gmtModified: 'string',
      lastModifier: GetTransferInfoResponseBodyDataLastModifier,
      newOwner: GetTransferInfoResponseBodyDataNewOwner,
      oldOwner: GetTransferInfoResponseBodyDataOldOwner,
      privilegeTransferMode: 'string',
      privilegeTransferResultEntries: { 'type': 'array', 'itemType': GetTransferInfoResponseBodyDataPrivilegeTransferResultEntries },
      proposalId: 'number',
      title: 'string',
      transferComment: 'string',
      transferStatus: 'string',
    };
  }

  validate() {
    if(this.creator && typeof (this.creator as any).validate === 'function') {
      (this.creator as any).validate();
    }
    if(this.lastModifier && typeof (this.lastModifier as any).validate === 'function') {
      (this.lastModifier as any).validate();
    }
    if(this.newOwner && typeof (this.newOwner as any).validate === 'function') {
      (this.newOwner as any).validate();
    }
    if(this.oldOwner && typeof (this.oldOwner as any).validate === 'function') {
      (this.oldOwner as any).validate();
    }
    if(Array.isArray(this.privilegeTransferResultEntries)) {
      $dara.Model.validateArray(this.privilegeTransferResultEntries);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTransferInfoResponseBody extends $dara.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  data?: GetTransferInfoResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetTransferInfoResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

