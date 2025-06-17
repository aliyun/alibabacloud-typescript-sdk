// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteCustomDomainSampleRateRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  domainNames?: string;
  static names(): { [key: string]: string } {
    return {
      domainNames: 'DomainNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

