// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTagsRequest extends $dara.Model {
  /**
   * @example
   * dataset_version
   */
  key?: string;
  /**
   * @example
   * Desc
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
   * inst-my1tk3jggooi5uwks5
   */
  resourceId?: string;
  /**
   * @example
   * instance
   */
  resourceType?: string;
  /**
   * @example
   * GmtCreateTime
   */
  sortBy?: string;
  /**
   * @example
   * v0.1.0
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      sortBy: 'SortBy',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      order: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      resourceId: 'string',
      resourceType: 'string',
      sortBy: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

