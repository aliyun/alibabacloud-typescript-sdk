// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CustomSideLinkConfig extends $dara.Model {
  icon?: string;
  link?: string;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      icon: 'icon',
      link: 'link',
      text: 'text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      icon: 'string',
      link: 'string',
      text: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

