// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeHealthCheckListResponseBodyHealthCheckList } from "./DescribeHealthCheckListResponseBodyHealthCheckList";


export class DescribeHealthCheckListResponseBody extends $dara.Model {
  /**
   * @remarks
   * An array that consists of information about the health check configuration.
   */
  healthCheckList?: DescribeHealthCheckListResponseBodyHealthCheckList[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 83B4AF42-E8EE-4DC9-BD73-87B7733A36F9
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      healthCheckList: 'HealthCheckList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      healthCheckList: { 'type': 'array', 'itemType': DescribeHealthCheckListResponseBodyHealthCheckList },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.healthCheckList)) {
      $dara.Model.validateArray(this.healthCheckList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

