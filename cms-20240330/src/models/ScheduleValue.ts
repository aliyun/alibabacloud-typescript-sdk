// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ScheduleValue extends $dara.Model {
  /**
   * @example
   * testId
   */
  contactId?: string;
  /**
   * @example
   * testName
   */
  contactName?: string;
  /**
   * @example
   * 2024-10-01 02:00:00
   */
  end?: string;
  /**
   * @example
   * 2024-10-01 22:00:00
   */
  start?: string;
  static names(): { [key: string]: string } {
    return {
      contactId: 'contactId',
      contactName: 'contactName',
      end: 'end',
      start: 'start',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactId: 'string',
      contactName: 'string',
      end: 'string',
      start: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

