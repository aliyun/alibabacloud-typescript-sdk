// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class E2BNetwork extends $dara.Model {
  /**
   * @remarks
   * The allowlist for outbound access from the sandbox. After configuration, the sandbox can only access the destinations in the list.
   * 
   * @example
   * ["api.example.com","10.0.0.0/8"]
   */
  allowOut?: string[];
  /**
   * @remarks
   * Specifies whether Direct Internet Access to the sandbox is allowed.
   * 
   * @example
   * false
   */
  allowPublicTraffic?: boolean;
  /**
   * @remarks
   * The denylist for outbound access from the sandbox. After configuration, the sandbox cannot access the destinations in the list.
   * 
   * @example
   * ["blocked.example.com","192.168.0.0/16"]
   */
  denyOut?: string[];
  /**
   * @remarks
   * The domain name used to rewrite the request Host header when accessing the sandbox. If not configured, the original Host header remains unchanged.
   * 
   * @example
   * sandbox.example.com
   */
  maskRequestHost?: string;
  /**
   * @remarks
   * The key is the exact destination hostname or the E2B reserved key @fc.sandbox.identity, and the value is a list of rule objects. The number of hostnames and replacement entries is subject to account quota limits. GetSandboxInner echoes the current hostname rules and configured OAuth options in the same format. User tokens are only used during writes.
   * 
   * @example
   * {"api.example.com":[{"transform":{"headers":{"X-Example":"demo"}}}]}
   */
  rules?: { [key: string]: { [key: string]: any }[] };
  static names(): { [key: string]: string } {
    return {
      allowOut: 'allowOut',
      allowPublicTraffic: 'allowPublicTraffic',
      denyOut: 'denyOut',
      maskRequestHost: 'maskRequestHost',
      rules: 'rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowOut: { 'type': 'array', 'itemType': 'string' },
      allowPublicTraffic: 'boolean',
      denyOut: { 'type': 'array', 'itemType': 'string' },
      maskRequestHost: 'string',
      rules: { 'type': 'map', 'keyType': 'string', 'valueType': { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } } },
    };
  }

  validate() {
    if(Array.isArray(this.allowOut)) {
      $dara.Model.validateArray(this.allowOut);
    }
    if(Array.isArray(this.denyOut)) {
      $dara.Model.validateArray(this.denyOut);
    }
    if(this.rules) {
      $dara.Model.validateMap(this.rules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

