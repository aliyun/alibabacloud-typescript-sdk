// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCustomRoutingEndpointGroupDestinationsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The IDs of the endpoint group mappings.
   */
  destinationIds?: string[];
  /**
   * @remarks
   * The IDs of the endpoint group mappings.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE73368
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      destinationIds: 'DestinationIds',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationIds: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.destinationIds)) {
      $dara.Model.validateArray(this.destinationIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

