// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeStatisticalDataRequest extends $dara.Model {
  /**
   * @example
   * 1582283640000
   */
  beginTimeLeftRange?: number;
  /**
   * @example
   * 1582298040000
   */
  beginTimeRightRange?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * c28fc549-d88f-4f6e-85ad-a0806e5e39c0
   */
  instanceId?: string;
  /**
   * @remarks
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

