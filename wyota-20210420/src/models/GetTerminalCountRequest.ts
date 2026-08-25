// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTerminalCountRequest extends $dara.Model {
  /**
   * @remarks
   * The terminal type. Valid values:
   * 
   * - 1: hardware terminal.
   * - 2: software terminal.
   * - 3: secure browser plug-in.
   * - 4: GuestOS application.
   * - 5: DingTalk Wuying plug-in.
   * - 6: cloud application component.
   * - 7: Cloud Hub.
   * - 8: H5.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  clientType?: number;
  static names(): { [key: string]: string } {
    return {
      clientType: 'ClientType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

