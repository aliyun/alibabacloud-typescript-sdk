// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAcceleratorAutoRenewAttributeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the GA instance.
   * 
   * @example
   * ga-bp17frjjh0udz4qz****
   */
  acceleratorId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * F591955F-5CB5-4CCE-A75D-17CF2085CE22
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      acceleratorId: 'AcceleratorId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorId: 'string',
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

