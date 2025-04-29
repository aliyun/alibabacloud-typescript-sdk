// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteLogConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The log type. Valid values: **log** and **survey**.
   * 
   * @example
   * log
   */
  logType?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      logType: 'LogType',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logType: 'string',
      securityToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

