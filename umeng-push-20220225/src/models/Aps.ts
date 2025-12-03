// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Alert } from "./Alert";


export class Aps extends $dara.Model {
  alert?: Alert;
  /**
   * @example
   * +1(自增)，-1(自减)，4(设置数字)
   */
  badge?: string;
  category?: string;
  contentAvailable?: number;
  interruptionLevel?: string;
  sound?: string;
  threadID?: string;
  static names(): { [key: string]: string } {
    return {
      alert: 'alert',
      badge: 'badge',
      category: 'category',
      contentAvailable: 'contentAvailable',
      interruptionLevel: 'interruptionLevel',
      sound: 'sound',
      threadID: 'threadID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alert: Alert,
      badge: 'string',
      category: 'string',
      contentAvailable: 'number',
      interruptionLevel: 'string',
      sound: 'string',
      threadID: 'string',
    };
  }

  validate() {
    if(this.alert && typeof (this.alert as any).validate === 'function') {
      (this.alert as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

