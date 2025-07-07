// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnterpriseAccountQueryLoginSettingsResponseBodyDataIpMaskDto extends $dara.Model {
  ipMaskEnabledStatus?: string;
  ipMasks?: string[];
  static names(): { [key: string]: string } {
    return {
      ipMaskEnabledStatus: 'IpMaskEnabledStatus',
      ipMasks: 'IpMasks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipMaskEnabledStatus: 'string',
      ipMasks: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.ipMasks)) {
      $dara.Model.validateArray(this.ipMasks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

