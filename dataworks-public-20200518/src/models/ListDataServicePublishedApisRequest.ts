// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataServicePublishedApisRequest extends $dara.Model {
  /**
   * @remarks
   * The keyword used to filter APIs by name. APIs whose names contain this keyword are returned.
   * 
   * @example
   * My API name
   */
  apiNameKeyword?: string;
  /**
   * @remarks
   * The keyword used to filter APIs by path. APIs whose paths contain this keyword are returned.
   * 
   * @example
   * /test/
   */
  apiPathKeyword?: string;
  /**
   * @remarks
   * The Alibaba Cloud ID of the API creator. Only APIs created by this user are returned.
   * 
   * @example
   * 12345
   */
  creatorId?: string;
  /**
   * @remarks
   * The page number. Pages start from 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10. Maximum value: 50.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the workspace.
   * 
   * This parameter is required.
   * 
   * @example
   * 10000
   */
  projectId?: number;
  /**
   * @remarks
   * The tenant ID. To obtain the tenant ID, log on to the [DataWorks console](https://workbench.data.aliyun.com/console), go to the DataStudio page, click your username in the upper-right corner, and select Menu > User Info.
   * 
   * @example
   * 10001
   */
  tenantId?: number;
  static names(): { [key: string]: string } {
    return {
      apiNameKeyword: 'ApiNameKeyword',
      apiPathKeyword: 'ApiPathKeyword',
      creatorId: 'CreatorId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiNameKeyword: 'string',
      apiPathKeyword: 'string',
      creatorId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      projectId: 'number',
      tenantId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

