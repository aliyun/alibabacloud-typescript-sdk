// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CloseDeliveryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The result of disabling the service in Threat Analysis. Valid values:
   * - true: The service is disabled.
   * - false: The service fails to be disabled.
   * 
   * @example
   * true
   */
  data?: boolean;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * F375A043-4F5B-55F2-A564-CC47FFC6****
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

