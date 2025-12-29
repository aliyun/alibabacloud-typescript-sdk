// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListContactsResponseBodyData extends $dara.Model {
  /**
   * @example
   * xxxx @alibaba-inc.com
   */
  contactEmail?: string;
  /**
   * @example
   * 0
   */
  contactId?: number;
  contactName?: string;
  /**
   * @example
   * 19211111111
   */
  contactPhone?: string;
  /**
   * @example
   * 1
   */
  mailStatus?: number;
  /**
   * @example
   * 0
   */
  main?: number;
  /**
   * @example
   * true
   */
  openStatusWarning?: boolean;
  /**
   * @example
   * true
   */
  opentAttributionWarning?: boolean;
  /**
   * @example
   * 1
   */
  phoneStatus?: number;
  static names(): { [key: string]: string } {
    return {
      contactEmail: 'ContactEmail',
      contactId: 'ContactId',
      contactName: 'ContactName',
      contactPhone: 'ContactPhone',
      mailStatus: 'MailStatus',
      main: 'Main',
      openStatusWarning: 'OpenStatusWarning',
      opentAttributionWarning: 'OpentAttributionWarning',
      phoneStatus: 'PhoneStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactEmail: 'string',
      contactId: 'number',
      contactName: 'string',
      contactPhone: 'string',
      mailStatus: 'number',
      main: 'number',
      openStatusWarning: 'boolean',
      opentAttributionWarning: 'boolean',
      phoneStatus: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListContactsResponseBody extends $dara.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  data?: ListContactsResponseBodyData[];
  /**
   * @example
   * OK
   */
  message?: string;
  /**
   * @example
   * CC3BB6D2-2FDF-4321-9DCE-B38165CE4C47
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListContactsResponseBodyData },
      message: 'string',
      requestId: 'string',
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

