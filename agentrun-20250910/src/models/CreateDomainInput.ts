// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDomainInput extends $dara.Model {
  certIdentifier?: string;
  name?: string;
  protocol?: string;
  static names(): { [key: string]: string } {
    return {
      certIdentifier: 'certIdentifier',
      name: 'name',
      protocol: 'protocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certIdentifier: 'string',
      name: 'string',
      protocol: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

