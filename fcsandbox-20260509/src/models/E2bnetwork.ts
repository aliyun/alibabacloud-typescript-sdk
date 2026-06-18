// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class E2BNetwork extends $dara.Model {
  allowOut?: string[];
  allowPublicTraffic?: boolean;
  denyOut?: string[];
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

