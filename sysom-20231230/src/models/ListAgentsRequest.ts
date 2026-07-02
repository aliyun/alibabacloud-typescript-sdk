// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAgentsRequest extends $dara.Model {
  /**
   * @remarks
   * The current page number. Pages start from page 1.
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
   * The agent type used to filter the list. For example, set this parameter to control to retrieve all agents of the control type.
   * 
   * @example
   * control
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      current: 'current',
      name: 'name',
      pageSize: 'pageSize',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      current: 'number',
      name: 'string',
      pageSize: 'number',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

