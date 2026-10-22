// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAppLlmApiKeyForPartnerRequest extends $dara.Model {
  /**
   * @remarks
   * The business ID of the application instance.
   * 
   * @example
   * WD20250814102215000001
   */
  bizId?: string;
  /**
   * @remarks
   * The idempotency token. This parameter is reserved for future use.
   * 
   * @example
   * xxxxx-xxxx
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the API key usage.
   * 
   * @example
   * success
   */
  description?: string;
  /**
   * @remarks
   * The custom IP address whitelist defined by the invoker. The system default IP ranges are appended by the backend.
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

