// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAgentsRequest extends $dara.Model {
  xDebugId?: string;
  /**
   * @remarks
   * The current page number (starting from page 1).
   * 
   * @example
   * 1
   */
  current?: number;
  /**
   * @remarks
   * Filters plug-ins by plug-in name.
   * 
   * @example
   * SysOM
   */
  name?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Filters the list by Agent type. For example, pass control to retrieve all Agents of the control type.
   * 
   * @example
   * control
   */
  type?: string;
  xSysomInvokeSource?: string;
  static names(): { [key: string]: string } {
    return {
      xDebugId: 'X-Debug-Id',
      current: 'current',
      name: 'name',
      pageSize: 'pageSize',
      type: 'type',
      xSysomInvokeSource: 'x-sysom-invoke-source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      xDebugId: 'string',
      current: 'number',
      name: 'string',
      pageSize: 'number',
      type: 'string',
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

