// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FindGuestCredentialsRecordResponseBodyDataChannelLevelInfoLevelOneOwner extends $dara.Model {
  ownerEmpIdOrTelephone?: string;
  ownerName?: string;
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

export class FindGuestCredentialsRecordResponseBodyDataChannelLevelInfoLevelThreeOwner extends $dara.Model {
  ownerEmpIdOrTelephone?: string;
  ownerName?: string;
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

export class FindGuestCredentialsRecordResponseBodyDataChannelLevelInfoLevelTwoOwner extends $dara.Model {
  ownerEmpIdOrTelephone?: string;
  ownerName?: string;
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

export class FindGuestCredentialsRecordResponseBodyDataChannelLevelInfo extends $dara.Model {
  channelId?: number;
  channelName?: string;
  levelOneChannelName?: string;
  levelOneOwner?: FindGuestCredentialsRecordResponseBodyDataChannelLevelInfoLevelOneOwner[];
  levelThreeChannelName?: string;
  levelThreeOwner?: FindGuestCredentialsRecordResponseBodyDataChannelLevelInfoLevelThreeOwner[];
  levelTwoChannelName?: string;
  levelTwoOwner?: FindGuestCredentialsRecordResponseBodyDataChannelLevelInfoLevelTwoOwner[];
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
      levelOneOwner: { 'type': 'array', 'itemType': FindGuestCredentialsRecordResponseBodyDataChannelLevelInfoLevelOneOwner },
      levelThreeChannelName: 'string',
      levelThreeOwner: { 'type': 'array', 'itemType': FindGuestCredentialsRecordResponseBodyDataChannelLevelInfoLevelThreeOwner },
      levelTwoChannelName: 'string',
      levelTwoOwner: { 'type': 'array', 'itemType': FindGuestCredentialsRecordResponseBodyDataChannelLevelInfoLevelTwoOwner },
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

export class FindGuestCredentialsRecordResponseBodyData extends $dara.Model {
  admin?: { [key: string]: any };
  channelId?: number;
  channelLevelInfo?: FindGuestCredentialsRecordResponseBodyDataChannelLevelInfo;
  companyName?: string;
  credentialsCode?: string;
  credentialsName?: string;
  idNumber?: string;
  idType?: string;
  name?: string;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      admin: 'Admin',
      channelId: 'ChannelId',
      channelLevelInfo: 'ChannelLevelInfo',
      companyName: 'CompanyName',
      credentialsCode: 'CredentialsCode',
      credentialsName: 'CredentialsName',
      idNumber: 'IdNumber',
      idType: 'IdType',
      name: 'Name',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      admin: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      channelId: 'number',
      channelLevelInfo: FindGuestCredentialsRecordResponseBodyDataChannelLevelInfo,
      companyName: 'string',
      credentialsCode: 'string',
      credentialsName: 'string',
      idNumber: 'string',
      idType: 'string',
      name: 'string',
      status: 'number',
    };
  }

  validate() {
    if(this.admin) {
      $dara.Model.validateMap(this.admin);
    }
    if(this.channelLevelInfo && typeof (this.channelLevelInfo as any).validate === 'function') {
      (this.channelLevelInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindGuestCredentialsRecordResponseBody extends $dara.Model {
  data?: FindGuestCredentialsRecordResponseBodyData[];
  errCode?: string;
  errMessage?: string;
  requestId?: string;
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
      data: { 'type': 'array', 'itemType': FindGuestCredentialsRecordResponseBodyData },
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

