// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FindGuestTicketRecordResponseBodyDataChannelLevelInfoLevelOneOwner extends $dara.Model {
  /**
   * @example
   * IjEqZpp8Wn29+sqOr3hxXuOqn6CyKYNSQ5dmMA0txiM=
   */
  ownerEmpIdOrTelephone?: string;
  ownerName?: string;
  /**
   * @example
   * dUffKUpLXP5LFGeJa+Rs8Q==
   */
  ownerNickName?: string;
  static names(): { [key: string]: string } {
    return {
      ownerEmpIdOrTelephone: 'OwnerEmpIdOrTelephone',
      ownerName: 'OwnerName',
      ownerNickName: 'OwnerNickName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerEmpIdOrTelephone: 'string',
      ownerName: 'string',
      ownerNickName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindGuestTicketRecordResponseBodyDataChannelLevelInfoLevelThreeOwner extends $dara.Model {
  /**
   * @example
   * IjEqZpp8Wn29+sqOr3hxXuOqn6CyKYNSQ5dmMA0txiM=
   */
  ownerEmpIdOrTelephone?: string;
  ownerName?: string;
  /**
   * @example
   * dUffKUpLXP5LFGeJa+Rs8Q==
   */
  ownerNickName?: string;
  static names(): { [key: string]: string } {
    return {
      ownerEmpIdOrTelephone: 'OwnerEmpIdOrTelephone',
      ownerName: 'OwnerName',
      ownerNickName: 'OwnerNickName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerEmpIdOrTelephone: 'string',
      ownerName: 'string',
      ownerNickName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindGuestTicketRecordResponseBodyDataChannelLevelInfoLevelTwoOwner extends $dara.Model {
  /**
   * @example
   * IjEqZpp8Wn29+sqOr3hxXuOqn6CyKYNSQ5dmMA0txiM=
   */
  ownerEmpIdOrTelephone?: string;
  ownerName?: string;
  /**
   * @example
   * dUffKUpLXP5LFGeJa+Rs8Q==
   */
  ownerNickName?: string;
  static names(): { [key: string]: string } {
    return {
      ownerEmpIdOrTelephone: 'OwnerEmpIdOrTelephone',
      ownerName: 'OwnerName',
      ownerNickName: 'OwnerNickName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerEmpIdOrTelephone: 'string',
      ownerName: 'string',
      ownerNickName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindGuestTicketRecordResponseBodyDataChannelLevelInfo extends $dara.Model {
  /**
   * @example
   * 1401
   */
  channelId?: number;
  /**
   * @example
   * VIP
   */
  channelName?: string;
  /**
   * @example
   * VIP
   */
  levelOneChannelName?: string;
  levelOneOwner?: FindGuestTicketRecordResponseBodyDataChannelLevelInfoLevelOneOwner[];
  /**
   * @example
   * VIP
   */
  levelThreeChannelName?: string;
  levelThreeOwner?: FindGuestTicketRecordResponseBodyDataChannelLevelInfoLevelThreeOwner[];
  /**
   * @example
   * VIP
   */
  levelTwoChannelName?: string;
  levelTwoOwner?: FindGuestTicketRecordResponseBodyDataChannelLevelInfoLevelTwoOwner[];
  static names(): { [key: string]: string } {
    return {
      channelId: 'ChannelId',
      channelName: 'ChannelName',
      levelOneChannelName: 'LevelOneChannelName',
      levelOneOwner: 'LevelOneOwner',
      levelThreeChannelName: 'LevelThreeChannelName',
      levelThreeOwner: 'LevelThreeOwner',
      levelTwoChannelName: 'LevelTwoChannelName',
      levelTwoOwner: 'LevelTwoOwner',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelId: 'number',
      channelName: 'string',
      levelOneChannelName: 'string',
      levelOneOwner: { 'type': 'array', 'itemType': FindGuestTicketRecordResponseBodyDataChannelLevelInfoLevelOneOwner },
      levelThreeChannelName: 'string',
      levelThreeOwner: { 'type': 'array', 'itemType': FindGuestTicketRecordResponseBodyDataChannelLevelInfoLevelThreeOwner },
      levelTwoChannelName: 'string',
      levelTwoOwner: { 'type': 'array', 'itemType': FindGuestTicketRecordResponseBodyDataChannelLevelInfoLevelTwoOwner },
    };
  }

  validate() {
    if(Array.isArray(this.levelOneOwner)) {
      $dara.Model.validateArray(this.levelOneOwner);
    }
    if(Array.isArray(this.levelThreeOwner)) {
      $dara.Model.validateArray(this.levelThreeOwner);
    }
    if(Array.isArray(this.levelTwoOwner)) {
      $dara.Model.validateArray(this.levelTwoOwner);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindGuestTicketRecordResponseBodyData extends $dara.Model {
  channelLevelInfo?: FindGuestTicketRecordResponseBodyDataChannelLevelInfo;
  companyName?: string;
  /**
   * @example
   * 2023-10-31,2023-11-02
   */
  equityDates?: string;
  /**
   * @example
   * -1
   */
  healthCommitmentStatus?: number;
  /**
   * @example
   * IjEqZpp8Wn29+sqOr3hxXuOqn6CyKYNSQ5dmMA0txiM=
   */
  idNumber?: string;
  idType?: string;
  name?: string;
  /**
   * @example
   * 1
   */
  status?: number;
  /**
   * @example
   * 3702-10240842
   */
  ticketCode?: string;
  ticketName?: string;
  ticketReceiveDates?: string;
  /**
   * @example
   * 1
   */
  ticketType?: string;
  static names(): { [key: string]: string } {
    return {
      channelLevelInfo: 'ChannelLevelInfo',
      companyName: 'CompanyName',
      equityDates: 'EquityDates',
      healthCommitmentStatus: 'HealthCommitmentStatus',
      idNumber: 'IdNumber',
      idType: 'IdType',
      name: 'Name',
      status: 'Status',
      ticketCode: 'TicketCode',
      ticketName: 'TicketName',
      ticketReceiveDates: 'TicketReceiveDates',
      ticketType: 'TicketType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelLevelInfo: FindGuestTicketRecordResponseBodyDataChannelLevelInfo,
      companyName: 'string',
      equityDates: 'string',
      healthCommitmentStatus: 'number',
      idNumber: 'string',
      idType: 'string',
      name: 'string',
      status: 'number',
      ticketCode: 'string',
      ticketName: 'string',
      ticketReceiveDates: 'string',
      ticketType: 'string',
    };
  }

  validate() {
    if(this.channelLevelInfo && typeof (this.channelLevelInfo as any).validate === 'function') {
      (this.channelLevelInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindGuestTicketRecordResponseBody extends $dara.Model {
  data?: FindGuestTicketRecordResponseBodyData[];
  /**
   * @example
   * Success
   */
  errCode?: string;
  /**
   * @example
   * error
   */
  errMessage?: string;
  /**
   * @example
   * 8D190CE8-7D76-5781-8055-0990BBD2249F
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': FindGuestTicketRecordResponseBodyData },
      errCode: 'string',
      errMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

