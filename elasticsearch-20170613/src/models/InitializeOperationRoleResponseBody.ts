// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InitializeOperationRoleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 29101430-4797-4D1D-96C3-9FCBCCA8F845
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the service-linked role is created. Valid values:
   * 
   * *   true: The service-linked role is created.
   * *   false: The service-linked role fails to be created.
   * 
   * @example
   * true
   */
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

