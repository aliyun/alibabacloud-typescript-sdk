// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHealthStatusResponseBodyStatusNodeMasterConnectionStatus extends $dara.Model {
  /**
   * @remarks
   * The connection health status of the coordinator node. Valid values:
   * 
   * *   **critical**: The coordinator node connection usage is greater than 95%. In this case, this metric is marked in red in the console.
   * *   **warning**: The coordinator node connection usage is greater than or equal to 90% and less than 95%. In this case, this metric is marked in yellow in the console.
   * *   **healthy**: The coordinator node connection usage is less than 90%. In this case, this metric is marked in green in the console.
   * 
   * >  The coordinator node connection usage is the maximum connection usage of the coordinator node.
   * 
   * @example
   * healthy
   */
  status?: string;
  /**
   * @remarks
   * The metric value of coordinator node connection usage.
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

