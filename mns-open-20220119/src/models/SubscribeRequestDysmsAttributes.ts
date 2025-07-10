// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubscribeRequestDysmsAttributes extends $dara.Model {
  signName?: string;
  templateCode?: string;
  static names(): { [key: string]: string } {
    return {
      signName: 'SignName',
      templateCode: 'TemplateCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      signName: 'string',
      templateCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

