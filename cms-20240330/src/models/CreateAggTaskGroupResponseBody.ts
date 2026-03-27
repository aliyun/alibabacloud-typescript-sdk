// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAggTaskGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * Summary of the aggregation task group configuration.
   * 
   * @example
   * a54136014dc386a92c83a6ef1e97ff22
   */
  aggTaskGroupConfigHash?: string;
  /**
   * @remarks
   * Aggregation task group ID.
   * 
   * @example
   * aggTaskGroup-f4b8e50525cf41c894488c0c71ec483f
   */
  aggTaskGroupId?: string;
  /**
   * @remarks
   * Aggregation task group name.
   * 
   * @example
   * pipeline-aggtask-group
   */
  aggTaskGroupName?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 16C0A6D6-C3E7-511D-A60B-A87FD85F5BA7
   */
  requestId?: string;
  /**
   * @remarks
   * Source Prometheus instance ID of the aggregation task group.
   * 
   * @example
   * rw-ecc04af14729b1a16e40a0d10068
   */
  sourcePrometheusId?: string;
  /**
   * @remarks
   * Current status of the aggregation task group.
   * 
   * @example
   * Pending2Running
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      aggTaskGroupConfigHash: 'aggTaskGroupConfigHash',
      aggTaskGroupId: 'aggTaskGroupId',
      aggTaskGroupName: 'aggTaskGroupName',
      requestId: 'requestId',
      sourcePrometheusId: 'sourcePrometheusId',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggTaskGroupConfigHash: 'string',
      aggTaskGroupId: 'string',
      aggTaskGroupName: 'string',
      requestId: 'string',
      sourcePrometheusId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

