// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateSyncQualityCheckDataResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The Job ID.
   * 
   * @example
   * 123123D8C-5BD9-42A7-B527-1235F8**
   */
  taskId?: string;
  /**
   * @remarks
   * The UUID of the call.
   * 
   * @example
   * 20210101-1212121***
   */
  tid?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
      tid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSyncQualityCheckDataResponseBody extends $dara.Model {
  /**
   * @remarks
   * The Result code. A value of 200 indicates Succeeded. Any other value indicates failed. The API caller can determine the cause of failure based on this field.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The complete response Content.
   */
  data?: UpdateSyncQualityCheckDataResponseBodyData;
  /**
   * @remarks
   * Details of the error when an error occurs; "successful" when the operation succeeded.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID, which is the UUID of the request.
   * 
   * @example
   * 76DB5D8C-5BD9-42A7-B527-5AF3A5F8***
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the Request succeeded. The API caller can use this field to determine whether the Request succeeded: true indicates success; false or null indicates failure.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: UpdateSyncQualityCheckDataResponseBodyData,
      message: 'string',
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

