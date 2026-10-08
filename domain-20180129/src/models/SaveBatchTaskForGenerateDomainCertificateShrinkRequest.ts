// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveBatchTaskForGenerateDomainCertificateShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  domainNamesShrink?: string;
  lang?: string;
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      domainNamesShrink: 'DomainNames',
      lang: 'Lang',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainNamesShrink: 'string',
      lang: 'string',
      userClientIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

