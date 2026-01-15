// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IncreaseInstanceResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the task.
   * 
   * @example
   * 500
   */
  id?: string;
  /**
   * @remarks
   * The status of the task.
   * 
   * *   PROCESSING: in progress
   * *   FAIL: failed
   * *   SUCCESS: successful
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
   * The information about the task.
   */
  data?: IncreaseInstanceResponseBodyData;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 36C43E96-8F68-44AA-B1AF-B1F7AB94A6C1
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
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

