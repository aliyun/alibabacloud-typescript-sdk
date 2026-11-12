// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ScheduleValue extends $dara.Model {
  /**
   * @remarks
   * The ID of the on-call contact.
   * 
   * @example
   * testId
   */
  contactId?: string;
  /**
   * @remarks
   * The end time. Format: yyyy-MM-dd HH:mm:ss.
   * 
   * @example
   * 2024-10-01 02:00:00
   */
  end?: string;
  /**
   * @remarks
   * The start time. Format: yyyy-MM-dd HH:mm:ss.
   * 
   * @example
   * 2024-10-01 22:00:00
   */
  start?: string;
  /**
   * @remarks
   * The name of the on-call contact.
   * 
   * @example
   * testName
   */
  contactName?: string;
  static names(): { [key: string]: string } {
    return {
      contactId: 'contactId',
      end: 'end',
      start: 'start',
      contactName: 'contactName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactId: 'string',
      end: 'string',
      start: 'string',
      contactName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

