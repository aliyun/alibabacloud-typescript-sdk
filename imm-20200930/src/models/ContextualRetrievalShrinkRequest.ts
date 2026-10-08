// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ContextualRetrievalShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The dataset used for retrieval.
   * 
   * This parameter is required.
   * 
   * @example
   * test-dataset
   */
  datasetName?: string;
  /**
   * @remarks
   * The conversation history and tool calling history. The latest message is at the end (index n-1), and the oldest message is at the beginning (index 0). The messages must be in user-assistant pairs, with a total count of 2*n+1, and the length of the latest question cannot exceed 1,000 characters. The conversation history is limited to 100 messages.
   * 
   * This parameter is required.
   */
  messagesShrink?: string;
  /**
   * @remarks
   * The name of the project. For more information about how to obtain the project name, see [Create a project](https://www.alibabacloud.com/help/en/imm/getting-started/create-a-project-1).
   * 
   * This parameter is required.
   * 
   * @example
   * test-project
   */
  projectName?: string;
  /**
   * @remarks
   * Specifies whether to enable only the recall process (embedding search). If this parameter is set to true, the returned data is not reranked, which allows you to customize the reranking process. Default value: false.
   * 
   * @example
   * false
   */
  recallOnly?: boolean;
  /**
   * @remarks
   * The list of smart cluster IDs, which are used to retrieve files within specific smart clusters.
   */
  smartClusterIdsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      datasetName: 'DatasetName',
      messagesShrink: 'Messages',
      projectName: 'ProjectName',
      recallOnly: 'RecallOnly',
      smartClusterIdsShrink: 'SmartClusterIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetName: 'string',
      messagesShrink: 'string',
      projectName: 'string',
      recallOnly: 'boolean',
      smartClusterIdsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

