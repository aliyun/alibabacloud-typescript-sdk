// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeScreenScoreThreadRequest extends $dara.Model {
  /**
   * @remarks
   * The end time as a timestamp. Unit: milliseconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1668064495000
   */
  endTime?: number;
  /**
   * @remarks
   * The source of the security score. If left empty, the default value is Security Center. Valid values:
   * 
   * 0: Security Center.
   * 
   * 1: Alibaba Cloud ApsaraDB console.
   * 
   * @example
   * 0
   */
  source?: number;
  /**
   * @remarks
   * The start time as a timestamp. Unit: milliseconds.
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

