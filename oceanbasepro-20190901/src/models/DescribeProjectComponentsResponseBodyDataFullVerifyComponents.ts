// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeProjectComponentsResponseBodyDataFullVerifyComponentsErrorDetails } from "./DescribeProjectComponentsResponseBodyDataFullVerifyComponentsErrorDetails";


export class DescribeProjectComponentsResponseBodyDataFullVerifyComponents extends $dara.Model {
  /**
   * @example
   * 100
   */
  consistentQuantity?: number;
  errorDetails?: DescribeProjectComponentsResponseBodyDataFullVerifyComponentsErrorDetails[];
  /**
   * @example
   * 0
   */
  inconsistentQuantity?: number;
  /**
   * @example
   * xxx.xxx.xxx.1
   */
  ip?: string;
  /**
   * @example
   * xxx.xxx.xxx.1-9000:90247:0000000033
   */
  name?: string;
  /**
   * @example
   * 100
   */
  progress?: string;
  /**
   * @example
   * 100
   */
  recordProgress?: number;
  /**
   * @example
   * cn-beijing
   */
  region?: string;
  /**
   * @example
   * RUNNING
   */
  status?: string;
  /**
   * @example
   * 1345***
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      consistentQuantity: 'ConsistentQuantity',
      errorDetails: 'ErrorDetails',
      inconsistentQuantity: 'InconsistentQuantity',
      ip: 'Ip',
      name: 'Name',
      progress: 'Progress',
      recordProgress: 'RecordProgress',
      region: 'Region',
      status: 'Status',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consistentQuantity: 'number',
      errorDetails: { 'type': 'array', 'itemType': DescribeProjectComponentsResponseBodyDataFullVerifyComponentsErrorDetails },
      inconsistentQuantity: 'number',
      ip: 'string',
      name: 'string',
      progress: 'string',
      recordProgress: 'number',
      region: 'string',
      status: 'string',
      taskId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.errorDetails)) {
      $dara.Model.validateArray(this.errorDetails);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

