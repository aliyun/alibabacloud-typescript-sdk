// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunSyncCommandResponseBodyData extends $dara.Model {
  /**
   * @example
   * 2022-08-11 17:45:03
   */
  finishTime?: string;
  /**
   * @example
   * acp-uto81vfd8t8z****
   */
  instanceId?: string;
  /**
   * @example
   * t-15775dc8****
   */
  invocationId?: string;
  /**
   * @example
   * RUNNING
   */
  invocationStatus?: string;
  /**
   * @example
   * success
   */
  output?: string;
  /**
   * @example
   * 2022-10-11T08:53:32Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      finishTime: 'FinishTime',
      instanceId: 'InstanceId',
      invocationId: 'InvocationId',
      invocationStatus: 'InvocationStatus',
      output: 'Output',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      finishTime: 'string',
      instanceId: 'string',
      invocationId: 'string',
      invocationStatus: 'string',
      output: 'string',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSyncCommandResponseBody extends $dara.Model {
  data?: RunSyncCommandResponseBodyData[];
  /**
   * @example
   * 5C5CEF0A-D6E1-58D3-8750-67DB4F82****
   */
  requestId?: string;
  /**
   * @example
   * 31
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': RunSyncCommandResponseBodyData },
      requestId: 'string',
      totalCount: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

