// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryCopilotEmbedConfigResponseBodyResultDataRange } from "./QueryCopilotEmbedConfigResponseBodyResultDataRange";


export class QueryCopilotEmbedConfigResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * Robot\\"s nickname.
   * 
   * @example
   * little Q
   */
  agentName?: string;
  /**
   * @remarks
   * Embedding ID.
   * 
   * @example
   * 9c079710-ddbe-48b3-b495-7c83c8d57cc4
   */
  copilotId?: string;
  /**
   * @remarks
   * ID of the creator.
   * 
   * @example
   * qweqw12312423521
   */
  createUser?: string;
  /**
   * @remarks
   * Nickname of the creator.
   * 
   * @example
   * zhangsan
   */
  createUserName?: string;
  /**
   * @remarks
   * Data range (analysis themes and question resources).
   */
  dataRange?: QueryCopilotEmbedConfigResponseBodyResultDataRange;
  /**
   * @remarks
   * ID of the modifier.
   * 
   * @example
   * asda1231231dfs
   */
  modifyUser?: string;
  /**
   * @remarks
   * Module name.
   * 
   * @example
   * little Q
   */
  moduleName?: string;
  /**
   * @remarks
   * Name of the embedded module.
   * 
   * @example
   * 0327
   */
  showName?: string;
  static names(): { [key: string]: string } {
    return {
      agentName: 'AgentName',
      copilotId: 'CopilotId',
      createUser: 'CreateUser',
      createUserName: 'CreateUserName',
      dataRange: 'DataRange',
      modifyUser: 'ModifyUser',
      moduleName: 'ModuleName',
      showName: 'ShowName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentName: 'string',
      copilotId: 'string',
      createUser: 'string',
      createUserName: 'string',
      dataRange: QueryCopilotEmbedConfigResponseBodyResultDataRange,
      modifyUser: 'string',
      moduleName: 'string',
      showName: 'string',
    };
  }

  validate() {
    if(this.dataRange && typeof (this.dataRange as any).validate === 'function') {
      (this.dataRange as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

