// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListContactsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The contact email.
   * 
   * @example
   * xxxx @alibaba-inc.com
   */
  contactEmail?: string;
  /**
   * @remarks
   * The contact ID.
   * 
   * @example
   * 0
   */
  contactId?: number;
  /**
   * @remarks
   * The contact name.
   * 
   * @example
   * 黄勇
   */
  contactName?: string;
  /**
   * @remarks
   * The contact mobile number.
   * 
   * @example
   * 19211111111
   */
  contactPhone?: string;
  /**
   * @remarks
   * The email status.
   * 
   * - 1: Normal
   * 
   * - 0: Abnormal
   * 
   * @example
   * 1
   */
  mailStatus?: number;
  /**
   * @remarks
   * The calling number.
   * 
   * @example
   * 0
   */
  main?: number;
  /**
   * @remarks
   * Specifies whether the number status warning is enabled.
   * 
   * - **true**: Enabled.
   * 
   * - **false**: Disabled.
   * 
   * @example
   * true
   */
  openStatusWarning?: boolean;
  /**
   * @remarks
   * Specifies whether the number attribution query warning is enabled.
   * 
   * - **true**: Enabled.
   * 
   * - **false**: Disabled.
   * 
   * @example
   * true
   */
  opentAttributionWarning?: boolean;
  /**
   * @remarks
   * The number status.
   * 
   * - 1: Normal
   * 
   * - 0: Abnormal
   * 
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
   * @remarks
   * The status code. `OK` indicates a successful request.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * An array of contact information objects.
   */
  data?: ListContactsResponseBodyData[];
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
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

