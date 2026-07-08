// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteDatasetDocumentRequest extends $dara.Model {
  /**
   * @remarks
   * The unique identifier of the dataset. Choose either DatasetId or DatasetName.
   * 
   * @example
   * 1
   */
  datasetId?: number;
  /**
   * @remarks
   * Dataset name
   * 
   * @example
   * 数据集名称
   */
  datasetName?: string;
  /**
   * @remarks
   * The user-specified unique ID of the document.
   * 
   * @example
   * xxx
   */
  docId?: string;
  /**
   * @remarks
   * The internal unique identifier of the document.
   * 
   * @example
   * xxx
   */
  docUuid?: string;
  /**
   * @remarks
   * The unique identifier of the Alibaba Cloud Model Studio workspace. For more information, see [Get workspaceId](https://help.aliyun.com/document_detail/2782167.html).
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
      docId: 'DocId',
      docUuid: 'DocUuid',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetId: 'number',
      datasetName: 'string',
      docId: 'string',
      docUuid: 'string',
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

