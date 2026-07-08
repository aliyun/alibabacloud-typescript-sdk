// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddDatasetDocumentShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The unique identifier of the dataset.
   * 
   * @example
   * 1
   */
  datasetId?: number;
  /**
   * @remarks
   * The name of the dataset.
   * 
   * @example
   * 数据集名称
   */
  datasetName?: string;
  /**
   * @remarks
   * The document.
   * 
   * This parameter is required.
   */
  documentShrink?: string;
  /**
   * @remarks
   * The unique identifier of the Model Studio workspace. For more information, see [Obtain a workspaceId](https://help.aliyun.com/document_detail/2782167.html).
   * 
   * This parameter is required.
   * 
   * @example
   * llm-xx
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      datasetId: 'DatasetId',
      datasetName: 'DatasetName',
      documentShrink: 'Document',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetId: 'number',
      datasetName: 'string',
      documentShrink: 'string',
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

