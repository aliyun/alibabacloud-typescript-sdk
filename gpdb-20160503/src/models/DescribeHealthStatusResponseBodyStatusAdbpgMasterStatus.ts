// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHealthStatusResponseBodyStatusAdbpgMasterStatus extends $dara.Model {
  /**
   * @remarks
   * The availability status of the coordinator node. Valid values:
   * 
   * *   **critical**: Both the primary and standby coordinator nodes are unavailable. In this case, this metric is marked in red in the console.
   * *   **warning**: The primary or standby coordinator node is unavailable. In this case, this metric is marked in yellow in the console.
   * *   **healthy**: Both the primary and standby coordinator nodes are available. In this case, this metric is marked in green in the console.
   * 
   * @example
   * healthy
   */
  status?: string;
  /**
   * @remarks
   * The metric value of coordinator node availability status. Valid values:
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

