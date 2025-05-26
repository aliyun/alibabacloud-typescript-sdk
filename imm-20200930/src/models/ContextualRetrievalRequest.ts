// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ContextualMessage } from "./ContextualMessage";


export class ContextualRetrievalRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test-dataset
   */
  datasetName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  messages?: ContextualMessage[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test-project
   */
  projectName?: string;
  /**
   * @example
   * false
   */
  recallOnly?: boolean;
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

