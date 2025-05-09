// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteFirewallV2RoutePoliciesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 22B6B889-4E9F-56B3-AF3D-53749C477D1D
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

