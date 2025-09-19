// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSuspEventNoteRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the alert event to which you want to add remarks. You can call the [DescribeSuspEvents](https://help.aliyun.com/document_detail/251497.html) operation to query the IDs of alert events.
   * 
   * This parameter is required.
   * 
   * @example
   * 668931
   */
  eventId?: number;
  /**
   * @remarks
   * The remarks that you want to add.
   * 
   * This parameter is required.
   * 
   * @example
   * Ignore
   */
  note?: string;
  static names(): { [key: string]: string } {
    return {
      eventId: 'EventId',
      note: 'Note',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventId: 'number',
      note: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

