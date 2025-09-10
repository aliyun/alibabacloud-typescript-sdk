// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAggTaskGroupStatusResponseBody extends $dara.Model {
  /**
   * @example
   * a54136014dc386a92c83a6ef1e97ff22
   */
  aggTaskGroupConfigHash?: string;
  /**
   * @example
   * aggTaskGroup-xxx
   */
  aggTaskGroupId?: string;
  /**
   * @example
   * pipeline-aggtask-group
   */
  aggTaskGroupName?: string;
  /**
   * @example
   * 0CEC5375-C554-562B-A65F-***
   */
  requestId?: string;
  /**
   * @example
   * rw-xxx
   */
  sourcePrometheusId?: string;
  /**
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

