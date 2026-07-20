// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetNotificationContactsResponseBodyDataChannelConfigs extends $dara.Model {
  /**
   * @example
   * email
   */
  channelType?: string;
  /**
   * @example
   * NO
   */
  checkedState?: string;
  /**
   * @example
   * NO
   */
  defaultChecked?: string;
  /**
   * @example
   * 7
   */
  fatigueDayLimit?: number;
  /**
   * @example
   * NO
   */
  optional?: string;
  static names(): { [key: string]: string } {
    return {
      channelType: 'ChannelType',
      checkedState: 'CheckedState',
      defaultChecked: 'DefaultChecked',
      fatigueDayLimit: 'FatigueDayLimit',
      optional: 'Optional',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelType: 'string',
      checkedState: 'string',
      defaultChecked: 'string',
      fatigueDayLimit: 'number',
      optional: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNotificationContactsResponseBodyDataContactInfoList extends $dara.Model {
  /**
   * @example
   * 1492387044070147
   */
  aliUid?: number;
  /**
   * @example
   * true
   */
  bindContact?: boolean;
  /**
   * @example
   * t*@qq.*
   */
  contactEmail?: string;
  /**
   * @example
   * 0
   */
  contactId?: number;
  /**
   * @example
   * 13580xxx136
   */
  contactMobile?: string;
  /**
   * @example
   * shianyu
   */
  contactName?: string;
  /**
   * @example
   * true
   */
  emailConfirmed?: boolean;
  /**
   * @example
   * true
   */
  mobileConfirmed?: boolean;
  /**
   * @example
   * CEO
   */
  position?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      bindContact: 'BindContact',
      contactEmail: 'ContactEmail',
      contactId: 'ContactId',
      contactMobile: 'ContactMobile',
      contactName: 'ContactName',
      emailConfirmed: 'EmailConfirmed',
      mobileConfirmed: 'MobileConfirmed',
      position: 'Position',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'number',
      bindContact: 'boolean',
      contactEmail: 'string',
      contactId: 'number',
      contactMobile: 'string',
      contactName: 'string',
      emailConfirmed: 'boolean',
      mobileConfirmed: 'boolean',
      position: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNotificationContactsResponseBodyData extends $dara.Model {
  /**
   * @example
   * 1355290655619147
   */
  aliUid?: number;
  /**
   * @example
   * prod_edu_content
   */
  categoryCode?: string;
  /**
   * @example
   * 产品的使用场景、技术分享的相关内容
   */
  categoryDesc?: string;
  /**
   * @example
   * prod_msg
   */
  categoryGroupCode?: string;
  /**
   * @example
   * 产品消息
   */
  categoryGroupName?: string;
  /**
   * @example
   * 产品教育内容
   */
  categoryName?: string;
  channelConfigs?: GetNotificationContactsResponseBodyDataChannelConfigs[];
  /**
   * @example
   * true
   */
  chooseAllChannel?: boolean;
  contactInfoList?: GetNotificationContactsResponseBodyDataContactInfoList[];
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      categoryCode: 'CategoryCode',
      categoryDesc: 'CategoryDesc',
      categoryGroupCode: 'CategoryGroupCode',
      categoryGroupName: 'CategoryGroupName',
      categoryName: 'CategoryName',
      channelConfigs: 'ChannelConfigs',
      chooseAllChannel: 'ChooseAllChannel',
      contactInfoList: 'ContactInfoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'number',
      categoryCode: 'string',
      categoryDesc: 'string',
      categoryGroupCode: 'string',
      categoryGroupName: 'string',
      categoryName: 'string',
      channelConfigs: { 'type': 'array', 'itemType': GetNotificationContactsResponseBodyDataChannelConfigs },
      chooseAllChannel: 'boolean',
      contactInfoList: { 'type': 'array', 'itemType': GetNotificationContactsResponseBodyDataContactInfoList },
    };
  }

  validate() {
    if(Array.isArray(this.channelConfigs)) {
      $dara.Model.validateArray(this.channelConfigs);
    }
    if(Array.isArray(this.contactInfoList)) {
      $dara.Model.validateArray(this.contactInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNotificationContactsResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: GetNotificationContactsResponseBodyData[];
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 2FBDD713-00A5-5C98-B661-3FD31A349B6E
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': GetNotificationContactsResponseBodyData },
      message: 'string',
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

