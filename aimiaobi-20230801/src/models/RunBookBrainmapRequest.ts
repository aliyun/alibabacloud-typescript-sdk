// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunBookBrainmapRequest extends $dara.Model {
  /**
   * @example
   * true
   */
  cleanCache?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 12345
   */
  docId?: string;
  /**
   * @example
   * 3
   */
  nodeNumber?: number;
  /**
   * @example
   * 按英文输出
   */
  prompt?: string;
  /**
   * @example
   * 0
   */
  responseFormat?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 3f7045e099474ba28ceca1b4eb6d6e21
   */
  sessionId?: string;
  /**
   * @example
   * 20
   */
  wordNumber?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * llm-hx72jf15gqyobvd9
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      cleanCache: 'CleanCache',
      docId: 'DocId',
      nodeNumber: 'NodeNumber',
      prompt: 'Prompt',
      responseFormat: 'ResponseFormat',
      sessionId: 'SessionId',
      wordNumber: 'WordNumber',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cleanCache: 'boolean',
      docId: 'string',
      nodeNumber: 'number',
      prompt: 'string',
      responseFormat: 'number',
      sessionId: 'string',
      wordNumber: 'number',
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

