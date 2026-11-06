// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDataProcessJobAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the data processing task to query.
   * 
   * This parameter is required.
   * 
   * @example
   * job-123456
   */
  jobId?: string;
  /**
   * @remarks
   * The region ID of the region where the task is located.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

