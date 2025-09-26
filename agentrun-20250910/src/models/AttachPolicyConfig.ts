// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AttachPolicyConfig extends $dara.Model {
  className?: string;
  config?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      className: 'className',
      config: 'config',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      className: 'string',
      config: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

