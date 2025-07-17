// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TlsCipherSuitesConfigTlsCipherSuite extends $dara.Model {
  name?: string;
  supportVersions?: string[];
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      supportVersions: 'supportVersions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      supportVersions: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.supportVersions)) {
      $dara.Model.validateArray(this.supportVersions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

