// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAggTaskGroupResponseBody extends $dara.Model {
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
   * aggTaskGroup-5fb2c3ade63a4709bcb059d13493b7b8
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
   * 8FDE2569-626B-5176-9844-28877A*****
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the source Prometheus instance for the aggregation task group.
   * 
   * @example
   * rw-083e17834e279f8c627fe91a2d72
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

