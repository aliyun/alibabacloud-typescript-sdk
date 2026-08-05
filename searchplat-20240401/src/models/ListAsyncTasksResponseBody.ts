// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAsyncTasksResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The creation timestamp.
   * 
   * @example
   * 1745893195510
   */
  created?: number;
  /**
   * @remarks
   * The trial data ID.
   * 
   * @example
   * 1232
   */
  dataId?: number;
  /**
   * @remarks
   * The asynchronous task ID.
   * 
   * @example
   * ae1cea6dc680b98b908a757050c406c9
   */
  id?: string;
  /**
   * @remarks
   * The file name.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The task execution result.
   * 
   * @example
   * xxxxx
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
   * - document-analyze.
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
   * SUCCESS
   */
  status?: string;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 1729665694
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

export class ListAsyncTasksResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 2BA0504F-B179-586D-8210-A7C7C09A9907
   */
  requestId?: string;
  /**
   * @remarks
   * The returned result.
   */
  result?: ListAsyncTasksResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListAsyncTasksResponseBodyResult },
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

