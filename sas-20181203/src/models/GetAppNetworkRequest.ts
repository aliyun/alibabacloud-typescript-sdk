// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAppNetworkRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the container cluster to query.
   * > You can call the [DescribeGroupedContainerInstances](~~DescribeGroupedContainerInstances~~) operation to obtain this parameter.
   * 
   * @example
   * cf77xxx
   */
  clusterId?: string;
  /**
   * @remarks
   * The timestamp of the end time. Unit: milliseconds.
   * 
   * > The difference between the start timestamp and the end timestamp cannot exceed **7** days.
   * 
   * @example
   * 1650470399999
   */
  endTime?: number;
  /**
   * @remarks
   * The timestamp of the start time. Unit: milliseconds.
   * 
   * > The difference between the start timestamp and the end timestamp cannot exceed **7** days.
   * 
   * @example
   * 1649260800000
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      endTime: 'EndTime',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      endTime: 'number',
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

