// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunBookBrainmapRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to clear the cache. The default is `false`.
   * 
   * @example
   * true
   */
  cleanCache?: boolean;
  /**
   * @remarks
   * The document ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 12345
   */
  docId?: string;
  /**
   * @remarks
   * The number of nodes on the second level of the mind map.
   * 
   * @example
   * 3
   */
  nodeNumber?: number;
  /**
   * @remarks
   * A prompt with additional instructions.
   * 
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
   * The session ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 3f7045e099474ba28ceca1b4eb6d6e21
   */
  sessionId?: string;
  /**
   * @remarks
   * The number of words per node.
   * 
   * @example
   * 20
   */
  wordNumber?: number;
  /**
   * @remarks
   * The unique identifier for the Model Studio workspace. For more information, see [Workspace ID](https://help.aliyun.com/document_detail/2782167.html).
   * 
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

