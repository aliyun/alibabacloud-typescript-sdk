// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDatasetDocumentsRequest extends $dara.Model {
  /**
   * @example
   * xx
   */
  datasetDescription?: string;
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
   * @example
   * text
   */
  docType?: string;
  excludeFields?: string[];
  includeFields?: string[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 搜索条件
   */
  query?: string;
  /**
   * @example
   * 100
   */
  status?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxxx
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      datasetDescription: 'DatasetDescription',
      datasetId: 'DatasetId',
      datasetName: 'DatasetName',
      docType: 'DocType',
      excludeFields: 'ExcludeFields',
      includeFields: 'IncludeFields',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      query: 'Query',
      status: 'Status',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetDescription: 'string',
      datasetId: 'number',
      datasetName: 'string',
      docType: 'string',
      excludeFields: { 'type': 'array', 'itemType': 'string' },
      includeFields: { 'type': 'array', 'itemType': 'string' },
      pageNumber: 'number',
      pageSize: 'number',
      query: 'string',
      status: 'number',
      workspaceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.excludeFields)) {
      $dara.Model.validateArray(this.excludeFields);
    }
    if(Array.isArray(this.includeFields)) {
      $dara.Model.validateArray(this.includeFields);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

