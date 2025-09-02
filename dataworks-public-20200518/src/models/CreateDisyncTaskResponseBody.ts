// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDISyncTaskResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the data synchronization task that is created.
   * 
   * @example
   * 1000001
   */
  fileId?: number;
  /**
   * @remarks
   * The error message that is returned if the data synchronization task fails to be created. If the data synchronization task is successfully created, this parameter is not returned. If the data synchronization task fails to be created, an error message in the "Invalid path: Workflow/xxxx/Data Integration" format is returned.
   * 
   * @example
   * Invalid path: Business Flow/xxxx/Data Integration
   */
  message?: string;
  /**
   * @remarks
   * The creation status of the data synchronization task. Valid values:
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
      fileId: 'FileId',
      message: 'Message',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileId: 'number',
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

export class CreateDISyncTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information that indicates whether the data synchronization task is created.
   */
  data?: CreateDISyncTaskResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0bc1411515937635973****
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
      data: CreateDISyncTaskResponseBodyData,
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

