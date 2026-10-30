// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnableTransitRouterRouteTablePropagationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 59CF8BF9-DE61-421E-B903-D56AF46A303C
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

