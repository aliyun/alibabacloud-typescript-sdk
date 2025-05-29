// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDataReDistributeInfoResponseBodyDataReDistributeInfo extends $dara.Model {
  /**
   * @remarks
   * The execution information. If an error occurs, the error message is returned.
   * 
   * @example
   * redistributing
   */
  message?: string;
  /**
   * @remarks
   * The progress of data redistribution. Unit: %.
   * 
   * @example
   * 33
   */
  progress?: number;
  /**
   * @remarks
   * The estimated remaining time for data redistribution.
   * 
   * @example
   * 00:01:28
   */
  remainTime?: string;
  /**
   * @remarks
   * This parameter is not supported.
   * 
   * @example
   * null
   */
  startTime?: string;
  /**
   * @remarks
   * The status of data redistribution.
   * 
   * @example
   * RUNNING
   */
  status?: string;
  /**
   * @remarks
   * The execution type. The value **immediate** is returned, indicating immediate execution.
   * 
   * @example
   * immediate
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      progress: 'Progress',
      remainTime: 'RemainTime',
      startTime: 'StartTime',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      progress: 'number',
      remainTime: 'string',
      startTime: 'string',
      status: 'string',
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

