// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHealthStatusResponseBodyStatusNodeSegmentDiskStatus extends $dara.Model {
  /**
   * @remarks
   * The storage status of compute nodes. Valid values:
   * 
   * *   **critical**: The compute node storage usage is greater than or equal to 90%. In this case, this metric is marked in red in the console and the instance is locked.
   * *   **warning**: The compute node storage usage is greater than or equal to 80% and less than 90%. In this case, this metric is marked in yellow in the console.
   * *   **healthy**: The compute node storage usage is less than 80%. In this case, this metric is marked in green in the console.
   * 
   * >  The compute node storage usage is the maximum storage usage among all compute nodes.
   * 
   * @example
   * healthy
   */
  status?: string;
  /**
   * @remarks
   * The metric value of maximum compute node storage usage.
   * 
   * Unit: %.
   * 
   * @example
   * 1.52
   */
  value?: number;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      value: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

