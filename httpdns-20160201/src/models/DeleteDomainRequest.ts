// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteDomainRequest extends $dara.Model {
  /**
   * @example
   * 12****
   */
  accountId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * www.example.com
   */
  domainName?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
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

