// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSecurityModeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The application module.
   * 
   * @example
   * sg_server
   * 
   * @deprecated
   */
  module?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C6D68A02-54D5-5F5C-A8AA-6D6C2874****
   */
  requestId?: string;
  /**
   * @remarks
   * The security mode. Valid values:
   * 
   * **0**: disabled.
   * 
   * **1**: enabled.
   * 
   * @example
   * 1
   */
  securityMode?: number;
  static names(): { [key: string]: string } {
    return {
      module: 'Module',
      requestId: 'RequestId',
      securityMode: 'SecurityMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      module: 'string',
      requestId: 'string',
      securityMode: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

