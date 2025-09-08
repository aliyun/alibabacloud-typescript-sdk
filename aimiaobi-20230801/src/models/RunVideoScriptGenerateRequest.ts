// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunVideoScriptGenerateRequest extends $dara.Model {
  /**
   * @example
   * en-US
   */
  language?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  prompt?: string;
  /**
   * @example
   * >=300
   */
  scriptLength?: string;
  /**
   * @example
   * 2
   */
  scriptNumber?: number;
  /**
   * @example
   * true
   */
  useSearch?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * llm-xx
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      language: 'Language',
      prompt: 'Prompt',
      scriptLength: 'ScriptLength',
      scriptNumber: 'ScriptNumber',
      useSearch: 'UseSearch',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      language: 'string',
      prompt: 'string',
      scriptLength: 'string',
      scriptNumber: 'number',
      useSearch: 'boolean',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

