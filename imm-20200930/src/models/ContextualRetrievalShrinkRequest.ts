// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ContextualRetrievalShrinkRequest extends $dara.Model {
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
  messagesShrink?: string;
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

