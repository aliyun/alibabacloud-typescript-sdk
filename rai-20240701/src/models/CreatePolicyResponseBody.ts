// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * Status code, 00000 indicates success; others indicate failure.
   * 
   * @example
   * 00000
   */
  code?: string;
  /**
   * @remarks
   * HTTP status code
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * If there is an error, returns the error message.
   * 
   * @example
   * ""
   */
  message?: string;
  /**
   * @remarks
   * Policy ID.
   * 
   * @example
   * 16
   */
  policyId?: number;
  /**
   * @remarks
   * Policy identifier
   * 
   * @example
   * 2tehcwesh4xx
   */
  policyIdentifier?: string;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * 74D2A967-2CE0-519B-B623-38D851734EC5
   */
  requestId?: string;
  /**
   * @remarks
   * Whether the operation was successful. true indicates success, false indicates failure.
   * 
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      policyId: 'PolicyId',
      policyIdentifier: 'PolicyIdentifier',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      policyId: 'number',
      policyIdentifier: 'string',
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

