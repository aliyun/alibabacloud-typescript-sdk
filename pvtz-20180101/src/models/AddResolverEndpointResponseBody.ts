// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddResolverEndpointResponseBody extends $dara.Model {
  /**
   * @remarks
   * The endpoint ID.
   * 
   * @example
   * hra0**
   */
  endpointId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 32436208-E1AF-4DAB-B3B8-24F5F25B0950
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      endpointId: 'EndpointId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpointId: 'string',
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

