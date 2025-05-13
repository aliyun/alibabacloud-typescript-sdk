// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListJobsResponseBodyData } from "./ListJobsResponseBodyData";


export class ListJobsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code that is returned.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The information about the jobs.
   */
  data?: ListJobsResponseBodyData;
  /**
   * @remarks
   * The error message that is returned if an error occurs.
   * 
   * @example
   * namespace can not find namespace: 1a72ecb1-b4cc-400a-a71b-20cdec9b****, namespaceSource:null
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 71BCC0E3-64B2-4B63-A870-AFB64EBCB58B
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call is successful. Valid values:
   * 
   * *   **true**: The call is successful.
   * *   **false**: The call fails.
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
      code: 'number',
      data: ListJobsResponseBodyData,
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

