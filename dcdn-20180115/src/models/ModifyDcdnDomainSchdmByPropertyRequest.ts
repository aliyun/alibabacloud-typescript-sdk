// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDCdnDomainSchdmByPropertyRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the accelerated domain for which you want to change the acceleration region. You can specify only one domain name.
   * 
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The region where the acceleration service is deployed. Valid values:
   * 
   * *   **domestic**: Chinese mainland
   * *   **overseas**: global (excluding mainland China)
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

