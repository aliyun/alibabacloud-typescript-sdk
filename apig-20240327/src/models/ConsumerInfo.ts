// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConsumerInfo extends $dara.Model {
  consumerId?: string;
  enable?: boolean;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      consumerId: 'consumerId',
      enable: 'enable',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumerId: 'string',
      enable: 'boolean',
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

