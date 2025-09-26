// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDomainInput extends $dara.Model {
  certIdentifier?: string;
  protocol?: string;
  static names(): { [key: string]: string } {
    return {
      certIdentifier: 'certIdentifier',
      protocol: 'protocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certIdentifier: 'string',
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

