// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunVideoScriptGenerateRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the generated script.
   * Recommended values:
   * 
   * zh-CN: Chinese
   * 
   * en-US: English
   * 
   * The default is Chinese.
   * 
   * @example
   * en-US
   */
  language?: string;
  /**
   * @remarks
   * The prompt for the video script.
   * 
   * This parameter is required.
   * 
   * @example
   * 写一篇关于黄山旅游的脚本
   */
  prompt?: string;
  /**
   * @remarks
   * The length of the script. Valid values:
   * 
   * 20\\~75: 10 to 15 seconds of normal speaking time.
   * 
   * 75\\~150: 15 to 30 seconds of normal speaking time.
   * 
   * 150\\~300: Approximately 30 to 60 seconds of normal speaking time.
   * 
   * \\>=300: 60 seconds or more of normal speaking time.
   * 
   * @example
   * >=300
   */
  scriptLength?: string;
  /**
   * @remarks
   * The number of scripts to generate. The default is 1. You can generate a maximum of three scripts at a time.
   * If you specify multiple scripts, the results are returned in parallel streams. The client distinguishes between the streams using different session IDs.
   * 
   * @example
   * 2
   */
  scriptNumber?: number;
  /**
   * @remarks
   * Specifies whether to use an internet search. If you set this to true, the system performs intention recognition and then searches the internet for relevant reference materials.
   * 
   * @example
   * true
   */
  useSearch?: boolean;
  /**
   * @remarks
   * The unique ID of the Alibaba Cloud Model Studio workspace. For more information, see [Get a Workspace ID](https://help.aliyun.com/document_detail/2782167.html).
   * 
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

