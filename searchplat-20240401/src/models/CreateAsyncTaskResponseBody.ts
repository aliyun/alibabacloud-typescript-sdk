// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class CreateAsyncTaskResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 1729669284
   */
  created?: number;
  /**
   * @remarks
   * The data ID.
   * 
   * @example
   * 1232
   */
  dataId?: number;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * fae9bcc5-949f-4c31-b9b7-a273bf891699
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
   * xx
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
   * - PENDING: In progress.
   * - SUCCESS: Parsing succeeded.
   * - FAILED: Parsing failed.
   * 
   * @example
   * SUCCESS
   */
  status?: string;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 1729669284
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

export class CreateAsyncTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 1CC93E65-6734-5060-BEF7-0EB0A4862BCF
   */
  requestId?: string;
  /**
   * @remarks
   * The returned result.
   */
  result?: CreateAsyncTaskResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': CreateAsyncTaskResponseBodyResult },
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

