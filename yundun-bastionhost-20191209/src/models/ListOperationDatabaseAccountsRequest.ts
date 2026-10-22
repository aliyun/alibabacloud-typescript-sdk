// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListOperationDatabaseAccountsRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the database account. Exact match.
   * 
   * @example
   * test
   */
  databaseAccountName?: string;
  /**
   * @remarks
   * The database instance ID.
   * > You can invoke the [ListOperationDatabases](https://help.aliyun.com/document_detail/2758856.html) operation to obtain this parameter.
   * 
   * @example
   * 56
   */
  databaseId?: string;
  /**
   * @remarks
   * The ID of the Bastionhost instance.
   * > You can call the [DescribeInstances](https://help.aliyun.com/document_detail/153281.html) operation to obtain this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * bastionhost-cn-2r42t9cvf0i
   */
  instanceId?: string;
  /**
   * @remarks
   * The project ID.
   * 
   * @example
   * 3
   */
  operationProjectId?: string;
  /**
   * @remarks
   * The page number of the current page for a paged query. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The maximum number of entries to return on each page for a paged query.
   * <br>The maximum value of the PageSize parameter is 100. The default number of entries returned per page is 20. If the PageSize parameter is left empty, 20 entries are returned by default.
   * 
   * > Do not leave the PageSize parameter empty.
   * 
   * @example
   * 20
   */
  pageSize?: string;
  /**
   * @remarks
   * The region ID of the Bastionhost instance.
   * > For the mappings between region IDs and region names, see [Regions and zones](https://help.aliyun.com/document_detail/40654.html).
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      databaseAccountName: 'DatabaseAccountName',
      databaseId: 'DatabaseId',
      instanceId: 'InstanceId',
      operationProjectId: 'OperationProjectId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseAccountName: 'string',
      databaseId: 'string',
      instanceId: 'string',
      operationProjectId: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

