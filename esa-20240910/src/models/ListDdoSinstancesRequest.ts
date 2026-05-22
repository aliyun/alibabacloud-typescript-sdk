// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDDoSInstancesRequest extends $dara.Model {
  instanceId?: string;
  pageNumber?: number;
  pageSize?: number;
  siteInstanceId?: string;
  sortBy?: string;
  sortOrder?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      siteInstanceId: 'SiteInstanceId',
      sortBy: 'SortBy',
      sortOrder: 'SortOrder',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      siteInstanceId: 'string',
      sortBy: 'string',
      sortOrder: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

