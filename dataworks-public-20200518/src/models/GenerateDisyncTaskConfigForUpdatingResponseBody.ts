// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateDISyncTaskConfigForUpdatingResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The reason why the ID of the asynchronous thread fails to be generated. If the ID is successfully generated, no value is returned for this parameter.
   * 
   * @example
   * XXX is invalid.
   */
  message?: string;
  /**
   * @remarks
   * The ID of the asynchronous thread. You can call the [QueryDISyncTaskConfigProcessResult](https://help.aliyun.com/document_detail/383465.html) operation to obtain the asynchronously generated parameters based on the ID. The parameters are used to update a real-time synchronization task in Data Integration.
   * 
   * @example
   * 10
   */
  processId?: number;
  /**
   * @remarks
   * Indicates whether the ID of the asynchronous thread is generated. Valid values:
   * 
   * *   success: indicates that the ID of the asynchronous thread is generated.
   * *   fail: indicates that the ID of the asynchronous thread fails to be generated. You can view the reason for the failure and troubleshoot the issue based on the reason.
   * 
   * @example
   * true
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      processId: 'ProcessId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      processId: 'number',
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

export class GenerateDISyncTaskConfigForUpdatingResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information returned for the ID of the asynchronous thread.
   */
  data?: GenerateDISyncTaskConfigForUpdatingResponseBodyData;
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
      data: GenerateDISyncTaskConfigForUpdatingResponseBodyData,
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

