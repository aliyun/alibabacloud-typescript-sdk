// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckTransitRouterServiceResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the transit router service is activated for the current Alibaba Cloud account.
   * 
   * - **true**: The service is activated.
   * - If this parameter is not returned, the transit router service is not activated for the current Alibaba Cloud account, and the system returns a corresponding message.
   * 
   * @example
   * true
   */
  enabled?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5D93C8B9-C354-5C3E-BEFB-BA8A2C314D68
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      enabled: 'Enabled',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'string',
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

