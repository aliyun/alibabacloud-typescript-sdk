// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProjectsShrinkRequest extends $dara.Model {
  labelIdsShrink?: string;
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
  sinkEndpointTypesShrink?: string;
  /**
   * @example
   * gmtCreate
   */
  sortField?: string;
  sourceEndpointTypesShrink?: string;
  statusShrink?: string;
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
      labelIdsShrink: 'LabelIds',
      needRelatedInfo: 'NeedRelatedInfo',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      searchKey: 'SearchKey',
      sinkEndpointTypesShrink: 'SinkEndpointTypes',
      sortField: 'SortField',
      sourceEndpointTypesShrink: 'SourceEndpointTypes',
      statusShrink: 'Status',
      type: 'Type',
      visibleSubProject: 'VisibleSubProject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labelIdsShrink: 'string',
      needRelatedInfo: 'boolean',
      order: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      searchKey: 'string',
      sinkEndpointTypesShrink: 'string',
      sortField: 'string',
      sourceEndpointTypesShrink: 'string',
      statusShrink: 'string',
      type: 'string',
      visibleSubProject: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

