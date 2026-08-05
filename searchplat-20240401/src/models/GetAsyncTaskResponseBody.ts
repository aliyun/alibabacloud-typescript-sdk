// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAsyncTaskResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 1729684154
   */
  created?: number;
  /**
   * @remarks
   * The playground data ID.
   * 
   * @example
   * 123
   */
  dataId?: number;
  /**
   * @remarks
   * The asynchronous task ID.
   * 
   * @example
   * taskf90b77d481c47b05c18266a31b6cdbdd
   */
  id?: string;
  /**
   * @remarks
   * The task name.
   * 
   * @example
   * 文档解析任务
   */
  name?: string;
  /**
   * @remarks
   * The parsing result.
   * 
   * @example
   * {}
   */
  result?: string;
  /**
   * @remarks
   * The service ID.
   * 
   * @example
   * ops-document-analyze-001
   */
  serviceId?: string;
  /**
   * @remarks
   * The service type.
   * 
   * @example
   * document-analyze
   */
  serviceType?: string;
  /**
   * @remarks
   * The task status. Valid values:
   * - PENDING: in progress.
   * - SUCCESS: parsing succeeded.
   * - FAILED: parsing failed.
   * 
   * @example
   * PENDING
   */
  status?: string;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 1729684154
   */
  updated?: number;
  static names(): { [key: string]: string } {
    return {
      created: 'created',
      dataId: 'dataId',
      id: 'id',
      name: 'name',
      result: 'result',
      serviceId: 'serviceId',
      serviceType: 'serviceType',
      status: 'status',
      updated: 'updated',
    };
  }

  static types(): { [key: string]: any } {
    return {
      created: 'number',
      dataId: 'number',
      id: 'string',
      name: 'string',
      result: 'string',
      serviceId: 'string',
      serviceType: 'string',
      status: 'string',
      updated: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAsyncTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 58113A95-1858-5674-87E5-192AEE6FD9DD
   */
  requestId?: string;
  /**
   * @remarks
   * The response result.
   */
  result?: GetAsyncTaskResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: GetAsyncTaskResponseBodyResult,
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

