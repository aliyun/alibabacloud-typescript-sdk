// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListInstanceEndpointResponseBodyEndpoints } from "./ListInstanceEndpointResponseBodyEndpoints";


export class ListInstanceEndpointResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return value.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * The endpoints of the instance.
   */
  endpoints?: ListInstanceEndpointResponseBodyEndpoints[];
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  isSuccess?: boolean;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1B21A877-66A2-4095-90EB-20A7781A4A67
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      endpoints: 'Endpoints',
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      endpoints: { 'type': 'array', 'itemType': ListInstanceEndpointResponseBodyEndpoints },
      isSuccess: 'boolean',
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

