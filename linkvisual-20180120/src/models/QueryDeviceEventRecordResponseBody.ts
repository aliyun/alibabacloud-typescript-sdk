// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryDeviceEventRecordResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The start time of the recording.
   * 
   * @example
   * 2021-09-08 15:55:35
   */
  beginTime?: string;
  /**
   * @remarks
   * The end time of the recording.
   * 
   * @example
   * 2021-09-08 15:56:32
   */
  endTime?: string;
  /**
   * @remarks
   * The name of the recording file.
   * 
   * @example
   * file1
   */
  fileName?: string;
  /**
   * @remarks
   * The URL of the recording file.
   * 
   * > The URL contains authentication information and is valid only for a single use. It cannot be reused.
   */
  vodUrl?: string;
  static names(): { [key: string]: string } {
    return {
      beginTime: 'BeginTime',
      endTime: 'EndTime',
      fileName: 'FileName',
      vodUrl: 'VodUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTime: 'string',
      endTime: 'string',
      fileName: 'string',
      vodUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceEventRecordResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code:
   * 
   * - **200**: The call was successful.
   * - Other: An error code. For more information, see [Error codes](https://help.aliyun.com/document_detail/145071.html).
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The query results.
   */
  data?: QueryDeviceEventRecordResponseBodyData[];
  /**
   * @remarks
   * The error message returned if the call fails.
   * 
   * @example
   * tenant auth error
   */
  errorMessage?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 06DC77A0-4622-42DB-9EE0-25FIOHS82JK1
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful:
   * - **true**: The call was successful.
   * - **false**: The call failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'array', 'itemType': QueryDeviceEventRecordResponseBodyData },
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

