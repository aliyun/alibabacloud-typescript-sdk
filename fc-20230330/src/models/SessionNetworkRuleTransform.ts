// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SessionNetworkHeaderValueReplacement } from "./SessionNetworkHeaderValueReplacement";


export class SessionNetworkRuleTransform extends $dara.Model {
  /**
   * @remarks
   * The list of rules for replacing placeholders in HTTP header values before the request is forwarded to the matched host.
   */
  headerValueReplacements?: SessionNetworkHeaderValueReplacement[];
  /**
   * @remarks
   * The HTTP headers injected or overwritten before the request is forwarded to the matched host. Header values are returned in plaintext in GetSession and ListSessions.
   */
  headers?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      headerValueReplacements: 'headerValueReplacements',
      headers: 'headers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headerValueReplacements: { 'type': 'array', 'itemType': SessionNetworkHeaderValueReplacement },
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.headerValueReplacements)) {
      $dara.Model.validateArray(this.headerValueReplacements);
    }
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

