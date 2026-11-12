// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OpenDeliveryResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether log delivery is enabled. Valid values:
   * - true: Log delivery is enabled.
   * - false: Log delivery failed to be enabled.
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
   * 15FD134E-D69B-51E8-B052-73F97BD8****
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

