// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubscribeRequestKafkaAttributes extends $dara.Model {
  businessMode?: string;
  static names(): { [key: string]: string } {
    return {
      businessMode: 'BusinessMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessMode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

