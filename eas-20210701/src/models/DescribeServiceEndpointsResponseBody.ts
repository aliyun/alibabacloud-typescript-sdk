// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeServiceEndpointsResponseBodyEndpoints } from "./DescribeServiceEndpointsResponseBodyEndpoints";


export class DescribeServiceEndpointsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The service token.
   * 
   * @example
   * Nzc5N2FhN****TQ0YzBmYTIyN2MxZTUxN2NkYjg4MTJmMWQxZmY1****
   */
  accessToken?: string;
  /**
   * @remarks
   * The service endpoints.
   */
  endpoints?: DescribeServiceEndpointsResponseBodyEndpoints[];
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * Execution successful.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 739998B5-FB39-12A3-8323-0FA340317298
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'AccessToken',
      endpoints: 'Endpoints',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      endpoints: { 'type': 'array', 'itemType': DescribeServiceEndpointsResponseBodyEndpoints },
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.endpoints)) {
      $dara.Model.validateArray(this.endpoints);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

