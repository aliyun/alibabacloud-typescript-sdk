// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFusionAuthTokenResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code. If OK is returned, the request is successful. Other values indicate that the request failed. For more information, see Error codes.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * The authentication code. The value of this parameter is a string.
   * 
   * @example
   * FKcksloqk***********jalEc+
   */
  model?: string;
  /**
   * @remarks
   * The request ID, which is used to locate and troubleshoot issues.
   * 
   * @example
   * CC3BB6D2-2FDF-4321-9DCE-B38165CE4C47
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values: true false
   * 
   * @example
   * false
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      model: 'Model',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      model: 'string',
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

