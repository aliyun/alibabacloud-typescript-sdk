// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SessionNetworkRule } from "./SessionNetworkRule";


export class UpdateSessionNetworkConfig extends $dara.Model {
  allowOut?: string[];
  denyOut?: string[];
  /**
   * @remarks
   * The request transform rules configured by exact target host. If omitted, existing rules are retained. An empty object clears all rules, and a non-empty object replaces all rules entirely. Null is not supported. The transform.headers and transform.headerValueReplacements fields are supported.
   */
  rules?: { [key: string]: SessionNetworkRule[] };
  static names(): { [key: string]: string } {
    return {
      allowOut: 'allowOut',
      denyOut: 'denyOut',
      rules: 'rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowOut: { 'type': 'array', 'itemType': 'string' },
      denyOut: { 'type': 'array', 'itemType': 'string' },
      rules: { 'type': 'map', 'keyType': 'string', 'valueType': { 'type': 'array', 'itemType': SessionNetworkRule } },
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

