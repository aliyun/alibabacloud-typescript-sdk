// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAggTaskGroupStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The summary of the aggregation task group configuration.
   * 
   * @example
   * a54136014dc386a92c83a6ef1e97ff22
   */
  aggTaskGroupConfigHash?: string;
  /**
   * @remarks
   * The ID of the aggregation task group.
   * 
   * @example
   * aggTaskGroup-xxx
   */
  aggTaskGroupId?: string;
  /**
   * @remarks
   * The name of the aggregation task group.
   * 
   * @example
   * pipeline-aggtask-group
   */
  aggTaskGroupName?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0CEC5375-C554-562B-A65F-***
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the source Prometheus instance for the aggregation task group.
   * 
   * @example
   * rw-xxx
   */
  sourcePrometheusId?: string;
  /**
   * @remarks
   * The current status of the aggregation task group.
   * 
   * @example
   * Running
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

