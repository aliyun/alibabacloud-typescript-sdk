// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAgentRequest extends $dara.Model {
  /**
   * @remarks
   * 省略时读取当前定义；指定已发布版本时读取对应快照及固定的官方 Skill、套件制品版本；指定当前未发布版本时仍返回草稿，不返回固定制品版本。不是 POP 系统参数 Version。
   * 
   * @example
   * 2
   */
  agentVersion?: number;
  /**
   * @remarks
   * The name of the skill to retrieve.
   * 
   * This parameter is required.
   * 
   * @example
   * my-skill
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      agentVersion: 'AgentVersion',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentVersion: 'number',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

