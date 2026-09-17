// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAllRulesSummaryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response data.
   * 
   * @example
   * []
   */
  data?: string;
  /**
   * @remarks
   * The fault error message encoding.
   * 
   * @example
   * None
   */
  errCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * not supported.pos 3084, line 96, column 1, token IDENTIFIER settings
   */
  errMessage?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * E871A612-DBD2-53D9-B2A0-723EC30B1823
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errCode: 'errCode',
      errMessage: 'errMessage',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      errCode: 'string',
      errMessage: 'string',
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

