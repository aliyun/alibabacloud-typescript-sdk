// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Detail } from "./Detail";


export class SparkAppInfo extends $dara.Model {
  /**
   * @example
   * s202207151211hz0cb4*****
   */
  appId?: string;
  /**
   * @example
   * Spark Test
   */
  appName?: string;
  /**
   * @example
   * amv-23xxxx
   */
  DBClusterId?: string;
  detail?: Detail;
  /**
   * @example
   * WARN: Disk is full
   */
  message?: string;
  /**
   * @example
   * NORMAL
   */
  priority?: string;
  /**
   * @example
   * FAILED
   */
  state?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      DBClusterId: 'DBClusterId',
      detail: 'Detail',
      message: 'Message',
      priority: 'Priority',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appName: 'string',
      DBClusterId: 'string',
      detail: Detail,
      message: 'string',
      priority: 'string',
      state: 'string',
    };
  }

  validate() {
    if(this.detail && typeof (this.detail as any).validate === 'function') {
      (this.detail as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

