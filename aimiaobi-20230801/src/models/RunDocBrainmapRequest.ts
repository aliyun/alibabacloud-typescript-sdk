// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunDocBrainmapRequest extends $dara.Model {
  cleanCache?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 12345
   */
  docId?: string;
  nodeNumber?: number;
  prompt?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 3f7045e099474ba28ceca1b4eb6d6e21
   */
  sessionId?: string;
  wordNumber?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * llm-xxx
   */
  workspaceId?: string;
  referenceContent?: string;
  static names(): { [key: string]: string } {
    return {
      cleanCache: 'CleanCache',
      docId: 'DocId',
      nodeNumber: 'NodeNumber',
      prompt: 'Prompt',
      sessionId: 'SessionId',
      wordNumber: 'WordNumber',
      workspaceId: 'WorkspaceId',
      referenceContent: 'referenceContent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cleanCache: 'boolean',
      docId: 'string',
      nodeNumber: 'number',
      prompt: 'string',
      sessionId: 'string',
      wordNumber: 'number',
      workspaceId: 'string',
      referenceContent: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

