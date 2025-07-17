// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAgentDownloadUrlV2ResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The download URL of the agent.
   * 
   * @example
   * http://arms-apm-cn-hangzhou.oss-cn-hangzhou-internal.aliyuncs.com/3.2.9/ArmsAgent.zip
   */
  url?: string;
  /**
   * @remarks
   * The version number of the agent.
   * 
   * @example
   * 3.2.9
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentDownloadUrlV2ResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code.\\
   * **Valid values:**
   * 
   * *   2xx: The request was successful.
   * *   3xx: The request was redirected.
   * *   4xx: The request was invalid.
   * *   5xx: A server error occurred.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The version number and download URL of the agent.
   */
  data?: GetAgentDownloadUrlV2ResponseBodyData;
  /**
   * @remarks
   * The returned message.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 78901766-3806-4E96-8E47-CFEF59E4****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.\\
   * **Valid values:**
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
      data: GetAgentDownloadUrlV2ResponseBodyData,
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

