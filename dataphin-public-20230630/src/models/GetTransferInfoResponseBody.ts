// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTransferInfoResponseBodyDataCreator extends $dara.Model {
  /**
   * @remarks
   * The username.
   * 
   * @example
   * zhangsan
   */
  displayName?: string;
  /**
   * @remarks
   * The user ID.
   * 
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
   * @remarks
   * The username.
   * 
   * @example
   * zhangsan
   */
  displayName?: string;
  /**
   * @remarks
   * The user ID.
   * 
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
   * @remarks
   * The username.
   * 
   * @example
   * zhangsan
   */
  displayName?: string;
  /**
   * @remarks
   * The user ID.
   * 
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
   * @remarks
   * The username.
   * 
   * @example
   * zhangsan
   */
  displayName?: string;
  /**
   * @remarks
   * The user ID.
   * 
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
   * @remarks
   * The error message.
   * 
   * @example
   * userId is error
   */
  errMsg?: string;
  /**
   * @remarks
   * The name of the transfer module.
   * 
   * @example
   * table owner
   */
  privilegeDisplayName?: string;
  /**
   * @remarks
   * The status of the transfer module.
   * 
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
  /**
   * @remarks
   * The creator.
   */
  creator?: GetTransferInfoResponseBodyDataCreator;
  /**
   * @remarks
   * The approval flow ID.
   * 
   * @example
   * 1753669315426
   */
  flowId?: number;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 1632036495973809
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The last modification time.
   * 
   * @example
   * 1632036495973809
   */
  gmtModified?: string;
  /**
   * @remarks
   * The last modifier.
   */
  lastModifier?: GetTransferInfoResponseBodyDataLastModifier;
  /**
   * @remarks
   * The new owner.
   */
  newOwner?: GetTransferInfoResponseBodyDataNewOwner;
  /**
   * @remarks
   * The previous owner.
   */
  oldOwner?: GetTransferInfoResponseBodyDataOldOwner;
  /**
   * @remarks
   * The transfer mode. Valid values:
   * - ONE_STOP: one-click transfer.
   * - FUNCTION_MODULE_BASED: transfer by function module.
   * 
   * @example
   * ONE_STOP
   */
  privilegeTransferMode?: string;
  /**
   * @remarks
   * The transfer details of function modules.
   */
  privilegeTransferResultEntries?: GetTransferInfoResponseBodyDataPrivilegeTransferResultEntries[];
  /**
   * @remarks
   * The approval ID.
   * 
   * @example
   * 1
   */
  proposalId?: number;
  /**
   * @remarks
   * The approval title.
   * 
   * @example
   * transefer title
   */
  title?: string;
  /**
   * @remarks
   * The transfer description.
   * 
   * @example
   * comment
   */
  transferComment?: string;
  /**
   * @remarks
   * The transfer status.
   * 
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
   * @remarks
   * The error code. A value of OK indicates that the request was successful.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The query result.
   */
  data?: GetTransferInfoResponseBodyData;
  /**
   * @remarks
   * The HTTP status code returned by the backend.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   */
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

