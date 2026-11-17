// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateServiceEndpointShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The name, routing target, and invocation authentication configuration of the service endpoint to be created, as well as the optional initial elasticity configuration and public network inbound switch.
   */
  bodyShrink?: string;
  /**
   * @remarks
   * Required when elasticity initialization is involved. Verified by the server. Reuse the token and the original request for the same retry. Use a new token if the logical content changes. Returns InvalidParameter for the same token with different content. The token must be 1 to 128 characters in length and can contain letters, digits, periods (.), underscores (_), colons (:), and hyphens (-). The scope is the tenant and workspace. The receipt is retained for 7 days from the time of successful acceptance. Replays do not extend the retention period. After expiration, it is re-verified as a new submission.
   * 
   * @example
   * 550e8400-e29b-41d4-a716-446655440000
   */
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      bodyShrink: 'body',
      clientToken: 'clientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bodyShrink: 'string',
      clientToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

