// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RiskSceneConfig extends $dara.Model {
  detectChannel?: string[];
  officeChannel?: string[];
  static names(): { [key: string]: string } {
    return {
      detectChannel: 'DetectChannel',
      officeChannel: 'OfficeChannel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detectChannel: { 'type': 'array', 'itemType': 'string' },
      officeChannel: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.detectChannel)) {
      $dara.Model.validateArray(this.detectChannel);
    }
    if(Array.isArray(this.officeChannel)) {
      $dara.Model.validateArray(this.officeChannel);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

