// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMyGroupInstancesRequest extends $dara.Model {
  category?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  groupId?: number;
  instanceIds?: string;
  keyword?: string;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  total?: boolean;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      groupId: 'GroupId',
      instanceIds: 'InstanceIds',
      keyword: 'Keyword',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      groupId: 'number',
      instanceIds: 'string',
      keyword: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      total: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

