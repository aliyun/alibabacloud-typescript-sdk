// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MosQueryRegistrationInfoResponseBodyDataListTagInfos extends $dara.Model {
  tagCode?: string;
  tagName?: string;
  static names(): { [key: string]: string } {
    return {
      tagCode: 'TagCode',
      tagName: 'TagName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagCode: 'string',
      tagName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MosQueryRegistrationInfoResponseBodyDataList extends $dara.Model {
  activityId?: string;
  channelName?: string;
  checkinStatus?: string;
  id?: number;
  qrCode?: string;
  tagInfos?: MosQueryRegistrationInfoResponseBodyDataListTagInfos[];
  userCompany?: string;
  userEmail?: string;
  userName?: string;
  userPhone?: string;
  static names(): { [key: string]: string } {
    return {
      activityId: 'ActivityId',
      channelName: 'ChannelName',
      checkinStatus: 'CheckinStatus',
      id: 'Id',
      qrCode: 'QrCode',
      tagInfos: 'TagInfos',
      userCompany: 'UserCompany',
      userEmail: 'UserEmail',
      userName: 'UserName',
      userPhone: 'UserPhone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activityId: 'string',
      channelName: 'string',
      checkinStatus: 'string',
      id: 'number',
      qrCode: 'string',
      tagInfos: { 'type': 'array', 'itemType': MosQueryRegistrationInfoResponseBodyDataListTagInfos },
      userCompany: 'string',
      userEmail: 'string',
      userName: 'string',
      userPhone: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tagInfos)) {
      $dara.Model.validateArray(this.tagInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MosQueryRegistrationInfoResponseBodyData extends $dara.Model {
  list?: MosQueryRegistrationInfoResponseBodyDataList[];
  total?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': MosQueryRegistrationInfoResponseBodyDataList },
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.list)) {
      $dara.Model.validateArray(this.list);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MosQueryRegistrationInfoResponseBody extends $dara.Model {
  accessDeniedDetail?: string;
  code?: string;
  data?: MosQueryRegistrationInfoResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      data: MosQueryRegistrationInfoResponseBodyData,
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

