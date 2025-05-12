// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListNodeInfosForPodResponseBodyContent } from "./ListNodeInfosForPodResponseBodyContent";


export class ListNodeInfosForPodResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the request denial.
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The response status code.
   * 
   * @example
   * 0
   */
  code?: number;
  /**
   * @remarks
   * Response body
   */
  content?: ListNodeInfosForPodResponseBodyContent[];
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * You don\\"t have the permission of this operation.
   */
  message?: string;
  /**
   * @remarks
   * Request ID of the current request
   * 
   * @example
   * 0901F411-28FA-5B9C-BAEE-7776463FF0DC
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      content: 'Content',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'number',
      content: { 'type': 'array', 'itemType': ListNodeInfosForPodResponseBodyContent },
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.content)) {
      $dara.Model.validateArray(this.content);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

