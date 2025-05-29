// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHealthStatusResponseBodyStatusAdbpgConnectionStatus extends $dara.Model {
  /**
   * @remarks
   * The connection health status of the instance. Valid values:
   * 
   * *   **critical**: The instance connection usage is greater than 95%. In this case, this metric is marked in red in the console.
   * *   **warning**: The instance connection usage is greater than 90% and less than or equal to 95%. In this case, this metric is marked in yellow in the console.
   * *   **healthy**: The instance connection usage is less than or equal to 90%. In this case, this metric is marked in green in the console.
   * 
   * >  The instance connection usage is the maximum connection usage among all the coordinator and compute nodes.
   * 
   * @example
   * healthy
   */
  status?: string;
  /**
   * @remarks
   * The metric value of instance connection usage.
   * 
   * Unit: %.
   * 
   * @example
   * 1.71
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

