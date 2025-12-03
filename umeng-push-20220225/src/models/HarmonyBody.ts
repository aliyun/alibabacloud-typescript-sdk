// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HarmonyBody extends $dara.Model {
  action?: string;
  addBadge?: number;
  afterOpen?: string;
  bigBody?: string;
  custom?: string;
  img?: string;
  largeIcon?: string;
  text?: string;
  title?: string;
  uri?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'action',
      addBadge: 'addBadge',
      afterOpen: 'afterOpen',
      bigBody: 'bigBody',
      custom: 'custom',
      img: 'img',
      largeIcon: 'largeIcon',
      text: 'text',
      title: 'title',
      uri: 'uri',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      addBadge: 'number',
      afterOpen: 'string',
      bigBody: 'string',
      custom: 'string',
      img: 'string',
      largeIcon: 'string',
      text: 'string',
      title: 'string',
      uri: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

