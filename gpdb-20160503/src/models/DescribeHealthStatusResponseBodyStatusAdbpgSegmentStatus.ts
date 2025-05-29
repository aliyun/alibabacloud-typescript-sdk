// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHealthStatusResponseBodyStatusAdbpgSegmentStatus extends $dara.Model {
  /**
   * @remarks
   * The availability status of compute nodes. Valid values:
   * 
   * *   **critical**: All the primary and secondary compute nodes are unavailable. In this case, this metric is marked in red in the console.
   * *   **warning**: Fifty percent or more than fifty percent of compute nodes are unavailable. In this case, this metric is marked in yellow in the console.
   * *   **healthy**: All compute nodes are available. In this case, this metric is marked in green in the console.
   * 
   * @example
   * healthy
   */
  status?: string;
  /**
   * @remarks
   * The metric value of compute node availability status.
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

