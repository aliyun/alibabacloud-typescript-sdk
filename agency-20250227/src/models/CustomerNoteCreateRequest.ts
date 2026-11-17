// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CustomerNoteCreateRequest extends $dara.Model {
  /**
   * @remarks
   * The contact information.
   * 
   * @example
   * 13833333333
   */
  contactInformation?: string;
  /**
   * @remarks
   * The contact name.
   * 
   * @example
   * Zhang San
   */
  contactName?: string;
  /**
   * @remarks
   * The customer name.
   * 
   * @example
   * XXXX Co., Ltd
   */
  customerName?: string;
  /**
   * @remarks
   * The customer UID.
   * 
   * @example
   * 1647796581073291
   */
  customerUid?: string;
  /**
   * @remarks
   * The note content.
   * 
   * @example
   * Routine customer visit to discuss the agent implementation plan for the customer
   */
  noteContent?: string;
  /**
   * @remarks
   * The contact time (timestamp, in milliseconds).
   * 
   * @example
   * 1784266662000
   */
  touchDate?: number;
  static names(): { [key: string]: string } {
    return {
      contactInformation: 'ContactInformation',
      contactName: 'ContactName',
      customerName: 'CustomerName',
      customerUid: 'CustomerUid',
      noteContent: 'NoteContent',
      touchDate: 'TouchDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactInformation: 'string',
      contactName: 'string',
      customerName: 'string',
      customerUid: 'string',
      noteContent: 'string',
      touchDate: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

