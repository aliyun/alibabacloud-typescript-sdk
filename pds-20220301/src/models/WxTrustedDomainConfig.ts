// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class WxTrustedDomainConfig extends $dara.Model {
  content?: string;
  name?: string;
  show?: boolean;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      name: 'name',
      show: 'show',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      name: 'string',
      show: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

