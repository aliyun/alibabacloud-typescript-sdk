// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetNodeInfoForPodResponseBodyContent } from "./GetNodeInfoForPodResponseBodyContent";


export class GetNodeInfoForPodResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the failed permission verification.
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
  content?: GetNodeInfoForPodResponseBodyContent;
  /**
   * @remarks
   * The error message. (If the instance is in the Exception state, the exception cause is prompted.)
   * 
   * @example
   * You don\\"t have the permission of this operation, action=eflo:GetNodeInfoForPod, arn=acs:eflo:cn-wulanchabu:1111156667137893:networkinterface/*, resourceGroup=null
   */
  message?: string;
  /**
   * @remarks
   * Request ID of the current request
   * 
   * @example
   * 9C50C9CD-E799-54DA-BA7A-1FAF3DF80857
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
      content: GetNodeInfoForPodResponseBodyContent,
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

