// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPopTrafficStatisticsResponseBodyTrafficDataDatapoints extends $dara.Model {
  /**
   * @example
   * 15325
   */
  average?: number;
  /**
   * @example
   * 2023-12-06 15:29:00
   */
  dateTime?: string;
  static names(): { [key: string]: string } {
    return {
      average: 'Average',
      dateTime: 'DateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      average: 'number',
      dateTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

