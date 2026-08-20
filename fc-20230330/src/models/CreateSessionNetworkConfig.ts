// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SessionNetworkRule } from "./SessionNetworkRule";


export class CreateSessionNetworkConfig extends $dara.Model {
  allowOut?: string[];
  allowPublicTraffic?: boolean;
  denyOut?: string[];
  maskRequestHost?: string;
  /**
   * @remarks
   * The request transform rules configured by exact target host. Supports transform.headers and transform.headerValueReplacements.
   */
  rules?: { [key: string]: SessionNetworkRule[] };
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

