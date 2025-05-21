// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TlsCipherSuitesConfigTlsCipherSuite } from "./TlsCipherSuitesConfigTlsCipherSuite";


export class TlsCipherSuitesConfig extends $dara.Model {
  configType?: string;
  tlsCipherSuite?: TlsCipherSuitesConfigTlsCipherSuite[];
  static names(): { [key: string]: string } {
    return {
      configType: 'configType',
      tlsCipherSuite: 'tlsCipherSuite',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configType: 'string',
      tlsCipherSuite: { 'type': 'array', 'itemType': TlsCipherSuitesConfigTlsCipherSuite },
    };
  }

  validate() {
    if(Array.isArray(this.tlsCipherSuite)) {
      $dara.Model.validateArray(this.tlsCipherSuite);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

