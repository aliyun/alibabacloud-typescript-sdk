// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeContactGroupsResponseBodyPageBeanAlertContactGroupsContacts extends $dara.Model {
  /**
   * @remarks
   * The ID of the alert contact.
   * 
   * @example
   * 100117
   */
  armsContactId?: number;
  /**
   * @remarks
   * The ID of the alert contact.
   * 
   * @example
   * 456
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
   * The mobile number of the alert contact.
   * 
   * @example
   * 1381111****
   */
  phone?: string;
  static names(): { [key: string]: string } {
    return {
      armsContactId: 'ArmsContactId',
      contactId: 'ContactId',
      contactName: 'ContactName',
      email: 'Email',
      phone: 'Phone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      armsContactId: 'number',
      contactId: 'number',
      contactName: 'string',
      email: 'string',
      phone: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContactGroupsResponseBodyPageBeanAlertContactGroups extends $dara.Model {
  /**
   * @remarks
   * The ID of the alert contact group.
   * 
   * @example
   * 83261
   */
  armsContactGroupId?: number;
  /**
   * @remarks
   * The ID of the alert contact group.
   * 
   * @example
   * 123
   */
  contactGroupId?: number;
  /**
   * @remarks
   * The name of the alert contact group.
   * 
   * @example
   * TestGroup
   */
  contactGroupName?: string;
  /**
   * @remarks
   * The contact information. If the **IsDetail** parameter is set to `false`, no **contact** information is displayed.
   */
  contacts?: DescribeContactGroupsResponseBodyPageBeanAlertContactGroupsContacts[];
  static names(): { [key: string]: string } {
    return {
      armsContactGroupId: 'ArmsContactGroupId',
      contactGroupId: 'ContactGroupId',
      contactGroupName: 'ContactGroupName',
      contacts: 'Contacts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      armsContactGroupId: 'number',
      contactGroupId: 'number',
      contactGroupName: 'string',
      contacts: { 'type': 'array', 'itemType': DescribeContactGroupsResponseBodyPageBeanAlertContactGroupsContacts },
    };
  }

  validate() {
    if(Array.isArray(this.contacts)) {
      $dara.Model.validateArray(this.contacts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContactGroupsResponseBodyPageBean extends $dara.Model {
  /**
   * @remarks
   * The name of the alert contact group.
   */
  alertContactGroups?: DescribeContactGroupsResponseBodyPageBeanAlertContactGroups[];
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
   * The number of alert contact groups displayed on each page.
   * 
   * @example
   * 20
   */
  size?: number;
  /**
   * @remarks
   * The total number of alert contact groups.
   * 
   * @example
   * 1
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      alertContactGroups: 'AlertContactGroups',
      page: 'Page',
      size: 'Size',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertContactGroups: { 'type': 'array', 'itemType': DescribeContactGroupsResponseBodyPageBeanAlertContactGroups },
      page: 'number',
      size: 'number',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.alertContactGroups)) {
      $dara.Model.validateArray(this.alertContactGroups);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContactGroupsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The objects that were returned.
   */
  pageBean?: DescribeContactGroupsResponseBodyPageBean;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 4D6C358A-A58B-4F4B-94CE-F5AAF023****
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
      pageBean: DescribeContactGroupsResponseBodyPageBean,
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

