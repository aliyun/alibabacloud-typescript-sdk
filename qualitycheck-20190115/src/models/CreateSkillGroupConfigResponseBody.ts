// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSkillGroupConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * Result code. A value of 200 indicates success. Any other value indicates failure. Use this field to identify the cause of failure.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * ID of the newly created configuration.
   * 
   * @example
   * 223
   */
  data?: number;
  /**
   * @remarks
   * Error details if the call fails. Returns successful if the call succeeds.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 3CEA0495-341B-4482-9AD9-8191EF4***
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request succeeded. true means success. false or null means failure.
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
      code: 'string',
      data: 'number',
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

