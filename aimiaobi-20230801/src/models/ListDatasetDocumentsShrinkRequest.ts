// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDatasetDocumentsShrinkRequest extends $dara.Model {
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
  excludeFieldsShrink?: string;
  includeFieldsShrink?: string;
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
      excludeFieldsShrink: 'ExcludeFields',
      includeFieldsShrink: 'IncludeFields',
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
      excludeFieldsShrink: 'string',
      includeFieldsShrink: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      query: 'string',
      status: 'number',
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

