// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTraceRequest extends $dara.Model {
  /**
   * @remarks
   * The end time, in YYYY-MM-DD HH:mm:ss format.
   * 
   * @example
   * 2024-09-09 09:00:00
   */
  endTime?: string;
  /**
   * @remarks
   * The start time, in YYYY-MM-DD HH:mm:ss format.
   * 
   * @example
   * 2023-05-10 10:42:11
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

