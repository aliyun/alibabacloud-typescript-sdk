// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyCdnDomainSchdmByPropertyRequest extends $dara.Model {
  /**
   * @remarks
   * The accelerated domain name for which you want to change the acceleration region. You can specify only one domain name.
   * 
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The information about the acceleration region. {"coverage":"overseas"}
   * 
   * Valid values for coverage:
   * 
   * *   **domestic**: Chinese mainland
   * *   **overseas**: global (excluding the Chinese mainland)
   * *   **global**: global
   * 
   * This parameter is required.
   * 
   * @example
   * {"coverage":"overseas"}
   */
  property?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      property: 'Property',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      property: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

