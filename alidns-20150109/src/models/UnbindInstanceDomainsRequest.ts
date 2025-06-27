// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UnbindInstanceDomainsRequest extends $dara.Model {
  /**
   * @remarks
   * The domain names.
   * 
   * Separate multiple domain names with commas (,). Up to 100 domain names can be entered.
   * 
   * This parameter is required.
   * 
   * @example
   * example.com,example.net
   */
  domainNames?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 123
   */
  instanceId?: string;
  /**
   * @remarks
   * The language.
   * 
   * @example
   * en
   */
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      domainNames: 'DomainNames',
      instanceId: 'InstanceId',
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainNames: 'string',
      instanceId: 'string',
      lang: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

