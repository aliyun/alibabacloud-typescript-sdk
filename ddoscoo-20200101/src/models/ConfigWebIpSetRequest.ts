// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConfigWebIpSetRequest extends $dara.Model {
  blackList?: string[];
  /**
   * @remarks
   * This parameter is required.
   */
  domain?: string;
  resourceGroupId?: string;
  whiteList?: string[];
  static names(): { [key: string]: string } {
    return {
      blackList: 'BlackList',
      domain: 'Domain',
      resourceGroupId: 'ResourceGroupId',
      whiteList: 'WhiteList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blackList: { 'type': 'array', 'itemType': 'string' },
      domain: 'string',
      resourceGroupId: 'string',
      whiteList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.blackList)) {
      $dara.Model.validateArray(this.blackList);
    }
    if(Array.isArray(this.whiteList)) {
      $dara.Model.validateArray(this.whiteList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

