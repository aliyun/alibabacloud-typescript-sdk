// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SdnsListRuleCategoriesRequest extends $dara.Model {
  /**
   * @remarks
   * The domain name that is connected to HTTPDNS under the current account. This parameter is required.
   * 
   * @example
   * api.example.com
   */
  domainName?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

