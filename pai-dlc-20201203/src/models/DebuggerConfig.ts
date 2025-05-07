// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DebuggerConfig extends $dara.Model {
  /**
   * @example
   * {\"description\":\"这是一个新的pytorchjob模板\"}
   */
  content?: string;
  /**
   * @example
   * dc-vf9lowjt3pso
   */
  debuggerConfigId?: string;
  /**
   * @example
   * 这是一个Pytorch的基础配置模板
   */
  description?: string;
  /**
   * @example
   * Pytorch Experiment Config
   */
  displayName?: string;
  /**
   * @example
   * 2021-01-12T14:35:00Z
   */
  gmtCreateTime?: string;
  /**
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

