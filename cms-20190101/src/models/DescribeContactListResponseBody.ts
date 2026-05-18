// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeContactListResponseBodyContactsContactChannels extends $dara.Model {
  aliIM?: string;
  dingWebHook?: string;
  mail?: string;
  SMS?: string;
  static names(): { [key: string]: string } {
    return {
      aliIM: 'AliIM',
      dingWebHook: 'DingWebHook',
      mail: 'Mail',
      SMS: 'SMS',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliIM: 'string',
      dingWebHook: 'string',
      mail: 'string',
      SMS: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContactListResponseBodyContactsContactChannelsState extends $dara.Model {
  aliIM?: string;
  dingWebHook?: string;
  mail?: string;
  SMS?: string;
  static names(): { [key: string]: string } {
    return {
      aliIM: 'AliIM',
      dingWebHook: 'DingWebHook',
      mail: 'Mail',
      SMS: 'SMS',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliIM: 'string',
      dingWebHook: 'string',
      mail: 'string',
      SMS: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContactListResponseBodyContactsContactContactGroups extends $dara.Model {
  contactGroup?: string[];
  static names(): { [key: string]: string } {
    return {
      contactGroup: 'ContactGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactGroup: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.contactGroup)) {
      $dara.Model.validateArray(this.contactGroup);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContactListResponseBodyContactsContact extends $dara.Model {
  channels?: DescribeContactListResponseBodyContactsContactChannels;
  channelsState?: DescribeContactListResponseBodyContactsContactChannelsState;
  contactGroups?: DescribeContactListResponseBodyContactsContactContactGroups;
  createTime?: number;
  desc?: string;
  lang?: string;
  name?: string;
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      channels: 'Channels',
      channelsState: 'ChannelsState',
      contactGroups: 'ContactGroups',
      createTime: 'CreateTime',
      desc: 'Desc',
      lang: 'Lang',
      name: 'Name',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channels: DescribeContactListResponseBodyContactsContactChannels,
      channelsState: DescribeContactListResponseBodyContactsContactChannelsState,
      contactGroups: DescribeContactListResponseBodyContactsContactContactGroups,
      createTime: 'number',
      desc: 'string',
      lang: 'string',
      name: 'string',
      updateTime: 'number',
    };
  }

  validate() {
    if(this.channels && typeof (this.channels as any).validate === 'function') {
      (this.channels as any).validate();
    }
    if(this.channelsState && typeof (this.channelsState as any).validate === 'function') {
      (this.channelsState as any).validate();
    }
    if(this.contactGroups && typeof (this.contactGroups as any).validate === 'function') {
      (this.contactGroups as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContactListResponseBodyContacts extends $dara.Model {
  contact?: DescribeContactListResponseBodyContactsContact[];
  static names(): { [key: string]: string } {
    return {
      contact: 'Contact',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contact: { 'type': 'array', 'itemType': DescribeContactListResponseBodyContactsContact },
    };
  }

  validate() {
    if(Array.isArray(this.contact)) {
      $dara.Model.validateArray(this.contact);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContactListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * >  The status code 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: string;
  contacts?: DescribeContactListResponseBodyContacts;
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * The Request is not authorization.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 06D5ECC2-B9BE-42A4-8FA3-1A610FB08B83
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true: The request was successful.
   * *   false: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 15
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      contacts: 'Contacts',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      contacts: DescribeContactListResponseBodyContacts,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      total: 'number',
    };
  }

  validate() {
    if(this.contacts && typeof (this.contacts as any).validate === 'function') {
      (this.contacts as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

