// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeStatisticalDataRequest extends $dara.Model {
  /**
   * @remarks
   * The start of the query time range, specified as a Unix timestamp in milliseconds.
   * 
   * @example
   * 1582283640000
   */
  beginTimeLeftRange?: number;
  /**
   * @remarks
   * The end of the query time range, specified as a Unix timestamp in milliseconds.
   * 
   * @example
   * 1582298040000
   */
  beginTimeRightRange?: number;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * c28fc549-d88f-4f6e-85ad-a0806e5e39c0
   */
  instanceId?: string;
  /**
   * @remarks
   * The time unit. Valid values: `Day` and `Hour`.
   * 
   * This parameter is required.
   * 
   * @example
   * Day/Hour
   */
  timeUnit?: string;
  static names(): { [key: string]: string } {
    return {
      beginTimeLeftRange: 'BeginTimeLeftRange',
      beginTimeRightRange: 'BeginTimeRightRange',
      instanceId: 'InstanceId',
      timeUnit: 'TimeUnit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTimeLeftRange: 'number',
      beginTimeRightRange: 'number',
      instanceId: 'string',
      timeUnit: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

