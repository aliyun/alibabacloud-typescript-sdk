// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeServiceMeshLogsResponseBodyLogs extends $dara.Model {
  /**
   * @remarks
   * The point in time when the logs were generated.
   * 
   * @example
   * 2021-11-19T15:21:53+08:00
   */
  creationTime?: string;
  /**
   * @remarks
   * The content of the logs.
   * 
   * @example
   * [RequestID: 31d3a0f0-07ed-4f6e-9004-1804498c****, UID-110982038403****] c096d641835af4658827a4c66c234**** | Start to add cluster c186a6d9641a24098b5499d4d8313****
   */
  log?: string;
  /**
   * @remarks
   * The ASM instance ID.
   * 
   * @example
   * ca04bc38979214bf2882be79d39b4****
   */
  serviceMeshId?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      log: 'Log',
      serviceMeshId: 'ServiceMeshId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      log: 'string',
      serviceMeshId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshLogsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the logs.
   */
  logs?: DescribeServiceMeshLogsResponseBodyLogs[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 31d3a0f0-07ed-4f6e-9004-1804498c****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      logs: 'Logs',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logs: { 'type': 'array', 'itemType': DescribeServiceMeshLogsResponseBodyLogs },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.logs)) {
      $dara.Model.validateArray(this.logs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

