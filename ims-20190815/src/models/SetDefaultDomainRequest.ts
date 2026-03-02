// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetDefaultDomainRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  defaultDomainName?: string;
  static names(): { [key: string]: string } {
    return {
      defaultDomainName: 'DefaultDomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultDomainName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

