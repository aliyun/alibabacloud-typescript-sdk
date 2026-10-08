// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveBatchTaskForReserveDropListDomainRequestDomains extends $dara.Model {
  /**
   * @remarks
   * The first custom DNS server.
   * 
   * > - This parameter is required only if you set **AliyunDns** to **false**.
   * 
   * - Make sure that your custom DNS servers are valid. Otherwise, the domain reservation may fail.
   * 
   * @example
   * ns11.bigwww.com
   */
  dns1?: string;
  /**
   * @remarks
   * The second custom DNS server.
   * 
   * > - This parameter is required only if you set **AliyunDns** to **false**.
   * 
   * - Make sure that your custom DNS servers are valid. Otherwise, the domain reservation may fail.
   * 
   * @example
   * nsb.263idc.net
   */
  dns2?: string;
  /**
   * @remarks
   * The domain name to reserve.
   * 
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  static names(): { [key: string]: string } {
    return {
      dns1: 'Dns1',
      dns2: 'Dns2',
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dns1: 'string',
      dns2: 'string',
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

export class SaveBatchTaskForReserveDropListDomainRequest extends $dara.Model {
  /**
   * @remarks
   * The contact template ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 123123
   */
  contactTemplateId?: string;
  /**
   * @remarks
   * The domain list.
   * 
   * This parameter is required.
   */
  domains?: SaveBatchTaskForReserveDropListDomainRequestDomains[];
  static names(): { [key: string]: string } {
    return {
      contactTemplateId: 'ContactTemplateId',
      domains: 'Domains',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactTemplateId: 'string',
      domains: { 'type': 'array', 'itemType': SaveBatchTaskForReserveDropListDomainRequestDomains },
    };
  }

  validate() {
    if(Array.isArray(this.domains)) {
      $dara.Model.validateArray(this.domains);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

