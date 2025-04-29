// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDedicatedHostClusterResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the host group.
   * 
   * @example
   * dc-bp12wlf6bw0vz9v2****
   */
  dedicatedHostClusterId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E2A664A6-2933-4C64-88AE-5033D003****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dedicatedHostClusterId: 'DedicatedHostClusterId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dedicatedHostClusterId: 'string',
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

