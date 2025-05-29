// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTemplatesRequest extends $dara.Model {
  /**
   * @example
   * 323434****83423432
   */
  id?: string;
  /**
   * @example
   * 323*****998-cn-qingdao
   */
  instanceId?: string;
  ownerId?: number;
  /**
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * id
   */
  sortBy?: string;
  /**
   * @example
   * asc
   */
  sortDirection?: string;
  /**
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

