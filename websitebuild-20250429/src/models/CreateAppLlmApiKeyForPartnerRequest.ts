// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAppLlmApiKeyForPartnerRequest extends $dara.Model {
  /**
   * @remarks
   * Business ID of the application instance
   * 
   * @example
   * WD20250814102215000001
   */
  bizId?: string;
  /**
   * @remarks
   * Idempotent token (reserved)
   * 
   * @example
   * xxxxx-xxxx
   */
  clientToken?: string;
  /**
   * @remarks
   * Description of the API key usage
   * 
   * @example
   * success
   */
  description?: string;
  /**
   * @remarks
   * Caller-defined IP address whitelist (the backend appends the system default IP segment)
   */
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

