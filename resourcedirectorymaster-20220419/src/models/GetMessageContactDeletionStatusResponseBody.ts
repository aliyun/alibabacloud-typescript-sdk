// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMessageContactDeletionStatusResponseBodyContactDeletionStatusFailReasonList extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud account ID of the member.
   * 
   * @example
   * 199796839435****
   */
  accountId?: string;
  /**
   * @remarks
   * The types of messages received by the contact.
   */
  messageTypes?: string[];
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      messageTypes: 'MessageTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      messageTypes: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.messageTypes)) {
      $dara.Model.validateArray(this.messageTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMessageContactDeletionStatusResponseBodyContactDeletionStatus extends $dara.Model {
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
   * The types of messages received by the contact.
   */
  failReasonList?: GetMessageContactDeletionStatusResponseBodyContactDeletionStatusFailReasonList[];
  /**
   * @remarks
   * The deletion status of the contact. Valid values:
   * 
   * *   Deleting
   * *   Failed
   * 
   * @example
   * Deleting
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      contactId: 'ContactId',
      failReasonList: 'FailReasonList',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactId: 'string',
      failReasonList: { 'type': 'array', 'itemType': GetMessageContactDeletionStatusResponseBodyContactDeletionStatusFailReasonList },
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.failReasonList)) {
      $dara.Model.validateArray(this.failReasonList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMessageContactDeletionStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The deletion information of the contact.
   */
  contactDeletionStatus?: GetMessageContactDeletionStatusResponseBodyContactDeletionStatus;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 95060F1D-6990-4645-8920-A81D1BBFE992
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      contactDeletionStatus: 'ContactDeletionStatus',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactDeletionStatus: GetMessageContactDeletionStatusResponseBodyContactDeletionStatus,
      requestId: 'string',
    };
  }

  validate() {
    if(this.contactDeletionStatus && typeof (this.contactDeletionStatus as any).validate === 'function') {
      (this.contactDeletionStatus as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

