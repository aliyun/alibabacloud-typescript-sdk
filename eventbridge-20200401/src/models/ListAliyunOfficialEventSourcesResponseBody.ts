// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListAliyunOfficialEventSourcesResponseBodyData } from "./ListAliyunOfficialEventSourcesResponseBodyData";


export class ListAliyunOfficialEventSourcesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code. The value Success indicates that the request is successful. Other values indicate that the request failed. For a list of error codes, see Error codes.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The data returned.
   */
  data?: ListAliyunOfficialEventSourcesResponseBodyData;
  /**
   * @remarks
   * The returned error message.
   * 
   * @example
   * InvalidArgument
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5f80e9b3-98d5-4f51-8412-c758818a03e4
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the operation is successful. If the operation is successful, the value true is returned.
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
      data: ListAliyunOfficialEventSourcesResponseBodyData,
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

