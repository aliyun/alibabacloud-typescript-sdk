// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InnerUpdateSandboxNetworkInput extends $dara.Model {
  /**
   * @remarks
   * The switch for outbound public network access from the sandbox. When set to false, it collapses to the default deny policy of the platform and shares the same outbound policy with allowOut and denyOut. This field is included in the full replacement. If omitted, no deny entries are appended based on this switch. However, if allowOut is not empty and denyOut is empty, denyOut is automatically set to 0.0.0.0/0, and IPv4 outbound traffic to destinations other than those in allowOut is denied.
   * 
   * @example
   * true
   */
  allowInternetAccess?: boolean;
  /**
   * @remarks
   * The destinations allowed for outbound access, which can be IP addresses, CIDR blocks, exact domain names, or domain names with a wildcard only in the leftmost label (such as *.example.com). allowOut takes precedence over denyOut. The maximum list length depends on the account quota. If omitted, the existing allow list is cleared.
   * 
   * @example
   * ["api.example.com","10.0.0.0/8"]
   */
  allowOut?: string[];
  /**
   * @remarks
   * The destinations denied for outbound access, in the same format as allowOut. If a destination matches both allow and deny rules, the allow rule takes precedence. The maximum list length depends on the account quota. If omitted, the existing deny list is cleared.
   * 
   * @example
   * ["blocked.example.com","192.168.0.0/16"]
   */
  denyOut?: string[];
  /**
   * @remarks
   * The outbound network rules where the key is an exact destination hostname or the E2B reserved key @fc.sandbox.identity, and the value is a list of rule objects. The number of hosts and replacement entries is subject to the account quota limit. Omitting rules or passing a null object clears the standard host rules. OAuth options tables are updated individually. Omitting the corresponding reserved header retains the original table, while passing the character string "{}" clears the table.
   * 
   * @example
   * {"api.example.com":[{"transform":{"headers":{"X-Example":"demo"}}}]}
   */
  rules?: { [key: string]: { [key: string]: any }[] };
  static names(): { [key: string]: string } {
    return {
      allowInternetAccess: 'allowInternetAccess',
      allowOut: 'allowOut',
      denyOut: 'denyOut',
      rules: 'rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowInternetAccess: 'boolean',
      allowOut: { 'type': 'array', 'itemType': 'string' },
      denyOut: { 'type': 'array', 'itemType': 'string' },
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

