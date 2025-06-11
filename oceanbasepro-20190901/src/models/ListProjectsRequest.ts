// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProjectsRequest extends $dara.Model {
  labelIds?: string[];
  needRelatedInfo?: boolean;
  /**
   * @example
   * descend
   */
  order?: string;
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
   * np_4w****
   */
  searchKey?: string;
  sinkEndpointTypes?: string[];
  /**
   * @example
   * gmtCreate
   */
  sortField?: string;
  sourceEndpointTypes?: string[];
  status?: string[];
  /**
   * @example
   * MIGRATION
   */
  type?: string;
  /**
   * @example
   * false
   */
  visibleSubProject?: boolean;
  static names(): { [key: string]: string } {
    return {
      labelIds: 'LabelIds',
      needRelatedInfo: 'NeedRelatedInfo',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      searchKey: 'SearchKey',
      sinkEndpointTypes: 'SinkEndpointTypes',
      sortField: 'SortField',
      sourceEndpointTypes: 'SourceEndpointTypes',
      status: 'Status',
      type: 'Type',
      visibleSubProject: 'VisibleSubProject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labelIds: { 'type': 'array', 'itemType': 'string' },
      needRelatedInfo: 'boolean',
      order: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      searchKey: 'string',
      sinkEndpointTypes: { 'type': 'array', 'itemType': 'string' },
      sortField: 'string',
      sourceEndpointTypes: { 'type': 'array', 'itemType': 'string' },
      status: { 'type': 'array', 'itemType': 'string' },
      type: 'string',
      visibleSubProject: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.labelIds)) {
      $dara.Model.validateArray(this.labelIds);
    }
    if(Array.isArray(this.sinkEndpointTypes)) {
      $dara.Model.validateArray(this.sinkEndpointTypes);
    }
    if(Array.isArray(this.sourceEndpointTypes)) {
      $dara.Model.validateArray(this.sourceEndpointTypes);
    }
    if(Array.isArray(this.status)) {
      $dara.Model.validateArray(this.status);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

