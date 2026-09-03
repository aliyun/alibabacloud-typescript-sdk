// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Alert } from "./Alert";


export class Aps extends $dara.Model {
  alert?: Alert;
  attributes?: string;
  attributesType?: string;
  /**
   * @example
   * +1(自增)，-1(自减)，4(设置数字)
   */
  badge?: string;
  category?: string;
  contentAvailable?: number;
  /**
   * @example
   * {                  "status": "shippingbox.fill"                 }
   */
  contentState?: string;
  dismissalDate?: number;
  /**
   * @example
   * 创建:start , 更新:update,结束:end
   */
  event?: string;
  interruptionLevel?: string;
  /**
   * @example
   * 1
   */
  mutableContent?: number;
  sound?: string;
  threadID?: string;
  timestamp?: number;
  static names(): { [key: string]: string } {
    return {
      alert: 'alert',
      attributes: 'attributes',
      attributesType: 'attributesType',
      badge: 'badge',
      category: 'category',
      contentAvailable: 'contentAvailable',
      contentState: 'contentState',
      dismissalDate: 'dismissalDate',
      event: 'event',
      interruptionLevel: 'interruptionLevel',
      mutableContent: 'mutableContent',
      sound: 'sound',
      threadID: 'threadID',
      timestamp: 'timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alert: Alert,
      attributes: 'string',
      attributesType: 'string',
      badge: 'string',
      category: 'string',
      contentAvailable: 'number',
      contentState: 'string',
      dismissalDate: 'number',
      event: 'string',
      interruptionLevel: 'string',
      mutableContent: 'number',
      sound: 'string',
      threadID: 'string',
      timestamp: 'number',
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

