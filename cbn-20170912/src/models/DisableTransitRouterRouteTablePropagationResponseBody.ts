// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DisableTransitRouterRouteTablePropagationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * A7C43F99-B1E5-4A53-AB64-4BAE8AF4484E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

