// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitIndexAddDocumentsJobRequest extends $dara.Model {
  /**
   * @remarks
   * The list of primary key IDs of the category.
   */
  categoryIds?: string[];
  chunkMode?: string;
  chunkSize?: number;
  /**
   * @remarks
   * The list of the primary key IDs of the documents.
   */
  documentIds?: string[];
  enableHeaders?: boolean;
  /**
   * @remarks
   * The primary key ID of the knowledge base, which is the `Data.Id` parameter returned by the [CreateIndex](https://www.alibabacloud.com/help/en/model-studio/developer-reference/api-bailian-2023-12-29-createindex) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 79c0aly8zw
   */
  indexId?: string;
  overlapSize?: number;
  separator?: string;
  /**
   * @remarks
   * The data type of [Data Management](https://bailian.console.aliyun.com/#/data-center). For more information, see [Create a knowledge base](https://www.alibabacloud.com/help/en/model-studio/user-guide/rag-knowledge-base). Valid values:
   * 
   * *   DATA_CENTER_CATEGORY: The category type. Import all documents from one or more categories in Data Center.
   * *   DATA_CENTER_FILE: The document type. Import one or more documents from Data Center.
   * 
   * >  If this parameter is set to DATA_CENTER_CATEGORY, you must specify the `CategoryIds` parameter. If this parameter is set to DATA_CENTER_FILE, you must specify the `DocumentIds` parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * DATA_CENTER_FILE
   */
  sourceType?: string;
  static names(): { [key: string]: string } {
    return {
      categoryIds: 'CategoryIds',
      chunkMode: 'ChunkMode',
      chunkSize: 'ChunkSize',
      documentIds: 'DocumentIds',
      enableHeaders: 'EnableHeaders',
      indexId: 'IndexId',
      overlapSize: 'OverlapSize',
      separator: 'Separator',
      sourceType: 'SourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryIds: { 'type': 'array', 'itemType': 'string' },
      chunkMode: 'string',
      chunkSize: 'number',
      documentIds: { 'type': 'array', 'itemType': 'string' },
      enableHeaders: 'boolean',
      indexId: 'string',
      overlapSize: 'number',
      separator: 'string',
      sourceType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.categoryIds)) {
      $dara.Model.validateArray(this.categoryIds);
    }
    if(Array.isArray(this.documentIds)) {
      $dara.Model.validateArray(this.documentIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

