// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeInstanceStatisticsResponseBodyInstanceStatistics } from "./DescribeInstanceStatisticsResponseBodyInstanceStatistics";


export class DescribeInstanceStatisticsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The statistics on the instance.
   */
  instanceStatistics?: DescribeInstanceStatisticsResponseBodyInstanceStatistics[];
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 642319A9-D1F2-4459-A447-E57CFC599FDE
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceStatistics: 'InstanceStatistics',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceStatistics: { 'type': 'array', 'itemType': DescribeInstanceStatisticsResponseBodyInstanceStatistics },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instanceStatistics)) {
      $dara.Model.validateArray(this.instanceStatistics);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

