// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDatasetDocumentRequestDocument extends $dara.Model {
  /**
   * @remarks
   * UUID of the category
   * 
   * @example
   * xx
   */
  categoryUuid?: string;
  /**
   * @remarks
   * User-defined unique ID for the document.
   * 
   * @example
   * xxx
   */
  docId?: string;
  /**
   * @remarks
   * Unique ID of the document in the system.
   * 
   * @example
   * xxx
   */
  docUuid?: string;
  /**
   * @remarks
   * Extension field 1
   * 
   * @example
   * xxx
   */
  extend1?: string;
  /**
   * @remarks
   * Extension field 2
   * 
   * @example
   * xxxx
   */
  extend2?: string;
  /**
   * @remarks
   * Extension field 3
   * 
   * @example
   * xxx
   */
  extend3?: string;
  /**
   * @remarks
   * Tags
   */
  tags?: string[];
  /**
   * @remarks
   * Document title.
   * 
   * @example
   * xx
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      categoryUuid: 'CategoryUuid',
      docId: 'DocId',
      docUuid: 'DocUuid',
      extend1: 'Extend1',
      extend2: 'Extend2',
      extend3: 'Extend3',
      tags: 'Tags',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryUuid: 'string',
      docId: 'string',
      docUuid: 'string',
      extend1: 'string',
      extend2: 'string',
      extend3: 'string',
      tags: { 'type': 'array', 'itemType': 'string' },
      title: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDatasetDocumentRequest extends $dara.Model {
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
   * The document to update.
   * 
   * This parameter is required.
   */
  document?: UpdateDatasetDocumentRequestDocument;
  /**
   * @remarks
   * Unique identifier of the Alibaba Cloud Model Studio workspace. For more information, see [Get the workspace ID](https://help.aliyun.com/document_detail/2782167.html).
   * 
   * @example
   * xxxx
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      datasetId: 'DatasetId',
      datasetName: 'DatasetName',
      document: 'Document',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetId: 'number',
      datasetName: 'string',
      document: UpdateDatasetDocumentRequestDocument,
      workspaceId: 'string',
    };
  }

  validate() {
    if(this.document && typeof (this.document as any).validate === 'function') {
      (this.document as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

