// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckTransitRouterServiceResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the transit router feature is activated.
   * 
   * *   **true**: activated
   * *   If this value is not returned, the system prompts that the current account does not have the transit router feature activated.
   * 
   * @example
   * true
   */
  enabled?: string;
  /**
   * @remarks
   * The ID of the request.
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

