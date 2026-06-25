// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IncreaseInstanceResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 500
   */
  id?: string;
  /**
   * @remarks
   * The status of the batch task. Valid values:
   * - PROCESSING: The task is being processed.
   * - FAIL: The task failed.
   * - SUCCESS: The task is complete.
   * 
   * @example
   * PROCESSING
   */
  incrementStatus?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      incrementStatus: 'IncrementStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      incrementStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IncreaseInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned result of the task.
   */
  data?: IncreaseInstanceResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 36C43E96-8F68-44AA-B1AF-B1F7AB94A6C1
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: IncreaseInstanceResponseBodyData,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

