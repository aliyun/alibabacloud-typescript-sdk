// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PatchEventRequestRecurrenceRange extends $dara.Model {
  /**
   * @example
   * 2021-12-31T10:15:30+08:00
   */
  endDate?: string;
  /**
   * @example
   * 1
   */
  numberOfOccurrences?: number;
  /**
   * @example
   * endDate
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      endDate: 'endDate',
      numberOfOccurrences: 'numberOfOccurrences',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endDate: 'string',
      numberOfOccurrences: 'number',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

