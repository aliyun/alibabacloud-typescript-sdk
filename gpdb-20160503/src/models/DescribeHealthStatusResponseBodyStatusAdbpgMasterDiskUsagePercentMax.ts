// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHealthStatusResponseBodyStatusAdbpgMasterDiskUsagePercentMax extends $dara.Model {
  /**
   * @remarks
   * The status corresponding to the maximum storage usage of the coordinator node. Valid values:
   * 
   * *   **critical**: The coordinator node storage usage is greater than or equal to 90%. In this case, the instance is locked.
   * *   **warning**: The coordinator node storage usage is greater than or equal to 70% and less than 90%.
   * *   **healthy**: The coordinator node storage usage is less than 70%.
   * 
   * @example
   * healthy
   */
  status?: string;
  /**
   * @remarks
   * The metric value of maximum coordinator node storage usage.
   * 
   * Unit: %.
   * 
   * @example
   * 1.34
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

