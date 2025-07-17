// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAgentDownloadUrlResponseBody extends $dara.Model {
  /**
   * @remarks
   * The download URL of the ARMS agent.
   * 
   * @example
   * http://arms-apm-hangzhou.oss-cn-hangzhou-internal.aliyuncs.com/2.7.1.1/
   */
  armsAgentDownloadUrl?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 14043452-D486-4EA1-80C9-BA73FB81****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      armsAgentDownloadUrl: 'ArmsAgentDownloadUrl',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      armsAgentDownloadUrl: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

