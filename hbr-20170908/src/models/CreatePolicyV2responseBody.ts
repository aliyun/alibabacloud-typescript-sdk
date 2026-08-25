// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePolicyV2ResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code. 200 indicates success.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The returned message. The value "successful" is returned for a successful request. An error message is returned for a failed request.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The policy ID.
   * 
   * @example
   * po-000000zemnuyx2li3y9y
   */
  policyId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * EEC65C22-2152-5E31-8AD6-D6CBF1BFF49F
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * - true
   * - false
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      policyId: 'PolicyId',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      policyId: 'string',
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

