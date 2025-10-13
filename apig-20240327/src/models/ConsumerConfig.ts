// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConsumerConfig extends $dara.Model {
  consumerId?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      consumerId: 'consumerId',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumerId: 'string',
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

