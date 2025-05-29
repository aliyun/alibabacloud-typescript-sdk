// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHealthStatusResponseBodyStatusAdbgpSegmentDiskUsagePercentMax extends $dara.Model {
  /**
   * @remarks
   * The status corresponding to the maximum storage usage among all compute nodes. Valid values:
   * 
   * *   **critical**: The compute node storage usage is greater than or equal to 90%. In this case, the instance is locked.
   * *   **warning**: The compute node storage usage is greater than or equal to 80% and less than 90%.
   * *   **healthy**: The compute node storage usage is less than 80%.
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

