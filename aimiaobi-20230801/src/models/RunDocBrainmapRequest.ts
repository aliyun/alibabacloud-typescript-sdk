// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunDocBrainmapRequest extends $dara.Model {
  /**
   * @remarks
   * Indicates whether to clear the previous cache.
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
   * The name of the model to use.
   * 
   * @example
   * quanmiao-max、quanmiao-plus
   */
  modelName?: string;
  /**
   * @remarks
   * The number of nodes to generate at the second level of the mind map.
   * 
   * @example
   * 3
   */
  nodeNumber?: number;
  /**
   * @remarks
   * A custom prompt to guide the mind map generation.
   * 
   * @example
   * 请按英文输出
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
   * The maximum number of words in each node.
   * 
   * @example
   * 20
   */
  wordNumber?: number;
  /**
   * @remarks
   * The ID of the Model Studio workspace. For more information, see [How to use a workspace](https://help.aliyun.com/document_detail/2782167.html).
   * 
   * @example
   * llm-xxx
   */
  workspaceId?: string;
  /**
   * @remarks
   * The source content for generating the mind map. This parameter takes precedence over `DocId`.
   * 
   * @example
   * 要生成脑图的内容
   */
  referenceContent?: string;
  static names(): { [key: string]: string } {
    return {
      cleanCache: 'CleanCache',
      docId: 'DocId',
      modelName: 'ModelName',
      nodeNumber: 'NodeNumber',
      prompt: 'Prompt',
      responseFormat: 'ResponseFormat',
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
      modelName: 'string',
      nodeNumber: 'number',
      prompt: 'string',
      responseFormat: 'number',
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

