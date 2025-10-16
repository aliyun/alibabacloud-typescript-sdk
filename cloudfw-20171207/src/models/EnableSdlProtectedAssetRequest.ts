// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnableSdlProtectedAssetRequest extends $dara.Model {
  ipList?: string[];
  /**
   * @example
   * zh
   */
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      ipList: 'IpList',
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipList: { 'type': 'array', 'itemType': 'string' },
      lang: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.ipList)) {
      $dara.Model.validateArray(this.ipList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

