// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateBasicEndpointResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the endpoint group to which the endpoints belong.
   * 
   * @example
   * epg-bp1dmlohjjz4kqaun****
   */
  endpointGroupId?: string;
  /**
   * @remarks
   * The ID of the endpoint.
   * 
   * @example
   * ep-bp14sz7ftcwwjgrdm****
   */
  endpointId?: string;
  /**
   * @remarks
   * The name of the endpoint.
   * 
   * @example
   * ep01
   */
  name?: string;
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
      endpointGroupId: 'EndpointGroupId',
      endpointId: 'EndpointId',
      name: 'Name',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpointGroupId: 'string',
      endpointId: 'string',
      name: 'string',
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

