// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Message2ThirdChannel extends $dara.Model {
  setBadge?: number;
  addBadge?: number;
  bigBody?: string;
  bigTitle?: string;
  expandImage?: string;
  img?: string;
  sound?: string;
  text?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      setBadge: 'SetBadge',
      addBadge: 'addBadge',
      bigBody: 'bigBody',
      bigTitle: 'bigTitle',
      expandImage: 'expandImage',
      img: 'img',
      sound: 'sound',
      text: 'text',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      setBadge: 'number',
      addBadge: 'number',
      bigBody: 'string',
      bigTitle: 'string',
      expandImage: 'string',
      img: 'string',
      sound: 'string',
      text: 'string',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

