// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDomainResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the domain name.
   * 
   * @example
   * d-cpu1aullhtgkidg7sa4g
   */
  domainId?: string;
  static names(): { [key: string]: string } {
    return {
      domainId: 'domainId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

