// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchDatasetDocumentsShrinkRequest extends $dara.Model {
  categoryUuidsShrink?: string;
  createTimeEnd?: number;
  createTimeStart?: number;
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
  docIdsShrink?: string;
  docTypesShrink?: string;
  docUuidsShrink?: string;
  endTime?: number;
  /**
   * @example
   * 业务参数
   */
  extend1?: string;
  extend2?: string;
  extend3?: string;
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
  searchMode?: string;
  startTime?: number;
  tagsShrink?: string;
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
      categoryUuidsShrink: 'CategoryUuids',
      createTimeEnd: 'CreateTimeEnd',
      createTimeStart: 'CreateTimeStart',
      datasetId: 'DatasetId',
      datasetName: 'DatasetName',
      docIdsShrink: 'DocIds',
      docTypesShrink: 'DocTypes',
      docUuidsShrink: 'DocUuids',
      endTime: 'EndTime',
      extend1: 'Extend1',
      extend2: 'Extend2',
      extend3: 'Extend3',
      includeContent: 'IncludeContent',
      pageSize: 'PageSize',
      query: 'Query',
      searchMode: 'SearchMode',
      startTime: 'StartTime',
      tagsShrink: 'Tags',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryUuidsShrink: 'string',
      createTimeEnd: 'number',
      createTimeStart: 'number',
      datasetId: 'number',
      datasetName: 'string',
      docIdsShrink: 'string',
      docTypesShrink: 'string',
      docUuidsShrink: 'string',
      endTime: 'number',
      extend1: 'string',
      extend2: 'string',
      extend3: 'string',
      includeContent: 'boolean',
      pageSize: 'string',
      query: 'string',
      searchMode: 'string',
      startTime: 'number',
      tagsShrink: 'string',
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

