// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PutEventTargetsRequestWebhookParameters extends $dara.Model {
  id?: string;
  method?: string;
  protocol?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      method: 'Method',
      protocol: 'Protocol',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      method: 'string',
      protocol: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

