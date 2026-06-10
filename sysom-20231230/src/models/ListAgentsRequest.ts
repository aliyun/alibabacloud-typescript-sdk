// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAgentsRequest extends $dara.Model {
  /**
   * @remarks
   * Current page number (starting from page 1)
   * 
   * @example
   * 1
   */
  current?: number;
  /**
   * @remarks
   * Filter plugins by plugin name
   * 
   * @example
   * SysOM
   */
  name?: string;
  /**
   * @remarks
   * Page size
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Retrieve the list based on the Agent Type. For example, passing "control" retrieves all control-type Agents.
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

