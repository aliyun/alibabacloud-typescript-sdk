// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateEndpointGroupsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The IDs of the endpoint groups.
   */
  endpointGroupIds?: string[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 6FEA0CF3-D3B9-43E5-A304-D217037876A8
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      endpointGroupIds: 'EndpointGroupIds',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpointGroupIds: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.endpointGroupIds)) {
      $dara.Model.validateArray(this.endpointGroupIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

