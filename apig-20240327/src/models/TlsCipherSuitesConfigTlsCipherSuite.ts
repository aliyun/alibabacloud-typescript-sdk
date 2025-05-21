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

