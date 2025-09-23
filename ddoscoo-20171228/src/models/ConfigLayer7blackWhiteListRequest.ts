// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConfigLayer7BlackWhiteListRequest extends $dara.Model {
  /**
   * @example
   * 1.1.1.1
   */
  blackList?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * www.aliyun.com
   */
  domain?: string;
  /**
   * @example
   * test
   */
  resourceGroupId?: string;
  /**
   * @example
   * 1.1.1.1
   */
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

