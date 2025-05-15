// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetEnrolledAccountResponseBodyErrorInfo extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * CompliancePackExists
   */
  code?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * The compliance pack already exists.
   */
  message?: string;
  /**
   * @remarks
   * The recommended solution.
   * 
   * @example
   * https://next.api.aliyun.com/troubleshoot?q=CompliancePackExists\\\\u0026product=Config
   */
  recommend?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6D5EAA86-2D41-5CB7-8DA7-B60093ACAA4E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      recommend: 'Recommend',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      recommend: 'string',
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

