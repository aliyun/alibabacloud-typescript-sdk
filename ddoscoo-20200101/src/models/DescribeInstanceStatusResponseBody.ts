// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * ddoscoo-cn-6ja1y6p5****
   */
  instanceId?: string;
  /**
   * @remarks
   * The status of the instance. Valid values:
   * 
   * *   **1**: normal
   * *   **2**: expired
   * *   **3**: overdue
   * *   **4**: released
   * 
   * @example
   * 1
   */
  instanceStatus?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 112777CC-2AD6-46FC-A263-00B931406FCD
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      instanceStatus: 'InstanceStatus',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      instanceStatus: 'number',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

