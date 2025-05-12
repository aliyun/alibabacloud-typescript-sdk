// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeGroupEndpointsResponseBodyEndpoints } from "./DescribeGroupEndpointsResponseBodyEndpoints";


export class DescribeGroupEndpointsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The service token.
   * 
   * @example
   * Nzc5N2FhNTM4OTQ0YzBmYTIy****ZTUxN2NkYjg4MTJmMWQxZmY1****
   */
  accessToken?: string;
  /**
   * @remarks
   * The endpoints of the service group.
   */
  endpoints?: DescribeGroupEndpointsResponseBodyEndpoints[];
  /**
   * @remarks
   * The response message.
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
   * 890772EF-3AD6-129A-8E15-8F349C944783
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
      endpoints: { 'type': 'array', 'itemType': DescribeGroupEndpointsResponseBodyEndpoints },
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

