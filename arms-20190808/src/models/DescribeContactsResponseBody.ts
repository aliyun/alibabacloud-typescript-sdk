// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeContactsResponseBodyPageBeanAlertContacts extends $dara.Model {
  /**
   * @remarks
   * The ID of the alert contact.
   * 
   * @example
   * 100147
   */
  armsContactId?: number;
  /**
   * @remarks
   * The ID of the alert contact.
   * 
   * @example
   * 123
   */
  contactId?: number;
  /**
   * @remarks
   * The name of the alert contact.
   * 
   * @example
   * John Doe
   */
  contactName?: string;
  /**
   * @remarks
   * The email address of the alert contact.
   * 
   * @example
   * someone@example.com
   */
  email?: string;
  /**
   * @remarks
   * Indicates whether the email address was verified.
   * 
   * @example
   * true
   */
  isEmailVerify?: boolean;
  /**
   * @remarks
   * Indicates whether the mobile number was verified. Valid values:
   * 
   * *   `false`: no
   * *   `true`: yes
   * 
   * @example
   * false
   */
  isVerify?: boolean;
  /**
   * @remarks
   * The mobile number of the alert contact.
   * 
   * @example
   * 1381111****
   */
  phone?: string;
  /**
   * @remarks
   * The operation that you want to perform if phone calls fail to be answered. Valid values:
   * 
   * *   0: No operation is performed.
   * *   1: A phone call is made again.
   * *   2: A text message is sent.
   * *   3 (default value): The global default value is used.
   * 
   * @example
   * 3
   */
  reissueSendNotice?: number;
  static names(): { [key: string]: string } {
    return {
      armsContactId: 'ArmsContactId',
      contactId: 'ContactId',
      contactName: 'ContactName',
      email: 'Email',
      isEmailVerify: 'IsEmailVerify',
      isVerify: 'IsVerify',
      phone: 'Phone',
      reissueSendNotice: 'ReissueSendNotice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      armsContactId: 'number',
      contactId: 'number',
      contactName: 'string',
      email: 'string',
      isEmailVerify: 'boolean',
      isVerify: 'boolean',
      phone: 'string',
      reissueSendNotice: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContactsResponseBodyPageBean extends $dara.Model {
  /**
   * @remarks
   * The alert contacts.
   */
  alertContacts?: DescribeContactsResponseBodyPageBeanAlertContacts[];
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * The number of alert contacts returned per page.
   * 
   * @example
   * 20
   */
  size?: number;
  /**
   * @remarks
   * The total number of alert contacts.
   * 
   * @example
   * 1
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      alertContacts: 'AlertContacts',
      page: 'Page',
      size: 'Size',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertContacts: { 'type': 'array', 'itemType': DescribeContactsResponseBodyPageBeanAlertContacts },
      page: 'number',
      size: 'number',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.alertContacts)) {
      $dara.Model.validateArray(this.alertContacts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContactsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The objects that were returned.
   */
  pageBean?: DescribeContactsResponseBodyPageBean;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 21E85B16-75A6-429A-9F65-8AAC9A54****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pageBean: 'PageBean',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageBean: DescribeContactsResponseBodyPageBean,
      requestId: 'string',
    };
  }

  validate() {
    if(this.pageBean && typeof (this.pageBean as any).validate === 'function') {
      (this.pageBean as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

