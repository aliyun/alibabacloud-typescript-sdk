// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeScreenScoreThreadRequest extends $dara.Model {
  /**
   * @remarks
   * The end of the time range to query. This value is a UNIX timestamp. Unit: milliseconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1668064495000
   */
  endTime?: number;
  /**
   * @remarks
   * Source of security score, default is Cloud Security Center if left empty. Enum values: 
   * - 0:Cloud Security Center. 
   * - 1:Yaochi Console.
   * 
   * @example
   * 0
   */
  source?: number;
  /**
   * @remarks
   * The beginning of the time range to query. This value is a UNIX timestamp. Unit: milliseconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1651290987000
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      source: 'Source',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      source: 'number',
      startTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

