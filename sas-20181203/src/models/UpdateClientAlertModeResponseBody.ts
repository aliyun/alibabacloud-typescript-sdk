// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateClientAlertModeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data. Valid values:
   * 
   * - **true**: Succeeded.
   * - **false**: Failed.
   * 
   * @example
   * true
   */
  data?: boolean;
  /**
   * @remarks
   * The request ID. Alibaba Cloud generates a unique identifier for each request. You can use the request ID to troubleshoot issues.
   * 
   * @example
   * 259E3E77-CA6D-5407-84A5-3A1C98D12F14
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
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

