// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDatasetRequest extends $dara.Model {
  /**
   * @example
   * 1
   */
  datasetId?: number;
  /**
   * @example
   * businessDataset
   */
  datasetName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * llm-xxx
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      datasetId: 'DatasetId',
      datasetName: 'DatasetName',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetId: 'number',
      datasetName: 'string',
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

