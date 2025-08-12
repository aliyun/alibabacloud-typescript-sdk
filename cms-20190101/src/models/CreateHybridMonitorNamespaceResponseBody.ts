// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateHybridMonitorNamespaceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * Namespace.Existed
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 3843D23A-FB9E-5DC8-BCCC-458768B79296
   */
  requestId?: string;
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
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

