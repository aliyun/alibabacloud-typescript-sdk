// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDatasetDocumentRequest extends $dara.Model {
  /**
   * @remarks
   * Unique identifier of the dataset.
   * 
   * @example
   * 1
   */
  datasetId?: number;
  /**
   * @remarks
   * Name of the dataset.
   * 
   * @example
   * 数据集名称
   */
  datasetName?: string;
  /**
   * @remarks
   * User-defined unique ID of the document.
   * 
   * @example
   * xxx
   */
  docId?: string;
  /**
   * @remarks
   * Internal unique identifier of the document.
   * 
   * @example
   * xxx
   */
  docUuid?: string;
  /**
   * @remarks
   * List of fields to include in the response.
   */
  includeFields?: string[];
  /**
   * @remarks
   * Unique identifier of your Alibaba Cloud Model Studio workspace. [Get the workspace ID](https://help.aliyun.com/document_detail/2782167.html)
   * 
   * This parameter is required.
   * 
   * @example
   * xxxx
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      datasetId: 'DatasetId',
      datasetName: 'DatasetName',
      docId: 'DocId',
      docUuid: 'DocUuid',
      includeFields: 'IncludeFields',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetId: 'number',
      datasetName: 'string',
      docId: 'string',
      docUuid: 'string',
      includeFields: { 'type': 'array', 'itemType': 'string' },
      workspaceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.includeFields)) {
      $dara.Model.validateArray(this.includeFields);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

