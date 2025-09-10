// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAggTaskGroupResponseBody extends $dara.Model {
  /**
   * @example
   * a54136014dc386a92c83a6ef1e97ff22
   */
  aggTaskGroupConfigHash?: string;
  /**
   * @example
   * aggTaskGroup-f4b8e50525cf41c894488c0c71ec483f
   */
  aggTaskGroupId?: string;
  /**
   * @example
   * pipeline-aggtask-group
   */
  aggTaskGroupName?: string;
  /**
   * @example
   * 16C0A6D6-C3E7-511D-A60B-A87FD85F5BA7
   */
  requestId?: string;
  /**
   * @example
   * rw-ecc04af14729b1a16e40a0d10068
   */
  sourcePrometheusId?: string;
  /**
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

