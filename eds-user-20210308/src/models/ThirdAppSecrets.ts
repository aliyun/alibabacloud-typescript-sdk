// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ThirdAppSecrets extends $dara.Model {
  enable?: boolean;
  secret?: string;
  static names(): { [key: string]: string } {
    return {
      enable: 'Enable',
      secret: 'Secret',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'boolean',
      secret: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

