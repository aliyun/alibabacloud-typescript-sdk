// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetNotificationContactsResponseBodyDataChannelConfigs extends $dara.Model {
  /**
   * @remarks
   * The channel type.
   * 
   * @example
   * email
   */
  channelType?: string;
  /**
   * @remarks
   * Indicates whether the subscription is configured.
   * 
   * - **NO**
   * - **YES**
   * 
   * @example
   * NO
   */
  checkedState?: string;
  /**
   * @remarks
   * Indicates whether the channel is selected by default.
   * 
   * - **NO**
   * - **YES**
   * 
   * @example
   * NO
   */
  defaultChecked?: string;
  /**
   * @remarks
   * The fatigue limit.
   * 
   * @example
   * 7
   */
  fatigueDayLimit?: number;
  /**
   * @remarks
   * Indicates whether the channel is modifiable.
   * 
   * - **NO**
   * - **YES**
   * 
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
   * @remarks
   * The Alibaba Cloud account ID.
   * 
   * @example
   * 1492387044070147
   */
  aliUid?: number;
  /**
   * @remarks
   * Indicates whether the contact is bound.
   * 
   * - **true**
   * - **fasle**
   * 
   * @example
   * true
   */
  bindContact?: boolean;
  /**
   * @remarks
   * The contact email address.
   * 
   * @example
   * t*@qq.*
   */
  contactEmail?: string;
  /**
   * @remarks
   * The Account Center contact ID. A value of 0 indicates the account contact.
   * 
   * @example
   * 0
   */
  contactId?: number;
  /**
   * @remarks
   * The Account Center contact mobile number (masked).
   * 
   * @example
   * 13580xxx136
   */
  contactMobile?: string;
  /**
   * @remarks
   * The Account Center contact name.
   * 
   * @example
   * shianyu
   */
  contactName?: string;
  /**
   * @remarks
   * Indicates whether the email address is verified.
   * 
   * - **true**
   * - **false**
   * 
   * @example
   * true
   */
  emailConfirmed?: boolean;
  /**
   * @remarks
   * Indicates whether the Account Center contact mobile number is verified.
   * 
   * - **true**
   * - **false**
   * 
   * @example
   * true
   */
  mobileConfirmed?: boolean;
  /**
   * @remarks
   * The Account Center contact position.
   * 
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
   * @remarks
   * The Alibaba Cloud account ID.
   * 
   * @example
   * 1355290655619147
   */
  aliUid?: number;
  /**
   * @remarks
   * The message category code.
   * 
   * @example
   * prod_edu_content
   */
  categoryCode?: string;
  /**
   * @remarks
   * The message category description.
   * 
   * @example
   * Product usage scenarios and technical sharing content.
   */
  categoryDesc?: string;
  /**
   * @remarks
   * The category group code.
   * 
   * @example
   * prod_msg
   */
  categoryGroupCode?: string;
  /**
   * @remarks
   * The category group name.
   * 
   * @example
   * Product messages.
   */
  categoryGroupName?: string;
  /**
   * @remarks
   * The message category name.
   * 
   * @example
   * Product educational content.
   */
  categoryName?: string;
  /**
   * @remarks
   * The channel list.
   */
  channelConfigs?: GetNotificationContactsResponseBodyDataChannelConfigs[];
  /**
   * @remarks
   * Indicates whether all notification methods are selected.
   * 
   * - **true**
   * - **false**
   * 
   * @example
   * true
   */
  chooseAllChannel?: boolean;
  /**
   * @remarks
   * The general contact list.
   */
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
   * @remarks
   * The status code.
   * 
   * - **200**: Success.
   * - **Other (400, 500)**: Failure.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The query result.
   */
  data?: GetNotificationContactsResponseBodyData[];
  /**
   * @remarks
   * The prompt message.
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
   * 2FBDD713-00A5-5C98-B661-3FD31A349B6E
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the operation is successful.
   * 
   * - **true**: Success.
   * - **false**: Failure.
   * 
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

