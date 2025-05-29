// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHealthStatusResponseBodyStatusAdbpgDiskUsagePercent extends $dara.Model {
  /**
   * @remarks
   * The status corresponding to the storage usage of the instance. Valid values:
   * 
   * *   **critical**: The instance storage usage is greater than or equal to 90%. In this case, the instance is locked.
   * *   **warning**: The instance storage usage is greater than or equal to 70% and less than 90%.
   * *   **healthy**: The instance storage usage is less than 70%.
   * 
   * >  The instance storage usage is the average storage usage of all compute nodes.
   * 
   * @example
   * healthy
   */
  status?: string;
  /**
   * @remarks
   * The metric value of instance storage usage.
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

