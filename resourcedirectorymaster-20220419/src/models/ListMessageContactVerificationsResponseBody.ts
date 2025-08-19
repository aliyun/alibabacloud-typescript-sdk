// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMessageContactVerificationsResponseBodyContactVerifications extends $dara.Model {
  /**
   * @remarks
   * The ID of the contact.
   * 
   * @example
   * c-qL4HqKONzOM7****
   */
  contactId?: string;
  /**
   * @remarks
   * The object that is used for verification. Valid values:
   * 
   * - Mobile phone number
   * - Email address
   * 
   * @example
   * someone***@example.com
   */
  target?: string;
  static names(): { [key: string]: string } {
    return {
      contactId: 'ContactId',
      target: 'Target',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactId: 'string',
      target: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMessageContactVerificationsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The record for the contact to be verified.
   */
  contactVerifications?: ListMessageContactVerificationsResponseBodyContactVerifications[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CD76D376-2517-4924-92C5-DBC52262F93A
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 48
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      contactVerifications: 'ContactVerifications',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactVerifications: { 'type': 'array', 'itemType': ListMessageContactVerificationsResponseBodyContactVerifications },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.contactVerifications)) {
      $dara.Model.validateArray(this.contactVerifications);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

