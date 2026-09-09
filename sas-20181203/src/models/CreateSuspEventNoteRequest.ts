// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSuspEventNoteRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the alert event for which you want to add a note. Call [DescribeSuspEvents](https://help.aliyun.com/document_detail/251497.html) to obtain the alert event ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 668931
   */
  eventId?: number;
  /**
   * @remarks
   * The note to add.
   * 
   * This parameter is required.
   * 
   * @example
   * Ignore
   */
  note?: string;
  /**
   * @remarks
   * The ID of the member accounts in the resource folder.
   * >Invoke [DescribeMonitorAccounts](~~DescribeMonitorAccounts~~) to obtain this parameter.
   */
  resourceDirectoryAccountId?: number;
  static names(): { [key: string]: string } {
    return {
      eventId: 'EventId',
      note: 'Note',
      resourceDirectoryAccountId: 'ResourceDirectoryAccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventId: 'number',
      note: 'string',
      resourceDirectoryAccountId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

