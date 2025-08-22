// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchSetDcdnWafDomainConfigsRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies the header that records the IP address to be obtained. If the default header is selected, the value of this parameter is empty. If a custom header is selected, the value of this parameter is the value specified by the user. Separate multiple values with commas (,). You can specify a maximum of five values.
   * 
   * @example
   * X-Forwarded-For
   */
  clientIpTag?: string;
  /**
   * @remarks
   * The protection status of the domain name. Valid values: on, off, and empty string.
   * 
   * *   When you add a domain name, the value of this parameter is **on**, and the value of ClientIpTag takes effect, which is empty if the default header is selected and is the value specified by the user if a custom header is selected.
   * *   When you delete a domain name, the value of this parameter is **off**, and the value of ClientIpTag does not take effect.
   * *   When you only modify the value of ClientIpTag, the value of DefenseStatus is an empty string.
   * 
   * @example
   * on
   */
  defenseStatus?: string;
  /**
   * @remarks
   * The protected domain names for which you want to change the protection status. You can specify up to 50 domain names. Separate multiple domain names with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * example.com,example2.com
   */
  domainNames?: string;
  static names(): { [key: string]: string } {
    return {
      clientIpTag: 'ClientIpTag',
      defenseStatus: 'DefenseStatus',
      domainNames: 'DomainNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientIpTag: 'string',
      defenseStatus: 'string',
      domainNames: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

