// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHealthStatusResponseBodyStatusAdbpgStatus extends $dara.Model {
  /**
   * @remarks
   * The health status of the instance. Valid values:
   * 
   * *   **critical**: The coordinator node or a compute node is unavailable. In this case, this metric is marked in red in the console.
   * *   **healthy**: All nodes are available. In this case, this metric is marked in green in the console.
   * 
   * @example
   * healthy
   */
  status?: string;
  /**
   * @remarks
   * The metric value of instance health status. Valid values:
   * 
   * *   **1**: healthy
   * *   **0**: critical
   * 
   * @example
   * 1
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

