// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAlertDestinationRequest extends $dara.Model {
  xDebugId?: string;
  /**
   * @remarks
   * The alert contact ID.
   * 
   * @example
   * 1
   */
  id?: number;
  xSysomInvokeSource?: string;
  static names(): { [key: string]: string } {
    return {
      xDebugId: 'X-Debug-Id',
      id: 'id',
      xSysomInvokeSource: 'x-sysom-invoke-source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      xDebugId: 'string',
      id: 'number',
      xSysomInvokeSource: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

