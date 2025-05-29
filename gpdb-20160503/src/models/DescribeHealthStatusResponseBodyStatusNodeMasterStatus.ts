// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHealthStatusResponseBodyStatusNodeMasterStatus extends $dara.Model {
  /**
   * @remarks
   * The health status of the coordinator node. Valid values:
   * 
   * *   **critical**: The primary or standby coordinator node is unavailable. In this case, this metric is marked in red in the console.
   * *   **healthy**: Both the primary and standby coordinator nodes are available. In this case, this metric is marked in green in the console.
   * 
   * @example
   * healthy
   */
  status?: string;
  /**
   * @remarks
   * The metric value of coordinator node health status. Valid values:
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

