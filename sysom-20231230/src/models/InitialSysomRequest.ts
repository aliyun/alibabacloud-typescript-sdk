// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InitialSysomRequest extends $dara.Model {
  xDebugId?: string;
  /**
   * @remarks
   * Specifies whether to only check if the service-linked role exists.
   */
  checkOnly?: boolean;
  /**
   * @remarks
   * The source. Set this parameter to console.
   * 
   * @example
   * console
   */
  source?: string;
  xSysomInvokeSource?: string;
  static names(): { [key: string]: string } {
    return {
      xDebugId: 'X-Debug-Id',
      checkOnly: 'check_only',
      source: 'source',
      xSysomInvokeSource: 'x-sysom-invoke-source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      xDebugId: 'string',
      checkOnly: 'boolean',
      source: 'string',
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

