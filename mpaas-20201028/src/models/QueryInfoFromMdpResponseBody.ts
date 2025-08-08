// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryInfoFromMdpResponseBody extends $dara.Model {
  /**
   * @example
   * {\\"db0797452ccafce84d7c151eb81596099bda3f097693d1e18b588804e6742ced\\":{\\"riskScore\\":\\"3\\"}}
   */
  data?: string;
  /**
   * @example
   * 11E66B29-9E5E-5C10-B64E-B5A0E0F26355
   */
  requestId?: string;
  /**
   * @example
   * OK
   */
  resultCode?: number;
  /**
   * @example
   * SYSTEM_ERROR
   */
  resultMessage?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultMessage: 'ResultMessage',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
      resultCode: 'number',
      resultMessage: 'string',
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

