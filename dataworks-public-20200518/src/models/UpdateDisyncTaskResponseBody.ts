// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDISyncTaskResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The error message returned if the data synchronization task fails to be updated. If the data synchronization task is successfully updated, the value null is returned for this parameter.
   * 
   * @example
   * ResourceGroup:[S_res_group_XXX] is invalid.
   */
  message?: string;
  /**
   * @remarks
   * The update status of the data synchronization task. Valid values:
   * 
   * *   success
   * *   fail
   * 
   * @example
   * success
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
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

export class UpdateDISyncTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information that indicates whether the data synchronization task is updated.
   */
  data?: UpdateDISyncTaskResponseBodyData;
  /**
   * @remarks
   * The request ID. You can locate logs and troubleshoot issues based on the ID.
   * 
   * @example
   * 0bc1411515937635973****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
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
      data: UpdateDISyncTaskResponseBodyData,
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

