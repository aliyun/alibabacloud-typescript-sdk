// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ProtocolSettings } from "./ProtocolSettings";


export class ProtocolConfiguration extends $dara.Model {
  /**
   * @remarks
   * Detailed protocol configuration information
   */
  protocolSettings?: ProtocolSettings[];
  /**
   * @remarks
   * Protocol Type
   * 
   * @example
   * HTTP
   * 
   * @deprecated
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      protocolSettings: 'protocolSettings',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      protocolSettings: { 'type': 'array', 'itemType': ProtocolSettings },
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.protocolSettings)) {
      $dara.Model.validateArray(this.protocolSettings);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

