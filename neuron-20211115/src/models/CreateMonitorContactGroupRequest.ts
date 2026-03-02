// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { MonitorContactGroupCreateCmd } from "./MonitorContactGroupCreateCmd";


export class CreateMonitorContactGroupRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  body?: MonitorContactGroupCreateCmd;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: MonitorContactGroupCreateCmd,
    };
  }

  validate() {
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

