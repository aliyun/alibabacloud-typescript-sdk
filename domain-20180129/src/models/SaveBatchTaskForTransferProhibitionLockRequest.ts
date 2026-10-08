// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveBatchTaskForTransferProhibitionLockRequest extends $dara.Model {
  /**
   * @remarks
   * The domain names for which you want to enable or disable the transfer prohibition lock.
   * 
   * This parameter is required.
   * 
   * @example
   * test1.com
   */
  domainName?: string[];
  /**
   * @remarks
   * The language of the error message that is returned if the request fails. Valid values:
   * 
   * - **zh**: Chinese
   * 
   * - **en**: English
   * 
   * Default value: **en**.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * Specifies whether to enable or disable the transfer prohibition lock. Valid values:
   * 
   * - **true**: Enable the transfer prohibition lock.
   * 
   * - **false**: Disable the transfer prohibition lock.
   * 
   * This parameter is required.
   * 
   * @example
   * false
   */
  status?: boolean;
  /**
   * @remarks
   * The client IP address.
   * 
   * @example
   * 127.0.0.1
   */
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      lang: 'Lang',
      status: 'Status',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: { 'type': 'array', 'itemType': 'string' },
      lang: 'string',
      status: 'boolean',
      userClientIp: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.domainName)) {
      $dara.Model.validateArray(this.domainName);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

