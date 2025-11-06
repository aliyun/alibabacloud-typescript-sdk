// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveSingleTaskForReserveDropListDomainRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  contactTemplateId?: string;
  dns1?: string;
  dns2?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  domainName?: string;
  static names(): { [key: string]: string } {
    return {
      contactTemplateId: 'ContactTemplateId',
      dns1: 'Dns1',
      dns2: 'Dns2',
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactTemplateId: 'string',
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

