// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCurrentConcurrencyResponseBody extends $dara.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * 12
   */
  currentConcurrency?: number;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * 12f3dd08-0c55-44ce-9b64-e69d35ed3a76
   */
  instanceId?: string;
  /**
   * @example
   * 5
   */
  maxConcurrentConversation?: number;
  /**
   * @example
   * Success
   */
  message?: string;
  /**
   * @example
   * 254EB995-DEDF-48A4-9101-9CA5B72FFBCC
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      currentConcurrency: 'CurrentConcurrency',
      httpStatusCode: 'HttpStatusCode',
      instanceId: 'InstanceId',
      maxConcurrentConversation: 'MaxConcurrentConversation',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      currentConcurrency: 'number',
      httpStatusCode: 'number',
      instanceId: 'string',
      maxConcurrentConversation: 'number',
      message: 'string',
      requestId: 'string',
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

