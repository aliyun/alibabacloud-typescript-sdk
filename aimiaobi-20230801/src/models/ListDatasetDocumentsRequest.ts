// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDatasetDocumentsRequest extends $dara.Model {
  categoryUuids?: string[];
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
  docIds?: string[];
  /**
   * @example
   * text
   */
  docType?: string;
  docUuids?: string[];
  endTime?: number;
  excludeFields?: string[];
  extend1?: string;
  extend2?: string;
  extend3?: string;
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
  startTime?: number;
  /**
   * @example
   * 100
   */
  status?: number;
  tags?: string[];
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
      categoryUuids: 'CategoryUuids',
      createTimeEnd: 'CreateTimeEnd',
      createTimeStart: 'CreateTimeStart',
      datasetDescription: 'DatasetDescription',
      datasetId: 'DatasetId',
      datasetName: 'DatasetName',
      docIds: 'DocIds',
      docType: 'DocType',
      docUuids: 'DocUuids',
      endTime: 'EndTime',
      excludeFields: 'ExcludeFields',
      extend1: 'Extend1',
      extend2: 'Extend2',
      extend3: 'Extend3',
      includeFields: 'IncludeFields',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      query: 'Query',
      startTime: 'StartTime',
      status: 'Status',
      tags: 'Tags',
      title: 'Title',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryUuids: { 'type': 'array', 'itemType': 'string' },
      createTimeEnd: 'number',
      createTimeStart: 'number',
      datasetDescription: 'string',
      datasetId: 'number',
      datasetName: 'string',
      docIds: { 'type': 'array', 'itemType': 'string' },
      docType: 'string',
      docUuids: { 'type': 'array', 'itemType': 'string' },
      endTime: 'number',
      excludeFields: { 'type': 'array', 'itemType': 'string' },
      extend1: 'string',
      extend2: 'string',
      extend3: 'string',
      includeFields: { 'type': 'array', 'itemType': 'string' },
      pageNumber: 'number',
      pageSize: 'number',
      query: 'string',
      startTime: 'number',
      status: 'number',
      tags: { 'type': 'array', 'itemType': 'string' },
      title: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.categoryUuids)) {
      $dara.Model.validateArray(this.categoryUuids);
    }
    if(Array.isArray(this.docIds)) {
      $dara.Model.validateArray(this.docIds);
    }
    if(Array.isArray(this.docUuids)) {
      $dara.Model.validateArray(this.docUuids);
    }
    if(Array.isArray(this.excludeFields)) {
      $dara.Model.validateArray(this.excludeFields);
    }
    if(Array.isArray(this.includeFields)) {
      $dara.Model.validateArray(this.includeFields);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

