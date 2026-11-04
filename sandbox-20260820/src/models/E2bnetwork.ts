// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class E2BNetwork extends $dara.Model {
  /**
   * @remarks
   * The allowlist for outbound access from the sandbox. After configuration, the sandbox can access only the destinations in the list.
   */
  allowOut?: string[];
  /**
   * @remarks
   * Specifies whether to allow Direct Internet Access to the sandbox.
   */
  allowPublicTraffic?: boolean;
  /**
   * @remarks
   * The denylist for outbound access from the sandbox. After configuration, the sandbox cannot access the destinations in the list.
   */
  denyOut?: string[];
  /**
   * @remarks
   * The domain name used to rewrite the request Host header when accessing the sandbox. If this parameter is not specified, the original Host is retained.
   * 
   * @example
   * sandbox.example.com
   */
  maskRequestHost?: string;
  static names(): { [key: string]: string } {
    return {
      allowOut: 'allowOut',
      allowPublicTraffic: 'allowPublicTraffic',
      denyOut: 'denyOut',
      maskRequestHost: 'maskRequestHost',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowOut: { 'type': 'array', 'itemType': 'string' },
      allowPublicTraffic: 'boolean',
      denyOut: { 'type': 'array', 'itemType': 'string' },
      maskRequestHost: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.allowOut)) {
      $dara.Model.validateArray(this.allowOut);
    }
    if(Array.isArray(this.denyOut)) {
      $dara.Model.validateArray(this.denyOut);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

