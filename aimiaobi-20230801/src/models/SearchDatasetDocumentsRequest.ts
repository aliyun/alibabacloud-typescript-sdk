// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchDatasetDocumentsRequest extends $dara.Model {
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
   * 业务参数
   */
  extend1?: string;
  /**
   * @example
   * false
   */
  includeContent?: boolean;
  /**
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 搜索内容
   */
  query?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xx
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      datasetId: 'DatasetId',
      datasetName: 'DatasetName',
      extend1: 'Extend1',
      includeContent: 'IncludeContent',
      pageSize: 'PageSize',
      query: 'Query',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetId: 'number',
      datasetName: 'string',
      extend1: 'string',
      includeContent: 'boolean',
      pageSize: 'string',
      query: 'string',
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

