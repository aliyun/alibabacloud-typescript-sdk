// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetAddonResponseBodyAddon } from "./GetAddonResponseBodyAddon";


export class GetAddonResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the addon.
   */
  addon?: GetAddonResponseBodyAddon;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * BBC2F93D-003A-49C4-850C-B826EECF****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      addon: 'Addon',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addon: GetAddonResponseBodyAddon,
      requestId: 'string',
    };
  }

  validate() {
    if(this.addon && typeof (this.addon as any).validate === 'function') {
      (this.addon as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

