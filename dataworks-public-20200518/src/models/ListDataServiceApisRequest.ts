// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataServiceApisRequest extends $dara.Model {
  /**
   * @remarks
   * The keyword in API names. The keyword is used to search for the APIs whose names contain the keyword.
   * 
   * @example
   * My API name
   */
  apiNameKeyword?: string;
  /**
   * @remarks
   * The keyword in API paths. The keyword is used to search for the APIs whose paths contain the keyword.
   * 
   * @example
   * /test/
   */
  apiPathKeyword?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account used by the creator of the APIs. The ID is used to search for the APIs created by the creator.
   * 
   * @example
   * 12345
   */
  creatorId?: string;
  /**
   * @remarks
   * The page number. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 100. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The workspace ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 10000
   */
  projectId?: number;
  /**
   * @remarks
   * The tenant ID. To obtain the tenant ID, perform the following steps: Log on to the [DataWorks console](https://workbench.data.aliyun.com/console). Find your workspace and go to the DataStudio page. On the DataStudio page, click the logon username in the upper-right corner and click User Info in the Menu section.
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

