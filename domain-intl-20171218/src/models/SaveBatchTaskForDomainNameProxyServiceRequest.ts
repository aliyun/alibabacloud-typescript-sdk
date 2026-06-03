// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveBatchTaskForDomainNameProxyServiceRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  domainName?: string[];
  lang?: string;
  userClientIp?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  status?: boolean;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      lang: 'Lang',
      userClientIp: 'UserClientIp',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: { 'type': 'array', 'itemType': 'string' },
      lang: 'string',
      userClientIp: 'string',
      status: 'boolean',
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

