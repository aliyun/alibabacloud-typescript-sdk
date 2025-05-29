// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReplaceTransitRouterRouteTableAssociationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 160BD7D3-3D1E-5702-9AF0-56E4B15FCB65
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

