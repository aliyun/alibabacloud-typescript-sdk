// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCommonLogDetailRequest extends $dara.Model {
  /**
   * @remarks
   * The start time of the time range within which the logs that you want to query were generated. The time is a timestamp. This value is a UNIX timestamp representing the number of seconds that have elapsed since the epoch time January 1, 1970, 00:00:00 UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 1703821542
   */
  from?: number;
  /**
   * @remarks
   * Specifies whether to hide the process of each step. Valid values:
   * 
   * *   true: hides the process and returns only the result log of each step.
   * *   false: does not hide the process and displays the start and result logs of each step.
   * 
   * Default value: true.
   * 
   * @example
   * true
   */
  hiddenProcess?: boolean;
  /**
   * @remarks
   * The request ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE7****
   */
  logRequestId?: string;
  /**
   * @remarks
   * The end time of the time range within which the logs that you want to query were generated. The time is a timestamp. This value is a UNIX timestamp representing the number of seconds that have elapsed since the epoch time January 1, 1970, 00:00:00 UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 1703821666
   */
  to?: number;
  static names(): { [key: string]: string } {
    return {
      from: 'From',
      hiddenProcess: 'HiddenProcess',
      logRequestId: 'LogRequestId',
      to: 'To',
    };
  }

  static types(): { [key: string]: any } {
    return {
      from: 'number',
      hiddenProcess: 'boolean',
      logRequestId: 'string',
      to: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

