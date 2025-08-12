// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMonitoringAgentAccessKeyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The AccessKey ID that is required to install the agent.
   * 
   * @example
   * E7A27f9****
   */
  accessKey?: string;
  /**
   * @remarks
   * The status code.
   * 
   * > The status code 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * The specified resource is not found.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C0F655E9-D793-51E6-BD78-CABBCCFC1047
   */
  requestId?: string;
  /**
   * @remarks
   * The AccessKey secret that is required to install the agent.
   * 
   * @example
   * sBjNOUhLylrxMX-Xv1****
   */
  secretKey?: string;
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
      accessKey: 'AccessKey',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      secretKey: 'SecretKey',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKey: 'string',
      code: 'number',
      message: 'string',
      requestId: 'string',
      secretKey: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

