// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveBatchTaskForGenerateDomainCertificateRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  domainNames?: string[];
  lang?: string;
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      domainNames: 'DomainNames',
      lang: 'Lang',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainNames: { 'type': 'array', 'itemType': 'string' },
      lang: 'string',
      userClientIp: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.domainNames)) {
      $dara.Model.validateArray(this.domainNames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

