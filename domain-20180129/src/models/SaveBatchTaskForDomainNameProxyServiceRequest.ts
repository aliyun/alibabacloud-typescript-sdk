// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveBatchTaskForDomainNameProxyServiceRequest extends $dara.Model {
  /**
   * @remarks
   * List of domain names, separated by commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * test1.com,test2.com,test3.com
   */
  domainName?: string[];
  /**
   * @remarks
   * Language for error messages returned by the API. Valid values:
   * - **zh**: Chinese.
   * - **en**: English.
   * 
   * Default value: **en**.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @example
   * cnnicRegistryService
   */
  serviceType?: string;
  /**
   * @remarks
   * Enabled or shutdown status. Valid values:
   * - **true**: Enabled.
   * - **false**: Shutdown.
   * 
   * This parameter is required.
   * 
   * @example
   * false
   */
  status?: boolean;
  /**
   * @remarks
   * User IP address.
   * 
   * @example
   * 127.0.0.1
   */
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      lang: 'Lang',
      serviceType: 'ServiceType',
      status: 'Status',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: { 'type': 'array', 'itemType': 'string' },
      lang: 'string',
      serviceType: 'string',
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

