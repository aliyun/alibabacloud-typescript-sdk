// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeletePrometheusGlobalViewResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code. The status code 200 indicates a successful request, whereas others indicate a failed request.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The response parameters in the JSON format.
   * 
   * @example
   * {"Success":true,"Msg":"OK"}
   */
  data?: string;
  /**
   * @remarks
   * The supplemental message providing additional context about the response.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID. You can use the ID to query logs and troubleshoot issues.
   * 
   * @example
   * 337B8F7E-0A64-5768-9225-E9B3CF******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'string',
      message: 'string',
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

