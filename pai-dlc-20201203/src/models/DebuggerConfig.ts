// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DebuggerConfig extends $dara.Model {
  /**
   * @remarks
   * The configuration item details in JSON format.
   * 
   * @example
   * {\\"description\\":\\"This is a new pytorchjob template\\"}
   */
  content?: string;
  /**
   * @remarks
   * The system-generated unique ID of the debug config.
   * 
   * @example
   * dc-vf9lowjt3pso
   */
  debuggerConfigId?: string;
  /**
   * @remarks
   * The description of the configuration item.
   * 
   * @example
   * This is a basic Pytorch configuration template
   */
  description?: string;
  /**
   * @remarks
   * The name of the template configuration item.
   * 
   * @example
   * Pytorch Experiment Config
   */
  displayName?: string;
  /**
   * @remarks
   * The creation time in UTC.
   * 
   * @example
   * 2021-01-12T14:35:00Z
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * The modification time in UTC.
   * 
   * @example
   * 2021-01-12T14:36:00Z
   */
  gmtModifyTime?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      debuggerConfigId: 'DebuggerConfigId',
      description: 'Description',
      displayName: 'DisplayName',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifyTime: 'GmtModifyTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      debuggerConfigId: 'string',
      description: 'string',
      displayName: 'string',
      gmtCreateTime: 'string',
      gmtModifyTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

