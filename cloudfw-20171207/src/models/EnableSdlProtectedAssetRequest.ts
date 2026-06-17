// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnableSdlProtectedAssetRequest extends $dara.Model {
  /**
   * @remarks
   * The list of IP assets.
   */
  ipList?: string[];
  /**
   * @remarks
   * The language of the request and response. Valid values:
   * 
   * - **zh** (default): Chinese
   * 
   * - **en**: English
   * 
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

