// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { MonitorContactUpdateCmd } from "./MonitorContactUpdateCmd";


export class UpdateMonitorContactRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  body?: MonitorContactUpdateCmd;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: MonitorContactUpdateCmd,
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

