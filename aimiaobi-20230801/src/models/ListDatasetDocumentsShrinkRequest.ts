// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDatasetDocumentsShrinkRequest extends $dara.Model {
  categoryUuidsShrink?: string;
  createTimeEnd?: number;
  createTimeStart?: number;
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
  docIdsShrink?: string;
  /**
   * @example
   * text
   */
  docType?: string;
  docUuidsShrink?: string;
  endTime?: number;
  excludeFieldsShrink?: string;
  extend1?: string;
  extend2?: string;
  extend3?: string;
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
  startTime?: number;
  /**
   * @example
   * 100
   */
  status?: number;
  tagsShrink?: string;
  title?: string;
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
      categoryUuidsShrink: 'CategoryUuids',
      createTimeEnd: 'CreateTimeEnd',
      createTimeStart: 'CreateTimeStart',
      datasetDescription: 'DatasetDescription',
      datasetId: 'DatasetId',
      datasetName: 'DatasetName',
      docIdsShrink: 'DocIds',
      docType: 'DocType',
      docUuidsShrink: 'DocUuids',
      endTime: 'EndTime',
      excludeFieldsShrink: 'ExcludeFields',
      extend1: 'Extend1',
      extend2: 'Extend2',
      extend3: 'Extend3',
      includeFieldsShrink: 'IncludeFields',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      query: 'Query',
      startTime: 'StartTime',
      status: 'Status',
      tagsShrink: 'Tags',
      title: 'Title',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryUuidsShrink: 'string',
      createTimeEnd: 'number',
      createTimeStart: 'number',
      datasetDescription: 'string',
      datasetId: 'number',
      datasetName: 'string',
      docIdsShrink: 'string',
      docType: 'string',
      docUuidsShrink: 'string',
      endTime: 'number',
      excludeFieldsShrink: 'string',
      extend1: 'string',
      extend2: 'string',
      extend3: 'string',
      includeFieldsShrink: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      query: 'string',
      startTime: 'number',
      status: 'number',
      tagsShrink: 'string',
      title: 'string',
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

