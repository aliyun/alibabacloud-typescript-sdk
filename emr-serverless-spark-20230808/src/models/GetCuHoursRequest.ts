// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCuHoursRequest extends $dara.Model {
  /**
   * @remarks
   * The end time of the query time range.
   * 
   * This parameter is required.
   * 
   * @example
   * 2024-01-08 00:00:00
   */
  endTime?: string;
  /**
   * @remarks
   * The start time of the query time range.
   * 
   * This parameter is required.
   * 
   * @example
   * 2024-01-01 00:00:00
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'endTime',
      startTime: 'startTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

