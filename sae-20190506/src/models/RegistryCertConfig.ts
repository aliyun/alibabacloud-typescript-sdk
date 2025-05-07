// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RegistryCertConfig extends $dara.Model {
  insecure?: boolean;
  rootCaCertBase64?: string;
  static names(): { [key: string]: string } {
    return {
      insecure: 'insecure',
      rootCaCertBase64: 'rootCaCertBase64',
    };
  }

  static types(): { [key: string]: any } {
    return {
      insecure: 'boolean',
      rootCaCertBase64: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

