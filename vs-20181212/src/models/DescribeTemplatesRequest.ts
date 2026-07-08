// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTemplatesRequest extends $dara.Model {
  /**
   * @remarks
   * Template ID.
   * 
   * @example
   * 323434****83423432
   */
  id?: string;
  /**
   * @remarks
   * Filter templates by the bound instance ID.
   * 
   * @example
   * 323*****998-cn-qingdao
   */
  instanceId?: string;
  ownerId?: number;
  /**
   * @remarks
   * Page number. Default: 1.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * Number of entries per page. Default: 20.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * Sort results by the specified field. Default: sort by ID.
   * 
   * @example
   * id
   */
  sortBy?: string;
  /**
   * @remarks
   * Sort order. Default: ascending. Valid values:
   * 
   * - asc (ascending)
   * 
   * - desc (descending)
   * 
   * @example
   * asc
   */
  sortDirection?: string;
  /**
   * @remarks
   * Filter templates by template type.
   * 
   * @example
   * record
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      instanceId: 'InstanceId',
      ownerId: 'OwnerId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      sortBy: 'SortBy',
      sortDirection: 'SortDirection',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      instanceId: 'string',
      ownerId: 'number',
      pageNum: 'number',
      pageSize: 'number',
      sortBy: 'string',
      sortDirection: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

