// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ContextualMessage } from "./ContextualMessage";


export class ContextualRetrievalRequest extends $dara.Model {
  /**
   * @remarks
   * The dataset.
   * 
   * This parameter is required.
   * 
   * @example
   * test-dataset
   */
  datasetName?: string;
  /**
   * @remarks
   * The conversation or tool invocation history. The latest message is at the end of the list (with an index number of n-1), whereas the earliest message is at the beginning of the list (with an index number of 0). Historical messages must be provided in user-assistant pairs. The maximum number of messages that you can specify is 2\\*n+1. The current question cannot exceed 1,000 characters in length. The maximum number of historical messages allowed is 100.
   * 
   * This parameter is required.
   */
  messages?: ContextualMessage[];
  /**
   * @remarks
   * The name of the project. For more information, see [CreateProject](https://help.aliyun.com/zh/imm/getting-started/create-a-project-1?spm=a2c4g.11186623.help-menu-search-62354.d_0).
   * 
   * This parameter is required.
   * 
   * @example
   * test-project
   */
  projectName?: string;
  /**
   * @remarks
   * Indicates whether to enable recall-only (embedding-based search). If you set this parameter to true, returned results have not been re-ranked and can be ranked in custom order. Default value: false.
   * 
   * @example
   * false
   */
  recallOnly?: boolean;
  /**
   * @remarks
   * The IDs of clusters from which results are retrieved.
   */
  smartClusterIds?: string[];
  static names(): { [key: string]: string } {
    return {
      datasetName: 'DatasetName',
      messages: 'Messages',
      projectName: 'ProjectName',
      recallOnly: 'RecallOnly',
      smartClusterIds: 'SmartClusterIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetName: 'string',
      messages: { 'type': 'array', 'itemType': ContextualMessage },
      projectName: 'string',
      recallOnly: 'boolean',
      smartClusterIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.messages)) {
      $dara.Model.validateArray(this.messages);
    }
    if(Array.isArray(this.smartClusterIds)) {
      $dara.Model.validateArray(this.smartClusterIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

