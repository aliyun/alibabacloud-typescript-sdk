// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeIntentStatisticsRequest extends $dara.Model {
  /**
   * @remarks
   * Instance ID
   * 
   * This parameter is required.
   * 
   * @example
   * c3c92de8-e4bd-4db4-a962-50f8acce40bc
   */
  instanceId?: string;
  /**
   * @remarks
   * Job group ID
   * 
   * This parameter is required.
   * 
   * @example
   * 040355a9-e80c-4308-b85c-aa5b9fd25246
   */
  jobGroupId?: string;
  /**
   * @remarks
   * Number of statistics to display (required)
   * 
   * @example
   * 5
   */
  limit?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      jobGroupId: 'JobGroupId',
      limit: 'Limit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      jobGroupId: 'string',
      limit: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

