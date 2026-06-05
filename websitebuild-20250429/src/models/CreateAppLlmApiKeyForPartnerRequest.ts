// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAppLlmApiKeyForPartnerRequest extends $dara.Model {
  /**
   * @example
   * WD20250814102215000001
   */
  bizId?: string;
  /**
   * @example
   * xxxxx-xxxx
   */
  clientToken?: string;
  /**
   * @example
   * success
   */
  description?: string;
  ipWhiteList?: string[];
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      clientToken: 'ClientToken',
      description: 'Description',
      ipWhiteList: 'IpWhiteList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      clientToken: 'string',
      description: 'string',
      ipWhiteList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.ipWhiteList)) {
      $dara.Model.validateArray(this.ipWhiteList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

