// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDatasetDocumentRequestDocument extends $dara.Model {
  /**
   * @example
   * 用户指定的文档唯一ID
   */
  docId?: string;
  /**
   * @example
   * 内部文档唯一ID
   */
  docUuid?: string;
  /**
   * @example
   * xx
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      docId: 'DocId',
      docUuid: 'DocUuid',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      docId: 'string',
      docUuid: 'string',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDatasetDocumentRequest extends $dara.Model {
  /**
   * @example
   * 1
   */
  datasetId?: number;
  /**
   * @example
   * 数据集名称
   */
  datasetName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  document?: UpdateDatasetDocumentRequestDocument;
  /**
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

