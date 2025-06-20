// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SafeChangeCheckRequestInstance extends $dara.Model {
  nc?: string[];
  uids?: string[];
  attributionApp?: string[];
  influenceApp?: string[];
  instance?: string[];
  static names(): { [key: string]: string } {
    return {
      nc: 'Nc',
      uids: 'Uids',
      attributionApp: 'attributionApp',
      influenceApp: 'influenceApp',
      instance: 'instance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nc: { 'type': 'array', 'itemType': 'string' },
      uids: { 'type': 'array', 'itemType': 'string' },
      attributionApp: { 'type': 'array', 'itemType': 'string' },
      influenceApp: { 'type': 'array', 'itemType': 'string' },
      instance: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.nc)) {
      $dara.Model.validateArray(this.nc);
    }
    if(Array.isArray(this.uids)) {
      $dara.Model.validateArray(this.uids);
    }
    if(Array.isArray(this.attributionApp)) {
      $dara.Model.validateArray(this.attributionApp);
    }
    if(Array.isArray(this.influenceApp)) {
      $dara.Model.validateArray(this.influenceApp);
    }
    if(Array.isArray(this.instance)) {
      $dara.Model.validateArray(this.instance);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

