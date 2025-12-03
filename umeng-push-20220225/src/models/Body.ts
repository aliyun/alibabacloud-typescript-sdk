// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Body extends $dara.Model {
  activity?: string;
  addBadge?: number;
  afterOpen?: string;
  builderId?: number;
  custom?: string;
  expandImage?: string;
  icon?: string;
  img?: string;
  playLights?: boolean;
  playSound?: boolean;
  playVibrate?: boolean;
  rePop?: number;
  setBadge?: number;
  sound?: string;
  text?: string;
  title?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      activity: 'activity',
      addBadge: 'addBadge',
      afterOpen: 'afterOpen',
      builderId: 'builderId',
      custom: 'custom',
      expandImage: 'expandImage',
      icon: 'icon',
      img: 'img',
      playLights: 'playLights',
      playSound: 'playSound',
      playVibrate: 'playVibrate',
      rePop: 'rePop',
      setBadge: 'setBadge',
      sound: 'sound',
      text: 'text',
      title: 'title',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activity: 'string',
      addBadge: 'number',
      afterOpen: 'string',
      builderId: 'number',
      custom: 'string',
      expandImage: 'string',
      icon: 'string',
      img: 'string',
      playLights: 'boolean',
      playSound: 'boolean',
      playVibrate: 'boolean',
      rePop: 'number',
      setBadge: 'number',
      sound: 'string',
      text: 'string',
      title: 'string',
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

