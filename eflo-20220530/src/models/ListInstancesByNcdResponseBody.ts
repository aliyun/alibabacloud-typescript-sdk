// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListInstancesByNcdResponseBodyContent } from "./ListInstancesByNcdResponseBodyContent";


export class ListInstancesByNcdResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the access denial.
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
   * The response parameters.
   */
  content?: ListInstancesByNcdResponseBodyContent;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * You don\\"t have the permission of this operation, action=eflo:ListInstancesByNcd, arn=acs:eflo:cn-heyuan:1263399219805497:networkinterface/*, resourceGroup=null
   */
  message?: string;
  /**
   * @remarks
   * Request ID of the current request
   * 
   * @example
   * AC8C713A-A9F4-5984-A5E1-76496DF35153
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
      content: ListInstancesByNcdResponseBodyContent,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.content && typeof (this.content as any).validate === 'function') {
      (this.content as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

