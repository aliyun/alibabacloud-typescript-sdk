// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEventsResponseBodyEventsRecurrenceRange extends $dara.Model {
  /**
   * @example
   * 2020-01-01T10:15:30+08:00
   */
  endDate?: string;
  /**
   * @example
   * 5
   */
  numberOfOccurrences?: number;
  /**
   * @example
   * noEnd
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      endDate: 'EndDate',
      numberOfOccurrences: 'NumberOfOccurrences',
      type: 'Type',
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

