// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveVpcAccessAndAbolishApisResponseBody extends $dara.Model {
  /**
   * @example
   * f7834d74be4e41aa8e607b0fafae9b33
   */
  operationId?: string;
  /**
   * @example
   * CEF72CEB-54B6-4AE8-B225-F876FF7BZ016
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      operationId: 'OperationId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operationId: 'string',
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

